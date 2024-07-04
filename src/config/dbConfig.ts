import { Sequelize } from "sequelize";

// const pool = createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
console.log("测试数据库", process.env.DB_NAME);
console.log("测试数据库", process.env.DB_USER);
console.log("测试数据库", process.env.DB_PASSWORD);
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
