<template lang="pug">
header(class="container mx-auto")
  div(class="flex justify-between items-center gap-4 text-typographyWhite max-lg:px-5 py-5")
    TheLogo(class="block h-[26px] w-auto shrink-0") 

    div(class="inline-flex gap-8 items-center text-secondary ")
      a(href="/#contacts" class="hover:text-typographyWhite") Contacts
      button(type="button" class="inline-flex gap-4 items-center hover:text-typographyWhite") 
        Bars3Icon(class="w-7 h-7 block")
        span Menu
</template>

<script setup lang="ts">
import TheLogo from "./icons/Logo.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
</script>
