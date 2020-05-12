// process.env.NODE_ENV 为 undefined
module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  useMicroCache: process.env.MICRO_CACHE !== 'false',
  HOST: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 10008
}