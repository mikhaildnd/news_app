import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import React, { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = memo(function Button(props: ButtonProps) {
    const {
        className,
        children,
        variant = 'outline',
        square,
        fullWidth,
        size = 'm',
        disabled,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            <span className={cls.addonLeft}>{addonLeft}</span>
            {children}
            <span className={cls.addonRight}>{addonRight}</span>
        </button>
    );
});
