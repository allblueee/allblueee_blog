import axios from "axios";
// import vue from 'vue'
axios.defaults.baseURL = 'http://localhost:8082'
export const post = function (url, params) {
    const query = {
        url: url,
        method: 'post',
        timeout: 100000,
        data: params,
        headers: { 'Content-Type': 'application/json', 'request-ajax': true }

    }
    return axios.request(query)
}

export const get = function (url) {
    const query = {
        url: url,
        method: 'get',
        timeout: 100000,
        headers: { 'Content-Type': 'application/json', 'request-ajax': true }

    }
    return axios.request(query)
}