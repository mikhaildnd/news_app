import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Fragment, type ReactNode } from 'react';
// import type { AnchorProps } from '@headlessui/react/dist/internal/floating'; // TODO: dev: тут типы
import type { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    // TODO: dev // anchor?: AnchorProps;
    direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <Menu
            as="div"
            className={classNames('', {}, [className, popupCls.popup])}
        >
            <MenuButton className={popupCls.trigger}>{trigger}</MenuButton>
            <MenuItems className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ focus }: { focus: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [popupCls.focus]: focus },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <MenuItem
                                as={AppLink}
                                to={item.href}
                                key={index}
                                disabled={item.disabled}
                            >
                                {content}
                            </MenuItem>
                        );
                    }

                    return (
                        <MenuItem
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
};
