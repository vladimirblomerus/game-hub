import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3e12a68f29434657962235bd5b5bca01"
    }
})