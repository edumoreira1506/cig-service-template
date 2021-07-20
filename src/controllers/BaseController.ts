import { Response } from 'express'
import {  getCustomRepository, ObjectType } from 'typeorm'

import { ApiErrorType } from '@Types/errors'

export default class BaseController<T, I> {
  protected entity: ObjectType<T>;

  get repository(): I {
    const repository = getCustomRepository<I>(this.entity)

    return repository
  }

  constructor(entityParam: ObjectType<T>) {
    this.entity = entityParam
  }

  static successResponse(res: Response, payload: Record<string, unknown>): Response {
    return res.status(200).send({
      ok: true,
      ...payload
    })
  }

  static errorResponse(res: Response, error: ApiErrorType): Response {
    return res.status(400).send({
      ok: false,
      error
    })
  }
}
