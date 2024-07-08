import UserModel, {
  IUserAttributes,
  IUserCreationAttributes,
} from "@/model/userModel";

export const createUser: (
  user: IUserCreationAttributes
) => Promise<IUserAttributes["userId"]> = async user => {
  const { userId } = await UserModel.create(user);
  return userId;
};
