<template>
  <div id="add-entry">
    <navbar view="AddEntry" title="Phone book"></navbar>
    <b-form-group class="form-label-group">
      <b-form-input id="input-first-name" v-model="firstNameInput" class="form-control" placeholder="First name" :state="firstNameState" aria-describedby="Required"></b-form-input>
    </b-form-group>
    <b-form-group class="form-label-group">
      <b-form-input id="input-last-name" v-model="lastNameInput" class="form-control" placeholder="Last name" :state="lastNameState" aria-describedby="Required"></b-form-input>
    </b-form-group>
    <b-form-group class="form-label-group">
      <b-form-input id="input-phone-number" v-model="phoneNumberInput" class="form-control" placeholder="Phone number" :state="phoneNumberState" aria-describedby="Required"></b-form-input>
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
      firstNameInput: "",
      lastNameInput: "",
      phoneNumberInput: "",

      firstNameState: null,
      lastNameState: null,
      phoneNumberState: null,
    }
  },
  methods: {
    setFieldsStates() {
      if(this.firstNameInput && this.firstNameInput != "")
        this.firstNameState = true;
      else
        this.firstNameState = false;
      if(this.lastNameInput && this.lastNameInput != "")
        this.lastNameState = true;
      else
        this.lastNameState = false;
      this.phoneNumberState = this.validPhoneNumber(this.phoneNumberInput);
    },
    fieldsValidation() {
      this.setFieldsStates();
      return this.firstNameState && this.lastNameState && this.phoneNumberState;
    },
    submit() {
      if(this.fieldsValidation()) {
        this.$store.dispatch('apiPostPhoneBookEntry', {
          firstName: this.firstNameInput,
          lastName: this.lastNameInput,
          phoneNumber: this.phoneNumberInput
        });
      }
    },
    validPhoneNumber(phoneNumber) {
      return RegExp(/^[\+]\d{1,} \d{1,} \d{6,}/i).test(phoneNumber);
    }
  }
}
</script>

<style scoped>

</style>
