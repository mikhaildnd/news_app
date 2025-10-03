import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
    type WithSlice,
} from '@reduxjs/toolkit';
import type { ArticlesPageSchema } from '../types/articlesPageSchema';
import {
    Article,
    ArticleType,
    ArticleView,
    ArticleSortField,
} from 'entities/Article';
import { rootReducer } from 'app/providers/StoreProvider';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';

const articlesAdapter = createEntityAdapter<Article>();

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view =
                (localStorage.getItem(
                    ARTICLE_VIEW_LOCALSTORAGE_KEY,
                ) as ArticleView) ?? ArticleView.SMALL;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const injectArticlesPageSlice =
    articlesPageSlice.injectInto(rootReducer);
export const articlesPageSliceSelectors = articlesAdapter.getSelectors(
    (state: ReturnType<typeof rootReducer>) =>
        injectArticlesPageSlice.selectSlice(state) ??
        articlesAdapter.getInitialState(),
);
export const articlesPageSliceReducer = articlesPageSlice.reducer;
export const articlesPageSliceActions = articlesPageSlice.actions;

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices extends WithSlice<typeof articlesPageSlice> {}
}
