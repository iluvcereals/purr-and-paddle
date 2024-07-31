import adoptionReducer from './features/adoptionSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        adoptionState: adoptionReducer,
    },
});
