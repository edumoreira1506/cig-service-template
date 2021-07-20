import { Request, Response } from 'express'

import i18n from '@Configs/i18n'

class UserController {
  constructor() {
    this.store = this.store.bind(this)
  }

  async store(_: Request, res: Response): Promise<Response> {
    return res.send({ message: i18n.__('validated') })
  }
}

export default new UserController()
