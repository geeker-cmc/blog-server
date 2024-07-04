import "module-alias/register";
import path from "path";
import Koa from "koa";
import dotenv from "dotenv";
import bodyparse from "koa-body";
import loggerMiddleware from "@/middleware/log4js";
import logger, { errLogger } from "@/util/logger";

const app = new Koa();

// 根据当前环境加载对应的.env文件
const env = process.env.NODE_EVN || "development";
const envPath = path.resolve(__dirname, `../.env.${env}`);
dotenv.config({ path: envPath });
// 加载通用的.env文件
dotenv.config();

// 路由
import router from "@/router";

// 端口
const PORT = process.env.PORT;

// 日志
app.use(loggerMiddleware);
app.use(bodyparse());

app.use(router.routes()).use(router.allowedMethods());

// 路由

app.listen(PORT, () => {
  logger.info(process.env.DB_USER);
  logger.info("端口", PORT);

  errLogger.error("测试");
  errLogger.error(`Server is running at http://localhost:${PORT}`);
});
