export interface UpdateMusicalGenreScoreRepository {
  updateScore: (params: UpdateMusicalGenreScoreRepository.Params) => Promise<UpdateMusicalGenreScoreRepository.Result>;
}

export namespace UpdateMusicalGenreScoreRepository {
  export type Params = { musicalGenreId: number };
  export type Result = void;
}
