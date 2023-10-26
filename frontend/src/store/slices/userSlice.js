import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: null,
        isAuthenticated: false
    },
    reducers: {
        signInUser(state, action) {
            state.profile = action.payload.user;
            state.isAuthenticated = true;
        },
        signOutUser(state) {
            state.profile = null;
            state.isAuthenticated = false;
        },
    },
});

export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;