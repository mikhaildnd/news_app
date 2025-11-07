import { type FC, memo, type SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(function Icon(props: IconProps) {
    const { className, Svg, inverted, ...otherProps } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
});
