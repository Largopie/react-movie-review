import type { Meta, StoryObj } from '@storybook/react';
import MovieItem from '.';
import { Global } from '@emotion/react';
import { reset } from '../../reset';
import { POSTER_URL } from '../../api/endpoints';

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
    id: 6421412,
    title: '혹성탈출: 새로운 시대',
    overview:
      '진화한 유인원과 퇴화된 인간들이 살아가는 땅. 유인원 리더 프록시무스는 완전한 군림을 위해 인간들을 사냥하며 자신의 제국을 건설한다. 한편, 또 다른 유인원 노아는 우연히 숨겨진 과거의 이야기와 시저의 가르침을 듣게 되고 인간과 유인원이 함께 할 새로운 세상을 꿈꾼다. 어느 날 그의 앞에 나타난 의문의 한 인간 소녀. 노아는 그녀와 함께 자유를 향한 여정을 시작하게 되는데…',
    poster_path: `${POSTER_URL}/plNOSbqkSuGEK2i15A5btAXtB7t.jpg`,
    vote_average: 6.894,
  },
};
