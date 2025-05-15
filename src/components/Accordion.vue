<template>
  <section class="w-full">
    <header>
      <button
        type="button"
        class="flex items-center justify-between w-full p-4 sm:p-5 font-medium text-gray-700 rounded-xl border border-gray-200 text-base sm:text-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 gap-3"
        @click="$emit('toggle')"
        :aria-expanded="open"
      >
        <div class="flex items-center gap-2">
          <slot name="icon">
            <svg class="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </slot>
          <span>{{ title }}</span>
        </div>

        <svg
          class="w-3 h-3 transform transition-transform duration-300"
          :class="{ 'rotate-180': open }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>
    </header>

    <section
      v-show="open"
      class="p-5 border border-t-0 border-gray-200 bg-slate-100 text-gray-700 text-sm md:text-base"
    >
      <slot />
    </section>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>