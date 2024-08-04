import adoptionReducer from './features/adoptionSlice';
import giveAwayReducer from './features/giveAwaySlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        adoptionState: adoptionReducer,
        giveAwayState: giveAwayReducer,
    },
});
