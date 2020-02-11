// process.env.NODE_ENV 为 undefined
module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  useMicroCache: process.env.MICRO_CACHE !== 'false',
  port: process.env.PORT || 80
}