import axios from "axios";

const AxiosHelper = (url, method, headers = null) => {
    console.group("AxiosHelper");
    const params = {
        method: method,
        url,
        headers: headers,
    };
    console.log(JSON.stringify(params));

    return axios(params)
        .then((response) => {
            console.log("response:", JSON.stringify(response));
            console.groupEnd();
            return response;
        })
        .catch((err) => {
            console.log("axios error", err.response);
        });
};

export { AxiosHelper };
