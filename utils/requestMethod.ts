import axios from "axios";

export const BASE_URL = "http://localhost:7001/api";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
