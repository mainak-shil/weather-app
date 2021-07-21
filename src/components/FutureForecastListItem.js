import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { WEATHERBIT_IMAGE_URL } from "../utils/constants";

const FutureForecastListItem = ({ data }) => (
    <Card className="m-2">
        <Card.Header as="h5">
            {moment.unix(data?.ts).format("Do, MMMM hh:mm a")}{" "}
        </Card.Header>

        <Card.Body>
            <Row xs={6} md={6} className="g-4 text-center">
                <img
                    style={{
                        height: "100px",
                        width: "100px",
                    }}
                    alt=""
                    src={`${WEATHERBIT_IMAGE_URL}${data.weather.icon}.png`}
                />
                <span
                    style={{
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                >
                    {parseInt(data?.temp, 10)}
                    °C
                </span>
            </Row>
            <Row xs={1} md={3} className="g-4">
                <Card.Title
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    {data?.weather?.description}
                </Card.Title>
                <Card.Title>Precipitation - {data.precip}</Card.Title>
                <Card.Title>
                    Wind Speed - {data.wind_spd.toFixed(2)} m/s
                </Card.Title>
            </Row>
        </Card.Body>
    </Card>
);

export default FutureForecastListItem;
