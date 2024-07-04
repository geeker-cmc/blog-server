import * as userDao from "@/dao/userDao";

export const registerUser = async (user: any) => {
  return await userDao.createUser(user);
};
