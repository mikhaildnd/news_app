import type { StoryFn, StoryContext } from '@storybook/react';
// eslint-disable-next-line mikhaildnd/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import type { Theme } from '@/shared/const/theme';

export function ThemeDecorator(theme: Theme) {
    function decorator(Story: StoryFn, context: StoryContext) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    {Story(context.args, context)}
                </div>
            </ThemeProvider>
        );
    }

    return decorator;
}
