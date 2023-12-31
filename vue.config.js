const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(ttf|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: (production) => {
              const relativePath = production.module.resourceResolveData.relativePath.replace('./src/assets/', '');
              return relativePath;
            },
          }
        },
      ],
    },
  },
})
