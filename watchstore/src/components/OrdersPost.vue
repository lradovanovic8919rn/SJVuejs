<template>
<div>
    <b-form @submit="onSubmit">
      <b-form-group label="Date:" label-for="date">
        <b-form-input id="date" v-model="form.date" type="number" placeholder="Enter date" required></b-form-input>
      </b-form-group>
      
      <br>
      <b-button type="submit" variant="primary">POST</b-button>
    </b-form>

</div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
        name: 'PostOrder',
        data() {
        return {
            form: {
                date: '',
            }
        }
        },
            methods: {
            ...mapActions([
                'postorders'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.postorders(this.form);
                this.form.orders = '';

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