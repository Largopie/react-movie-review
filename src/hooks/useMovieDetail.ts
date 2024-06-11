import { useState } from 'react';
import { fetchMovieDetail } from '../api/movies';
import { MovieDetail } from '../types/movies';

const useMovieDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<MovieDetail>();

  const getMovieDetail = async (movieId: number) => {
    try {
      setIsLoading(true);
      const movieData = await fetchMovieDetail(movieId);

      setMovie(movieData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { movie, isLoading, getMovieDetail };
};

export default useMovieDetail;
