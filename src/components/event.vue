<template>
  <div class="news">
    <!-- content -->
    <div class="content" :class="{'jacontent':lan !='zh-cn'}">
      <h2 class="page-title"><b>{{text.newsTitle}} </b><br><small>Event</small></h2>
      <router-view/>
    </div>
  </div>
</template>
<style type="text/css" scoped>
  .jacontent {
    min-height: calc(100vh - 10rem);
    overflow: hidden;
  }
  @media screen and (max-width:900px) {
    .jacontent {
      min-height: calc(100vh - 101px);
    }
  }
</style>
<script>
import scrollReveal from  'scrollreveal'
export default {
  name: 'news',
  data () {
    return {
      scrollReveal:scrollReveal(),
      text: {
        newsTitle: 'イベント現場',
      }
    }
  },
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          newsTitle: '活动现场',

        }
      }else {
        this.text = {
          newsTitle: 'イベント現場',

        }
      }
    },
    routeChange() {
      this.lan = this.$route.query.lan;
      this.changeInfo();
    }
  },
  watch: {
    '$route': 'routeChange'
  },
  created: function() {
    let self = this;
    self.lan = self.$route.query.lan;
    self.changeInfo();
  },
}
</script>
