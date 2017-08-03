import { Module } from 'magnet-core/module'
import * as https from 'https'

export default class MagnetHttps extends Module {
  init () {
    this.moduleName = 'https'
    this.defaultConfig = __dirname
  }

  async setup () {
    let requestListener = this.config.requestListener

    for (const wrapper of this.config.wrappers) {
      requestListener = wrapper(requestListener)
    }

    this.insert(https.createServer(this.config.httpsOptions, requestListener))
  }
}
