import axios, { AxiosInstance } from "axios";
//@ts-ignore
const http: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    auth: {
        username: 'vatanparvar',
        password: 'web@#1234'
    }
})
// export function http(url) {
//    return axios.get(process.env.REACT_APP_BASE_URL + url).then((res) => res.data)
// }
export default http
