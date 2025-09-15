import en from '../locales/en.json'
import zh from '../locales/zh.json'
import { currentLocales } from './i18n'

export default defineI18nConfig(() => ({
  warnHtmlMessage: false,
  escapeParameterHtml: false, //是否转义翻译文本中的html标签
  legacy: false,
  locale: 'en',
  availableLocales: currentLocales.map(l => l.code),
  fallbackLocale: 'en', // 区配不到的语言就用en
  messages: {
    en,
    zh,
  }
}))