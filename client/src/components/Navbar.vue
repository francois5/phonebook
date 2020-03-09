<template>
  <div id="navbar">
    <h4 class="menu-title">{{this.title}}</h4>
    <div class="menu-body">
      <div class="menu-choice" v-bind:class="{active: this.view === 'Home'}" @click="gotoHome"><h6>Home</h6></div>
      <div class="menu-choice" v-bind:class="{active: this.view === 'AddEntry'}" @click="gotoAddEntry"><h6>Add entry</h6></div>
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
      if(this.view !== 'Home')
        router.replace('/');
    },
    gotoAddEntry() {
      if(this.view !== 'AddEntry')
        router.replace('/add-entry');
    },
  }
}
</script>

<style scoped>
.menu-choice {
    cursor: pointer;
}
.menu-choice.active {
    color: blue;
}
</style>
