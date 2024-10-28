import Yar from '@hapi/yar'
import config from '../config.js'

const plugin = {
  plugin: Yar,
  options: {
    storeBlank: false,
    cookieOptions: {
      password: config.get('sessionPassword'),
      isSecure: !config.get('isDev')
    }
  }
}

export default plugin