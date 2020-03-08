<template>
  <div id="navbar">
    <h4 class="title">{{this.title}}</h4>
    
    <div v-if="this.view === 'Home'">
    </div>
  </div>
</template>

<script>
import generalMixin from '../mixins/generalMixin';
import router from '../router';
export default {
  name: 'Navbar',
  mixins: [generalMixin],
  props: ['view', 'title'],
  data () {
    return {
      
    }
  },
  methods: {
    gotoHome() {
      router.replace('/home');
    },
  }
}
</script>

<style scoped>

</style>
