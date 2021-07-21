import {
    haze,
    clear_sky,
    few_clouds,
    scattered_clouds,
    shower_rain,
    defaultBg,
} from "../common/imageDir";

const bgImgArr = [
    { name: "default", img: defaultBg },
    { name: "haze", img: haze },
    { name: "clear sky", img: clear_sky },
    { name: "few clouds", img: few_clouds },
    { name: "scattered clouds", img: scattered_clouds },
    { name: "rain", img: shower_rain },
];

const defaultLocObj = {
    country: "IN",
    lat: "28.65195",
    lng: "77.23149",
    name: "Delhi",
};

const rememberLocation = (data) => {
    localStorage.setItem("@myBrowserLatLng", JSON.stringify(data));
};

const getRememberLocation = () =>
    JSON.parse(localStorage.getItem("@myBrowserLatLng"));

export { bgImgArr, defaultLocObj, rememberLocation, getRememberLocation };
