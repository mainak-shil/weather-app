/**
 * Weatherbit
 */
const WEATHERBIT_BASE_URL =
    "https://weatherbit-v1-mashape.p.rapidapi.com/forecast";
const WEATHERBIT_HEADER = {
    // "x-rapidapi-key": "a0f7528f3dmshaee14872d6f78d0p1b61d5jsn4fdd39d994f4",
    // "x-rapidapi-key": "6cbace0070msh9dc2c763590d08fp100071jsnf9053fb5854e",
    "x-rapidapi-key": "b3d849704bmsh39100e464cbac98p181655jsnc96e0538795b",
    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    "Content-Type": "application/json",
};
const WEATHERBIT_IMAGE_URL = "https://www.weatherbit.io/static/img/icons/";

/**
 * Openweather
 */
const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const OPENWEATHER_APP_ID = "35656e7ddbceeeb9d387f84805b80ea5";
const OPENWEATHER_IMAGE_URL = "https://openweathermap.org/img/wn/";

export {
    WEATHERBIT_BASE_URL,
    WEATHERBIT_HEADER,
    WEATHERBIT_IMAGE_URL,
    OPENWEATHER_BASE_URL,
    OPENWEATHER_APP_ID,
    OPENWEATHER_IMAGE_URL,
};
