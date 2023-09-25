<script setup lang="ts">
import { ref, reactive, computed,onMounted,watch} from 'vue'
import { UseMovieStore } from "@/stores/counter.js"
  
  const DataObj = ref([])
  const movieStore=UseMovieStore()
  const myData=localStorage.getItem('listData')
  DataObj.value=JSON.parse(myData)
  
</script>

<template>
  <h1>清單列表</h1>
  <div v-for="item in DataObj" style="display:flex;width:100%;margin-top:20px;border:2px dashed gray">
    <div>
     <img :src="item.Poster" style="width:140px"/>
    </div>
    <div style="margin:40px">
    <p>電影名:{{item.Title}}</p>
    <p>年份:{{item.Year}}</p>
      <button @click="movieStore.remove(item)">刪除</button>
    </div>
  </div>
</template>

<style scoped></style>