import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { FutureForecastListItem } from ".";

const FutureForecast = ({ _onSelectTabFutureForecast, tabDataArr }) => (
    <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        onSelect={_onSelectTabFutureForecast}
    >
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column ">
                    <Nav.Item>
                        <Nav.Link eventKey="first">24 hrs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Weekly</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    {tabDataArr?.length > 0 &&
                        tabDataArr?.map((ele, ind) => (
                            <FutureForecastListItem data={ele} key={ind} />
                        ))}
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
);

export default FutureForecast;
