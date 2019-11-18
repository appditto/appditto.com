<template>
  <section class="py-5" id="blog">
    <b-row align-h="center">
      <b-col cols="12"><h2 class="w800 text-center">Read Our Blog</h2></b-col>
      <BlogCard
        :title="blogPostOneTitle"
        alt="Flutter Automation"
        :thumbnail="blogPostOneThumbnail"
        :link="blogPostOneLink"
      />
      <BlogCard
        :title="blogPostTwoTitle"
        alt="Natrium Audit"
        :thumbnail="blogPostTwoThumbnail"
        :link="blogPostTwoLink"
      />
      <BlogCard
        :title="blogPostThreeTitle"
        alt="Blaise Release"
        :thumbnail="blogPostThreeThumbnail"
        :link="blogPostThreeLink"
      />
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
import BlogCard from '~/components/BlogCard.vue'
import Axios from 'axios'
export default Vue.extend({
  name: 'BlogSection',
  components: {
    BlogCard
  },
  data() {
    return {
      blogPostOneTitle: '',
      blogPostTwoTitle: '',
      blogPostThreeTitle: '',
      blogPostOneThumbnail: '',
      blogPostTwoThumbnail: '',
      blogPostThreeThumbnail: '',
      blogPostOneLink: '',
      blogPostTwoLink: '',
      blogPostThreeLink: ''
    }
  },
  mounted: function() {
    Axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@appditto'
    )
      .then(response => {
        const items = response.data.items
        this.blogPostOneTitle = items[0].title.replace(/amp;/g, ' ')
        this.blogPostTwoTitle = items[1].title.replace(/amp;/g, ' ')
        this.blogPostThreeTitle = items[2].title.replace(/amp;/g, ' ')
        this.blogPostOneThumbnail = items[0].thumbnail
        this.blogPostTwoThumbnail = items[1].thumbnail
        this.blogPostThreeThumbnail = items[2].thumbnail
        this.blogPostOneLink = items[0].guid
        this.blogPostTwoLink = items[1].guid
        this.blogPostThreeLink = items[2].guid
      })
      .catch(err => console.log(err))
  }
})
</script>