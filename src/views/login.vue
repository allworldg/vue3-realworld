<template>
  <div class="flex flex-col items-center">
    <h1 class="">Sign In</h1>
    <RouterLink
      to="/register"
      class="text-[#5CB85C]! mb-2.5 font-['Source_Sans_Pro',sans-serif]! text-base!"
    >
      need an account?
    </RouterLink>
    <form
      :model="loginForm"
      class="w-1/3 flex flex-col"
    >
      <fieldset>
        <input
          v-model="loginForm.username"
          class="validator  border border-solid! border-[#d9d9d9]! rounded-xs! text-xl! px-1.5 py-0.5 leading-5"
          type="email"
          placeholder="Email"
          required
        >
        <div class="validator-hint">Enter valid email address</div>
        <input
          v-model="loginForm.password"
          class="validator"
          type="password"
          placeholder="Password"
          required
        >
        <div class="validator-hint">Enter valid Passowrd</div>
        <button
          class="bg-[#5cb85c] text-white! btn"
          type="submit"
        >
          Submit
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LoginForm } from "../type";
const loginForm = ref<LoginForm>({ username: "", password: "" });
</script>

<style></style>
