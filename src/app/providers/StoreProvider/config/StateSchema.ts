// import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
// import { UnknownAction } from 'redux';
// import { CounterSchema } from 'entities/Counter';
// import { UserSchema } from 'entities/User';
// import { LoginSchema } from 'features/AuthByUsername';
// import { ProfileSchema } from 'entities/Profile';
// import { ArticleDetailsSchema } from 'entities/Article';
import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';
import { RootState } from 'app/providers/StoreProvider/config/store';
// import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

// export interface StateSchema {
//     counter: CounterSchema;
//     user: UserSchema;
//
//     // Асинхронные редюсеры
//     loginForm?: LoginSchema;
//     profile?: ProfileSchema;
//     articleDetails?: ArticleDetailsSchema;
//     articleDetailsComments?: ArticleDetailsCommentsSchema;
// }

// export type StateSchemaKey = keyof StateSchema;
//
// export interface ReducerManager {
//     getReducerMap: () => ReducersMapObject<StateSchema>;
//     reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
//     add: (key: StateSchemaKey, reducer: Reducer) => void;
//     remove: (key: StateSchemaKey) => void;
// }
//
// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//     reducerManager: ReducerManager;
// }

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}
