import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    breed: '',
    age: 'any',
    ageOpts: ['0 - 6 months', '6 months - 2 years', '2 years - 7 years', '7 years and older'],
    gender: '0 - 6 months',
    genderOpts: ['boy', 'girl'],
    catCompatibility: 'not sure',
    dogCompatibility: 'not sure',
    childCompatibility: 'not sure',
    compatibilityOpts: ['yes', 'no', 'not sure'],
    ownerName: '',
    ownerEmail: '',
    petDescription: '',
};

const giveAwaySlice = createSlice({
    name: 'giveAway',
    initialState: initialState,
    reducers: {
        clearState: () => {
            return { ...initialState };
        },
    },
});

export const { clearState } = giveAwaySlice.actions;
export default giveAwaySlice.reducer;
