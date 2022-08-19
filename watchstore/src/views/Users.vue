<template>
  <div v-if="show">
    <UsersList  />
    <UsersDelete />
    <UsersPut />


  </div>
</template>
<script>

  import UsersList from '@/components/UsersList';
  import UsersDelete from '@/components/UsersDelete';
  import UsersPut from '@/components/UsersPut';


  import { mapActions } from 'vuex';

  export default {
    name: 'Users',
  

    data() {
      return {
        show: false,
      }
    },
    components: {
      UsersList,
      UsersDelete,
      UsersPut
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