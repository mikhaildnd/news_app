import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import '../../src/app/styles/index.scss';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';

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
