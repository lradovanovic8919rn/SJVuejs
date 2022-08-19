<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="StorageID:" label-for="id">
        <b-form-input id="strid" v-model="form.strid" type="number" placeholder="Enter id" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">DELETE</b-button>
    </b-form>
</div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'StoragesDelete',
        data() {
        return {
            form: {
            strid: '',
            }
        }
        },
            methods: {
            ...mapActions([
                'deletestorages'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.deletestorages(this.form.strid);
                this.form.strid = '';

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