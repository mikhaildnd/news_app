import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo(function CountrySelect({
    className,
    value,
    onChange,
    readonly,
}: CountrySelectProps) {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (newValue: string) => {
            onChange?.(newValue as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={className}
            value={value}
            items={options}
            defaultValue={t('Укажите страну')}
            onChange={onChangeHandler}
            readonly={readonly}
            label={t('Укажите страну>')}
        />
    );
});
