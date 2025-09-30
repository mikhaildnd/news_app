import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
    type WithSlice,
} from '@reduxjs/toolkit';
import type { ArticlesPageSchema } from '../types/articlesPageSchema';
import { Article, ArticleView } from 'entities/Article';
import { rootReducer } from 'app/providers/StoreProvider';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>();

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView; // local storage хранит только строки - кастуем в енам
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined; // обнуляем ошибку, если есть
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articlesAdapter.setAll(state, action.payload);
                },
            )
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
