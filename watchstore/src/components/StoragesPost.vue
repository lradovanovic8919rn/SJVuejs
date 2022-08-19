<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="Capacity:" label-for="capacity">
        <b-form-input id="capacity" v-model="form.capacity" type="number" placeholder="Enter capacity" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">POST</b-button>
    </b-form>

</div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'PostStorages',
        data() {
        return {
            form: {
                capacity: '',
            }
        }
        },
            methods: {
            ...mapActions([
                'poststorages'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.poststorages(this.form);
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