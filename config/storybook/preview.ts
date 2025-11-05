import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import '../../src/app/styles/index.scss';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '../../src/shared/const/theme';

initialize();

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        // layout: 'fullscreen',
    },
    // Provide the MSW addon loader globally
    loaders: [mswLoader],
    decorators: [
        RouterDecorator,
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        // StoreDecorator(),
        StoreDecorator({
            scrollSave: {
                scroll: {},
            },
        }),
    ],
};

export default preview;
