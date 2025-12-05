import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg?react';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg?react';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { renderArticleBlock } from './renderArticleBlock';
import { ToggleComponentFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStack justify="center" max>
                <Avatar className={cls.avatar} size={200} src={article?.img} />
            </HStack>
            <VStack data-testid="ArticleDetails.Info" gap="4">
                <TextDeprecated
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8">
                    <Icon Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={CalendarIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                src={article?.img}
                fallback={
                    <SkeletonRedesigned
                        width="100%"
                        height={420}
                        border="16px"
                    />
                }
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton width={300} height={32} />
            <Skeleton width={600} height={24} />
            <Skeleton width="100%" height={200} />
            <Skeleton width="100%" height={200} />
        </VStack>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        void dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <ToggleComponentFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                max
                gap="16"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';
