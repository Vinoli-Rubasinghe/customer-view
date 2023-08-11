<template>
  <div class="flex flex-col min-h-screen font-sans">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import reservations from './components/customer/reservations.vue';
 
export default defineComponent({
  components: {
    // SignUp,
    Home,
    NavBar,
    reservations
  }
});
</script>