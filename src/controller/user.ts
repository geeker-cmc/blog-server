import type { Context } from "koa";

export const getUser = async (ctx: Context) => {
  ctx.body = "you are call get user";
};
