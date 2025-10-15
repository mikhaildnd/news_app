import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams));
    });

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters />
            <ArticleInfiniteList className={cls.list} />
        </Page>
    );
};

export default memo(ArticlesPage);
