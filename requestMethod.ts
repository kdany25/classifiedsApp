import axios from "axios";

export const BASE_URL = "https://classfiedbackend.herokuapp.com/api";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
