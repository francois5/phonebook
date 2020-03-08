<template>
  <div id="home">
    <p>Home</p>
    <div class="entries">
      <div v-for="phoneBookEntry in phoneBookEntries"  :id="phoneBookEntry._id.$oid"  :key="phoneBookEntry._id.$oid">
        {{phoneBookEntry.firstName+' '+phoneBookEntry.lastName+' '+phoneBookEntry.phoneNumber}}
      </div>
    </div>
  </div>
</template>

<script>
import generalMixin from '../mixins/generalMixin';

export default {
  name: 'Home',
  mixins: [generalMixin],
  mounted() {
    this.apiGetPhoneBookEntries();
  }
}
</script>

<style scoped>
  
</style>
