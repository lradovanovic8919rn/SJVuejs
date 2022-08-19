<template>
  <div v-if="show">
    <OrdersList />
    <OrdersPost />
    <OrdersDelete />
    <OrdersPut />




  </div>
</template>
<script>

  import OrdersList from '@/components/OrdersList';
  import OrdersPost from '@/components/OrdersPost';
  import OrdersDelete from '@/components/OrdersDelete';
  import OrdersPut from '@/components/OrdersPut';



  import { mapActions } from 'vuex';

  export default {
    name: 'Orders',
  

    data() {
      return {
        show: false,
      }
    },
    components: {
      OrdersList,
      OrdersPost,
      OrdersDelete,
      OrdersPut


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