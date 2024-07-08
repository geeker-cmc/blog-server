import * as userDao from "@/dao/userDao";
import { IUserCreationAttributes } from "@/model/userModel";

export const registerUser = async (
  user: IUserCreationAttributes
): Promise<number> => {
  const userId = await userDao.createUser(user);
  return userId;
};
