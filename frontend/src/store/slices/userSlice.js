import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { 
        profile: null,
        isAuthenticated: true
    },
    reducers: {
        signInUser(state) {
            state.isAuthenticated = true;
        },
        signOutUser(state) {
            state.isAuthenticated = false;
        },
    },
});

export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;