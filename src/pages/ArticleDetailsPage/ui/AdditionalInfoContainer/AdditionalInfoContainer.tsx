import { memo, useCallback } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit } from '@/shared/const/router';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    // Можно вынести в фичу, тк исп-я еще в ArticleDetailsPageHeader.tsx
    const onEditArticle = useCallback(() => {
        if (article) {
            void navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card padding="24" border="borderRound" className={cls.card}>
            <ArticleAdditionalInfo
                onEdit={onEditArticle}
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});

AdditionalInfoContainer.displayName = 'AdditionalInfoContainer';
