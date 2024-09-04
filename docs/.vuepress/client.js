import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import PhotoGallery from './components/PhotoGalleryComponent.vue'

export default defineClientConfig({
    layouts: {
        Layout,
      },
      enhance({ app }) {
        app.component('PhotoGallery', PhotoGallery)
      },
});