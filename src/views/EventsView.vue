<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- Hero Background Section -->
    <div
      class="relative h-[40vh] md:h-[50vh] xl:h-[55vh] bg-cover bg-center background-img"
    ></div>

    <!-- Section Hosted -->
    <div class="text-center px-4 py-16 max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-6xl text-rose-900 font-cormorant">
        Events We’ve Hosted
      </h2>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Take a look at the vibrant celebrations we've organized; each one a
        reflection of tradition, creativity, and shared joy.
      </p>
    </div>

    <!-- Border After Hosted Section -->
    <div class="border-t border-gray-300 max-w-6xl mx-auto mb-12"></div>

    <!-- Hosted Feature Cards with Pagination -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-12 md:px-4 pb-10"
    >
      <div
        v-for="(feature, index) in paginatedHosted"
        :key="index"
        class="relative rounded overflow-hidden shadow-lg flex flex-col group transition-all duration-300 hover:scale-[1.02]"
      >
        <div
          class="absolute inset-0 before:absolute before:inset-0 before:opacity-0 group-hover:before:opacity-30 before:transition-all before:duration-500 before:z-0"
        ></div>

        <div class="relative z-10">
          <img
            :src="feature.image"
            :alt="feature.heading"
            class="w-full h-64 md:h-80 object-center object-cover"
          />
          <div
            class="absolute top-0 right-0 bg-rose-900 px-3 py-2 text-xs text-white mt-3 mr-3 rounded flex items-center gap-1"
          >
            <!-- 🗓️ Simple calendar SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M7 2v2H5a2 2 0 0 0-2 2v1h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm13 6H4v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 4H6v2h12v-2z"
              />
            </svg>
            {{ feature.date }}
          </div>
        </div>
        <div class="px-6 py-4 mb-auto relative z-10 bg-white">
          <h4 class="font-medium text-lg mb-2">
            <span
              :class="[
                'text-4xl font-semibold',
                index % 2 === 0 ? 'text-midnight-sapphire' : 'text-amber-600',
              ]"
            >
              {{ getStyledHeading(feature.heading).first }}
            </span>
            <span class="text-lg font-semibold">
              {{ getStyledHeading(feature.heading).rest }}
            </span>
          </h4>

          <p class="text-gray-500 text-sm">
            {{ feature.description }}
          </p>
        </div>
        <div class="px-6 py-4 bg-gray-100 flex justify-start relative z-10">
          <router-link
            :to="feature.route"
            class="text-sm font-medium text-white bg-slate-500 px-5 py-2 rounded-md hover:bg-rose-900 transition duration-300"
          >
            View Event Details...
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center items-center space-x-4 pb-6">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-sm text-gray-700">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        @click="currentPage++"
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <!-- Section Participated -->
    <div class="text-center px-4 py-16 max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-6xl text-rose-900 font-cormorant">
        Events We’ve Participated In
      </h2>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore the inspiring moments we've shared as proud participants,
        collaborating with diverse communities, exchanging cultural ideas, and
        contributing our voice to celebrations beyond our own.
      </p>
    </div>

    <div class="border-t border-gray-300 max-w-6xl mx-auto mb-12"></div>

    <!-- Participated Feature Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 pb-10"
    >
      <div
        v-for="(feature, index) in paginatedParticipated"
        :key="index"
        class="relative rounded overflow-hidden shadow-lg flex flex-col group transition-all duration-300 hover:scale-[1.02]"
      >
        <div
          class="absolute inset-0 before:absolute before:inset-0 before:opacity-0 group-hover:before:opacity-30 before:transition-all before:duration-500 before:z-0"
        ></div>

        <div class="relative z-10">
          <img
            :src="feature.image"
            :alt="feature.heading"
            class="w-full h-64 md:h-80 object-center object-cover"
          />
          <div
            class="absolute top-0 right-0 bg-rose-900 px-3 py-2 text-xs text-white mt-3 mr-3 rounded flex items-center gap-1"
          >
            <!-- 🗓️ Simple calendar SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M7 2v2H5a2 2 0 0 0-2 2v1h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm13 6H4v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 4H6v2h12v-2z"
              />
            </svg>
            {{ feature.date }}
          </div>
        </div>
        <div class="px-6 py-4 mb-auto relative z-10 bg-white">
          <h4 class="font-medium text-lg mb-2">
            <span
              :class="[
                'text-4xl font-semibold',
                index % 2 === 0 ? 'text-midnight-sapphire' : 'text-amber-600',
              ]"
            >
              {{ getStyledHeading(feature.heading).first }}
            </span>
            <span class="text-lg font-semibold">
              {{ getStyledHeading(feature.heading).rest }}
            </span>
          </h4>

          <p class="text-gray-500 text-sm">
            {{ feature.description }}
          </p>
        </div>
        <div class="px-6 py-4 bg-gray-100 flex justify-start relative z-10">
          <router-link
            :to="feature.route"
            class="text-sm font-medium text-white bg-slate-500 px-5 py-2 rounded-md hover:bg-rose-900 transition duration-300"
          >
            View Event Details...
          </router-link>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center space-x-4 pb-6">
      <button
        @click="currentPageParticipated--"
        :disabled="currentPageParticipated === 1"
        class="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-sm text-gray-700">
        Page {{ currentPageParticipated }} of {{ totalPagesParticipated }}
      </span>
      <button
        @click="currentPageParticipated++"
        :disabled="currentPageParticipated >= totalPagesParticipated"
        class="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <!-- Join Our Network Section -->
    <div
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-8 mt-16"
    >
      <div class="absolute inset-0 bg-gray-900 opacity-85"></div>
      <div
        class="container md:mx-auto py-6 px-4 space-y-3 lg:px-32 relative z-10"
      >
        <h2
          class="text-4xl md:text-5xl font-bold mb-2 text-white font-cormorant pt-6"
        >
          Join Our Network
        </h2>
        <p class="text-white text-lg text-justify my-2 mb-6">
          Join - Bangali Abhibasi Network: a Glocal Linguo-cultural Association
        </p>
        <button
          @click="join"
          aria-label="Contribute to the community"
          class="text-base px-4 py-3 border-2 border-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-white hover:to-white hover:text-yellow-600 hover:border-yellow-600 transition duration-300 ease-in-out"
        >
          Join Our Network
        </button>
      </div>
    </div>
    <CookieConsent />
  </div>
