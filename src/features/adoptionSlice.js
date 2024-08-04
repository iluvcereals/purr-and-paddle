import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    breed: '',
    age: 'any',
    ageOpts: ['puppy/kitten', 'young', 'adult', 'senior', 'any'],
    gender: 'any',
    genderOpts: ['boy', 'girl'],
    compatibility: 'all',
    compatibilityOpts: ['dog', 'cat', 'children'],
};

const adoptionSlice = createSlice({
    name: 'adoption',
    initialState: initialState,
    reducers: {
        clearState: () => {
            return { ...initialState };
        },
    },
});

export const { clearState } = adoptionSlice.actions;
export default adoptionSlice.reducer;
