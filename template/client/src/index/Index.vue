<template>
  <div id="app">
    <Header />
    <ul class="recommend-list">
      <li v-for="item in recommendList" :key="item.index">
        <a :href="item.url">
          <div class="recommend-pic">
            <img :src="item.image" alt="">
          </div>
          <div class="recommend-main">
            <h3 class="recommend-title">{{item.school}}</h3>
            <div class="recommend-desc">课程：{{item.name}}</div>
            <div class="recommend-desc">{{item.description}}</div>
            <div class="recommend-desc-light">{{item.label}}</div>
          </div>
        </a>
      </li>
    </ul>
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
      recommendList: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const uri = '/api/list';
      const data = await fetch(uri).then(res => res.json());
      this.recommendList = data.map(item => item.subdisplay);
    }
  }
};
</script>
<style lang="scss">
@import '../assets/reset';
@import '../assets/rec_list';
.recommend-list {
  padding: 0 15px;
}
</style>
