export type UserModel = {
  id: number;
  email: string;
  name: string;
  musicalGenre: object;
  musicalGenreId: number;
  createAt: Date;
  updateAt?: Date;
};
