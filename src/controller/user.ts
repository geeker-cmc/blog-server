import type { Context } from "koa";
import * as userService from "@/service/userService";
import { IUserCreationAttributes } from "@/model/userModel";

export const getUser = async (ctx: Context) => {
  ctx.body = "you are call get user";
};

export const register = async (ctx: Context) => {
  const userInfo = ctx.request.body as IUserCreationAttributes;
  try {
    const userId = await userService.registerUser(userInfo);
    ctx.body = { success: true, data: userId };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { success: false };
  }
};
