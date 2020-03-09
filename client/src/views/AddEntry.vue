<template>
  <div id="add-entry">
    <navbar view="AddEntry" title="Phone book"></navbar>
    <b-form-group class="form-label-group">
      <b-form-input id="input-first-name" v-model="firstNameInput" class="form-control" placeholder="First name"></b-form-input>
    </b-form-group>
    <b-form-group class="form-label-group">
      <b-form-input id="input-last-name" v-model="lastNameInput" class="form-control" placeholder="Last name"></b-form-input>
    </b-form-group>
    <b-form-group class="form-label-group">
      <b-form-input id="input-phone-number" v-model="phoneNumberInput" class="form-control" placeholder="Phone number"></b-form-input>
    </b-form-group>
    <b-button class="submit-btn" @click="submit">Submit</b-button>
  </div>
</template>

<script>
import generalMixin from '../mixins/generalMixin';

export default {
  name: 'AddEntry',
  mixins: [generalMixin],
  data () {
    return {
      firstNameInput: null,
      lastNameInput: null,
      phoneNumberInput: null,
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('apiPostPhoneBookEntry', {
        firstName: this.firstNameInput,
        lastName: this.lastNameInput,
        phoneNumber: this.phoneNumberInput
      });
    }
  }
}
</script>

<style scoped>

</style>
