import React from "react";
import Col from "react-bootstrap/Col";

const Header = ({
    _onChangeKeyword,
    _handleSearch,
    _handleCurrentLocSearch,
    searchedCityArr,
    fetchCurrentLocData,
}) => (
    <>
        <form
            className="row"
            style={{
                padding: "20px",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Col className="text-center">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search a city"
                    aria-label="Search"
                    onChange={_onChangeKeyword}
                />
            </Col>
            <Col className="text-center">
                <button
                    className="btn btn-outline-dark "
                    onClick={_handleSearch}
                >
                    Search
                </button>
                <button
                    className="btn btn-dark ms-2"
                    type="submit"
                    onClick={_handleCurrentLocSearch}
                >
                    Use my current location
                </button>
            </Col>
        </form>
        {searchedCityArr?.length > 1 && (
            <div>
                <p style={{ marginTop: "20px" }}>
                    Select the city you want to see forecast
                </p>
                <div className="row p-3">
                    {searchedCityArr?.map((ele, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-outline-dark btn-sm m-3"
                            style={{ width: "100px", backgroundColor: "#fff" }}
                            onClick={() => fetchCurrentLocData(ele)}
                        >
                            {ele.name}, {ele.country}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </>
);

export default Header;
