<template>
<div>
<ul id="orders">
  <li v-for="o in orders">
    Order ID: {{o.id}}     -      Date: {{o.date}}-      UserID: {{o.userID}}
  </li>
</ul>
</div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  export default {
        name: 'OrdersList',

        computed: {
         ...mapState([
            'orders'
            ])
        },
        mounted() {
            this.getorders();            
        },
        methods:{
            ...mapActions([
                'getorders'
            ])

        }
    }
</script>

<style scoped>
  .card {
    margin-top: 10px;
    text-align: left;
  }

  .card-title {
    margin-bottom: 0px;
  }

  .card-body {
    padding-bottom: 5px;
  }
</style>