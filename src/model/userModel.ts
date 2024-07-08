import sequelize, {
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import db from "@/config/dbConfig";

// 定义数据接口
export interface IUserAttributes {
  userId: number;
  phoneNumber: string;
  password: string;
}

export type IUserCreationAttributes = Pick<
  IUserAttributes,
  "phoneNumber" | "password"
>;

// 定义入库的类型，定义出来没有的属性
export interface IUserModel
  extends Model<
    InferAttributes<IUserModel>,
    InferCreationAttributes<IUserModel, { omit: "userId" | "createdAt" }>
  > {
  userId: number;
  phoneNumber: string;
  password: string;
  createdAt: Date;
}
const User = db.define<IUserModel>(
  "user",
  {
    userId: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    phoneNumber: {
      type: sequelize.STRING,
      defaultValue: false,
    },
    password: {
      type: sequelize.STRING,
      defaultValue: false,
    },
    createdAt: sequelize.DATE,
  },
  { tableName: "users" }
);

export default User;
