import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { articlesPageSliceSelectors } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { Text } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const articles = useSelector(articlesPageSliceSelectors.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return <Text title={t('Ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList';
