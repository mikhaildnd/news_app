import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('The page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });
        // findByTestId исп. т.к. страница подгружается лениво
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/not-exists-route',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect an unauthorized user to the main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to a private page for an authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _isMounted: true,
                    authData: {},
                },
            },
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access is denied (role is missing)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _isMounted: true,
                    authData: {},
                },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access is allowed (the role exists)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _isMounted: true,
                    authData: { roles: [UserRole.ADMIN] },
                },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
