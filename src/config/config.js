/**
 * 根据不同环境读取不同的配置文件，没有使用的配置就不会打包进 dist
 * 环境变量由发版脚本设置
 */
let envConfig = require(`./config-${process.env.NODE_ENV}.js`).default;

let config = {
  test1: 'test',
  ...envConfig
};

export default config;