<template>
<div>
<ul id="users">
  <li v-for="s in storages">
    Storage ID: {{s.id}}     -      Capacity: {{s.capacity}}
  </li>
</ul>
</div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  export default {
        name: 'StoragesList',

        computed: {
         ...mapState([
            'storages'
            ])
        },
        mounted() {
            this.getstorages();            
        },
        methods:{
            ...mapActions([
                'getstorages'
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