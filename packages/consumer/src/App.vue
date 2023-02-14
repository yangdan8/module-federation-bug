<template>
  <div id="app">
    <blog2></blog2>

    <Home v-if="vv" />
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component('blog2', {
  render(h) {
    return h('div', '我是consumer的子组件')
  }
});

const Home = () => import("./Home.vue");
export default {
  name: "App",
  data() {
    return {
      vv: false
    }
  },
  components: {
    Home,
  },
  mounted() {
    setTimeout(() => {
      this.vv = true
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
