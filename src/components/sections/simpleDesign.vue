<template lang="pug">
section(class="mb-[100px] md:mb-[200px]")
  div(class="container mx-auto px-1")
    div(class="flex flex-col-reverse items-center gap-[50px] lg:flex-row lg:gap-[390px] lg:justify-center")
      div(class="box max-w-[380px]")
        h2(class="text-[55px] font-bold text-typographyWhite") Simple 
          span(class="text-accent") design 
        h2(class="text-[55px] font-bold text-typographyWhite mb-[10px]") Simple to 
          span(class="text-accent") use
        p(class="text-[15px] font-medium flex items-center gap-[18px] mb-[29px] text-typographyTooltip")
          QuestionMark
          span Click the bullets to read and see the features
        ul(class="flex flex-col gap-[22px]")
          li(
            v-for="({ icon, title, hiddenInfo }, idx) in bullets" 
            :key="idx"
          )
            div
              button(class="flex gap-[11px] items-center mb-[2px]" type="button")
                component(:is="icon" class="w-[23px]")
                p(class="text-typographyWhite text-[16px] font-medium") {{ title }}
              div(class="max-h-0 opacity-0")
                p(class="text-secondary md:ml-[33px] text-[15px] font-medium") {{ hiddenInfo }}
      div(class="flex items-center justify-around max-lg:flex-col")
        img(:src="unitImg" alg="unit-image" class="h-auto max-h-[400px] lg:max-h-[850px]")
</template>

<script setup lang="ts">
import QuestionMark from "@/components/icons/QuestionMark.vue";
import Battery from "@/components/icons/Battery.vue";
import Light from "@/components/icons/Light.vue";
import Liquid from "@/components/icons/Liquid.vue";
import Eye from "@/components/icons/Eye.vue";
import Star from "@/components/icons/Star.vue";
import WiFi from "@/components/icons/WiFi.vue";

import unitImg from "@/assets/images/unit.png";

const bullets = [
  {
    icon: Battery,
    title: "Battery or Wall Powered",
    hiddenInfo:
      "The unit is powered with a 12 hour battery. To charge the battery you simply pull out the battery... The Geysier can also be powered by the wall",
  },
  { icon: Light, title: "LED Lights", hiddenInfo: "" },
  { icon: Liquid, title: "Easy Refill", hiddenInfo: "" },
  { icon: Eye, title: "Optional Eye-catching Sign", hiddenInfo: "" },
  { icon: Star, title: "Steel Tube", hiddenInfo: "" },
  { icon: WiFi, title: "IoT Connected", hiddenInfo: "" },
];
</script>
