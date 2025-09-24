import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(function Icon(props: IconProps) {
    const { className, Svg } = props;

    return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
