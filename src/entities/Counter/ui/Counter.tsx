import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { increment, decrement } from '../model/slice/CounterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const incrementFn = () => {
        dispatch(increment());
    };
    const decrementFn = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={incrementFn} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrementFn} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
