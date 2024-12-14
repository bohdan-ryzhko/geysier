<template lang="pug">
section(class="mb-[100px] md:mb-[315px]")
  div(class="container mx-auto px-3")
    div(class="flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[77px]")
      div(class="max-w-[490px] xl:max-w-[100%]")
        p(class="text-secondary font-medium mb-[22px] text-[21px]") The best dispenser needs the best 
          span(class="text-accent") sanitizer
          span . That is why we have created
        SanifiveIcon(class="max-w-[100%]")
      div(class="flex flex-col items-center gap-[5px]")
        img(:src="Unit1" alg="1 Liter Liquid" class="max-w-[245px] h-auto")
        p(class="text-typographyTooltip text-[15px] font-medium") 1 Liter Liquid
      div(class="max-w-[490px]")
        p(class="mb-[23px]") With a fresh smell of 
          span(class="text-accent") Lemongrass 
          span and 
          span(class="text-accent") 85% alcohol
          span , we have an effective and nice sanitizer that does the job and creates a great experience because of the smell.
        ul(class="flex flex-nowrap justify-between md:justify-stretch md:gap-[20px]")
          li(
            v-for="({ src, title }, idx) in units" 
            :key="idx"
          )
            button(class="flex flex-col items-center justify-center gap-[6px] w-[113px] h-[147px] border border-borderColor rounded-[8px] ease-in-out duration-300 hover:border-accent" type="button")
              img(:src="src" :alt="title" class="max-h-[90px] max-w-[40px]")
              p(class="text-secondary font-medium text-[15px]") {{ title }}

</template>

<script setup lang="ts">
import SanifiveIcon from "@/components/icons/sanifive.vue";
import Unit1 from "@/assets/images/sanifive/1l-liquid.png";
import Unit2 from "@/assets/images/sanifive/1l-gel.png";
import Unit3 from "@/assets/images/sanifive/33ml-spray.png";

const units = [
  { src: Unit1, title: "1 Liter Liquid" },
  { src: Unit2, title: "1 Liter Gel" },
  { src: Unit3, title: "33ml Spray" },
];
</script>
