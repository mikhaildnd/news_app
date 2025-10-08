import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { VStack } from 'shared/ui/Stack';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(function CommentList(props: CommentListProps) {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation();

    let content;

    if (isLoading) {
        content = (
            <>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </>
        );
    } else {
        content = (
            <>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            comment={comment}
                        />
                    ))
                ) : (
                    <Text text={t('Комментарии отсутствуют')} />
                )}
            </>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {content}
        </VStack>
    );
});
