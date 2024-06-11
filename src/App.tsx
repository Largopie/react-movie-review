import styled from '@emotion/styled';
import MovieItem from './components/MovieItem';
import useMovies from './hooks/useMovies';
import { useState } from 'react';
import MovieDetailModal from './components/MovieDetailModal';
import useMovieDetail from './hooks/useMovieDetail';

function App() {
  const { movies, fetchNextPage } = useMovies();
  const { movie, isLoading, getMovieDetail } = useMovieDetail();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = async (movieId: number) => {
    setIsModalOpen(true);
    await getMovieDetail(movieId);
  };

  return (
    <>
      <h1>지금 인기있는 영화</h1>
      <MovieList>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onClick={onOpenModal} />
        ))}
      </MovieList>
      <MovieDetailModal isLoading={isLoading} movie={movie} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 64px;
`;
