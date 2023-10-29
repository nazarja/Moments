import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: null,
        auth: { isAuthenticated: false, expiry: null}
    },
    reducers: {
        signInUser(state, action) {
            state.profile = action.payload.user;
            state.auth.isAuthenticated = true;
        },
        signOutUser(state) {
            state.profile = null;
            state.auth.isAuthenticated = false;
        },
    },
});

export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;