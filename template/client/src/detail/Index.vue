<template>
  <div id="app">
    <Header />
    <div class="column-wrap">
      <h1 class="main-titile">{{title}}</h1>
      <div class="main-category">{{little_class}}</div>
      <ul class="main-intro">
        <li><strong class="main-intro-label">机构名称：</strong>{{shop_name}}</li>
        <li v-if="service_area"><strong class="main-intro-label">服务区域：</strong>{{service_area}}</li>
        <li v-if="shop_address"><strong class="main-intro-label">机构地址：</strong>{{shop_address}}</li>
      </ul>
      <a :href="shop_website || post_url" class="main-button">培训咨询</a>
    </div>
    <div class="column-wrap">
      <h2 class="column-title" v-if="service_description">机构简介</h2>
      <div class="column-desc" v-if="service_description">
        <p>{{service_description}}</p>
      </div>
      <ul class="column-slider">
        <li v-for="(item, index) in images" :key="item.index">
          <img :src="item" alt="" @click="activeSlider(index)">
        </li>
      </ul>
    </div>
    <div class="column-wrap" v-if="recommend_list.length">
      <h2 class="column-title">推荐培训</h2>
      <ul class="recommend-list">
        <li v-for="item in recommend_list" :key="item.index">
          <a :href="item.url">
            <div class="recommend-pic">
              <img :src="item.picurl" alt="">
            </div>
            <div class="recommend-main">
              <h3 class="recommend-title">{{item.title}}</h3>
              <div class="recommend-desc">{{item.school}}</div>
              <div class="recommend-desc-light">{{item.tags}}</div>
              <div class="recommend-desc-light">{{item.intro}}</div>
            </div>
          </a>
        </li>
      </ul>
      <div class="recommend-loading" v-show="isLoading">正在努力加载</div>
    </div>
    <img src="../assets/top.svg" alt="返回顶部" class="top-button" onclick="window.scrollTo(0, 0);">
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
  components: {
    Header
  },

  data() {
    return {
      isLoading: false,
      little_class: '',
      post_url: '',
      images: [],
      service_area: '',
      shop_website: '',
      id: '',
      title: '',
      shop_name: '',
      shop_address: '',
      service_description: '',
      recommend_list: [],
      recommend_uri: ''
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      const uri = '/api/detail';
      const data = await fetch(uri).then(res => res.json());
      this.little_class = data.little_class;
      this.post_url = data.post_url;
      this.images = data.images;
      this.service_area = data.service_area;
      this.shop_website = data.shop_website;
      this.title = data.title;
      this.shop_name = data.shop_name;
      this.shop_address = data.shop_address;
      this.service_description = data.service_description;
      // 等待dom更新
      await this.$nextTick();
      const desc = document.querySelector('.column-desc');
      const descContent = document.querySelector('.column-desc > p');
      if (descContent && descContent.offsetHeight > 66) {
        const descClass = desc.classList;
        descClass.add('fold');
        desc.addEventListener('click', () => {
          descClass.toggle('fold');
          descClass.toggle('unfold');
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import '../assets/reset';
@import '../assets/rec_list';
body {
  background-color: #f2f2f2;
  color: #000;
}

.header {
  background-color: #fff;
}

.back-button {
  background-color: #555;
}

.column-wrap {
  background-color: #fff;
  padding: 15px 15px 20px;
  margin-bottom: 10px;
}

.main-titile {
  font-size: 22px;
  line-height: 30px;
}

.main-category {
  color: #555;
  font-size: 14px;
  line-height: 20px;
  margin: 4px 0 12px;
}

.main-intro {
  font-size: 16px;
  line-height: 22px;
  > li {
    margin: 8px 0;
    overflow: hidden;
    display: flex;
  }
}

.main-intro-label {
  font-weight: normal;
  white-space: nowrap;
}

.main-button {
  display: block;
  background-color: #ff5e19;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 38px;
  margin-top: 17px;
}

.column-title {
  font-size: 19px;
  line-height: 26px;
}

.column-desc {
  margin-top: 13px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 22px;
  &.fold > p {
    overflow: hidden;
    max-height: 66px;
  }
  &.fold:after,
  &.unfold:after {
    @extend %fold-icon;
    margin: 12px auto 0;
  }
  &.unfold:after {
    transform: rotate(180deg);
  }
}

%fold-icon {
  display: block;
  width: 20px;
  height: 10px;
  content: '';
  background: url('../assets/arrow.svg') no-repeat;
}

.top-button {
  position: fixed;
  right: 15px;
  bottom: 78px;
}

.recommend-loading {
  color: #aaa;
  font-size: 12px;
  line-height: 17px;
  margin-top: 20px;
  text-align: center;
}

.column-slider {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  height: 100px;
  > li {
    flex: none;
    width: 135px;
    height: 100px;
    margin-left: 10px;
    background-color: #ccc;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
