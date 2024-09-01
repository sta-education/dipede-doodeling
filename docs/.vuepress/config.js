import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'en-US',
  title: 'art.sirthxalot.com',
  description: 'Alexander Bösch\'s personal space to reflect art and drawing. Read funny stories or gain from knowledge and experiences. This also includes my artwork, studies and references.',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }],
    ['script', { src: '/fontawesome-5/js/fontawesome.min.js', defer: true }],
    ['script', { src: '/fontawesome-5/js/light.min.js', defer: true }],
  ],
});