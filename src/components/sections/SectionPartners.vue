<template lang="pug">
  section(class="mb-[100px] md:mb-[140px]")
    h2(class="px-3 font-bold text-[55px] text-center mb-[13px] mx-auto text-typographyWhite") Where Geysier is used 
        span(class="text-accent") today
    p(class="mx-auto font-medium px-3 max-w-[495px] text-[21px] text-center text-secondary mb-[53px]") Geysier is battle tested at many locations. We are most repesetended at 
      span(class="text-accent") hotels, offices & HQ’s
    ul(class="flex px-3 flex-col md:flex-row gap-[47px] justify-center items-center flex-wrap mb-[50px]")
      li(
        v-for="({ src, alt }, idx) in comapnies" 
        :key="idx"
      )
        img(:src="src" :alt="alt" class="max-w-full max-h-full")
    ul(class="flex flex-nowrap")
      li(
        v-for="({ src, alt }, idx) in cases" 
        :key="idx"
      )
        img(:src="src" :alt="alt")

</template>

<script setup lang="ts">
// Companies logos
import CompanyLogo1 from "@/assets/images/customers/10-hvid.png";
import CompanyLogo2 from "@/assets/images/customers/4-hvid.png";
import CompanyLogo3 from "@/assets/images/customers/7-hvid.png";
import CompanyLogo4 from "@/assets/images/customers/8-hvid.png";
import CompanyLogo5 from "@/assets/images/customers/11-hvid.png";
import CompanyLogo6 from "@/assets/images/customers/12-hvid.png";
import CompanyLogo7 from "@/assets/images/customers/9-hvid.png";

// Cases
import Case1 from "@/assets/images/cases/skoda.jpg";
import Case2 from "@/assets/images/cases/peter-larsen.jpg";
import Case3 from "@/assets/images/cases/custom.jpg";
import Case4 from "@/assets/images/cases/audi.jpg";

const comapnies = [
  { src: CompanyLogo1, alt: "Nordera" },
  { src: CompanyLogo2, alt: "Copenhagen Medical" },
  { src: CompanyLogo3, alt: "Frederica" },
  { src: CompanyLogo4, alt: "Njord" },
  { src: CompanyLogo5, alt: "Bog&ide" },
  { src: CompanyLogo6, alt: "Sweco" },
  { src: CompanyLogo7, alt: "Forenede" },
];

const cases = [
  { src: Case1, alt: "Skoda" },
  { src: Case2, alt: "Peter Larsen" },
  { src: Case3, alt: "Custom" },
  { src: Case4, alt: "Audi" },
];
</script>
