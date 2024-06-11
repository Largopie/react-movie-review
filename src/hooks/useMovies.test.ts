import { act, renderHook, waitFor } from '@testing-library/react';
import useMovies from './useMovies';

describe('useMovies', () => {
  const MOVIES_SIZE = 20;
  it(`처음 렌더링되는 영화 목록 개수는 ${MOVIES_SIZE}개다.`, async () => {
    const { result } = renderHook(() => useMovies());

    await waitFor(() => {
      expect(result.current.movies).toHaveLength(MOVIES_SIZE);
    });
  });

  it('영화 목록을 렌더링할 때는 isLoading 상태가 true, 렌더링이 완료된 후에는 false가 된다.', async () => {
    const { result } = renderHook(() => useMovies());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.movies).toHaveLength(MOVIES_SIZE);
      expect(result.current.isLoading).toBeFalsy();
    });
  });

  it('다음 페이지를 불러올 때는 isLoading 상태가 true, 렌더링이 완료된 후에는 false가 된다.', async () => {
    const { result } = renderHook(() => useMovies());

    await waitFor(() => {
      expect(result.current.movies).toHaveLength(MOVIES_SIZE);
    });

    expect(result.current.isLoading).toBeFalsy();

    act(() => {
      result.current.fetchNextPage();
    });

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
  });
});
