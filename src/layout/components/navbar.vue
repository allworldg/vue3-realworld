<template>
  <nav class="py-2 px-4">
    <div
      id="test"
      class="flex mr-auto ml-auto pl-[15px] pr-[15px] max-w-[940px]"
    >
      <RouterLink
        class="self-start text-2xl font-['Titillium_Web',sans-serif]! pt-0 mr-4 text-[#5CB85C]!"
        to="/"
      >
        conduit
      </RouterLink>
      <ul class="flex flex-1 py-1 justify-end">
        <li class="">
          <NavLink to="/">home</NavLink>
        </li>
        <li class="ml-3">
          <NavLink to="/login">Sign In</NavLink>
        </li>
        <li class="ml-3">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavLink from "@/components/Link/NavLink.vue";
</script>

<style></style>
