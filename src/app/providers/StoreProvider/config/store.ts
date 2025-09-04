import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    // process.env.NODE_ENV доступен всегда (Webpack, Vite и Storybook автоматически его подставляют).
    // В Storybook он будет равен "development", значит Redux DevTools включатся.
    // В продакшн-сборке — будет "production", DevTools отключатся.
    const isDev = process.env.NODE_ENV === 'development';

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: isDev,
        // devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
