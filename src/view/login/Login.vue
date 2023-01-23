<!--
    * @desc
    * @author 康佳星
    * @date 2023-01-23 17:57:14
 -->
<template>
  <div class="login">
    <h2>login</h2>
  </div>
</template>

<script setup lang="ts">
import hyRequest from '@/service'

hyRequest
  .get({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
</script>

<style lang="less"></style>
