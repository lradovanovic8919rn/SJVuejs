<template>
<div>
<ul id="users">
  <li v-for="w in watches">
   Brand: {{w.brand}}     -      Reference: {{w.refNumber}}     -      Model:{{w.model}} 
  </li>
</ul>
</div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  export default {
        name: 'WatchList',

        computed: {
         ...mapState([
            'watches'
            ])
        },
        mounted() {
            this.getwatches();            
        },
        methods:{
            ...mapActions([
                'getwatches'
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