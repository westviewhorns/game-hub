import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f6bf8dbc5fab4c2da0a97b92d1c73b24"
    }
})