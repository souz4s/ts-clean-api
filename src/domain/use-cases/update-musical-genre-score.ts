export interface UpdateMusicalGenreScore {
  perform: (params: UpdateMusicalGenreScore.Params) => Promise<UpdateMusicalGenreScore.Result>;
}

export namespace UpdateMusicalGenreScore {
  export type Params = { id: number };
  export type Result = { score: number };
}
