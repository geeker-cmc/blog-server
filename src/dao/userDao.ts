import UserClass, { User } from "@/model/userModel";

export const createUser = async (user: any) => {
  return await UserClass.create<User>(user);
};
