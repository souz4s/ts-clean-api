export interface UpdateMusicalGenreScore {
  perform: (params: UpdateMusicalGenreScore.Params) => Promise<UpdateMusicalGenreScore.Result>;
}

export namespace UpdateMusicalGenreScore {
  export type Params = { userEmail: string };
  export type Result = { updated: boolean };
}
