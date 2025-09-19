import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore, RootState } from '../config/store';
// import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<RootState>;
    // initialState?: DeepPartial<StateSchema>;
    // asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    // Функция для перемещения по роутам при каких-либо действиях
    const navigate = useNavigate();

    const store = createReduxStore(initialState, navigate);

    return <Provider store={store}>{children}</Provider>;
};
