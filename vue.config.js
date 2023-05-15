const isDev = process.env.NODE_ENV == "devloopment";

module.exports = {
  devServer: {
    port: 8888,
    open: true,
    // 解决Network: unavailable
    // public: "192.168.1.87:8888",
  },
  // eslint校验设置
  lintOnSave: "warning",
};
