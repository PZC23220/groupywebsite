<template>
  <div class="idolGroup_group">
    <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<router-link :to="'/idolGroup?lan='+lan">{{text.index2}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.eventTitle}}</span></p>
    <!-- content -->
    <div class="idol-content">
      <div v-if="idolInfo.title">
        <h3 class="group-title scrollReveal">{{idolInfo.title}}</h3>
        <a target="_black" :href="'https://twitter.com/intent/user?user_id='+idolInfo.idolList[0].snsUidTw" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidTw" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
        <a target="_black" :href="'https://weibo.com/u/'+idolInfo.idolList[0].snsUidWeibo" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidWeibo" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
        <p class="group-title2 scrollReveal width1000" v-html="TransferString(idolInfo.introduce)"></p>
        <img v-lazy="idolInfo.img" class="group-img scrollReveal">
        <div class="group-idol scrollReveal" v-if="idolInfo.idolList && idolInfo.idolList.length > 1"><span></span><em>{{text.idols}}</em><span></span></div>
        <ul class="group-list" v-if="idolInfo.idolList && idolInfo.idolList.length > 1">
          <li class="list-content scrollReveal" v-for="idol in idolInfo.idolList">
              <p class="group-logo"><span :style="'background-image:url('+ idol.avatar +');'"></span></p>
              <div class="group-desc">
                <p class="group-name">{{idol.nickname}}</p>
                <p class="group-info" v-html="TransferString(idol.introduce)"></p>
                <a v-if="idol.snsUidTw" target="_black" :href="'https://twitter.com/intent/user?user_id='+idol.snsUidTw" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
                <!-- <a v-if="idol.sns_uid_fb" target="_black" :href="'https://facebook.com/'+idol.sns_uid_fb" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_facebook.png"></a> -->
                <a v-if="idol.snsUidWeibo" target="_black" :href="'https://weibo.com/u/'+idol.snsUidWeibo" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
              </div>
          </li>
        </ul>
      </div>
      <div class="groupy-default"  v-if="!idolInfo.title && index == 1">
        <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_default_1.png">
        <p>{{text.errMsg}}</p>
      </div>
      <div class="group-relative scrollReveal">
        <h5>{{text.japan}}</h5>
        <div class="group-btns group-translateX"><router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" :data-hover="idol.name" v-for="(idol,$index) in idolList1" :key="$index"><span>{{idol.name}}</span></router-link></div>
        <h5>{{text.china}}</h5>
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
        idols: '配信アイドル',
        errMsg: 'エラーが発生しました，しばらくしてからもう一度お試しください',
        japan: '日本人アイドル',
        china: '中国人アイドル'
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
    TransferString(content) {
     let string = content;
     try{
        string=string.replace(/\r\n/g,"<br>")
        string=string.replace(/\n/g,"<br>");
     }catch(e) {
        console.log(e.message);
     }
     return string;
    },
    changeInfo() {
      if(this.lan == 'zh-cn') {
        console.log(this.lan)
        this.text = {
          index: '首页',
          index2: '入驻爱豆',
          eventTitle: '详情',
          idols: '入驻爱豆',
          errMsg: '服务器出错，请稍后重试',
          japan: '日本爱豆',
          china: '国内爱豆'
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
          idols: '配信アイドル',
          errMsg: 'エラーが発生しました，しばらくしてからもう一度お試しください',
          japan: '日本人アイドル',
          china: '中国人アイドル'
        }
        this.idolInfo = {
          title: this.idol.name,
          introduce: this.idol.introduce,
          img: this.idol.logo,
          idolList: this.idol.idol
        }
      }
    },
    getGroupList(type) {
      let self = this;
      http.get(`http://api.groupy.vip/group/getListToWeb?type=${type}`).then(function(res){
        self.idx = 1;
        if(res.data.orgList){
          if(type == 'Japan') {
            self.idolList1 = res.data.orgList;
          }else {
            self.idolList2 = res.data.orgList;
          }
        }else {
          if(type == 'Japan') {
            self.idolList1 = [];
            self.len1 = 0;
          }else {
            self.idolList2 = [];
            self.len2 = 0;
          }
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
    let self = this;
    setTimeout(function() {
      let ele = document.querySelector('.content');
      ele.scrollIntoView();
    },0);
    self.lan = self.$route.query.lan;
    self.changeInfo();
    self.getGroupInfo();
    self.getGroupList('Japan');
    self.getGroupList('China');
  }
}
</script>
