import { createSlice, WithSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    selectors: {
        selectCounter: (state) => state.value,
    },
});

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices extends WithSlice<typeof counterSlice> {}
}

export const { increment, decrement } = counterSlice.actions;
export const { selectCounter } = counterSlice.selectors;
export const counterReducer = counterSlice.reducer;
