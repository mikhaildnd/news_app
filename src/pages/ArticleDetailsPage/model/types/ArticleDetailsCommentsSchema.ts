import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

// EntityState добавляет ids и entities для нормализации данных
export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
