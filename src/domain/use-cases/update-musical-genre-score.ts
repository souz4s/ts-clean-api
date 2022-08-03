export interface UpdateMusicalGenreScore {
  perform: (params: UpdateMusicalGenreScore.Params) => Promise<UpdateMusicalGenreScore.Result>;
}

export namespace UpdateMusicalGenreScore {
  export type Params = { musicalGenreId: number };
  export type Result = void;
}
