<template>
  <a
    v-if="isExternalUrl"
    target="_blank"
    :href="to as string"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    v-slot="{ href, isExactActive, navigate }"
    custom
    v-bind="$props"
  >
    <a
      v-bind="$attrs"
      :href="href"
      :class="isExactActive ? restProps.exactActiveClass : inactiveClass"
      @click="navigate"
    >
      <slot />
    </a>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLinkProps } from "vue-router";

interface Props {
  inactiveClass?: string;
}
const { inactiveClass = "", ...restProps } = defineProps<
  Props & RouterLinkProps
>();
const isExternalUrl = computed(() => {
  return typeof restProps.to === "string" && restProps.to.startsWith("http");
});
</script>

<style></style>
