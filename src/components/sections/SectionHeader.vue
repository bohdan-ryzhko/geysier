<template lang="pug">
section(class="container mx-auto px-3 mb-[100px] md:mb-[180px]")
  div(class="relative")
    h1(class="section-header text-[67px] text-center mt-16") World’s Best 
      span(class="text-accent") First Impression
    img(:src="headerImg" alg="hero-image" class="h-auto w-full")
    a(to="#" class="border border-accent cursor-pointer hover:opacity-80 bg-black text-secondary rounded-[25px] py-3 px-10 absolute bottom-6 left-1/2 -translate-x-1/2 block text-center w-full sm:w-auto") Scroll down do get the Geysier experience

  div(class="flex items-center justify-around max-lg:flex-col gap-10 mt-16 lg:mt-24 font-medium text-base")
    img(:src="unitImg" alg="unit-image" class="h-auto max-h-[400px] lg:max-h-[850px]")
    div(class="max-w-[475px]")
      h2(class="section-header") Feel the 
        span(class="text-accent") difference
      p(class="text-secondary mt-3") Geysier is dedicated to shaping the future of intelligent hygiene by designing and producing modern, automatic hand sanitizer dispensers with an upward spray. We strive to provide elegant and efficient solutions to maintain cleanliness and safety in public spaces, office environments, shops, etc.
      ul(class="text-typographyWhite")
        li(
          v-for="(item, idx) in list" 
          :key="idx" 
          class="flex items-center before:block before:w-3 before:h-3 before:border-2 before:border-accent before:rounded-full gap-2.5 mt-5"
        ) {{ item }}
      a(href="#" class="border cursor-pointer hover:opacity-80 border-secondary text-secondary rounded-[25px] py-3 px-10 inline-flex gap-3 items-center mt-5") See the unit in action
        PlayCircleIcon(class="w-5 h-5")

</template>

<script setup lang="ts">
import headerImg from "../../assets/images/header.jpg";
import unitImg from "../../assets/images/unit.png";
import { PlayCircleIcon } from "@heroicons/vue/24/outline";

const list = [
  "Touchless and 360 degree functionality",
  "Intuitive and instant dosing for busy environments",
  "Timeless and elegant design that fits into any environment",
  "Easy to refill and maintain",
];
</script>
