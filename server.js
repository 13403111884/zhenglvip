const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const microcache = require('route-cache')
const autoLoadRouter = require('./server/core/init.js')

const { app, readyPromise, render } = require('./config/ssr')
const { isProd, useMicroCache, port } = require('./config/env')

autoLoadRouter(app, path.resolve(__dirname, './server/app/api'))

const serve = (file, cache) => express.static(path.resolve(__dirname, file), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/favicon.png'))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))

// 页面级缓存，因为这个例子，所有用户访问的页面是一致的，所以开启缓存
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
