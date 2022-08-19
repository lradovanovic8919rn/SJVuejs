<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="StorageID:" label-for="id">
        <b-form-input id="id" v-model="form.id" placeholder="Enter id"  type="number" required></b-form-input>
      </b-form-group>
    <b-form-group label="Capacity:" label-for="capacity">
        <b-form-input id="capacity" v-model="form.capacity" placeholder="Enter new capacity" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">PUT</b-button>
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
                id: '',
                capacity: ''
            }
        }
        },
            methods: {
            ...mapActions([
                'putstorages',
                'stpset'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.stpset(this.form.id)
                this.putstorages(this.form);
                this.form.id = '';
                this.form.capacity = '';


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