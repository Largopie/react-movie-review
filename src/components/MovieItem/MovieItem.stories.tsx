import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MovieItem from '.';
import { Global } from '@emotion/react';
import { reset } from '../../reset';

const meta = {
  title: 'MovieItem',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#333' }}>
        <Global styles={reset} />
        <Story />
      </div>
    ),
  ],
  component: MovieItem,
} satisfies Meta<typeof MovieItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultApp: Story = {
  args: {
    onClick: fn(),
    movie: {
      id: 6421412,
      title: '혹성탈출: 새로운 시대',
      poster_path: `/plNOSbqkSuGEK2i15A5btAXtB7t.jpg`,
      vote_average: 6.894,
    },
  },
};
