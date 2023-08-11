<style>
    @import '@/assets/main.css';
</style>
<template>
    <div class="container items-center mx-auto bg-green-500 pl-72 pt-12 pb-12">
      <div class="container w-3/4 max-h-max bg-white content-center py-8 px-8 rounded-3xl flex flex-row ">
        <div class="sign-up-left w-1/2 flex flex-col items-center">
          <div class="logo pr-48">
            <img class="w-32 h-32" src="../assets/dine ease logo color.png" alt="">
          </div>
          <div class="sign-up-form w-2/3 ">
            <h1 class="font-sans text-3xl text-center font-semibold pb-4 ">Register</h1>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Name</label><br>
            <input type="text" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Email</label><br>
            <input type="text" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Mobile</label><br>
            <input type="text" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Password</label><br>
            <input type="password" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Confirm Password</label><br>
            <input type="password" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <input type="button" value="Register" class="w-full bg-green text-white font-semibold py-2 px-4 cursor-pointer rounded-md my-4 hover:bg-lgreen  hover:text-green">
            <p class="text-black font-light flex justify-center text-sm ">Already have an account? <a href="#" class="text-green">Login</a></p>
            <div class="or flex items-center my-4">
              <hr class="flex-grow border-gray-400">
              <p class="mx-4 text-gray-700 text-sm">OR</p>
              <hr class="flex-grow border-gray-400">
            </div>
            <button class="flex justify-center border-2 border-green p-2 rounded ">
              <img class="w-1/12 " src="../assets/google.png" alt="">
              <p class="ml-2 text-sm">Continue with Google</p>
            </button>
          </div>
        </div>
        <div class="sign-up-right w-1/2" >
          <!-- Add content for the right side if needed -->
          <div id="carouselExampleIndicators" class="relative" data-te-carousel-init data-te-carousel-slide>
                <!--Carousel indicators-->
                <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                    <button type="button" data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded- flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                    <button
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="1"
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"></button>
                    <button
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="2"
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"></button>
                </div>

                <!--Carousel items-->
                <div class="relative w-full after:clear-both after:block after:content-['']">
                    <!--First item-->
                    <div
                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src="../assets/images/1.png"
                        class="block w-full h-max "
                        alt="Wild Landscape" />
                    </div>
                    <!--Second item-->
                    <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="../assets/images/2.png"
                        class="block w-full"
                        alt="Camera" />
                    </div>
                    <!--Third item-->
                    <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="../assets/images/3.png"
                        class="block w-full"
                        alt="Exotic Fruits" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'SignUp',
        data() {
            return {
                title: 'Sign Up Page'
            };
        }
    });
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>