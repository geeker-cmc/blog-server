import Router from "koa-router";

import userRouter from "./user";

const router = new Router();

router.use(userRouter.routes());

export default router;