</template>

<script>
import CookieConsent from "../components/CookieConsent.vue";
import img1 from "@/assets/img/211.jpg";
import img2 from "@/assets/WomenHistoryMonth/women1.png";
import img3 from "@/assets/PohelaBaishakh/img1.gif";
import img4 from "@/assets/birth-anniversary/image.png";
import img5 from "@/assets/img/rabindra-nazrul.png";
import img6 from "@/assets/interactiveSession/habiba-zaman-book.jpg";
import img7 from "@/assets/img/shoilpik2.jpeg";

export default {
  name: "EventsView",
  components: {
    CookieConsent,
  },

  data() {
    return {
      itemsPerPage: 6,
      currentPage: 1,
      currentPageParticipated: 1,
      features: [
        {
          date: "1st March 2025",
          heading: "Women History Month",
          description:
            "Women's History Month, celebrated each March, honors the achievements and contributions of women throughout history. It highlights their impact across fields like politics, science, the arts, and social change. This month invites reflection on the women who’ve shaped our world and continue to inspire future generations.",
          image: img2,
          route: "/events/women-history-month",
        },
        {
          date: "14th April 2025",
          heading: "Noboborsho",
          description:
            "Pohela Boishakh, the Bengali New Year, is a vibrant celebration of new beginnings, culture, and community. People welcome the year with traditional music, fairs, and festive gatherings, dressed in red and white. It’s a soulful reminder of heritage, unity, and the enduring spirit of Bangla.",
          image: img3,
          route: "/events/pohela-baishakh",
        },
        {
          date: "Throughout the Year",
          heading: "Birth Anniversary",
          description:
            "We commemorate the birth anniversaries of iconic Bengali figures who shaped our culture, art, and history. Through community tributes, performances, and storytelling, we reflect on their lasting legacy and inspiration.",
          image: img4,
          route: "/events/birth-anniversary",
        },
        {
          date: "25th May 2025",
          heading: "Rabindra-Nazrul Shondha",
          description:
            "A beautiful evening celebrating the timeless works of Rabindranath Tagore and Kazi Nazrul Islam through music, dance, and shared reflection. This heartfelt gathering brings the community together to honor two pillars of Bengali literature and culture, showcasing their enduring impact on the arts and our collective identity.",
          image: img5,
          route: "/events/rabindra-nazrul-shondha",
        },
        {
          date: "12th July 2025",
          heading: "Interactive Session with Dr. Habiba",
          description:
            "Join us for an inspiring evening as we celebrate the launch of this powerful memoir that explores identity, belonging, and the immigrant experience through a deeply personal Bangladeshi-Canadian lens.",
          image: img6,
          route: "/events/interactive-discussion-habiba-zaman",
        },
      ],
      featuresParticipated: [
        {
          date: "26th Feb 2025",
          heading: "Bhasha Dibosh",
          description:
            "21st February is not just about remembrance—it’s also about celebrating the languages that make us who we are. Join us for an evening of tribute as we honor the martyrs and embrace the beauty of linguistic and cultural identity.",
          image: img1,
          route: "/events/21stFebruary-International-Mother-Language-Day",
        },
        {
          date: "19th July 2025",
          heading: "Shoilpik Shondha",
          description:
            "We’re excited to take part in Shoilpik Sondhya, a vibrant celebration of Bengali culture, music, and theatre, bringing together artists and audiences from across Canada. Join us for an evening filled with rhythm, stories, and shared heritage.",
          image: img7,
          route: "/events/shoilpik-shondha",
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.features.length / this.itemsPerPage);
    },
    paginatedHosted() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.features.slice(start, start + this.itemsPerPage);
    },
    totalPagesParticipated() {
      return Math.ceil(this.featuresParticipated.length / this.itemsPerPage);
    },
    paginatedParticipated() {
      const start = (this.currentPageParticipated - 1) * this.itemsPerPage;
      return this.featuresParticipated.slice(start, start + this.itemsPerPage);
    },
    styledHeading() {
      const text = "Shoilpik Shondha"; 
      return {
        first: text.charAt(0),
        rest: text.slice(1),
      };
    },
  },
  methods: {
    getStyledHeading(text) {
      return {
        first: text.charAt(0),
        rest: text.slice(1),
      };
    },
    join() {
      this.$router.push("/contribute/membership");
    },
  },
};
</script>

<style scoped>
.background-img {
  background-image: url("../assets/img/shoilpikShondha.png");
}
.bg-img {
  background-image: url("../assets/img/bg-contribute.png");
}
</style>
