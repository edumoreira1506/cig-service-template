import { I18n } from 'i18n'
import path from 'path'

const i18n = new I18n()

i18n.configure({
  locales: ['pt-BR'],
  directory: path.join('src', 'static', 'locales'),
  defaultLocale: 'pt-BR',
})

export default i18n
