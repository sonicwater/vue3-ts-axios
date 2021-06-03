const path = require("path");
module.exports = {
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置

      // externals: {
      //   'vue': 'Vue',
      //   'element-ui': 'ELEMENT',
      //   'vue-router': 'VueRouter',
      //   'vuex': 'Vuex'
      // } // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(用于csdn引入)
      resolve: {
        extensions: [".ts",".js", ".vue", ".json"], //文件优先解析后缀名顺序
        alias: {
          "@": path.resolve(__dirname, "./src"),
          // "@c": path.resolve(__dirname, "./src/components"),
          // "@v": path.resolve(__dirname, "./src/views"),
          // "@u": path.resolve(__dirname, "./src/utils"),
          // "@s": path.resolve(__dirname, "./src/service")
        }, // 别名配置
        plugins: []
      }
    });
  }
}