import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Global } from '@emotion/react';
import { reset } from '../../reset';
import MovieDetailModal from '.';

const meta = {
  title: 'MovieDetail',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Global styles={reset} />
        <Story />
      </>
    ),
  ],
  component: MovieDetailModal,
} satisfies Meta<typeof MovieDetailModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultApp: Story = {
  args: {
    isLoading: false,
    onClose: fn(),
    isOpen: true,
    movie: {
      id: 1011985,
      genres: ['애니메이션', '액션', '가족', '코미디', '판타지'],
      overview:
        '마침내 내면의 평화… 냉면의 평화…가 찾아왔다고 믿는 용의 전사 ‘포’ 이젠 평화의 계곡의 영적 지도자가 되고, 자신을 대신할 후계자를 찾아야만 한다. “이제 용의 전사는 그만둬야 해요?” 용의 전사로의 모습이 익숙해지고 새로운 성장을 하기보다 지금 이대로가 좋은 ‘포’ 하지만 모든 쿵푸 마스터들의 능력을 그대로 복제하는 강력한 빌런 ‘카멜레온’이 나타나고 그녀를 막기 위해 정체를 알 수 없는 쿵푸 고수 ‘젠’과 함께 모험을 떠나게 되는데… 포는 가장 강력한 빌런과 자기 자신마저 뛰어넘고 진정한 변화를 할 수 있을까?',
      poster_path: '/1ZNOOMmILNUzVYbzG1j7GYb5bEV.jpg',
      title: '쿵푸팬더4',
      vote_average: 7.124,
    },
  },
};
