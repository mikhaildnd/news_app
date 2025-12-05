import { Fragment, type ReactNode, useMemo } from 'react';
import {
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import type { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <Field>
            <HStack gap="8">
                {label && <Label>{`${label}>`}</Label>}
                <Listbox
                    as="div"
                    className={classNames('', {}, [className, popupCls.popup])}
                    value={value}
                    onChange={onChange}
                    disabled={readonly}
                >
                    <ListboxButton as={Fragment}>
                        <Button
                            variant="filled"
                            addonRight={<Icon Svg={ArrowIcon} />}
                        >
                            {selectedItem?.content ?? defaultValue}
                        </Button>
                    </ListboxButton>
                    <ListboxOptions
                        className={classNames(cls.options, {}, optionsClasses)}
                    >
                        {items?.map((item) => (
                            <ListboxOption
                                as={Fragment}
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                            >
                                {({ focus, selected }) => (
                                    <li
                                        className={classNames(cls.item, {
                                            [popupCls.focus]: focus,
                                            [popupCls.disabled]: item.disabled,
                                            // [popupCls.selected]: selected, //TODO: выбранный элемент вроде и так подсвечивается, мб удалить
                                        })}
                                    >
                                        {selected}
                                        {item.content}
                                    </li>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </HStack>
        </Field>
    );
};
