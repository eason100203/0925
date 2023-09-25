<script setup lang="ts">
import { ref, reactive, computed} from 'vue'
import { UseMovieStore } from "@/stores/counter.js"
const movieStore=UseMovieStore()
  const inputValue=ref('')
  const getMov=()=>{movieStore.getMovieApi(inputValue.value)}
</script>

<template>
    <main>
        <div class="intro" style="border:2px solid lightblue; border-radius:100px;width:150px; display:flex; text-align:center; align-items:center; justify-content:center">
          <p><a href="/list">點擊查看清單</a></p>
          <p style="margin-left:10px">{{ movieStore.count }}</p>
        </div >
        <input type="text" v-model="inputValue">
        <button @click="getMov">搜尋</button>
        <div v-for="item in movieStore.movies" style="margin-top:30px; border:2px solid gray">
         <p>電影名稱:{{item.Title}}</p>
         <p>年份:{{item.Year}}</p>
        <img :src="item.Poster" style="width:150px"/>
          <button  @click="movieStore.Addcar(item)">加入清單</button>
         
        </div>
    </main>
</template>

<style scoped></style>
