const locales = [
    {
      code: 'en',
      language: 'en-US',
      file: 'en.json',
      name: 'English'
    },
    {
      code: 'zh',
      language: 'zh-CN',
      file: 'zh.json',
      name: '简体中文'
    },
  ]
  
  export const currentLocales = locales
  export const currentLocaleCodes = locales.map(l => l.code)