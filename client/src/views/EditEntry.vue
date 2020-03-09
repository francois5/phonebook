<template>
  <div id="edit-entry">
    <navbar view="EditEntry" title="Phone book"></navbar>
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
  name: 'EditEntry',
  mixins: [generalMixin],
  props: ['id'],
  data () {
    return {
      firstNameInput: null,
      lastNameInput: null,
      phoneNumberInput: null,
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
    submit() {
      this.apiPutPhoneBookEntry({
        _id: {$oid:this.id},
        firstName: this.firstNameInput,
        lastName: this.lastNameInput,
        phoneNumber: this.phoneNumberInput
      });
    }
  }
}
</script>

<style scoped>
.entries {
  border-collapse: collapse;
  width: 100%;
  margin: 10px;
}

.entry-td {
  text-align: left;
  width: 28%;
  display: inline-block;
}

.entry:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
