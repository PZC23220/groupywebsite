<template>
  <div class="event_index">
    <!-- content -->
    <div class="eventcontent">
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.eventTitle}}</span></p>
      <ul class="event-list">
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgContent"><img :src="text.event1Img"></router-link>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgTitle" v-html="text.event1Title"></router-link><br>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgDesc">{{text.event1Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgContent"><img :src="text.event2Img"></router-link>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgTitle" v-html="text.event2Title"></router-link><br>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgDesc">{{text.event2Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img :src="text.event3Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event3Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event3Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img :src="text.event4Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event4Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event4Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img :src="text.event5Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event5Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event5Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img :src="text.event6Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event6Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event6Time}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../styles/event.scss";
</style>
<script>
import scrollReveal from  'scrollreveal'
export default {
  name: 'event_index',
  data () {
    return {
      scrollReveal:scrollReveal(),
      text: {
        index: 'ホーム',
        eventTitle: 'イベント現場',
        event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
        event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event1Time: '2017/12/30',
        event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
        event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event2Time: '2017/12/30',
        event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
        event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event3Time: '2017/12/30',
        event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
        event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event4Time: '2017/12/31',
        event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
        event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event5Time: '2017/12/31',
        event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
        event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event6Time: '2017/12/31',
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          index: '首页',
          eventTitle: '活动现场',
          event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
          event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event1Time: '2017/12/30',
          event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
          event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event2Time: '2017/12/30',
          event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
          event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event3Time: '2017/12/30',
          event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
          event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event4Time: '2017/12/31',
          event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
          event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event5Time: '2017/12/31',
          event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
          event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event6Time: '2017/12/31',
        }
      }else {
        this.text = {
          index: 'ホーム',
          eventTitle: 'イベント現場',
          event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
          event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event1Time: '2017/12/30',
          event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
          event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event2Time: '2017/12/30',
          event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
          event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event3Time: '2017/12/30',
          event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
          event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event4Time: '2017/12/31',
          event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
          event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event5Time: '2017/12/31',
          event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
          event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event6Time: '2017/12/31',
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
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  computed: {

  },
  created: function() {
    let self = this;
    setTimeout(function() {
      let ele = document.querySelector('.content');
      ele.scrollIntoView();
    },0);
    self.lan = self.$route.query.lan;
    self.changeInfo();
  }
}
</script>
