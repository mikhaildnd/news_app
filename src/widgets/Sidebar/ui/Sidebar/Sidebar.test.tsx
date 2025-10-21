import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';
import userEvent from '@testing-library/user-event';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });

    test('Test toggle', async () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(sidebar).toBeInTheDocument();
        await userEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
