import Inert from '@hapi/inert'
import Crumb from '@hapi/crumb'
import Blipp from 'blipp'
import errors from './errors.js'
import logging from './logging.js'
import router from './router.js'
import session from './session.js'
import views from './views.js'
import config from '../config.js'

async function registerPlugins (server) {
  const plugins = [
    Inert,
    Crumb,
    errors,
    logging,
    router,
    session,
    views
  ]

  if (config.get('isDev')) {
    plugins.push(Blipp)
  }

  await server.register(plugins)
}

export { registerPlugins }
