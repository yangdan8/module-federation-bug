<template>
  <div class="box">
    667
    <blog></blog>
  </div>
</template>
<script>
import Vue from 'vue';
Vue.component('blog', {
  render(h) {
    return h('div', '我是libs的子组件' + +new Date());
  }
});

export default {
};
</script>
<style scoped>
.box {
  background-color: red;
}
</style>
