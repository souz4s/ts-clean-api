export interface UpdateMusicalGenreScoreRepository {
  updateScore: (params: UpdateMusicalGenreScoreRepository.Params) => Promise<UpdateMusicalGenreScoreRepository.Result>;
}

export namespace UpdateMusicalGenreScoreRepository {
  export type Params = { id: number };
  export type Result = void;
}
