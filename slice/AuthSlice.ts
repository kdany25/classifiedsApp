import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logOutStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		logOutSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = null;
		},
		logOutFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logOutStart,
	logOutSuccess,
	logOutFailure,
} = userSlice.actions;
export const userIsLogged = (state: any) => state.user.currentUser;
export default userSlice.reducer;
