import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { OPENWEATHER_IMAGE_URL } from "../utils/constants";

const DashboardMainCard = ({ currentWeatherData }) => (
    <div className="weather-card one">
        <div className="top">
            <div
                className="wrapper"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <div className="row">
                    <Col xs={6} md={4}>
                        <Image
                            src={`${OPENWEATHER_IMAGE_URL}${currentWeatherData?.weather[0]?.icon}@2x.png`}
                            fluid
                            height="100px"
                            width="100px"
                            alt=""
                        />
                        <span
                            style={{
                                color: "#fff",
                                fontSize: "50px",
                                fontWeight: "bold",
                                marginTop: 20,
                            }}
                        >
                            {parseInt(currentWeatherData?.main.temp, 10)}
                            °C
                        </span>
                    </Col>
                    <Col xs={6} md={4} className="text-center">
                        <h1 className="heading text-capitalize">
                            {currentWeatherData?.weather[0]?.description}
                        </h1>

                        <h3 className="location">
                            {currentWeatherData?.name},{" "}
                            {currentWeatherData?.sys.country}
                        </h3>
                        <h6 className="location">
                            Last updated at:{" "}
                            {moment
                                .unix(currentWeatherData?.dt)
                                .format("Do MMMM, YYYY hh:mm")}
                        </h6>
                    </Col>
                </div>
            </div>
        </div>

        <Card className="p-3">
            <Row xs={1} md={3} className="g-4">
                <Card.Title>
                    Sunrise -{" "}
                    {moment
                        .unix(currentWeatherData?.sys.sunrise)
                        .format("hh:mm a")}
                </Card.Title>
                <Card.Title>
                    Sunset -{" "}
                    {moment
                        .unix(currentWeatherData?.sys.sunset)
                        .format("hh:mm a")}
                </Card.Title>
            </Row>
            <Row xs={1} md={3} className="g-4">
                <Card.Title>
                    Precipitation - {currentWeatherData?.precip || 0}
                </Card.Title>
                <Card.Title>
                    Wind Speed - {currentWeatherData?.wind.speed.toFixed(2)} m/s
                </Card.Title>
                <Card.Title>
                    Cloud Coverage - {currentWeatherData?.clouds?.all}%
                </Card.Title>
            </Row>
        </Card>
    </div>
);

export default DashboardMainCard;
