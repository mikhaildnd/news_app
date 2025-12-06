import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollTollbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

interface ScrollTollbarProps {
    className?: string;
}

export const ScrollTollbar = memo((props: ScrollTollbarProps) => {
    const { className } = props;

    return (
        <VStack
            max
            justify="center"
            align="center"
            className={classNames(cls.ScrollTollbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});

ScrollTollbar.displayName = 'ScrollTollbar';
