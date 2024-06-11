import { END_POINT } from './endpoints';
import { Movie } from '../types/movies';

export const fetchPopularMovies = async (page: number): Promise<Movie[]> => {
  const searchParams = new URLSearchParams();
  searchParams.append('language', 'ko-KR');
  searchParams.append('page', page.toString());

  const response = await fetch(`${END_POINT.popularMovies}?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();

  return data.results;
};
