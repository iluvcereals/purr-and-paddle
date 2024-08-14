import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    typeOpts: ['dog', 'cat'],
    breedOpts: [
        'Labrador Retriever',
        'German Shepherd',
        'Siamese',
        'Persian',
        'Golden Retriever',
        'Maine Coon',
        'Beagle',
        'Ragdoll',
        'Bulldog',
        'British Shorthair',
    ],
    age: 'any',
    ageOpts: ['puppy/kitten', 'young', 'adult', 'senior'],
    gender: '0 - 6 months',
    genderOpts: ['male', 'female'],
    compatibilityOpts: ['dogs', 'cats', 'children'],
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
