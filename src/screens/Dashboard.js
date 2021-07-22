import React, { useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { AxiosHelper } from "../network/service";
import CITY_DATA from "../utils/cities.json";
import {
    bgImgArr,
    defaultLocObj,
    getRememberLocation,
    rememberLocation,
} from "../utils/Helper";
import { DashboardMainCard, Header, FutureForecast } from "../components";
import {
    OPENWEATHER_APP_ID,
    OPENWEATHER_BASE_URL,
    WEATHERBIT_BASE_URL,
    WEATHERBIT_HEADER,
} from "../utils/constants";

const Dashboard = () => {
    const citiesWithLatLong = useMemo(() => CITY_DATA, []);
    const lastSavedLoc = getRememberLocation();

    const [keyword, setKeyword] = useState("");
    const [searchedCityArr, setSearchedCityArr] = useState([
        lastSavedLoc || defaultLocObj,
    ]);
    const [currentWeatherData, setCurrentWeatherData] = useState();

    const [selectedTab, setSelectedTab] = useState(0);
    const [bgImage, setBgImage] = useState(bgImgArr[0].img);
    const [hourForecastArr, setHourForecastArr] = useState([]);
    const [weekForecastArr, setWeekForecastArr] = useState([]);

    useEffect(() => {
        fetchCurrentLocData(searchedCityArr[0]);
        fetHourlyData();
        fetchWeekData();
    }, []);

    const fetchCurrentLocData = async (selectedCity) => {
        console.log("fetchCurrentLocData: ", selectedCity);
        const payload = {
            lat: selectedCity?.lat,
            lon: selectedCity?.lng,
            appid: OPENWEATHER_APP_ID,
            units: "metric",
        };
        console.log("payload ", payload);
        const searchParams = new URLSearchParams(payload);
        const url = `${OPENWEATHER_BASE_URL}?${searchParams.toString()}`;
        const response = await AxiosHelper(url, "get");
        console.log("fetchCurrentLocData: ", response);
        console.log("selectedCity: ", selectedCity);
        setCurrentWeatherData(response?.data);
        const filterBgImgArr = bgImgArr.filter(
            (str) =>
                str.name
                    .toLowerCase()
                    .indexOf(
                        String(
                            response.data?.weather[0]?.description
                        ).toLowerCase()
                    ) >= 0
        );
        console.log("filterBgImgArr: ", filterBgImgArr);
        if (filterBgImgArr.length === 1) {
            setBgImage(filterBgImgArr[0]?.img);
        }
    };

    const fetHourlyData = async () => {
        const payload = {
            lat: searchedCityArr[0]?.lat,
            lon: searchedCityArr[0]?.lng,
            hours: "24",
        };
        const searchParams = new URLSearchParams(payload);
        const url = `${WEATHERBIT_BASE_URL}/hourly?${searchParams.toString()}`;
        const response = await AxiosHelper(url, "get", WEATHERBIT_HEADER);
        setHourForecastArr(response?.data?.data);
    };

    const fetchWeekData = async () => {
        const payload = {
            lat: searchedCityArr[0]?.lat,
            lon: searchedCityArr[0]?.lng,
            // hours: "24",
        };
        const searchParams = new URLSearchParams(payload);
        const url = `${WEATHERBIT_BASE_URL}/3hourly?${searchParams.toString()}`;
        const response = await AxiosHelper(url, "get", WEATHERBIT_HEADER);
        setWeekForecastArr(response?.data?.data);
    };

    const _handleSearch = (e) => {
        e.preventDefault();
        setSearchedCityArr([]);
        if (keyword === "") return;
        const filteredCities = citiesWithLatLong.filter(
            (e) =>
                String(e.name).toLowerCase() === String(keyword).toLowerCase()
        );
        console.log("filteredCities: ", filteredCities);
        if (filteredCities.length === 1) {
            fetchCurrentLocData(filteredCities[0]);
            return;
        }
        setSearchedCityArr(filteredCities);
    };

    const _handleCurrentLocSearch = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            let city = { lat: "0", lng: "0" };
            city.lat = position.coords.latitude;
            city.lng = position.coords.longitude;
            setSearchedCityArr([city]);
            // fetchCurrentLocData(city);

            rememberLocation(city);
        });
    };

    const _onSelectTabFutureForecast = (e) =>
        setSelectedTab(e === "first" ? 0 : 1);

    const _onChangeKeyword = (e) => setKeyword(e.target.value);

    return (
        <div
            className="App"
            style={{
                background: `url(
                    ${bgImage}
                ) no-repeat`,
            }}
        >
            <Container>
                <Header
                    _onChangeKeyword={_onChangeKeyword}
                    _handleSearch={_handleSearch}
                    _handleCurrentLocSearch={_handleCurrentLocSearch}
                    searchedCityArr={searchedCityArr}
                    fetchCurrentLocData={fetchCurrentLocData}
                />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <DashboardMainCard
                                currentWeatherData={currentWeatherData}
                            />
                        </div>
                        <FutureForecast
                            _onSelectTabFutureForecast={
                                _onSelectTabFutureForecast
                            }
                            tabDataArr={
                                selectedTab === 0
                                    ? hourForecastArr
                                    : weekForecastArr
                            }
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;
