import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';
import { fetchPopularMovies } from '../api/movies';

const useMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchPopularMovies(page);

      setMovies(movies);
      setPage((prevPage) => prevPage + 1);
    };

    getMovies();
  }, []);

  return movies;
};

export default useMovies;
