import { AppRoutes } from '@/shared/const/router';
import type { ReactElement } from 'react';
import { ScrollTollbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollTollbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollTollbar />,
    };

    return toolbarByAppRoute[appRoute];
}

//TODO мб вынести из app
