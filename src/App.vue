<template>
  <div id="app">
    <h1>tmp</h1>
    <p class="text">hello</p>
    <!-- 根路由的出口 -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
  methods: {
    handleSelect(key: unknown, keyPath: unknown) {
      console.log(key, keyPath)
    },
  },
})
</script>

<style lang="scss" scoped>
.text {
  color: $warning-color;
}
</style>
