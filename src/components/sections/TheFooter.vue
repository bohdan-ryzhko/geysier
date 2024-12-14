<template lang="pug">
section
  div(class="container mx-auto px-3")
    h2(class="text-[67px] font-bold text-center mx-auto mb-[23px]") Ready to get your 
      span(class="text-accent") Geysier
      span ?
    p(class="max-w-[590px] font-medium text-[21px] text-secondary text-center mx-auto mb-[18px]") Contact us today or buy your own at our B2B shop. We are always ready for a talk
    div(class="flex items-center justify-center gap-[10px] mb-[70px] font-bold text-[18px] md:text-[32px]")
      a(href="mailto:hi@geysier.com") hi@geysier.com
      span(class="w-[11px] h-[11px] bg-accent rounded-[100%]")
      a(href="tel:4542211312") +45 42 21 13 12
    div(class="max-w-[520px] mx-auto")
      img(:src="FooterImage" alt="image" class="w-[100%] h-auto")

</template>

<script setup lang="ts">
import FooterImage from "@/assets/images/footer.jpg";
</script>
