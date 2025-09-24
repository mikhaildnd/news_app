import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { rootReducer } from 'app/providers/StoreProvider';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined; // обнуляем ошибку, если есть
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices extends WithSlice<typeof loginSlice> {}
}

export const injectedLoginSlice = loginSlice.injectInto(rootReducer);

export const { setUsername, setPassword } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
