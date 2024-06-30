import * as log4js from "log4js";
import config from "@/config/log4js_config";

// 加载配置

log4js.configure(config);

// 创建实例
const logger = log4js.getLogger();

// 导出两种日志
export const resLogger = log4js.getLogger("responseFile");
export const errLogger = log4js.getLogger("errorFile");

export default logger;
