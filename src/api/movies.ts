import { BASE_URL, END_POINT } from './endpoints';
import { Movie, MovieDetail, MovieDetailResponse } from '../types/movies';

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

export const fetchMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const searchParams = new URLSearchParams();
  searchParams.append('language', 'ko-KR');

  const response = await fetch(`${BASE_URL}/${movieId}?${searchParams.toString}`);

  const data = (await response.json()) as MovieDetailResponse;
  const gereNames = data.genres.map(({ name }) => name);

  return { ...data, genres: gereNames };
};
