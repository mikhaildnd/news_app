import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg?react';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg?react';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';

import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import { ToggleComponentFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    border="borderRound"
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                clickable
                                onClick={onClick(viewType.view)}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.selected]: viewType.view === view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                width={24}
                                height={24}
                                className={classNames('', {
                                    [cls.selected]: viewType.view === view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
