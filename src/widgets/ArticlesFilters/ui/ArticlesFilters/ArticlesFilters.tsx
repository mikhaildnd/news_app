import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { type ArticleSortField, type ArticleType } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';

interface ArticleFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticleFiltersProps) => {
    const {
        className,
        sort,
        order,
        type,
        search,
        onChangeSort,
        onChangeSearch,
        onChangeType,
        onChangeOrder,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.ArticleFilters, {}, [className])}
            padding="24"
        >
            {/*Можно сделать функцию-хелпер getVStack, getHStack, чтобы не создавать лишние ноды*/}
            <VStack gap="32">
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleTypeTabs
                    className={cls.tabs}
                    value={type}
                    onChangeType={onChangeType}
                />
            </VStack>
        </Card>
    );
});

ArticlesFilters.displayName = 'ArticleFilters';
