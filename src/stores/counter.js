import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const UseMovieStore = defineStore('movies', () => {
  const count = ref(0);
  const movies = ref([]);
  const doubleCount = computed(() => count.value * 2);
  const listData=ref([])
  const DataObj=ref()
  
  function Addcar(item) {
    const haha=listData.value.some((i)=>{
     return i.Title == item.Title
    })
    if(!haha){
      listData.value.push(item)
      count.value++;
      localStorage.setItem('listData',JSON.stringify(listData.value))
    //目前是用localstorage方法傳資料,有沒有在router之間傳資料更好的做法
    }else{
      alert('你已加入過')
    }
    console.log(haha)
  }

  function remove(item){
      const myData=localStorage.getItem('listData')
      DataObj.value=JSON.parse(myData)
      const hehe=DataObj.value.filter((v) => {
           return v.Title !== item.Title;
  });
   DataObj.value = hehe;
   localStorage.setItem('listData',JSON.stringify(DataObj.value))
   location.reload();//我沒辦法及時渲染
}


  async function getMovieApi(data) {
    try {
      const apiKey = '8341bfbe';
      const apiUrl = `https://www.omdbapi.com/?s=${data}&apikey=${apiKey}`;
      
      const res = await fetch(apiUrl);
      const result = await res.json();
      console.log(result.Search);
      if (result.Search) {
        movies.value = [];
        result.Search.map((v,i)=>{
           movies.value.push({
            Title: result.Search[i].Title,
            Poster: result.Search[i].Poster,
            Year: result.Search[i].Year
          });
        })
      } else {
        console.log('no data');
      }

    } catch (error) {
      console.error(error);
    }
  }


  return { count, doubleCount, Addcar, movies, getMovieApi, remove};
});
