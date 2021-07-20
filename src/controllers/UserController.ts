import { Request, Response } from 'express'

class UserController {
  constructor() {
    this.store = this.store.bind(this)
  }

  async store(_: Request, res: Response): Promise<Response> {
    return res.send({ message: 'Validated!' })
  }
}

export default new UserController()
