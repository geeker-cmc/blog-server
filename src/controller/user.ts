import type { Context } from "koa";
import * as userService from "@/service/userService";

export const getUser = async (ctx: Context) => {
  ctx.body = "you are call get user";
};

export const register = async (ctx: Context) => {
  const user = ctx.request.body;
  try {
    const result = await userService.registerUser(user);
    ctx.body = { success: true, data: result };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { success: false };
  }
};
