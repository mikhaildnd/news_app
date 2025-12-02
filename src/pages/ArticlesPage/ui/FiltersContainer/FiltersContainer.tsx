import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        type,
        sort,
        order,
        search,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        onChangeOrder,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            sort={sort}
            search={search}
            type={type}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeType={onChangeType}
            onChangeSearch={onChangeSearch}
            order={order}
            className={className}
        />
    );
});

FiltersContainer.displayName = 'FiltersContainer';
