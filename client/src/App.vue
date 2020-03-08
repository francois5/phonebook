<template>
  <div id="app">
    <b-spinner v-if=loading style="width: 56px; height: 56px; position: fixed; left: 50%; top: 3px; z-index: 100; color: #28a745 !important; margin-left: -35px;" variant="primary" label="Spinning"></b-spinner>
    <b-alert v-if=alertType style="position: fixed; top: 56px; left: 50%; margin-left: -75px; z-index: 100;" :variant=alertType show>{{alertMsg}}</b-alert>
    <router-view/>
  </div>
</template>

<script>
import generalMixin from './mixins/generalMixin';

export default {
  name: 'App',
  mixins: [generalMixin],
}
</script>

<style>
html, body {
    height: 100%;
}
</style>
