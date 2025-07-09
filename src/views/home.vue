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
                  <button
                    class="min-w-9 h-6 ml-auto inline-flex items-center justify-center bg-[#fff] border border-[#5CB85C] rounded-[0.2rem] leading-1 cursor-pointer"
                    type="button"
                  >
                    <svg
                      class="shrink-0 icon w-3 h-3 text-[#5cb85c]"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                    >
                      <path
                        d="M917.333333 166.4c-106.666667-106.666667-285.866667-106.666667-392.533333 0l-12.8 17.066667-17.066667-12.8C388.266667 64 209.066667 64 102.4 170.666667s-106.666667 285.866667 0 392.533333l375.466667 375.466667c17.066667 17.066667 42.666667 17.066667 59.733333 0l375.466667-375.466667c110.933333-110.933333 110.933333-290.133333 4.266666-396.8z"
                        p-id="6173"
                      />
                    </svg>
                    <span class="shrink-0 text-xs mt-1 ml-0.5">1</span>
                  </button>
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
