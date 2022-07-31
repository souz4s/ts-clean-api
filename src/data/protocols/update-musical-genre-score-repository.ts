export interface UpdateMusicalGenreScoreRepository {
  updateScore: (params: UpdateMusicalGenreScoreRepository.Params) => Promise<UpdateMusicalGenreScoreRepository.Result>;
}

export namespace UpdateMusicalGenreScoreRepository {
  export type Params = { userId: string };
  export type Result = void;
}
