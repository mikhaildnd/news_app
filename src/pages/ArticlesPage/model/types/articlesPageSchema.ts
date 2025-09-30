import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

// EntityState добавляет ids и entities для нормализации данных
export interface ArticlesPageSchema extends EntityState<Article, EntityId> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
}
