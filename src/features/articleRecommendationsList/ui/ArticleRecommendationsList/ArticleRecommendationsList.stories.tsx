import { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    args: {},
    // decorators: [
    //     (Story) => (
    //         <div style={{ padding: 100 }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
    // parameters: {
    //     router: {
    //         path: '/example/:id',
    //         initialEntries: ['/example/'],
    //     },
    // },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
