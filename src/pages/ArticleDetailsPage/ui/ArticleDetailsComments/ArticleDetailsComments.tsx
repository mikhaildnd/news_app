import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AddCommentForm from 'features/AddCommentForm/ui/addCommentForm/addCommentForm';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useSelector } from 'react-redux';
import { getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleDetailsComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        const onSendComment = useCallback(
            (text: string) => {
                void dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            void dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
