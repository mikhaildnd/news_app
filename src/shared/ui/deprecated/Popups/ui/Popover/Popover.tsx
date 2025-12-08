import type { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover = (props: PopoverProps) => {
    const { className, children, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <PopoverButton as="span" className={popupCls.btn}>
                {trigger}
            </PopoverButton>
            <PopoverPanel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </PopoverPanel>
        </HPopover>
    );
};
