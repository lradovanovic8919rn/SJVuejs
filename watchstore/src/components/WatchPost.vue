<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="Brand:" label-for="brand">
        <b-form-input id="brand" v-model="form.brand" placeholder="Enter brand" required></b-form-input>
      </b-form-group>
      
      <b-form-group label="Reference number:" label-for="reference number">
        <b-form-input id="reference number" v-model="form.refNumber" type="number" placeholder="Enter reference" required></b-form-input>
      </b-form-group>
     
      <b-form-group label="Model:" label-for="model">
        <b-form-input id="model" v-model="form.model" placeholder="Enter model" required></b-form-input>
      </b-form-group>
      
      <b-form-group label="Storage ID:" label-for="Storage ID">
        <b-form-input id="Storage ID" v-model="form.storageID" placeholder="Enter Storage ID" type="number" required></b-form-input>
      </b-form-group>
      
      <b-form-group label="Order ID:" label-for="Order ID">
        <b-form-input id="Order ID" v-model="form.orderID" placeholder="Enter Order ID" type="number" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">POST</b-button>
    </b-form>

</div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'WatchPost',
        data() {
        return {
            form: {
                brand: '',
                refNumber: '',
                model: '',
                storageID: '',
                orderID: ''
                
            }
        }
        },
            methods: {
            ...mapActions([
                'postwatches'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.postwatches(this.form);
                this.form.brand = '';
                this.form.refNumber = '';
                this.form.model = '';
                this.form.storageID = '';
                this.form.orderID = '';
                

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