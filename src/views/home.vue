<template>
  <div class="">
    <div
      class="bg-[#5cb85c] shadow-[0px_8px_8px_-8px_inset_rgb(0,0,0,0.3),0px_-8px_8px_-8px_inset_rgb(0,0,0,0.3)] mb-2"
    >
      <div class="flex flex-col py-8">
        <h1
          class="font-[Titillium_Web,sans-serif] text-5xl font-bold text-white mx-auto"
        >
          conduit
        </h1>
        <p
          class="text-2xl font-[SourceSans] text-white mx-auto my-3 font-light"
        >
          A place to share your knowledge.
        </p>
      </div>
    </div>
    <div class="mt-6 max-w-[940px] mx-auto">
      <div class="flex flex-wrap">
        <div class="flex-[0_0_75%] max-w-[75%]">
          <ul class="list-none flex">
            <li class="">
              <button
                class="border-b-[2px] border-solid px-4 py-2 text-sm"
                :class="
                  activeBtn == 0
                    ? 'border-b-[#5cb85c] text-[#5cb85c]'
                    : 'border-transparent text-[#aaa] cursor-pointer hover:text-[#555555]'
                "
                @click="() => (activeBtn = 0)"
              >
                Your Feed
              </button>
            </li>
            <li>
              <button
                class="border-b-[2px] border-solid px-4 py-2 text-sm"
                :class="
                  activeBtn == 1
                    ? 'border-b-[#5cb85c] text-[#5cb85c]'
                    : 'border-transparent text-[#aaa] cursor-pointer hover:text-[#555555]'
                "
                @click="() => (activeBtn = 1)"
              >
                Global Feed
              </button>
            </li>
          </ul>
          <div>
            <div class="mt-[-1px]">
              <div class="border-t-[1px] border-gray-200">
                <div class="my-5 flex">
                  <div class="flex">
                    <a
                      href="123"
                      class="text-[#5CB85C]"
                    >
                      <img
                        src=""
                        class="rounded-[30px] h-[32px] w-[32px]"
                      >
                    </a>
                    <div
                      class=""
                      style="line-height: 1rem"
                    >
                      <div>
                        <a
                          href="test"
                          class="text-[#5CB85C] text-[1rem] hover:underline"
                        >
                          Lysenna35
                        </a>
                      </div>
                      <div class="">
                        <span class="text-[#bbb] text-[0.8rem] font-light">
                          Mon Jun 02 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="ml-auto">right</div>
                </div>
                <div>
                  <h1>title</h1>
                  <div>text</div>
                </div>
                <div>
                  <div>Read more...</div>
                  <div>tags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-[0_0_25%] max-w-[75%]">this is taglist</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticles } from "@/api/article";
import { ArticlesQuery, FeedArticlesQuery } from "@/type";
import { ref } from "vue";
function getArticleList(query: ArticlesQuery) {
  getArticles(query).then((res) => {
    console.log(res);
  });
}
function getFeedArticleList(query: FeedArticlesQuery) {}
const isLogin = ref<boolean>(false);
const activeBtn = ref<number>(0);
</script>

<style></style>
