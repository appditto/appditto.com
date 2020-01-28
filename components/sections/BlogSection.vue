<template>
  <section class="py-8 md:py-12" id="blog">
    <div class="flex flex-row flex-wrap justify-center">
      <div class="flex flex-col w-full my-2">
        <h2
          class="text-3xl font-extrabold w-full text-center"
        >{{ isPostPage ? 'More Articles' : 'Read Our Blog' }}</h2>
      </div>
      <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <BlogCard
          v-for="(post, index) in posts.slice(0, 1)"
          :key="index"
          :img="post.feature_image"
          :alt="post.title"
          :title="post.title"
          :url="isPostPage ? post.slug : 'blog/' + post.slug"
          :date="post.published_at"
          :readingTime="post.reading_time"
        />
      </div>
      <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <BlogCard
          v-for="(post, index) in posts.slice(1, 2)"
          :key="index"
          :img="post.feature_image"
          :alt="post.title"
          :title="post.title"
          :url="isPostPage ? post.slug : 'blog/' + post.slug"
          :date="post.published_at"
          :readingTime="post.reading_time"
        />
      </div>
      <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <BlogCard
          v-for="(post, index) in posts.slice(2, 3)"
          :key="index"
          :img="post.feature_image"
          :alt="post.title"
          :title="post.title"
          :url="isPostPage ? post.slug : 'blog/' + post.slug"
          :date="post.published_at"
          :readingTime="post.reading_time"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
import BlogCard from '~/components/BlogCard.vue'
export default Vue.extend({
  name: 'BlogSection',
  props: {
    posts: null,
    isPostPage: false
  },
  components: {
    BlogCard
  }
})
</script>