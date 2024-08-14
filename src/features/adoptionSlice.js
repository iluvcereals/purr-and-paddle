import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    availablePets: [],
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
    ageOpts: ['puppy/kitten', 'young', 'adult', 'senior'],
    genderOpts: ['male', 'female'],
    compatibilityOpts: ['dogs', 'cats', 'children'],
    isClear: true,
};

const adoptionSlice = createSlice({
    name: 'adoption',
    initialState: initialState,
    reducers: {
        clearState: () => {
            return { ...initialState };
        },
        setAvailablePets: (state, action) => {
            state.availablePets = action.payload;
            state.clear = false;
        },
    },
});

export const { clearState, setAvailablePets } = adoptionSlice.actions;
export default adoptionSlice.reducer;
