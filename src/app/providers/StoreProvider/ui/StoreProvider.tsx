import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>; // или Partial? разобраться
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>; // или Partial? разобраться
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers = {} } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return <Provider store={store}>{children}</Provider>;
};
