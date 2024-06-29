import path from 'path';
import Koa from 'koa';
import dotenv from 'dotenv';

const app = new Koa();

// 根据当前环境加载对应的.env文件
const env = process.env.NODE_EVN || "development";
const envPath = path.resolve(__dirname, `../.env.${env}`);

dotenv.config({ path: envPath });


app.listen(3000, () => {
  console.log(process.env.DB_USER, env);
  console.log("1111")
  console.log("Server is running on http://localhost:3000");
});
