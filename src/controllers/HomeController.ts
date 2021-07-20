import { Request, Response } from 'express'

class HomeController {
  constructor() {
    this.index = this.index.bind(this)
  }

  async index(_: Request, res: Response): Promise<Response> {
    return res.send({ message: 'Online api!' })
  }
}

export default new HomeController()
