import { Module } from 'magnet-core/module'

export default class MagnetHttpsStart extends Module {
  init () {
    this.moduleName = 'https'
    this.defaultConfig = __dirname
  }

  async setup () {
    const log = this.log
    this.insert(this.app.https.listen(this.config.port, function () {
      log.info('Https listening at port', this.address().port)
    }), 'httpsServer')
  }
}
