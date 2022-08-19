<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="ID:" label-for="id">
        <b-form-input id="id" v-model="form.id" placeholder="Enter id" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">DELETE</b-button>
    </b-form>
</div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'OrdersDelete',
        data() {
        return {
            form: {
            id: '',
            }
        }
        },
            methods: {
            ...mapActions([
                'deleteorders'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.deleteorders(this.form.id);
                this.form.id = '';

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