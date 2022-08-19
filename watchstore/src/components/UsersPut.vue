<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="UserID:" label-for="userid">
        <b-form-input id="userid" v-model="id" placeholder="Enter id" type="number" required></b-form-input>
      </b-form-group>
         
    <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Enter new username" required></b-form-input>
      </b-form-group>

    <b-form-group label="Email:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter new email" required></b-form-input>
      </b-form-group>  

      <b-form-group label="role">
        <b-form-radio id="role" v-model="form.role" name="myChoice" value="admin" required>admin</b-form-radio>
        <b-form-radio id="role" v-model="form.role" name="myChoice" value="manager" required>manager</b-form-radio>
        <b-form-radio id="role" v-model="form.role" name="myChoice" value="employee" required>employee</b-form-radio>
      </b-form-group>
    
      <br>
      <b-button type="submit" variant="primary">PUT</b-button>
    </b-form>
</div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'UsersPut',
        data() {
            return {
                form: {
                    name: '',
                    email:'',
                    role: '',
                },
                id:''
        }
        },
            methods: {
            ...mapActions([
                'putusers',
                'utpset'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.utpset(this.id);
                this.putusers(this.form);
                this.form.name = '';
                this.form.email = '';
                this.form.role = '';
                this.id.role = '';




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