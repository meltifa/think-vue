const isProd = process.env.NODE_ENV === 'production';
const outputDir = isProd ? '../server/www' : 'dist';
const indexFileName = isProd ? '../view/index_index.html' : 'index.html';
const detailFileName = isProd ? '../view/detail_index.html' : 'detail';

module.exports = {
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: indexFileName,
      title: 'DEMO'
    },
    detail: {
      entry: 'src/detail/main.js',
      template: 'public/index.html',
      filename: detailFileName,
      title: 'DEMO'
    }
  },
  outputDir,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8360/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};