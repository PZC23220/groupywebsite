<template>
  <div class="event_index">
    <!-- content -->
    <div class="eventcontent">
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.newsTitle}}</span></p>
      <ul class="news-list animated fadeIn">
        <li><router-link :to="'/news_desc?id=5&lan='+lan"><p><time>{{text.news4Time}}</time></p><span>{{text.news4Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
        <li><router-link :to="'/news_desc?id=3&lan='+lan"><p><time>{{text.news1Time}}</time></p><span>{{text.news1Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
        <li><router-link :to="'/news_desc?id=2&lan='+lan"><p><time>{{text.news2Time}}</time></p><span>{{text.news2Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
        <li><router-link :to="'/news_desc?id=1&lan='+lan"><p><time>{{text.news3Time}}</time></p><span>{{text.news3Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'event_index',
  data () {
    return {
      lan: '',
      text: {
        index: 'ホーム',
        newsTitle: 'お知らせ',
        news1Time: '2017/12/30',
        news1Title: 'Groupy New Year Festival～in 広州～開催決定！',
        news2Time: '2017/07/02',
        news2Title: '「Groupy」ホームページリリースのお知らせ',
        news3Time: '2017/06/06',
        news3Title: '新規アプリ「Groupy」開発開始！',
        news4Time: '2018/05/01',
        news4Title: '~萌色倾城偶像祭~ 五一就要燥起来！为小偶像疯狂应援！',
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          index: '首页',
          newsTitle: '大事记',
          news1Time: '2017/12/30',
          news1Title: '~新年偶像祭~ Groupy国内最初live公演 见学真正的打Call',
          news2Time: '2017/07/02',
          news2Title: 'APP正式上线运营 随时随地为少女应援',
          news3Time: '2017/06/06',
          news3Title: '新产品Groupy项目启动公告',
          news4Time: '2018/05/01',
          news4Title: '~萌色倾城偶像祭~ 五一就要燥起来！为小偶像疯狂应援！',
        }
      }else {
        this.text = {
          index: 'ホーム',
          newsTitle: 'お知らせ',
          news1Time: '2017/12/30',
          news1Title: 'Groupy New Year Festival～in 広州～開催決定！',
          news2Time: '2017/07/02',
          news2Title: '「Groupy」ホームページリリースのお知らせ',
          news3Time: '2017/06/06',
          news3Title: '新規アプリ「Groupy」開発開始！',
          news4Time: '2018/05/01',
          news4Title: '~GroupyIdolFestival~ 5月イベント大変盛り上げりました！',
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
    setTimeout(function() {
      let ele = document.querySelector('.content');
      ele.scrollIntoView();
    },0);
    self.lan = self.$route.query.lan;
    self.changeInfo();
  }
}
</script>
