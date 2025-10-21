import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<
    ReducersMapObject<ArticleDetailsPageSchema>
>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

// const reducers: ReducersMapObject<ArticleDetailsPageSchema> = {
//     recommendations: articleDetailsPageRecommendationsReducer,
//     comments: articleDetailsCommentsReducer,
// };
//
// export const articleDetailsPageReducer = combineReducers(reducers);
