import { http, HttpResponse } from 'msw';
import moviesData from './movies.json';
import { END_POINT } from '../api/endpoints';
import { Movie } from '../types/movies';

export const handlers = [
  http.get(`${END_POINT.popularMovies}`, () => {
    const movies = moviesData as Movie[];

    return HttpResponse.json({ results: movies });
  }),
];
