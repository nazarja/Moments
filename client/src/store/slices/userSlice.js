import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const initialState = {
    profile: null,
    auth: { isAuthenticated: false, access_expiry: null },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUser(state, action) {
            state.profile = action.payload.user;
            state.auth = {
                isAuthenticated: true,
                access_expiry: new Date((jwtDecode(action.payload.access).exp * 1000)).toISOString(),
            };
        },
        signOutUser: () => initialState,
        updateAccessExpiry(state, action) {
            state.auth.access_expiry = action.payload.access_expiration;
        }
    },
});

export const { signInUser, signOutUser, updateAccessExpiry } = userSlice.actions;
export default userSlice.reducer;