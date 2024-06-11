import styled from '@emotion/styled';
import MovieItem from './components/MovieItem';
import useMovies from './hooks/useMovies';

function App() {
  const { movies, fetchNextPage } = useMovies();

  return (
    <>
      <h1>지금 인기있는 영화</h1>
      <MovieList>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </MovieList>
    </>
  );
}

export default App;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 64px;
`;
