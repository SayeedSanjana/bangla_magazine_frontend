<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- Banner -->
    <!-- 🔹 First Section (Background Image with Quote) -->
    <div class="relative h-[50vh] bg-cover bg-center background-img opacity-70">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-gray-900 opacity-20"></div>

      <!-- Content Wrapper -->
      <div
        class="relative z-10 flex flex-col justify-center items-center text-center lg:py-16 py-12 px-4"
      >
        <!-- Quote -->
        <div class="fade-in">
          <p
            class="text-4xl md:text-7xl text-midnight-sapphire font-marck italic tracking-wide mb-4 text-center pt-24"
          >
            Women's History Month
          </p>
          <p
            class="text-4xl md:text-7xl text-midnight-sapphire font-marck italic tracking-wide mb-4 text-right py-1"
          >
            - 2025
          </p>
        </div>
      </div>
    </div>

    <!-- 🔹 Overlapping Section (Event Details) -->

    <!--Event Picture -->
    <div class="pb-8 md:pb-16 pt-8 md:pt-16 py-8 bg-white">
      <div class="relative w-full max-w-6xl mx-auto px-6">
        <h2
          class="text-4xl md:text-6xl mb-8 text-rich-mahagony font-cormorant pt-24"
        >
          Celebrating Women's History Month: Honoring the Voices of Women
        </h2>
        <div
          class="flex flex-col md:flex-row items-center justify-center p-4 bg-white"
        >
          <!-- Image Section -->

          <!-- Text Section -->
          <div class="w-full md:w-1/2 p-4">
            <p class="text-gray-700 text-base">
              Women's History Month is an annual celebration that recognizes the
              invaluable contributions and achievements of women throughout
              history. Observed each March, it serves as a time to honor women
              who have made an impact across various fields—whether in politics,
              science, the arts, business, or social movements. From historical
              figures to contemporary pioneers, Women's History Month invites us
              to reflect on the stories of women who have shaped our world and
              continue to inspire future generations.
            </p>
            <p class="mt-4">
              Join us in celebrating the strength, resilience, and influence of
              women from all walks of life. This month is dedicated to
              acknowledging both trailblazing leaders and everyday heroes whose
              work often goes unrecognized. Explore their stories, learn about
              the milestones they’ve achieved, and be inspired to contribute to
              building a more inclusive and equal world where everyone can
              thrive.
            </p>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <img
              src="@/assets/WomenHistoryMonth/women1.png"
              alt="Pohela Boishakh Celebration"
              class="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div class="text-gray-500 text-sm text-center pt-3">
              Illustration By:
              <span class="font-semibold">Sanjana Sayeed</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- writing -->
    <div class="relative bg-cover bg-center bg-no-repeat py-28 bg-img">
      <!-- Overlay (optional for making text readable) -->
      <div class="absolute inset-0 bg-white bg-opacity-40"></div>

      <!-- Content Wrapper -->
      <div
        class="relative flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 max-w-screen-xl mx-auto px-6"
      >
        <!-- Full width for Articles now -->
        <div class="w-full space-y-8">
          <!-- Section Title -->
          <div class="mb-10">
            <h2
              class="text-4xl md:text-5xl text-midnight-sapphire font-cormorant mb-4"
            >
              Inspiring Stories & Articles About Women
            </h2>
            <p class="text-gray-700 mx-auto text-base">
              Dive into a collection of thought-provoking articles that
              highlight the achievements, challenges, and journeys of women from
              all walks of life. From historical narratives to modern-day
              triumphs, these stories explore the diverse experiences of women
              who continue to inspire, lead, and make an impact in every corner
              of the world. Explore their stories, gain new perspectives, and be
              empowered by the voices of women everywhere.
            </p>
          </div>

          <!-- Writer Articles -->
          <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 border-b pb-6 group"
            v-for="(article, index) in articles"
            :key="index"
          >
            <div class="w-full sm:w-3/4">
              <!-- Clickable Title and Author Info Side by Side -->
              <div class="flex items-center space-x-4">
                <!-- Author Image -->
                <img
                  :src="article.authorImage"
                  alt="Author image"
                  class="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border border-gray-300 shadow-sm"
                />

                <!-- Title and Author Info -->
                <div class="flex flex-col">
                  <!-- Clickable Title -->
                  <button
                    @click="goToArticle(article.slug)"
                    class="text-2xl text-left font-semibold text-midnight-sapphire transition-all duration-300 hover:text-amber-600 font-cormorant cursor-pointer"
                  >
                    {{ article.title }}
                  </button>

                  <!-- Author Info -->
                  <p
                    class="text-xl font-semibold text-gray-800 font-cormorant mt-1"
                  >
                    {{ article.author }}
                  </p>
                  <!-- Description -->
                  <p class="text-gray-600 mt-4 text-base">
                    {{ article.description }}
                  </p>

                  <!-- Date -->
                  <p class="text-burnt-amber text-sm mt-1">
                    {{ article.date }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Article Image (Clickable) -->
            <button
              @click="goToArticle(article.slug)"
              class="focus:outline-none"
            >
              <img
                :src="article.image"
                alt="Article image"
                class="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img1 bg-cover bg-center h-96 group pt-8"
    >
      <!-- Overlay for Background Image -->
      <div class="absolute inset-0 bg-gray-900 opacity-85"></div>

      <!-- Content Overlay -->
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
          class="text-base px-4 py-3 border-2 border-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:border-2 lg:hover:text-honey-gold transition duration-300 ease-in-out"
        >
          Join Our Network
        </button>
      </div>
    </div>
    <CookieConsent />
  </div>
</template>

<script>
import { ref } from "vue";
import CookieConsent from "../components/CookieConsent.vue";
import image6 from "../assets/WomenHistoryMonth/image.png";
import image3 from "@/assets/members/Madhulagna Halder.jpg";

export default {
  name: "WomenHistoryMonthView",
  components: {
    CookieConsent,
  },

  data() {
    return {
      currentIndex: 1, // Middle image index
      autoSlideInterval: null,

      articles: [
        {
          title:
            "Double Work of Care: Choice, Labour, and Women’s Struggle on the 48 th International Women’s Day",
          author: "Madhulagna Halder",
          description:
            "For the social media revolutionized generation, experiencing the world today..",
          date: "15th April, 2025",
          image: image6,
          authorImage: image3,
          slug: "for-social-media",
        },
      ],
    };
  },
  methods: {
    join() {
      this.$router.push("/join");
    },

    goToArticle(slug) {
      if (!slug) {
        console.error("Article slug is missing!");
        return;
      }
      this.$router.push(`/events/women-month-articles/${slug}`);
    },
  },
};
</script>

<style scoped>
button {
  transition: all 0.3s ease-in-out;
}
video {
  transition: transform 0.3s ease-in-out;
}

.background-img {
  background-image: url("../assets/WomenHistoryMonth/women2.png");
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("../assets/PohelaBaishakh/img2.png");
}
.bg-img1 {
  background-image: url("../assets/img/bg-contribute.png");
}
.container-class {
  overflow: visible !important; /* Ensure the image isn't clipped */
}
.rounded-2xl {
  border-radius: 20px !important; /* Ensures proper rounding */
}
</style>
