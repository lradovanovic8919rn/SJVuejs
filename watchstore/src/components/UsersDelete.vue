<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="UserID:" label-for="id">
        <b-form-input id="userid" v-model="form.userid" placeholder="Enter id" type="number" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">Delete</b-button>
    </b-form>
</div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'UsersDelete',
        data() {
        return {
            form: {
            userid: '',
            }
        }
        },
            methods: {
            ...mapActions([
                'deleteusers'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.deleteusers(this.form.userid,this.form);
                this.form.userid = '';

            }
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