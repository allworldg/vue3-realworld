<template>
  <div class="max-w-[940px] mx-auto mt-5">
    <div class="flex flex-wrap">
      <div class="flex-[0_0_50%] max-w-[50%] mx-auto">
        <h1 class="text-center text-3xl">Sign In</h1>
        <p class="text-center! my-2.5">
          <RouterLink
            to="/register"
            class="text-[#5CB85C]! font-['Source_Sans_Pro',sans-serif]! text-base! w-full"
          >
            Need an account?
          </RouterLink>
        </p>
        <form
          :model="loginForm"
          class=""
        >
          <fieldset class="flex flex-col mb-4!">
            <input
              v-model="loginForm.username"
              class="validator border border-solid! border-[#d9d9d9]! rounded-sm text-base pl-6 py-3 leading-5"
              type="email"
              placeholder="Email"
              required
            >
            <div class="validator-hint hidden">Enter valid email address</div>
          </fieldset>
          <fieldset class="flex flex-col mb-4!">
            <input
              v-model="loginForm.password"
              class="validator border border-solid! border-[#d9d9d9]! rounded-sm text-base pl-6 py-3 leading-5"
              type="password"
              placeholder="Password"
              required
            >
            <div class="validator-hint hidden">Enter valid Passowrd</div>
          </fieldset>
          <div class="flex">
            <button
              class="bg-[#5cb85c] text-white! btn h-11 w-25 ml-auto"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LoginForm } from "../type";
const loginForm = ref<LoginForm>({ username: "", password: "" });
</script>

<style></style>
