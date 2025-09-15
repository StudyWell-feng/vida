// https://nuxt.com/docs/api/configuration/nuxt-config
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin'
import { currentLocales } from './config/i18n'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  nitro: {
    preset: 'static', // 确保使用静态站点生成模式
  },
  devtools: { enabled: false },
  site:{
    name:'partypop.club',
    url: "https://www.partypop.club",
    title: "partypop Games for Senior",
  },
  runtimeConfig:{
    public:{
      CDN_BASE_URL:''
    }
  },
  //模块导入
  modules: [
    '@nuxtjs/style-resources',
    '@element-plus/nuxt',
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxt/image'
  ],
  gtag: {
    id: 'G-0Y4WZR6X2D', // 替换为你的Google Analytics跟踪ID
  },
  styleResources: {
    less: ['@/assets/styles/global.less'],
  },
  css:[
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
    '@/assets/styles/css/style.css?t=3',
  ],
  robots: {
    groups: [
      {
        userAgent: ['AdsBot-Google-Mobile', 'AdsBot-Google-Mobile-Apps'],
        disallow: ['/policy','/terms'],
        allow: [],
        comments: 'Allow Google AdsBot to all pages'
      },
    ],
    blockNonSeoBots: true,//阻止非SEO机器人爬取
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/styles/global.less";',
        }
      },
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'tpx', // 要转化的单位-tpx
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['el-'], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
            landscape: false // 是否处理横屏情况
          })
        ]
      }
    }
  },
  build:{
    publicPath:'/_nuxt/', // CDN 上的公共路径
    transpile:[
      'element-plus',
    ],
    extractCSS: true,
    optimizeImages: true
  },
  generate: {
    routes: ['/', '/policy', '/terms',],
  },
  app:{
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head:{
      link: [
        { defer: true, rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous"},
        { async: true, rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.2/dist/css/splide.min.css" },
      ],
      script:[
        { async: true, src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js', ntegrity:"sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF", crossorigin:"anonymous"},
        { async: true, src: 'https://code.jquery.com/jquery-3.3.1.min.js'},
      ],
      bodyAttrs:{style:'margin: 0; padding: 0; width: 100vw; overflow-x: hidden;'},
      title:'partypop',
      titleTemplate: '%s', // 不附加任何后缀
      meta:[
        {
          name:"description",
          content:"partypop Studio creates mobile games designed for seniors, offering experiences that bring relaxation, enjoyment, and fun."
        },
        {
          name: 'keywords',
          content: "partypop, Senior website, casual gaming site, stimulate intelligence, mental challenges, life, viva la partypop, elderly care, lifestyle"
        },
        {
          name: 'google-site-verification',
          content: 'jQXXeKuE6Yo40335nmxkzjjV-bw6skTkKHWapoVLjLw'
        },
      ]
    }
  }
})
