import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articleDetailsCommentsSelectors } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import AddCommentForm from 'features/AddCommentForm/ui/addCommentForm/addCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { articleDetailsActions } from 'entities/Article/model/slice/articleDetailsSlice';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(articleDetailsCommentsSelectors.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const error = useSelector(getArticleDetailsError);

    const onBackToList = useCallback(() => {
        void navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            void dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(id));
    });

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
        // <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </Page>
        // </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
