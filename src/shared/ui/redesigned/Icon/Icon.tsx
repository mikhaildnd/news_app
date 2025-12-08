import { type FC, memo, type SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

interface NoneClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => void | Promise<void>;
}

type IconProps = ClickableIconProps | NoneClickableIconProps;

export const Icon = memo(function Icon(props: IconProps) {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                className={cls.button}
                type="button"
                onClick={(e) => {
                    void props.onClick(e);
                }}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
