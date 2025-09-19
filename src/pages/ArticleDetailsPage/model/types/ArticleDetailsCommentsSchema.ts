import { Comment } from 'entities/Comment';
import { EntityId, EntityState } from '@reduxjs/toolkit';

// EntityState добавляет ids и entities для нормализации данных
export interface ArticleDetailsCommentsSchema extends EntityState<Comment, EntityId> {
    isLoading?: boolean;
    error?: string;
}
