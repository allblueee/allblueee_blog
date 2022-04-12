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
    axios.request(query)
        .then(res => {
            console.log(res)
        })
}