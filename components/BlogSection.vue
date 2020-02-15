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
          :img="posts[0].feature_image"
          :alt="posts[0].title"
          :title="posts[0].title"
          :url="isPostPage ? posts[0].slug : 'blog/' + posts[0].slug"
          :date="posts[0].published_at"
          :readingTime="posts[0].reading_time"
        />
      </div>
      <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <BlogCard
          :img="posts[1].feature_image"
          :alt="posts[1].title"
          :title="posts[1].title"
          :url="isPostPage ? posts[1].slug : 'blog/' + posts[1].slug"
          :date="posts[1].published_at"
          :readingTime="posts[1].reading_time"
        />
      </div>
      <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <BlogCard
          :img="posts[2].feature_image"
          :alt="posts[2].title"
          :title="posts[2].title"
          :url="isPostPage ? posts[2].slug : 'blog/' + posts[2].slug"
          :date="posts[2].published_at"
          :readingTime="posts.reading_time"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
import BlogCard from '~/components/BlogSection/BlogCard.vue'
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