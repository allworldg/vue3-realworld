<template>
  <AppLink
    class="hover:text-[#000000]! no-underline!"
    inactive-class="text-[#b2b2b2]!"
    exact-active-class="text-[#000000]!"
    :to="props.to"
    v-bind="$attrs"
  >
    <slot />
    <input >
  </AppLink>
</template>

<script setup lang="ts">
import AppLink from "@/components/Link/AppLink.vue";
import { RouterLinkProps } from "vue-router";
interface Props {
  to: RouterLinkProps["to"];
}
const props = defineProps<Props>();
</script>

<style></style>
