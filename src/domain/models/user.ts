export type UserModel = {
  id: number;
  email: string;
  name: string;
  musicalGenre: object;
  musicalGenresId: number;
  createAt: Date;
  updateAt?: Date;
};
