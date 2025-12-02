import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    type TabItem,
    Tabs as DeprecatedTabs,
} from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (value: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
        ],
        [t],
    );

    // если делал Select через дженерики, то табы можно сделать по аналогии и не придется делать лишний хэндлер
    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    onTabClick={onTabClick}
                    value={value}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <DeprecatedTabs
                    tabs={typeTabs}
                    onTabClick={onTabClick}
                    value={value}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
