<template lang="pug">
section(class="mb-[100px] md:mb-[120px]")
  div(class="container mx-auto px-1")
    h2(class="text-[67px] font-bold max-w-[670px] mx-auto text-center mb-[17px]") We have a passion for 
      span(class="text-accent") hygiene 
      span & 
      span(class="text-accent") design
    p(class="text-secondary font-medium text-[21px] max-w-[730px] mx-auto text-center mb-[67px]") Geysier is dedicated to shaping the future of intelligent hygiene by designing and producing modern, automatic hand sanitizer dispensers with an upward spray.
    ul(class="flex flex-col gap-[40px] items-center justify-center lg:gap-[70px] lg:flex-row")
      li(
        v-for="({ src, name, email, phone, description, formattedPhone }, idx) in team" 
        :key="idx"
      )
        div(class="flex flex-col items-center max-w-[260px]")
          img(:src="src" :alt="name" class="max-h-[250px] w-[100%] mb-[18px]")
          p(class="text-typographyWhite font-bold text-[32px]") {{ name }}
          div(class="flex justify-between items-center text-[15px] w-[100%] text-typographyTooltip font-medium")
            a(:href="'mailto:' + email") {{ email }}
            span(class="w-[3px] h-[3px] bg-typographyTooltip rounded-[100%]")
            a(:href="'tel:' + phone") {{ formattedPhone }}
          p(class="text-center" v-html="description")
</template>

<script setup lang="ts">
import Asger from "@/assets/images/persons/asger.jpg";
import Albert from "@/assets/images/persons/albert.jpg";
import Simon from "@/assets/images/persons/simon.jpg";

const team = [
  {
    src: Asger,
    name: "Asger Emborg",
    email: "ae@geysier.com",
    phone: "+4542211312",
    formattedPhone: "45 42 21 13 12",
    description:
      'Asger is part of the Geysier <span class="text-accent">Sales</span> team and have his focus at hotels and offices',
  },
  {
    src: Albert,
    name: "Albert Ipsen",
    email: "ai@geysier.com",
    phone: "4542211312",
    formattedPhone: "+45 42 21 13 12",
    description:
      'Albert created the Geysier unit in the Covid times. He is now in charge of the <span class="text-accent">Product Development</span>',
  },
  {
    src: Simon,
    name: "Simon Lundbæk",
    email: "sl@geysier.com",
    phone: "4542211312",
    formattedPhone: "+45 42 21 13 12",
    description:
      'Simon quickly joined the team and became a partner. He is now <span class="text-accent">Sales Lead</span>',
  },
];
</script>
