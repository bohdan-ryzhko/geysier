<template lang="pug">
header(class="container mx-auto")
  div(class="flex justify-between items-center gap-4 text-typographyWhite max-lg:px-5 py-5")
    TheLogo(class="block h-[26px] w-auto shrink-0") 

    div(class="inline-flex gap-8 items-center text-secondary ")
      button(type="button" class="inline-flex gap-4 items-center hover:text-typographyWhite") 
        Bars3Icon(class="w-7 h-7 block")
        span Menu

div(class="absolute top-0 left-[-100%] bg-white z-10 w-[100vw] h-[100vh] p-2 md:p-5")
  div(class="flex items-center gap-[10px] mb-[30px] md:gap-[30px] md:mb-[60px]")
    TheLogo(class="block h-[26px] w-auto shrink-0 text-black")
    button(class="flex items-center gap-[11px]" type="button")
      CloseMenu
      span(class="font-medium text-[21px] text-secondary") Close
  div(class="flex flex-col gap-[20px] md:gap-[0px] lg:flex-row lg:justify-between")
    div()
      h2(class="text-[50px] leading-[110%] text-secondary font-bold max-w-[665px] mb-[16px] md:text-[67px]") Is Geysier something for 
        span(class="text-accent") you?
      p(class="max-w-[540px] text-secondary text-[21px] font-medium mb-[16px]") Curious to experience the combination of innovation and aesthetics that Geysier offers? Call Simon or book a meeting. He can answer all your questions and guide you through the process.
      div(class="flex items-center gap-[10px] mb-[30px] font-bold text-[18px] text-dark md:text-[32px]")
        a(href="mailto:hi@geysier.com") hi@geysier.com
        span(class="w-[11px] h-[11px] bg-accent rounded-[100%]")
        a(href="tel:4542211312") +45 42 21 13 12
      h2(class="text-[50px] leading-[110%] text-secondary font-bold md:text-[67px]") B2B 
        span(class="text-accent") shop
    div
      h2(class="text-[50px] leading-[110%] text-secondary font-bold mb-[20px] md:text-[67px]") Contact 
        span(class="text-accent") us
      div(class="flex flex-col gap-[15px] mb-[30px] font-bold text-[18px] text-dark md:text-[32px]")
        a(href="mailto:hi@geysier.com") hi@geysier.com
        a(href="tel:4542211312") +45 42 21 13 12
      ul(class="flex flex-col gap-[10px] mb-[30px] lg:flex-row lg:gap-[30px] lg:items-center")
        li(
          v-for="({ icon, text }, idx) in socialLinks" 
          :key="idx"
        )
          a(class="flex items-center gap-[10px]")
            component(:is="icon" class="w-[25px] h-[25px]")
            span(class="text-dark text-[21px] font-medium") {{ text }}
      address(class="flex flex-col gap-[53px] text-secondary not-italic lg:flex-row")
        p(class="flex flex-col gap-[8px]")
          span(class="font-bold text-[32px]") Copenhagen
          span(class="max-w-[145px]") Taffelbays Allé 2 2900 Hellerup CVR: 42174726
        p(class="flex flex-col gap-[8px]")
          span(class="font-bold text-[32px]") Aarhus
          span(class="max-w-[200px]") Frederiksgade 74E, 2th 8000 Aarhus

</template>

<script setup lang="ts">
import TheLogo from "./icons/Logo.vue";
import CloseMenu from "@/components/icons/CloseMenu.vue";
import ShareLink from "@/components/icons/ShareLink.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Instagram from "@/components/icons/Instagram.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const socialLinks = [
  { icon: LinkedIn, text: "LinkedIn", link: "" },
  { icon: Instagram, text: "Instagram", link: "" },
];
</script>
