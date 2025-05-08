<template>
  <div
    :key="article.id"
    class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-slate-100 p-6 rounded-lg shadow-lg max-w-6xl w-full relative"
    >
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        @click="$emit('close')"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 class="text-xl text-gray-700 font-semibold mb-4">
        {{ article.title }}
      </h2>

      <div class="relative w-full h-[85vh] rounded overflow-hidden">
        <div
          v-if="loading"
          class="absolute inset-0 flex items-center justify-center z-10 bg-white/80 backdrop-blur-sm"
        >
          <svg
            class="w-12 h-12 animate-spin text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        </div>

        <transition name="fade">
          <iframe
            v-show="!loading"
            :key="article.id + '_iframe'"
            :src="`https://drive.google.com/file/d/${article.id}/preview`"
            class="w-full h-full rounded"
            frameborder="0"
            allowfullscreen
            @load="loading = false"
          ></iframe>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const loading = ref(true);

defineProps({
  article: Object,
});

onMounted(() => {
  document.documentElement.classList.add("no-scroll");
});

onUnmounted(() => {
  document.documentElement.classList.remove("no-scroll");
});
</script>

<style>
.no-scroll {
  overflow: hidden !important;
  position: fixed;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>