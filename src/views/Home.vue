<template lang="pug">
main(class="bg-black min-h-screen text-typographyWhite")
  MainNavigation

  SectionHeader

  SectionPartners

  SectionSimpleDesign

  SectionCustomize

  SectionSanifive

  SectionTeam

  TheFooter(id="contacts")
</template>

<script setup lang="ts">
import Button from "primevue/button";
import MainNavigation from "@/components/MainNavigation.vue";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import SectionPartners from "@/components/sections/SectionPartners.vue";
import SectionSimpleDesign from "@/components/sections/SectionSimpleDesign.vue";
import SectionCustomize from "@/components/sections/SectionCustomize.vue";
import SectionSanifive from "@/components/sections/SectionSanifive.vue";
import SectionTeam from "@/components/sections/SectionTeam.vue";
import TheFooter from "@/components/sections/TheFooter.vue";
</script>
