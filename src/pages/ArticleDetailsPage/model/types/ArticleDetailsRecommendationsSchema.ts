import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

// EntityState добавляет ids и entities для нормализации данных
export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article, EntityId> {
    isLoading?: boolean;
    error?: string;
}
