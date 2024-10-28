import health from '../routes/health.js'
import assets from '../routes/assets.js'
import home from '../routes/home.js'
import apply from '../routes/apply.js'
import confirmation from '../routes/confirmation.js'
import session from '../routes/session.js'

const plugin = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route([].concat(
        health,
        assets,
        home,
        apply,
        confirmation,
        session
      ))
    }
  }
}

export default plugin
