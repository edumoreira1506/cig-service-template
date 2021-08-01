import request from 'supertest'
import faker from 'faker'

import App from '@Configs/server'

jest.mock('typeorm', () => ({
  createConnection: jest.fn().mockResolvedValue({})
}))

describe('User actions', () => {
  describe('Register', () => {
    it('is a valid user', async () => {
      const response = await request(App).post('/v1/users').send({ email: faker.internet.email(), password: faker.internet.password() })

      expect(response.statusCode).toBe(200)
    })

    it('is a invalid user', async () => {
      const response = await request(App).post('/v1/users')

      expect(response.statusCode).toBe(400)
      expect(response.body).toMatchObject({
        ok: false,
        error: {
          name: 'ValidationError',
          message: 'email é obrigatório. senha é obrigatório'
        }
      })
    })

    it('is a invalid user', async () => {
      const response = await request(App).post('/v1/users').send({ password: faker.internet.password() })

      expect(response.statusCode).toBe(400)
      expect(response.body).toMatchObject({
        ok: false,
        error: {
          name: 'ValidationError',
          message: 'email é obrigatório'
        }
      })
    })

    it('is a invalid user', async () => {
      const response = await request(App).post('/v1/users').send({ email: faker.internet.email() })

      expect(response.statusCode).toBe(400)
      expect(response.body).toMatchObject({
        ok: false,
        error: {
          name: 'ValidationError',
          message: 'senha é obrigatório'
        }
      })
    })

    it('is a invalid user', async () => {
      const response = await request(App).post('/v1/users').send({ email: faker.name.firstName(), password: faker.internet.password() })

      expect(response.statusCode).toBe(400)
      expect(response.body).toMatchObject({
        ok: false,
        error: {
          name: 'ValidationError',
          message: 'email precisa ser um e-mail'
        }
      })
    })
  })
})
