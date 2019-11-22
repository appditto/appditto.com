<template>
  <section class="py-5" id="blog">
    <b-row align-h="center">
      <b-col cols="12"><h2 class="w800 text-center">Read Our Blog</h2></b-col>
      <b-col cols="12" md="4" class="mt-4">
        <a :href="blogPostOneLink" target="_blank">
          <div class="blog-card overflow-hidden bg-light">
            <b-row align-h="center">
              <b-col>
                <h5 class="text-dark w700 m-4">{{ blogPostOneTitle }}</h5>
                <img
                  src="~assets/images/blog-previews/flutter-automation.svg"
                  alt="Flutter Automation"
                  class="w-100"
                />
              </b-col>
            </b-row>
          </div>
        </a>
      </b-col>
      <b-col cols="12" md="4" class="mt-4">
        <a :href="blogPostTwoLink" target="_blank">
          <div class="blog-card overflow-hidden bg-light">
            <b-row align-h="center">
              <b-col>
                <h5 class="text-dark w700 m-4">{{ blogPostTwoTitle }}</h5>
                <img
                  src="~assets/images/blog-previews/natrium-audit.svg"
                  alt="Natrium Audit"
                  class="w-100"
                />
              </b-col>
            </b-row>
          </div>
        </a>
      </b-col>
      <b-col cols="12" md="4" class="mt-4">
        <a :href="blogPostThreeLink" target="_blank">
          <div class="blog-card overflow-hidden bg-light">
            <b-row align-h="center">
              <b-col>
                <h5 class="text-dark w700 m-4">{{ blogPostThreeTitle }}</h5>
                <img
                  src="~assets/images/blog-previews/blaise-release.jpg"
                  alt="Blaise Release"
                  class="w-100"
                />
              </b-col>
            </b-row>
          </div>
        </a>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
export default Vue.extend({
  name: 'BlogSection',
  data() {
    return {
      blogPostOneTitle: '',
      blogPostTwoTitle: '',
      blogPostThreeTitle: '',
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
        this.blogPostOneLink = items[0].guid
        this.blogPostTwoLink = items[1].guid
        this.blogPostThreeLink = items[2].guid
      })
      .catch(err => console.log(err))
  }
})
</script>