<template>
  <div v-if="show">
    <StoragesList />
    <StoragesPost />
    <StoragesDelete />
    <StoragesPut />

  </div>
</template>
<script>

  import StoragesList from '@/components/StoragesList';
  import StoragesPost from '@/components/StoragesPost';
  import StoragesDelete from '@/components/StoragesDelete';
  import StoragesPut from '@/components/StoragesPut';




  import { mapActions } from 'vuex';

  export default {
    name: 'Storages',
  

    data() {
      return {
        show: false,
      }
    },
    components: {
      StoragesList,
      StoragesPost,
      StoragesDelete,
      StoragesPut

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