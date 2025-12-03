import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const props = {
        className,
        value: value,
        items: options,
        defaultValue: Country.Russia,
        onChange: onChangeHandler,
        readonly: readonly,
        label: t('Укажите страну'),
    };

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    );
});
