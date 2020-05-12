const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const app = express()

const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

// 服务端渲染相关配置
function createRenderer (bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    // 组件级别的缓存（不起作用？）
    cache: LRU({
      max: 1000 * 60 * 15,
      maxAge: 1000 * 60 * 15
    }),
    // 把路径解析为绝对路径
    basedir: resolve('../dist'),
    // runInNewContext: true(默认)  对于每次渲染，bundle renderer 将创建一个新的 V8 上下文并重新执行整个 bundle
    // 优点：无需担心状态单例问题；缺点：性能开销大
    runInNewContext: false
  }))
}

let renderer
let readyPromise
const templatePath = resolve('../src/index.template.html')
if (isProd) {
  // 读取html模板
  const template = fs.readFileSync(templatePath, 'utf-8')
  // bundle 为服务端渲染入口
  const bundle = require('../dist/vue-ssr-server-bundle.json')
  // clientManifest 为客户端渲染入口
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })
} else {
  // 开发环境：使用 setup-dev-server.js  并且有监听和热重载功能
  readyPromise = require('../build/setup-dev-server.js')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

// 头部设置，以及页面返回逻辑处理：正常、404、500等
function render (req, res) {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }
  // 模板插值显示数据，显示在 index.template.html 模板中
  const context = {
    title: 'Movie',
    url: req.url
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.send(html)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

module.exports = {
  app,
  renderer,
  readyPromise,
  templatePath,
  render
}