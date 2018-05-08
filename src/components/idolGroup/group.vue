<template>
  <div class="idolGroup_group">
    <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<router-link :to="'/idolGroup?lan='+lan">{{text.index2}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.eventTitle}}</span></p>
    <!-- content -->
    <div class="idol-content">
      <div v-if="idolInfo.title">
        <h3 class="group-title scrollReveal">{{idolInfo.title}}</h3>
        <a target="_black" :href="'https://twitter.com/intent/user?user_id='+idolInfo.idolList[0].snsUidTw" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidTw" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
        <a target="_black" :href="'https://weibo.com/u/'+idolInfo.idolList[0].snsUidWeibo" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidWeibo" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
        <p class="group-title2 scrollReveal width1000">{{idolInfo.introduce}}</p>
        <img v-lazy="idolInfo.img" class="group-img scrollReveal">
        <div class="group-idol scrollReveal" v-if="idolInfo.idolList && idolInfo.idolList.length > 1"><span></span><em>入驻爱豆</em><span></span></div>
        <ul class="group-list" v-if="idolInfo.idolList && idolInfo.idolList.length > 1">
          <li class="list-content scrollReveal" v-for="idol in idolInfo.idolList">
              <p class="group-logo"><span :style="'background-image:url('+ idol.avatar +');'"></span></p>
              <div class="group-desc">
                <p class="group-name">{{idol.nickname}}</p>
                <p class="group-info">{{idol.introduce}}</p>
                <a v-if="idol.snsUidTw" target="_black" :href="'https://twitter.com/intent/user?user_id='+idol.snsUidTw" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
                <!-- <a v-if="idol.sns_uid_fb" target="_black" :href="'https://facebook.com/'+idol.sns_uid_fb" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_facebook.png"></a> -->
                <a v-if="idol.snsUidWeibo" target="_black" :href="'https://weibo.com/u/'+idol.snsUidWeibo" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
              </div>
          </li>
        </ul>
      </div>
      <div class="groupy-default"  v-if="!idolInfo.title && index == 1">
        <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_default_1.png">
        <p>网络错误，请稍后再试</p>
      </div>
      <div class="group-relative scrollReveal">
        <h5>日本爱豆</h5>
        <div class="group-btns group-translateX"><router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" :data-hover="idol.name" v-for="(idol,$index) in idolList1" :key="$index"><span>{{idol.name}}</span></router-link></div>
        <h5>中国爱豆</h5>
        <div class="group-btns group-translateX"><router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" :data-hover="idol.name" v-for="(idol,$index) in idolList2" :key="$index"><span>{{idol.name}}</span></router-link></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"scoped>
  @import "../../styles/idolGroup.scss";
</style>
<script>
var idolsData = require('../../../static/json/user_organization.json')
var japanIdols=[],chinaIdols=[]
for(let i=0;i<idolsData.length;i++) {
  if(idolsData[i].nationality == 'China') {
    chinaIdols.push(idolsData[i])
  }else {
    japanIdols.push(idolsData[i])
  }
}
import http from '@api/js/http.js';
import scrollReveal from  'scrollreveal'
export default {
  name: 'idolGroup_group',
  data () {
    return {
      idolList1:[],
      idolList2:[],
      index: 0,
      lan: '',
      id: '',
      text: {
        index: 'ホーム',
        index2: '配信アイドル',
        eventTitle: '基本情報',
      },
      idol: {},
      idolInfo: {
        title: '',
        introduce: '',
        img: '',
        idolList: []
      },
      scrollReveal:scrollReveal(),
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        console.log(this.lan)
        this.text = {
          index: '首页',
          index2: '入驻爱豆',
          eventTitle: '详情',
        }
        this.idolInfo = {
          title: this.idol.nameChinese,
          introduce: this.idol.introduceChinese,
          img: this.idol.logo,
          idolList: this.idol.idol
        }
      }else {
        this.text = {
          index: 'ホーム',
          index2: '配信アイドル',
          eventTitle: '基本情報',
        }
        this.idolInfo = {
          title: this.idol.name,
          introduce: this.idol.introduce,
          img: this.idol.logo,
          idolList: this.idol.idol
        }
      }
    },
    getGroupInfo(id) {
      let self = this;
      http.get('http://api.groupy.vip/group/lists?id='+ self.$route.query.id).then(function(res){
        if(res.data.length>0){
          setTimeout(function() {
            let ele = document.querySelector('.content');
            ele.scrollIntoView();
          },0);
          self.index = 1;
          let idol = res.data[0];
          self.idol = idol;
          if(self.lan === 'zh-cn') {
            self.idolInfo = {
              title: idol.nameChinese,
              introduce: idol.introduceChinese,
              img: idol.logo,
              idolList: idol.idol
            }
          }else {
            self.idolInfo = {
              title: idol.name,
              introduce: idol.introduce,
              img: idol.logo,
              idolList: idol.idol
            }
          }
        }else {

        }

      }).catch(function(err){
        self.idolInfo = {
          title: '',
          introduce: '',
          img: '',
          idolList: []
        }
      })
    },
    routeChange() {
      if(this.$route.query.lan != this.lan) {
        this.lan = this.$route.query.lan;
        this.changeInfo();
      }
      if(this.$route.query.id != this.id) {
        this.id = this.$route.query.id;
        this.getGroupInfo();
      }
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
    this.idolList1 = japanIdols;
    this.idolList2 = chinaIdols;
    let self = this;
    setTimeout(function() {
      let ele = document.querySelector('.content');
      ele.scrollIntoView();
    },0);
    self.lan = self.$route.query.lan;
    self.changeInfo();
    self.getGroupInfo();
  }
}
</script>
