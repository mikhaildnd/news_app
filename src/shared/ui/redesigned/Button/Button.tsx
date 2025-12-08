import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import React, {
    type ButtonHTMLAttributes,
    type ForwardedRef,
    forwardRef,
    type ReactNode,
} from 'react';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    color?: ButtonColor;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            square,
            fullWidth,
            size = 'm',
            disabled,
            color = 'normal',
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
                    cls[color],
                ])}
                disabled={disabled}
                {...otherProps}
                ref={ref}
            >
                <span className={cls.addonLeft}>{addonLeft}</span>
                {children}
                <span className={cls.addonRight}>{addonRight}</span>
            </button>
        );
    },
);

Button.displayName = 'Button';
