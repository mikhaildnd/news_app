import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import type { Comment } from '../../model/types/comment';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleComponentFeatures } from '@/shared/lib/features';

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
                    <ToggleComponentFeatures
                        feature="isAppRedesigned"
                        on={<Text text={t('Комментарии отсутствуют')} />}
                        off={
                            <TextDeprecated
                                text={t('Комментарии отсутствуют')}
                            />
                        }
                    />
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
