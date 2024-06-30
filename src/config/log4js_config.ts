import type { Configuration } from "log4js";
import path from "path";

const logDir = path.resolve(__dirname, "../log");

const config: Configuration = {
  appenders: {
    console: { type: "stdout" }, // 控制台输出所有日志
    responseFile: {
      type: "dateFile",
      filename: path.join(logDir, "response/response"),
      pattern: ".yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    },
    errorFile: {
      type: "dateFile",
      filename: path.join(logDir, "error/error"),
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: {
      appenders: ["console"],
      level: "debug", // 确保所有级别的日志都输出到控制台
    },
    responseFile: {
      appenders: ["responseFile"],
      level: "info", // 确保所有级别的日志都输出到控制台
    },
    errorFile: {
      appenders: ["errorFile"],
      level: "error", // 确保所有级别的日志都输出到控制台
    },
  },
};

export default config;
