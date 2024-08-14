import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.username = action.payload.username;
        },
        logoutUser: () => {
            return { ...initialState };
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
