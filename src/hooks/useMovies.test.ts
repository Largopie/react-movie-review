import { renderHook, waitFor } from '@testing-library/react';
import useMovies from './useMovies';

describe('useMovies', () => {
  const MOVIES_SIZE = 20;
  it(`처음 렌더링되는 영화 목록 개수는 ${MOVIES_SIZE}개다.`, async () => {
    const { result } = renderHook(() => useMovies());

    await waitFor(() => {
      expect(result.current).toHaveLength(MOVIES_SIZE);
    });
  });
});
