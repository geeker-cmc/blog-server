import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/dbConfig";

export class User extends Model {
  public id!: number;
  public phonenumber!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "user",
    tableName: "users",
  }
);

export default User;
