import type { Comment } from '@/entities/Comment';
import type { EntityId, EntityState } from '@reduxjs/toolkit';

// EntityState добавляет ids и entities для нормализации данных
export interface ArticleDetailsCommentsSchema
    extends EntityState<Comment, EntityId> {
    isLoading?: boolean;
    error?: string;
}
