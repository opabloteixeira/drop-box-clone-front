import axios from "axios";

const api = axios.create({
    baseURL: "https://drop-box-clone-api.herokuapp.com"
});

export default api;