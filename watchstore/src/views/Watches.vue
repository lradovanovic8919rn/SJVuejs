<template>
  <div v-if="show">
    <WatchList  />
    <WatchPost  />
    <WatchDelete  />
    <WatchPut  />


  </div>
</template>
<script>

  import WatchList from '@/components/WatchList';
  import WatchPost from '@/components/WatchPost';
  import WatchDelete from '@/components/WatchDelete';
  import WatchPut from '@/components/WatchPut';






  import { mapActions } from 'vuex';

  export default {
    name: 'Watches',
  

    data() {
      return {
        show: false,
      }
    },
    components: {
      WatchList,
      WatchPost,
      WatchDelete,
      WatchPut

    },
    computed: {
    },

    mounted() {      

        if(localStorage.token){
          this.show = !this.show
        }
      
    },


    methods: {

    }
  }
</script>

<style scoped>

</style>