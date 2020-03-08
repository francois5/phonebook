import { mapState, mapActions } from 'vuex';

var generalMixin = {
  computed: {
    ...mapState(['loading', 'alertType', 'alertMsg'])
  },
  methods: {
    ...mapActions(['alert'])
  }
};

export default generalMixin;
