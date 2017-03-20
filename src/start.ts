import { Module } from 'magnet-core/module'

export default class MagnetHttpsStart extends Module {
  get moduleName () { return 'https' }
  get defaultConfig () { return __dirname }

  async setup () {
    const log = this.log
    this.insert('httpsServer', this.app.https.listen(this.config.port, function () {
      log.info('Https listening at port', this.address().port)
    }))
  }
}
