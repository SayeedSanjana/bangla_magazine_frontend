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
            class="text-4xl md:text-7xl text-red-900 font-marck italic tracking-wide mb-4 text-center pt-24"
          >
            এসো হে বৈশাখ, এসো এসো ...
          </p>
          <p
            class="text-4xl md:text-7xl text-red-900 font-marck italic tracking-wide mb-4 text-right py-1"
          >
            - ১৪৩২
          </p>
        </div>
      </div>
    </div>

    <!-- 🔹 Overlapping Section (Event Details) -->

    <!--Event Picture -->
    <div class="pb-8 md:pb-16 pt-8 md:pt-16 py-8 bg-white">
      <div class="relative w-full max-w-6xl mx-auto px-6">
        <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
          Esho He Boishakh: A Celebration of New Beginnings
        </h2>
        <div
          class="flex flex-col md:flex-row items-center justify-center p-4 bg-white"
        >
          <!-- Image Section -->
          <div class="w-full md:w-1/2 p-4">
            <img
              src="@/assets/PohelaBaishakh/img1.gif"
              alt="Pohela Boishakh Celebration"
              class="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div class="text-gray-500 text-sm text-center pt-3">
              Illustration By:
              <span class="font-semibold">Sanjana Sayeed</span>
            </div>
          </div>

          <!-- Text Section -->
          <div class="w-full md:w-1/2 p-4">
            <p class="text-gray-700 text-base">
              <span class="text-amber-600">Pohela Boishakh </span>, the Bengali
              New Year, is a vibrant celebration of culture, tradition, and
              hope. It marks a time when people come together to welcome new
              beginnings with colorful festivities, traditional music, and
              heartfelt gatherings. Streets come alive with fairs, parades, and
              the aroma of delicious Bengali food.
            </p>
            <p class="mt-4">
              Dressed in white and red, people sing
              <span class="text-amber-600">"Esho he Boishakh, esho esho"</span>
              — calling the new year with open arms and joyful hearts. It's a
              time to sweep away the sorrows of the past and step into a future
              filled with new dreams, unity, and renewal. Pohela Boishakh is
              more than just a date on the calendar — it’s a deep, soulful
              reminder of identity, heritage, and the timeless spirit of Bangla.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- writing -->
    <div class="relative bg-cover bg-center bg-no-repeat py-16 bg-img">
      <!-- Overlay (optional for making text readable) -->
      <div class="absolute inset-0 bg-white bg-opacity-40"></div>

      <!-- Content Wrapper -->
      <div
        class="relative flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 max-w-screen-xl mx-auto px-6"
      >
        <!-- Full width for Articles now -->
        <div class="w-full space-y-8">
          <!-- Section Title -->
          <div class="text-center mb-10">
            <h2
              class="text-4xl md:text-5xl text-midnight-sapphire font-cormorant mb-4"
            >
              Echoes of Boishakh: Words that Celebrate a New Dawn
            </h2>
            <p class="text-gray-700 max-w-2xl mx-auto text-base">
              Pohela Boishakh inspires countless hearts to weave stories, poems,
              and reflections. Here, we present beautiful writings that capture
              the soul of new beginnings, cherished traditions, and the timeless
              spirit of Bangla.
            </p>
          </div>

          <!-- Writer Articles -->
          <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 border-b pb-6 group"
            v-for="(article, index) in articles"
            :key="index"
          >
            <div class="w-full sm:w-3/4">
              <!-- Clickable Title -->
              <button
                @click="goToArticle(article.slug)"
                class="text-2xl text-left font-semibold text-midnight-sapphire transition-all duration-300 hover:text-amber-600 font-cormorant cursor-pointer"
              >
                {{ article.title }}
              </button>

              <!-- Author Info -->
              <div class="flex items-center space-x-3 mt-3">
                <img
                  :src="article.authorImage"
                  alt="Author image"
                  class="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border border-gray-300 shadow-sm"
                />
                <p class="text-xl font-semibold text-gray-800 font-cormorant">
                  {{ article.author }}
                </p>
              </div>

              <p class="text-gray-600 mt-2 text-base">
                {{ article.description }}
              </p>
              <p class="text-burnt-amber text-sm mt-1">
                {{ article.date }}
              </p>
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
import image6 from "../assets/PohelaBaishakh/img4.png";
import image5 from "../assets/PohelaBaishakh/image.png";
import image3 from "@/assets/members/ArchismanChaudhuri_1.png";
import image4 from "@/assets/members/tazrin-bari.jpeg";

export default {
  name: "PohelaBaishakhView",
  components: {
    CookieConsent,
  },

  data() {
    return {
      currentIndex: 1, // Middle image index
      autoSlideInterval: null,

      articles: [
        {
          title: "শুভ নববর্ষ ১৪৩২ । Bonne année.",
          author: "Archisman Chaudhuri",
          description:
            "জাপানী ভাষার প্রখ্যাত হাইকু কবি মাৎসুও বাশোর এই হাইকুটি একটি সহজ সত্যের সম্মুখীন করায়..",
          date: "14th April, 2025",
          image: image6,
          authorImage: image3,
          slug: "japani-bhashai-prokheto",
        },
        {
          title: "ধূসর বসন্তের দেশে সাদা শাড়ি লাল পাড়ের খোঁজে",
          author: "Tazreen Jahan Bari",
          description:
            "এপ্রিলের নিস্তব্ধ মধ্যদুপুরে বারান্দার গ্রিল গলে ঘরের দেওয়াল বেয়ে গড়াতে থাকা সূর্যের রশ্মি ..",
          date: "14th April, 2025",
          image: image5,
          authorImage: image4,
          slug: "dhushor-boshonter-deshe",
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
      this.$router.push(`/events/pohela-baishakh/${slug}`);
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
  background-image: url("../assets/PohelaBaishakh/img5.png");
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
