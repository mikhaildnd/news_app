// import 'app/styles/index.scss';
// import { StoryFn, StoryContext } from '@storybook/react';
// import { BrowserRouter } from 'react-router-dom';
//
// export const RouterDecorator = (Story: StoryFn, context: StoryContext) => {
//     return <BrowserRouter>{Story(context.args, context)}</BrowserRouter>;
// };
//

import React from 'react';
import type { StoryFn, StoryContext } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

type RouterParams = {
    path?: string; // путь для Route, например '/articles/:id'
    initialEntries?: string[]; // начальный URL, например ['/articles/1']
};

export const RouterDecorator = (Story: StoryFn, context: StoryContext) => {
    const routerParams = (context.parameters?.router as RouterParams) ?? {};
    const initialEntries = routerParams.initialEntries ?? ['/'];
    const path = routerParams.path ?? '*';

    return (
        <MemoryRouter initialEntries={initialEntries}>
            <Routes>
                <Route path={path} element={Story(context.args, context)} />
            </Routes>
        </MemoryRouter>
    );
};
