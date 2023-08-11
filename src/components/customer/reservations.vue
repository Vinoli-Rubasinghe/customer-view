<template>
    <div id="app">
        <div class="flex display: flex;">
  <div class="flex-1 ...">01</div>
  <div class="contents">
    <div class="flex-1 ...">02</div>
    <div class="flex-1 ...">03</div>
  </div>
  <div class="flex-1 ...">04</div>
</div>
    </div>
  </template>
  
  <script lang="ts">
 import { defineComponent } from 'vue';

export default defineComponent({
    name: 'reservations',
    data() {
        return {
            title: 'reservation page'
        };
    }
});
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
  </script>
  
  <style>
  /* Add any global styles here */
  </style>
  