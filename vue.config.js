const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: '/web-fonts/',
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
            publicPath: 'https://miraprobemv.github.io/web-fonts/',
          }
        },
      ],
    },
  },
})
