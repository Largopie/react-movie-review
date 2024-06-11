import { Modal } from 'nakta-react-payments-components';
import { POSTER_URL } from '../../api/endpoints';
import { MovieDetail } from '../../types/movies';
import styled from '@emotion/styled';

interface MovieDetailModalProps {
  movie: MovieDetail | undefined;
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
}

const MovieDetailModal = ({ movie, isOpen, isLoading, onClose }: MovieDetailModalProps) => {
  return (
    <Modal position='center' isOpen={isOpen} onClose={onClose}>
      <Modal.Backdrop onClick={onClose} />
      <Modal.Content size='large'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Modal.Header>
              <Modal.Title>{movie?.title}</Modal.Title>
              <Modal.CloseButton onClick={onClose} />
            </Modal.Header>
            <Modal.Main>
              <MainContainer>
                <Poster src={`${POSTER_URL}${movie?.poster_path}`} />
                <InfoContainer>
                  <span>{movie?.genres.join(', ')}</span>
                  <p>{movie?.overview}</p>
                </InfoContainer>
              </MainContainer>
            </Modal.Main>
            <Modal.Footer align='row' position='right'>
              <span>평점 : {movie?.vote_average.toFixed(1)}</span>
            </Modal.Footer>
          </>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default MovieDetailModal;

const MainContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Poster = styled.img`
  width: 292px;
  height: 433px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
