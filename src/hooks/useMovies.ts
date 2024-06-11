import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';
import { fetchPopularMovies } from '../api/movies';

const useMovies = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async (page: number) => {
    try {
      setIsLoading(true);
      const movies = await fetchPopularMovies(page);

      setMovies(movies);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, []);

  const fetchNextPage = async () => {
    const nextPage = page + 1;

    try {
      await getMovies(nextPage);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
    }
  };

  return { movies, isLoading, fetchNextPage };
};

export default useMovies;
