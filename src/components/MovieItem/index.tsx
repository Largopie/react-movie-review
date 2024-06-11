import styled from '@emotion/styled';
import { Movie } from '../../types/movies';
import { POSTER_URL } from '../../api/endpoints';

const MovieItem = ({ poster_path, title, vote_average }: Movie) => {
  return (
    <MovieItemContainer>
      <Poster src={`${POSTER_URL}/${poster_path}`} />
      <Title>{title}</Title>
      <Average>{vote_average.toFixed(1)}</Average>
    </MovieItemContainer>
  );
};

export default MovieItem;

const MovieItemContainer = styled.li`
  width: 182px;
  height: 359px;
`;

const Poster = styled.img`
  width: 100%;
  height: 273px;

  border-radius: 15px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
`;

const Average = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
`;
