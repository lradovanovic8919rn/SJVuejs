<template>
<div>
<ul id="users">
  <li v-for="user in users">
    User ID: {{user.id}}     -      Username: {{user.name}}     -      Email:{{user.email}}     -      Role:{{user.role}}
  </li>
</ul>
</div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  export default {
        name: 'UsersList',

        computed: {
         ...mapState([
            'users'
            ])
        },
        mounted() {
            this.getusers();            
        },
        methods:{
            ...mapActions([
                'getusers'
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