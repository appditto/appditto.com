<template>
  <div>
    <div class="container-xl pt-3 pb-6 lg:pt-6 px-3 md:px-6 md:pb-20">
      <!-- Small Screens -->
      <div class="md:hidden">
        <div class="flex flex-row flex-wrap py-3">
          <div class="flex flex-col w-full">
            <BlogCard
              v-for="(post, index) in posts"
              :key="index"
              :img="post.feature_image"
              :alt="post.title"
              :title="post.title"
              :url="'/blog/' + post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </div>
        </div>
      </div>
      <!-- Medium Screens -->
      <div class="hidden md:block lg:hidden">
        <div class="flex flex-row flex-wrap pt-4 px-5">
          <div class="w-full md:w-1/2">
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 2 === 0)"
              :key="index"
              :img="post.feature_image"
              :alt="post.title"
              :title="post.title"
              :url="'/blog/' + post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </div>
          <div class="w-full md:w-1/2">
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 2 === 1)"
              :key="index"
              :img="post.feature_image"
              :alt="post.title"
              :title="post.title"
              :url="'/blog/' + post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </div>
        </div>
      </div>
      <!-- Large Screens -->
      <div class="hidden lg:block">
        <div class="flex flex-row flex-wrap pt-4 px-5">
          <div class="w-full">
            <BlogCardWide
              :img="posts[0].feature_image"
              :alt="posts[0].title"
              :title="posts[0].title"
              :excerpt="posts[0].excerpt"
              :url="'/blog/' + posts[0].slug"
              :date="posts[0].published_at"
              :readingTime="posts[0].reading_time"
            />
          </div>
        </div>
        <div class="flex flex-row flex-wrap pt-4 px-5">
          <div class="w-1/3">
            <BlogCard
              v-for="(post, index) in posts
                .slice(1)
                .filter((a, i) => i % 3 === 0)"
              :key="index"
              :img="post.feature_image"
              :alt="post.title"
              :title="post.title"
              :url="'/blog/' + post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </div>
          <div class="w-1/3">
            <BlogCard
              v-for="(post, index) in posts
                .slice(1)
                .filter((a, i) => i % 3 === 1)"
              :key="index"
              :img="post.feature_image"
              :alt="post.title"
              :title="post.title"
              :url="'/blog/' + post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </div>
          <div class="w-1/3">
            <BlogCard
              v-for="(post, index) in posts
                .slice(1)
                .filter((a, i) => i % 3 === 2)"
              :key="index"
              :img="post.feature_image"
              :alt="post.title"
              :title="post.title"
              :url="'/blog/' + post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPosts } from '~/api/posts'
import axios from 'axios'

export default {
  layout: 'blog',
  components: {
    BlogCard: () => import('~/components/BlogCard.vue'),
    BlogCardWide: () => import('~/components/BlogCardWide.vue')
  },
  async asyncData() {
    const getPosts = async () => {
      try {
        return await axios.get('https://appditto.com/api/ghost/posts-no-html')
      } catch (error) {
        console.error(error)
      }
    }
    const posts = (await getPosts()).data
    return { posts: posts }
  },
  data() {
    return {
      blogPageDescription:
        "We're building beautiful apps for businesses in record time and writing stories all about apps.",
      blogPageTitle: 'Appditto | Blog',
      blogPagePreview: 'https://appditto.com/images/blog-preview.png',
      blogPageThemeColor: '#515EFF'
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: this.blogPageTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.blogPageDescription
        },
        // Google / Search Engine Tags
        {
          itemprop: 'name',
          content: this.blogPageTitle
        },
        {
          itemprop: 'description',
          content: this.blogPageDescription
        },
        {
          itemprop: 'image',
          content: this.blogPagePreview
        },
        // Facebook Meta Tags
        {
          property: 'og:url',
          content: 'https://appditto.com/blog'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: this.blogPageTitle
        },
        {
          property: 'og:description',
          content: this.blogPageDescription
        },
        {
          property: 'og:image',
          content: this.blogPagePreview
        },
        // Twitter Meta Tags
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.blogPageTitle
        },
        {
          name: 'twitter:description',
          content: this.blogPageDescription
        },
        {
          name: 'twitter:image',
          content: this.blogPagePreview
        },
        // Theme
        {
          name: 'theme-color',
          content: this.blogPageThemeColor
        },
        // Windows 8 IE 10
        {
          name: 'msapplication-TileColor',
          content: this.blogPageThemeColor
        },
        {
          name: 'msapplication-TileImage',
          content: '/favicons/favicon-144.png'
        },
        // Windows 8.1 + IE11 and above
        {
          name: 'msapplication-config',
          content: '/favicons/browserconfig.xml'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: this.blogPageThemeColor
        }
      ],
      link: [
        // Canonical
        {
          rel: 'canonical',
          href: 'https://appditto.com/blog'
        },
        // Generic Icons
        { rel: 'icon', sizes: '32x32', href: '/favicons/favicon-32.png' },
        { rel: 'icon', sizes: '57x57', href: '/favicons/favicon-57.png' },
        { rel: 'icon', sizes: '76x76', href: '/favicons/favicon-76.png' },
        { rel: 'icon', sizes: '96x94', href: '/favicons/favicon-96.png' },
        { rel: 'icon', sizes: '128x128', href: '/favicons/favicon-128.png' },
        { rel: 'icon', sizes: '192x192', href: '/favicons/favicon-192.png' },
        { rel: 'icon', sizes: '228x228', href: '/favicons/favicon-228.png' },
        // Android
        {
          rel: 'shortcut icon',
          sizes: '196x196',
          href: '/favicons/favicon-196.png'
        },
        // iOS
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/favicons/favicon-120.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/favicons/favicon-152.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '167x167',
          href: '/favicons/favicon-167.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/favicon-180.png'
        }
      ]
    }
  }
}
</script>