<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue"
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width)
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible",menuVisible);//set
  }
}
</script>
