## 运行方法

1. `cd client` - 进入前端目录
2. `npm i` - 安装依赖
3. `npm run build` - 编译前端代码到服务端
4. `cd ../server` - 进入服务端目录
5. `npm i` - 安装依赖
6. `npm start` - 启动后端服务

开发时需要先启动后端服务，然后在前端目录执行 `npm run serve`

前端运行命令文档见
(https://cli.vuejs.org/zh/guide/cli-service.html#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4)

后端运行命令文档见
(https://github.com/thinkjs/think-cli#commands)

## 项目介绍

关于 Vue 如何和 thinkjs 结合的文章网上已经有好几篇了，包括 think-cli 官方也提供了一套 Vue 模板，基本可以做到开箱即用，缺点是 webpack 配置和依赖暴露在外难以升级和维护。比如官方 Vue 模板还是用 webpack3，如果我想升级 webpack 版本，修改某些不兼容的配置选项就很头疼，而 Vue CLI 就不存在上面的问题，它把复杂的 webpack 配置隐藏，而且文档友好，只需要修改几个配置就可以完美与 thinkjs 结合成一个不错的前后端分离项目，还支持多页，功能非常强大。

本项目就是通过简单修改 Vue CLI 的配置来实现比 thinkjs 官方 Vue 模板更易用的前后端分离，理解本文需要对 Vue 和 thinkjs 有过一定的实践经验。项目源码为页面和接口的简单示例，供参考。

首先按照官网的文档安装 CLI 工具

[Vue CLI](https://cli.vuejs.org/zh/guide/installation.html)

[thinkjs](https://thinkjs.org/zh-cn/doc/3.0/create_project.html)

先新建一个目录demo，cd到该目录，输入如下命令：

```
thinkjs new server
```
按照提示建立一个新的thinkjs项目
然后输入

```
vue create client
```
为了方便，我直接选了默认配置，安装完目录结构是这样的

![image](https://user-gold-cdn.xitu.io/2018/11/22/1673975b64f43ea0?w=245&h=571&f=png&s=39937)

我们知道，thinkjs 的页面保存在 view 目录下，静态文件保存在 www/static 目录下，所以理论上只需要把 Vue CLI 编译后的 html 文件输出到 view 目录，静态文件输出到 www/static 目录下就好了。

另外，由于我们的 dev server 和 thinkjs 接口服务跑在不同端口上，为了解决跨域问题还需要配置下 devServer.proxy 这个选项。

假设我们的项目里有 list 和 detail 两个页面，那么最终配置是这样的


```
const isProd = process.env.NODE_ENV === 'production';
const outputDir = isProd ? '../server/www' : 'dist';
const listFileName = isProd ? '../view/list_index.html' : 'list';
const detailFileName = isProd ? '../view/detail_index.html' : 'detail';

module.exports = {
  pages: {
    list: {
      entry: 'src/list/main.js',
      template: 'public/index.html',
      filename: listFileName,
      title: '列表页'
    },
    detail: {
      entry: 'src/detail/main.js',
      template: 'public/index.html',
      filename: detailFileName,
      title: '详情页'
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
}
```

这里利用到了 process.env.NODE_ENV 来判断当前编译环境，只有 build 发布时才把目录指向 thinkjs 目录，因为如果直接设置到 thinkjs 目录页面会无法显示。