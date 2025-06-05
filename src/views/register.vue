<template>
  <div class="max-w-[940px] mx-auto mt-5">
    <div class="flex flex-wrap">
      <div class="flex-[0_0_50%] max-w-[50%] mx-auto">
        <h1 class="text-center text-3xl">Sign Up</h1>
        <p class="text-center! my-2.5">
          <RouterLink
            to="/login"
            class="text-[#5CB85C]! font-['Source_Sans_Pro',sans-serif]! text-base! w-full"
          >
            Have an account?
          </RouterLink>
        </p>
        <form
          :model="registerForm"
          class=""
        >
          <fieldset class="flex flex-col mb-4!">
            <input
              v-model="registerForm.username"
              class="validator border border-solid! border-[#d9d9d9]! rounded-sm text-base pl-6 py-3 leading-5"
              type="text"
              placeholder="Username"
              required
            />
            <div class="validator-hint hidden">Enter valid username</div>
          </fieldset>

          <fieldset class="flex flex-col mb-4!">
            <input
              v-model="registerForm.email"
              class="validator border border-solid! border-[#d9d9d9]! rounded-sm text-base pl-6 py-3 leading-5"
              type="email"
              placeholder="Email"
              required
            />
            <div class="validator-hint hidden">Enter valid Email</div>
          </fieldset>

          <fieldset class="flex flex-col mb-4!">
            <input
              v-model="registerForm.password"
              class="validator border border-solid! border-[#d9d9d9]! rounded-sm text-base pl-6 py-3 leading-5"
              type="password"
              placeholder="Password"
              required
            />
            <div class="validator-hint hidden">Enter valid Passowrd</div>
          </fieldset>

          <div class="flex">
            <button
              class="bg-[#5cb85c] text-white! btn h-11 w-25 ml-auto"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RegisterForm } from "@/type";
import { ref } from "vue";

const registerForm = ref<RegisterForm>({
  username: "",
  password: "",
  email: "",
});
</script>

<style></style>
