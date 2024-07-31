import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
    name: 'chad',
};

const adoptionSlice = createSlice({
    name: 'adoption',
    initialState: defaultState,
    reducers: {
        changeName: (state) => {
            state.name = 'Not Chad';
        },
    },
});

export const { changeName } = adoptionSlice.actions;
export default adoptionSlice.reducer;
