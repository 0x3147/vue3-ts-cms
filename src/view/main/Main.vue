<!--
    * @desc
    * @author 康佳星
    * @date 2023-01-23 17:57:20
 -->
<template>
  <div class="main">
    <h2>main: {{ counterStore.counter }}--{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

const changeCounter = () => {
  counterStore.changeCounterAction(999)
}
</script>

<style lang="less"></style>
