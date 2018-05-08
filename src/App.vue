<template>
  <div id="app">
    <!-- 顶栏 -->
    <header class="header animated fadeIn">
      <!-- 导航栏 -->
      <div class="tabs width1200">
        <nav class="left">
          <router-link :to="'/index?lan='+lan" class="tabs-groupy-icon"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/icon_groupy_128.png" alt=""></router-link>
          <a href="http://activity.groupy.vip/GroupyIdolFestival201805/index.html" target="_black" class="tabs-li tabs-li-idolFestival">
            <p class="tab-title">{{text.idolFestival}}</p>
            <p class="tab-desc">Latest</p>
          </a >
          <router-link :to="'/idolGroup?lan='+lan" class="tabs-li tabs-li-idolGroup">
            <p class="tab-title">{{text.idolGroup}}</p>
            <p class="tab-desc">Idol Group</p>
          </router-link >
          <router-link :to="'/event?lan='+lan" class="tabs-li tabs-li-event">
            <p class="tab-title">{{text.event}}</p>
            <p class="tab-desc">Event</p>
          </router-link >
          <router-link :to="'/news?lan='+lan" class="tabs-li tabs-li-news">
            <p class="tab-title">{{text.news}}</p>
            <p class="tab-desc">NEWS</p>
          </router-link >
          <router-link :to="'/aboutUs?lan='+lan" class="tabs-li cursor">
            <p class="tab-title">{{text.aboutUs}}</p>
            <p class="tab-desc">About Us</p>
          </router-link >
          <span class="activeBorder"></span>
        </nav>
        <div class="right">
          <router-link v-if="lan == 'zh-cn'" :to="'/joinUs?lan='+lan" class="changeLan cursor">{{text.joinUs}}</router-link>
          <button class="changeLan cursor" @click="changeLan()">{{text.lan}}</button>
          <a id="nav_bar" @click="showNav()" class="cursor"><span></span></a>
        </div>
      </div>
    </header>
    <div class="navWindow" :class="[{'navWindowShow':navWindowShow},{'box':navWindowShow}]">
      <nav class="navs">
         <a href="http://activity.groupy.vip/GroupyIdolFestival201805/index.html" @click="toPath()" target="_black" class="tabs-li tabs-li-idolFestival router-link-active">
          <p class="tab-title">{{text.idolFestival}}</p>
          <p class="tab-desc">Latest</p>
        </a >
        <button @click="toPath('idolGroup')" class="tabs-li navs-pink tabs-li-idolGroup router-link-active">
          <p class="tab-title">{{text.idolGroup}}</p>
          <p class="tab-desc">Idol Group</p>
        </button >
        <button @click="toPath('event')" class="tabs-li navs-blue tabs-li-event router-link-active">
          <p class="tab-title">{{text.event}}</p>
          <p class="tab-desc">Event</p>
        </button >
        <button @click="toPath('news')" class="tabs-li navs-green tabs-li-news router-link-active">
          <p class="tab-title">{{text.news}}</p>
          <p class="tab-desc">NEWS</p>
        </button >
        <button @click="toPath('/aboutUs')" class="tabs-li navs-yellow cursor router-link-active">
          <p class="tab-title">{{text.aboutUs}}</p>
          <p class="tab-desc">About Us</p>
        </button>
        <div class="tabs-li navs-none">
          <button v-if="lan == 'zh-cn'" @click="toPath('/joinUs')" class="changeLan cursor router-link-active">{{text.joinUs}}</button>
          <button class="changeLan cursor" @click="changeLan()">{{text.lan}}</button>
        </div>
      </nav>
    </div>
    <router-view/>
    <!-- QR -->
    <div class="qr width1200 animated fadeIn">
      <h5 class="groupy-h5" v-if="lan == 'zh-cn'">{{text.qrTitle}}</h5>
      <ul class="qr-list width1200" v-if="lan == 'zh-cn'">
        <li>
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_wechat.png">
          <p class="qr-desc"><span>{{text.weixinTitle}}</span><em>{{text.weixinDesc}}</em></p>
        </li>
        <li>
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_qq.png">
          <p class="qr-desc"><span>{{text.qqTitle}}</span><em>{{text.qqDesc}}</em></p>
        </li>
        <li>
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_sia.png">
          <p class="qr-desc"><span>{{text.weiboTitle}}</span><a href="https://weibo.com/Groupy" target="_black">{{text.weiboDesc}}</a></p>
        </li>
      </ul>
      <p class="protocol"><router-link :to="'/rule?lan='+lan">{{text.protocol}}</router-link><router-link :to="'/privacy_policy?lan='+lan">{{text.privacyPolicy}}</router-link></p>
      <p class="company" v-if="lan == 'zh-cn'">{{text.copyright}}</p>
    </div>
    <!-- footer -->
    <footer v-if="lan == 'zh-cn'" class="footer animated fadeIn">{{text.case}}</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lan: '',
      navWindowShow: false,
      text: {
        idolFestival: '最新活动',
        idolGroup: '入驻爱豆',
        event: '活动现场',
        news: '大事记',
        aboutUs: '关于我们',
        joinUs: '加入我们',
        lan: '日本語',
        qrTitle: '关注Groupy，获取更多资讯',
        weixinTitle: '微信公众号',
        weixinDesc: 'Groupy三次元日系爱豆短视频',
        qqTitle: 'QQ群',
        qqDesc: 'Groupy福利不断粉丝群',
        weiboTitle: '微博',
        weiboDesc: '@GGroupy',
        protocol: '使用协议',
        privacyPolicy: '隐私政策',
        copyright: 'Copyright 2018 广州市云动网络有限公司 All rights reserved. ',
        case: '粤公网安备 44010602002595号粤ICP备17068981号'
      }
    }
  },
  methods: {
    changeLan() {
      if(this.lan == 'zh-cn') {
        let id = this.$route.query.id;
        let nationality = this.$route.query.nationality;
        this.lan = '';
        this.$router.push({query:{id: id,nationality: nationality,lan: 'ja-jp'}})
      }else {
        let id = this.$route.query.id;
        let nationality = this.$route.query.nationality;
        this.lan = 'zh-cn';
        this.$router.push({query:{id: id,nationality: nationality,lan: 'zh-cn'}})
      }
      this.changeInfo();
      this.navWindowShow = false;
      $('html, body').removeClass('overflow');
    },
    toPath(path) {
      this.navWindowShow = false;
      $('html, body').removeClass('overflow');
      this.$router.push({ path: path,query:{lan:this.lan}})
    },
    showNav() {
      if($('html').hasClass('overflow')) {
        this.navWindowShow = false;
        $('html, body').removeClass('overflow');
      }else {
        this.navWindowShow = true;
        $('html, body').addClass('overflow');
      }
    },
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          idolFestival: '最新活动',
          idolGroup: '入驻爱豆',
          event: '活动现场',
          news: '大事记',
          aboutUs: '关于我们',
          joinUs: '加入我们',
          lan: '日本語',
          qrTitle: '关注Groupy，获取更多资讯',
          weixinTitle: '微信公众号',
          weixinDesc: 'Groupy三次元日系爱豆短视频',
          qqTitle: 'QQ群',
          qqDesc: 'Groupy福利不断粉丝群',
          weiboTitle: '微博',
          weiboDesc: '@GGroupy',
          protocol: '使用协议',
          privacyPolicy: '隐私政策',
          copyright: 'Copyright 2018 广州市云动网络有限公司 All rights reserved. ',
          case: '粤公网安备 44010602002595号粤ICP备17068981号'
        }
      }else {
        this.text = {
          idolFestival: '最近イベント',
          idolGroup: '配信アイドル',
          event: 'イベント現場',
          news: 'お知らせ',
          aboutUs: '会社概要',
          joinUs: '採用情報',
          lan: '中文',
          qrTitle: '关注Groupy，获取更多资讯',
          weixinTitle: '微信公众号',
          weixinDesc: 'Groupy三次元日系爱豆短视频',
          qqTitle: 'QQ群',
          qqDesc: 'Groupy福利不断粉丝群',
          weiboTitle: '微博',
          weiboDesc: '@GGroupy',
          protocol: '利用規約',
          privacyPolicy: 'プライバシーポリシー',
          copyright: 'Copyright 2018 广州市云动网络有限公司 All rights reserved. ',
          case: '粤公网安备 44010602002595号粤ICP备17068981号'
        }
      }
    },
  },
  created: function() {
    let ua = navigator.userAgent.toLowerCase();
    let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
    console.log(_lan)
    this.lan = _lan;
    if(this.$route.query.lan) {
      this.lan = this.$route.query.lan;
    }else {
        let id = this.$route.query.id;
        let nationality = this.$route.query.nationality;
        this.$router.push({query:{id: id,nationality: nationality,lan: this.lan}})
    }
    this.changeInfo();
    }
}
</script>

<style lang="scss">
 @import "./styles/common_webview.scss";
</style>
