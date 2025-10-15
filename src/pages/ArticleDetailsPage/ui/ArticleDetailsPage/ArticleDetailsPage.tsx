import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';
import { Page } from 'widgets/Page/Page';
import { articleDetailsActions } from 'entities/Article/model/slice/articleDetailsSlice';
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    // const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        return () => {
            dispatch(articleDetailsActions.reset());
        };
    }, [dispatch]);

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="16" max>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
