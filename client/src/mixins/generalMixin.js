import { mapState, mapActions } from 'vuex';

var generalMixin = {
  computed: {
    ...mapState(['loading', 'alertType', 'alertMsg', 'phoneBookEntries'])
  },
  methods: {
    ...mapActions(['alert', 'apiGetPhoneBookEntries', 'apiPostPhoneBookEntries', 'apiPutPhoneBookEntries'])
  }
};

export default generalMixin;
