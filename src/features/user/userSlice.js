import { createSlice } from '@reduxjs/toolkit'

const initialState = { // Start off blank
	name: "",
	email: "",
	photo: "",
};

const userSlice = createSlice ({
	name: 'user',
	initialState,
	reducers: {
		setUserLoginDetails: (state, action) => { // When user hits Login, this reduced code acts to get details
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},

		setSignOutState: state => { // When log out forget
			state.name = null;
			state.email = null;
			state.photo = null;
		},
	},
});

export const { setUserLoginDetails, setSignOutState} = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;
