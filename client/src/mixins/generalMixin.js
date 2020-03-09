import { mapState, mapActions } from 'vuex';

var generalMixin = {
  computed: {
    ...mapState(['loading', 'alertType', 'alertMsg', 'phoneBookEntries'])
  },
  methods: {
    ...mapActions(['alert', 'apiGetPhoneBookEntries', 'apiPostPhoneBookEntry', 'apiPutPhoneBookEntry'])
  }
};

export default generalMixin;
