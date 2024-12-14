<template lang="pug">
section(class="mb-[100px] md:mb-[200px]")
  div(class="container mx-auto px-1")
    div(class="flex flex-col-reverse items-center gap-[50px] lg:flex-row lg:gap-[350px] lg:justify-center")
      div(class="flex items-center justify-around max-lg:flex-col")
        img(:src="unitImg" alg="unit-image" class="h-auto max-h-[400px] lg:max-h-[850px]")
      div(class="box max-w-[380px] lg:max-w-[515px]")
        h2(class="text-[55px] text-typographyWhite font-bold mb-[23px]")
          span(class="text-accent") Customize 
          span the unit to your brand
        p(class="text-secondary mb-[31px] text-[21px] font-medium") We can customize the Geysier dispenser to match your business identity and brand. We create all types of designs with brand colors and logo. A Geysier dispenser is not just functional - it is also an opportunity to communicate with your surroundings.
        NuxtLink(to="#" class="border border-accent cursor-pointer hover:opacity-80 bg-black text-secondary rounded-[25px] py-3 px-10") Get your free design example
</template>

<script setup lang="ts">
import unitImg from "@/assets/images/unit.png";
</script>
