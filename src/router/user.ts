import Router from "koa-router";
import { getUser } from "@/controller/user";

const router = new Router();

router.get("/user/:id", getUser);

export default router;
