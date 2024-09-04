import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import defaultThemeConfig from './config/theme/default'

import googleAnalyticsPlugin from './config/plugins/google-analytics'
import blogPlugin from './config/plugins/blog'
import feedPlugin from './config/plugins/feed'
import bttPlugin from './config/plugins/btt'
import copyrightPlugin from './config/plugins/copyright'
import zoomPlugin from './config/plugins/medium-zoom'
import photoSwipePlugin from './config/plugins/photo-swipe'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindcssConfig from './../tailwind.config'


export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(defaultThemeConfig),

  lang: 'en-US',
  title: 'art.sirthxalot.com',
  description: 'Alexander Bösch\'s personal space to reflect art and drawing. Read funny stories or gain from knowledge and experiences. This also includes my artwork, studies and references.',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-XKG3VMSFFF', async: true }],
    ['script', { src: '/js/ga.js'}],
    ['script', { src: '/fontawesome-5/js/fontawesome.min.js', defer: true }],
    ['script', { src: '/fontawesome-5/js/light.min.js', defer: true }],
  ],

  plugins: [
    googleAnalyticsPlugin,
    blogPlugin,
    feedPlugin,
    bttPlugin,
    copyrightPlugin,
    zoomPlugin,
    photoSwipePlugin
  ],

  bundler: viteBundler({
    viteOptions: {
        css: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    tailwindcss(tailwindcssConfig)
                ]
            }
        }
    }
    })
});