<template lang="pug">
main(class="bg-black min-h-screen text-typographyWhite")
  MainNavigation

  SectionHeader

  Partners

  SimpleDesign

  Customize

  Sanifive

  Team

  Footer
</template>

<script setup lang="ts">
import Button from "primevue/button";
import MainNavigation from "@/components/MainNavigation.vue";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import Partners from "@/components/sections/partners.vue";
import SimpleDesign from "@/components/sections/simpleDesign.vue";
import Customize from "@/components/sections/customize.vue";
import Sanifive from "@/components/sections/sanifive.vue";
import Team from "@/components/sections/team.vue";
import Footer from "@/components/sections/footer.vue";
</script>
