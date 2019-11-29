<template>
  <section class="pt-5 pb-4 px-2 px-md-5" id="blog">
    <b-row align-h="center">
      <b-col cols="12"><h2 class="w800 text-center">Read Our Blog</h2></b-col>
      <b-col cols="12" md="6" lg="4"
        ><BlogCard
          v-for="(post, index) in posts.slice(0, 1)"
          :key="index"
          :img="
            post.feature_image.split('images')[0] +
              'images/size/w600' +
              post.feature_image.split('images')[1]
          "
          :alt="post.title"
          :title="post.title"
          :url="post.slug"
          :date="post.published_at"
          :readingTime="post.reading_time"
      /></b-col>
      <b-col cols="12" md="6" lg="4"
        ><BlogCard
          v-for="(post, index) in posts.slice(1, 2)"
          :key="index"
          :img="
            post.feature_image.split('images')[0] +
              'images/size/w600' +
              post.feature_image.split('images')[1]
          "
          :alt="post.title"
          :title="post.title"
          :url="post.slug"
          :date="post.published_at"
          :readingTime="post.reading_time"
      /></b-col>
      <b-col cols="12" md="6" lg="4"
        ><BlogCard
          v-for="(post, index) in posts.slice(2, 3)"
          :key="index"
          :img="
            post.feature_image.split('images')[0] +
              'images/size/w600' +
              post.feature_image.split('images')[1]
          "
          :alt="post.title"
          :title="post.title"
          :url="post.slug"
          :date="post.published_at"
          :readingTime="post.reading_time"
      /></b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
import BlogCard from '~/components/BlogCard.vue'
export default Vue.extend({
  name: 'BlogSection',
  props: {
    posts: null
  },
  components: {
    BlogCard
  }
})
</script>