import Router from "koa-router";
import { getUser, register } from "@/controller/user";
import sequelize from "@/config/dbConfig";

const router = new Router();

router.get("/user/:id", getUser);

router.post("/user/register", register);

// 同步模型，确保数据已经创建
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch(error => {
    console.error("Error synchronizing database:", error);
  });

export default router;
