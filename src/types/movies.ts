export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieDetailStandard {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

interface GenreResponse {
  id: number;
  name: string;
}

export interface MovieDetailResponse extends MovieDetailStandard {
  genres: GenreResponse[];
}
export interface MovieDetail extends MovieDetailStandard {
  genres: string[];
}
