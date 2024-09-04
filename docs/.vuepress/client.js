import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'
import PhotoGallery from './components/PhotoGalleryComponent.vue'

export default defineClientConfig({
    layouts: {
        Layout,
        NotFound
      },
      enhance({ app }) {
        app.component('PhotoGallery', PhotoGallery)
      },
});