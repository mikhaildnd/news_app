import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { RootState } from 'app/providers/StoreProvider/config/store'; //fix mb

export interface ComponentRenderOptions {
    route?: string;
    initialState?: Partial<RootState>;
    // initialState?: DeepPartial<RootState>;
}

export function componentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {},
): RenderResult {
    const { route = '/', initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
