import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINT } from '../api/endpoints';
import { Movie, MovieDetailResponse } from '../types/movies';

import moviesData from './movies.json';
import movieData from './movie.json';

export const handlers = [
  http.get(`${END_POINT.popularMovies}`, () => {
    const movies = moviesData as Movie[];

    return HttpResponse.json({ results: movies });
  }),

  http.get(`${BASE_URL}/:movieId`, () => {
    const movie = movieData as MovieDetailResponse;

    return HttpResponse.json({ ...movie, genres: ['애니메이션', '액션', '가족', '코미디', '판타지'] });
  }),
];
