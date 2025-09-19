import { StoryContext, StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
// import { RootState } from 'app/providers/StoreProvider/config/store'; //fix mb
// import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
// import { profileReducer } from 'entities/Profile';
// import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

// const defaultAsyncReducers: ReducersList = {
//     loginForm: loginReducer,
//     profile: profileReducer,
//     articleDetails: articleDetailsReducer,
// };

export const StoreDecorator =
    (
        initialState?: RootStateDeepPartial,
        // DeepPartial теперь берем из глобальной декларации
        // initialState?: DeepPartial<RootState>,
        // asyncReducers?: ReducersList,
    ) =>
    // eslint-disable-next-line react/display-name
    (Story: StoryFn, context: StoryContext) => (
        <StoreProvider initialState={initialState}>{Story(context.args, context)}</StoreProvider>
    );
