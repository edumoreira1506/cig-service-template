import Joi from 'joi'

import i18n from '@Configs/i18n'

export const storeUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': i18n.__('invalid-email', { field: 'email' }),
    'string.empty': i18n.__('empty-field', { field: 'email' }),
    'any.required': i18n.__('required-field', { field: 'email' })
  }),
  password: Joi.string().required().messages({
    'string.empty': i18n.__('empty-field', { field: 'senha' }),
    'any.required': i18n.__('required-field', { field: 'senha' })
  }),
}).options({ abortEarly: false })
