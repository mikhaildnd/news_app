import {
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import { DropdownDirection } from '../../types/ui';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string; // Выбранный элемент
    defaultValue?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const ListBox = (props: ListBoxProps) => {
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

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <Field>
            <HStack gap="8">
                {label && <Label>{`${label}>`}</Label>}
                <Listbox
                    as="div"
                    className={classNames(cls.ListBox, {}, [className])}
                    value={value}
                    onChange={onChange}
                    disabled={readonly}
                >
                    <ListboxButton as={Fragment}>
                        <Button>{value ?? defaultValue}</Button>
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
                                            [cls.focus]: focus,
                                            [cls.disabled]: item.disabled,
                                        })}
                                    >
                                        {selected && '>'}
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
