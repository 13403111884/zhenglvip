const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const chalk = require('chalk')
const LRU = require('lru-cache')
const send = require('koa-send')
const Router = require('koa-router')
const setupDevServer = require('../build/setup-dev-server')
const { createBundleRenderer } = require('vue-server-renderer')
const publicIp = require('public-ip')
const internalIp = require('internal-ip')
const requestIp = require('request-ip')

// 缓存
const microCache = LRU({
  max: 100,
  maxAge: 1000 * 60 // 重要提示：条目在 1 秒后过期。
})

const isCacheable = ctx => {
  // 实现逻辑为，检查请求是否是用户特定(user-specific)。
  // 只有非用户特定(non-user-specific)页面才会缓存
  if (ctx.url === '/b') {
    return true
  }
  return false
}

//  第 1 步：创建koa、koa-router 实例
const app = new Koa()
const router = new Router()

let renderer
const templatePath = path.resolve(__dirname, './index.template.html')

// 第 2步：根据环境变量生成不同BundleRenderer实例
if (process.env.NODE_ENV === 'production') {
  // 获取客户端、服务器端打包生成的json文件
  const serverBundle = require('../dist/vue-ssr-server-bundle.json')
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  // 赋值
  renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: fs.readFileSync(templatePath, 'utf-8'),
    clientManifest
  })
  // 静态资源
  router.get('/static/*', async (ctx, next) => {
    await send(ctx, ctx.path, { root: `${__dirname}/../dist` })
  })
} else {
  // 开发环境
  setupDevServer(app, templatePath, (bundle, options) => {
    const option = Object.assign({
      runInNewContext: false
    }, options)
    renderer = createBundleRenderer(bundle, option)
  }
  )
}

const render = async (ctx, next) => {
  ctx.set('Content-Type', 'text/html')

  const handleError = err => {
    if (err.code === 404) {
      ctx.status = 404
      ctx.body = '404 Page Not Found'
    } else {
      ctx.status = 500
      ctx.body = '500 Internal Server Error'
    }
  }

  const context = {
    url: ctx.url
  }

  // 判断是否可缓存，可缓存并且缓存中有则直接返回
  const cacheable = isCacheable(ctx)
  if (cacheable) {
    const hit = microCache.get(ctx.url)
    if (hit) {
      // eslint-disable-next-line no-return-assign
      return ctx.body = hit
    }
  }

  try {
    const html = await renderer.renderToString(context)
    ctx.body = html
    if (cacheable) {
      microCache.set(ctx.url, html)
    }
  } catch (error) {
    handleError(error)
  }

}

router.get('*', render)

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(requestIp.mw())
  .use(function (req, res) {
    const ip = req.clientIp
    res.end(ip)
  })

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'
app.listen(port, host, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(chalk.blue(`本地地址: http://localhost:${port}`))
    console.log(chalk.blue(`内网地址: http://${internalIp.v4.sync()}:${port}`))
    publicIp.v4().then((ip) => {
      console.log(chalk.blue(`公网地址: http://${ip}:${port}`))
    })
  }
})
