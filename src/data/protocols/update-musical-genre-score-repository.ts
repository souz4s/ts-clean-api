export interface UpdateMusicalGenreScoreRepository {
  updateScore: (params: UpdateMusicalGenreScoreRepository.Params) => Promise<UpdateMusicalGenreScoreRepository.Result>;
}

export namespace UpdateMusicalGenreScoreRepository {
  export type Params = { id: number; quantity: number };
  export type Result = void;
}
