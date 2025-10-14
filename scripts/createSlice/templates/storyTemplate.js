module.exports = (
    layer,
    componentName,
) => `import { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
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
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};`;
