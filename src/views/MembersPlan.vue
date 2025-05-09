<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-cormorant font-bold text-gray-900">
        Join our network
      </h2>
      <p class="mt-4 text-base sm:text-lg font-playfair text-gray-600">
        Join our network to receive our updates, participate in our events,
        contribute to our magazine, and more!
      </p>
    </div>

    <div
      class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
    >
      <div
        v-for="(option, index) in membershipOptions"
        :key="index"
        class="font-playfair bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition duration-300"
      >
        <h3 class="text-2xl font-cormorant font-bold mb-4">
          {{ option.title }}
        </h3>
        <ul class="text-gray-800 mb-4 sm:mb-6 space-y-2">
          <li
            v-for="(item, i) in option.benefits"
            :key="i"
            class="flex gap-2 items-start"
          >
            <div class="mt-1 flex-shrink-0">
              <CircleCheck class="text-emerald-600 w-5 h-5" />
            </div>
            <span>{{ item }}</span>
          </li>
        </ul>
        <div class="text-sm text-gray-600 space-y-1 mb-4 sm:mb-6">
          <p><strong>Renewal Period:</strong> {{ option.renewal }}</p>
          <p><strong>Dues:</strong> {{ option.dues }}</p>
        </div>
        <router-link
          v-if="option.link && option.link.startsWith('/')"
          :to="option.link"
          class="w-full py-2 rounded-lg font-semibold transition text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-center block"
        >
          {{ option.buttonText }}
        </router-link>
        <a
          v-else-if="option.link"
          :href="option.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full py-2 rounded-lg font-semibold transition text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-center block"
        >
          {{ option.buttonText }}
        </a>
        <button
          v-else
          class="w-full py-2 rounded-lg font-semibold transition text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400"
        >
          {{ option.buttonText }}
        </button>
        <p v-if="option.note" class="mt-3 sm:mt-4 text-sm text-gray-500">
          <strong>Note:</strong>
          {{ option.note }}
          <a
            href="mailto:organisation@banglaglocal.org"
            class="underline text-amber-600"
          >
            organisation@banglaglocal.org </a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CircleCheck from "@/components/svg/CircleCheck.vue";
const membershipOptions = [
  {
    title: "Affiliate Member",

    benefits: [
      "Participate in our events",
      "Contribute to our annual Porijaan magazine and website content",
      "Volunteer in local chapters",
    ],
    renewal: "Lifetime",
    dues: "Free",
    buttonText: "Join for Free",
    link: "/contribute/join",
    note: null,
  },
  {
    title: "Internal Member",

    benefits: [
      "Vote in General Body Meetings",
      "Discounted/free access to local events",
      "Membership card provided",
    ],
    renewal: "Annual (July - June)",
    dues: "CAD $10 (Pay what you can)",
    buttonText: "Go Premium",
    link: "https://www.zeffy.com/en-CA/ticketing/bangali-abhibasi-network-a-glocal-linguo-cultural-association-memberships--2025",
    note: "If you are interested in becoming a member and live outside of North America and are having trouble making your payment, please contact organisation@banglaglocal.org.",
  },
];
</script>
