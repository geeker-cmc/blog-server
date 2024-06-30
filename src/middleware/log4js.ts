import { resLogger } from "@/util/logger";
import type { Context, Next } from "koa";

const loggerMiddleware = async (ctx: Context, next: Next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  resLogger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
};

export default loggerMiddleware;
