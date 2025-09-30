import { StoryFn, StoryContext } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

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

// import React from 'react';
// import { StoryFn } from '@storybook/react';
// import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
//
// export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
//     <ThemeProvider initialTheme={theme}>
//         <div className={`app ${theme}`}>
//             <StoryComponent />
//         </div>
//     </ThemeProvider>
// );
