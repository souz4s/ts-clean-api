export type UserModel = {
  id: number;
  email: string;
  name: string;
  musicalGenre: JSON;
  musicalGenresId: number;
  createAt: Date;
  updateAt?: Date;
};
