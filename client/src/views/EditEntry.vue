<template>
  <div id="edit-entry">
    <navbar view="EditEntry" title="Phone book"></navbar>
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
  name: 'EditEntry',
  mixins: [generalMixin],
  props: ['id'],
  data () {
    return {
      firstNameInput: null,
      lastNameInput: null,
      phoneNumberInput: null,

      firstNameState: null,
      lastNameState: null,
      phoneNumberState: null,
    }
  },
  mounted() {
    this.initFormFields();
  },
  methods: {
    initFormFields() {
      const entry = this.phoneBookEntries.filter(e => e._id.$oid === this.id)[0];
      this.firstNameInput = entry.firstName;
      this.lastNameInput = entry.lastName;
      this.phoneNumberInput = entry.phoneNumber;
    },
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
        this.apiPutPhoneBookEntry({
          _id: {$oid:this.id},
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
