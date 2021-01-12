import axios from "axios";

export async function postCall(api, req) {
    const response = await axios.post(
        api,
        req
    );
    return response;
}
export async function getCall(api) {
    const response = await axios.get(
        api
    );
    return response;
}

