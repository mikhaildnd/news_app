import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.KZT, content: Currency.KZT },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(function CurrencySelect({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (newValue: string) => {
            onChange?.(newValue as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={Currency.RUB}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            label={t('Укажите валюту')}
        />
    );
});
