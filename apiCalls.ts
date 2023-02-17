import {
	loginFailure,
	loginStart,
	loginSuccess,
	logOutStart,
	logOutSuccess,
	logOutFailure,
} from "./slice/AuthSlice";
import { publicRequest } from "./requestMethod";

//login
export const login = async (dispatch: any, user: any) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};
//logout
export const logOutUser = async (id: string, dispatch: any) => {
	dispatch(logOutStart());
	try {
		dispatch(logOutSuccess("user logout "));
	} catch (err) {
		dispatch(logOutFailure());
	}
};
