import type { EntityState } from '@reduxjs/toolkit';
import type {
    Article,
    ArticleView,
    ArticleSortField,
    ArticleType,
} from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';

// EntityState добавляет ids и entities для нормализации данных
export interface ArticlesPageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
