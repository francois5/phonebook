<template>
  <div id="home">
    <navbar view="Home" title="Phone book"></navbar>
    <b-form-group class="form-label-group">                                    
      <b-form-input id="input-search" v-model="searchInput" class="form-control" placeholder="Search the phone book"></b-form-input>
    </b-form-group>
    <b-button class="search-btn" @click="search">Search</b-button>
    <div class="entries">
      <div v-for="phoneBookEntry in phoneBookEntries" :id="phoneBookEntry._id.$oid" :key="phoneBookEntry._id.$oid" class="entry">
        <span class="entry-td first-name">{{phoneBookEntry.firstName}}</span><span class="entry-td last-name">{{phoneBookEntry.lastName}}</span><span class="entry-td phone-number">{{phoneBookEntry.phoneNumber}}</span><b-button class="edit-btn" @click="edit(phoneBookEntry)">Edit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import generalMixin from '../mixins/generalMixin';
import router from '../router';

export default {
  name: 'Home',
  mixins: [generalMixin],
  data () {                                                                      
    return {
      searchInput: null,
    }
  },
  methods: {
    search() {
      this.apiGetPhoneBookEntries({search: this.searchInput});
    },
    edit(phoneBookEntry) {
      router.push({ path: 'edit-entry/'+phoneBookEntry._id.$oid });
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
