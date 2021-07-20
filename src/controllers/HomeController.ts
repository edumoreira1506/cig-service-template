import { Request, Response } from 'express'

import i18n from '@Configs/i18n'

class HomeController {
  constructor() {
    this.index = this.index.bind(this)
  }

  async index(_: Request, res: Response): Promise<Response> {
    return res.send({ message: i18n.__('online-api') })
  }
}

export default new HomeController()
