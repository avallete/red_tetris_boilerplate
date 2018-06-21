const servconfig = require('./src/server/config/config')
const clientconfig = require('./src/client/config/config')

const params = {
  development: {
    server: {
      host: servconfig.host,
      port: servconfig.port,
      url: `http${servconfig.sslEnabled && 's' || ''}://${servconfig.host}:${servconfig.port}`,
    },
    client: {
      host: clientconfig.host,
      port: clientconfig.port,
    },
  },
  test: {
    server: {
      host: servconfig.host,
      port: servconfig.port,
      url: `http${servconfig.sslEnabled && 's' || ''}://${servconfig.host}:${servconfig.port}`,
    },
    client: {
      host: clientconfig.host,
      port: clientconfig.port,
    },
  },
  production: {
    server: {
      host: servconfig.host,
      port: servconfig.port,
      url: `http${servconfig.sslEnabled && 's' || ''}://${servconfig.host}:${servconfig.port}`,
    },
    client: {
      host: clientconfig.host,
      port: clientconfig.port,
    },
  },
}

module.exports = params[servconfig.env]
