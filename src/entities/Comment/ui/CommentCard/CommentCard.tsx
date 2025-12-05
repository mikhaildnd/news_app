import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './CommentCard.module.scss';
import type { Comment } from '../../model/types/comment';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleComponentFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" max border="borderRound">
                    <VStack
                        data-testid="CommentCard.Content"
                        gap="8"
                        max
                        className={classNames(cls.CommentCardRedesigned, {}, [
                            className,
                        ])}
                    >
                        <AppLink to={getRouteProfile(comment?.user.id)}>
                            <HStack gap="8">
                                {comment?.user.avatar ? (
                                    <Avatar
                                        src={comment?.user.avatar}
                                        size={30}
                                    />
                                ) : null}
                                <Text text={comment?.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text text={comment?.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    data-testid="CommentCard.Content"
                    gap="8"
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment?.user.id)}
                        className={cls.header}
                    >
                        {comment?.user.avatar ? (
                            <AvatarDeprecated
                                src={comment?.user.avatar}
                                size={30}
                            />
                        ) : null}
                        <TextDeprecated
                            className={cls.username}
                            title={comment?.user.username}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated text={comment?.text} />
                </VStack>
            }
        />
    );
});

CommentCard.displayName = 'CommentCard';
