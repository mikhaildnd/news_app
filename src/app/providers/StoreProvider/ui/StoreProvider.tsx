import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore, RootState } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<RootState>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    // Функция для перемещения по роутам при каких-либо действиях
    const navigate = useNavigate();

    const store = createReduxStore(initialState, navigate);

    return <Provider store={store}>{children}</Provider>;
};
