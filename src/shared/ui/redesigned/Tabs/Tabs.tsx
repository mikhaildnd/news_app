import { memo, type ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';
import { Flex, type FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const clickHandler = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            align="start"
            gap="8"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        className={classNames(cls.tab, {
                            [cls.selected]: isSelected,
                        })}
                        onClick={clickHandler(tab)}
                        border="borderRound"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});

Tabs.displayName = 'Tabs';
