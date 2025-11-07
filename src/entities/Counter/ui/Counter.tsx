import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement, add } = useCounterActions();

    const incrementFn = () => {
        increment();
    };
    const decrementFn = () => {
        decrement();
    };
    const addFn = () => {
        add(5);
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
            <Button onClick={addFn} data-testid="add5-btn">
                {t('add5')}
            </Button>
        </div>
    );
};
