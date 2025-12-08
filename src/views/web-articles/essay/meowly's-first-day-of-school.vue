<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- Hero Section -->
    <header class="relative w-full h-[65vh] overflow-hidden">
      <img
        :src="heroBackgroundEssay"
        alt="Webb Articles Banner"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-xs z-10 flex flex-col items-center justify-center text-center px-6"
      >
        <div class="text-white font-cormorant max-w-3xl animate-fadeInUp">
          <h1
            class="text-6xl md:text-5xl font-bold mb-4 drop-shadow-lg text-honey-gold"
          >
            Web Articles & Features
          </h1>
          <h1
            class="text-6xl md:text-5xl font-bold mb-4 drop-shadow-lg text-light-red"
          >
            Essays
          </h1>
          <p class="text-lg md:text-2l italic font-light drop-shadow">
            A curated selection of thought-provoking essays that delve into
            diverse topics, offering fresh perspectives and deep insights.
          </p>
        </div>
      </div>
    </header>

    <div class="my-8 py-8 mb-0 mx-auto max-w-screen-xl">
      <div class="bg-white text-gray-900 font-sans">
        <!-- Main Container -->
        <div class="max-w-5xl mx-auto px-4 py-12">
          <!-- Article Meta Info -->
          <div class="text-gray-600 text-sm flex justify-between items-center">
            <p>7 December 2025 • Sunday</p>
          </div>

          <!-- Article Title -->
          <h1 class="text-4xl font-bold mt-2">Meowly's First Day of School</h1>

          <!-- Authors Section -->
          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center">
              <img
                src="@/assets/authorImage/aliviaChowdhury.jpg"
                class="rounded-full h-28 w-28 mr-3 object-cover"
                alt="Author 2"
              />
              <div>
                <p class="text-lg font-semibold">Alivia Chowdhury</p>
                <p class="text-sm text-gray-600"></p>
              </div>
            </div>
          </div>

          <!-- Article Content -->
          <div class="mt-8">
            <p class="mt-8 text-gray-700">
              Meowly was a cute and shy cat. She was 5 years [b]old. She had an
              owner. The owner’s name was Sally. Sally was 19 years old. Meowly
              went to school. But she was not ready for school yet. When her
              teacher asked a question, she got it wrong. But her teacher was a
              nice cat. When it was snack time, her owner did not know that she
              needed snacks. So Meowly’s teacher gave some snacks to her. When
              it was recess time, she rushed to her favorite ride. It is the
              swing of course. When it was time to go home, before going she got
              homework. When Meowly got home, she did her homework before the
              next day. She told Sally that it was a wonderful day and they were
              so happy
            </p>
            <div class="flex flex-col mt-8 justify-center items-center mt-4">
              <img
                src="@/assets/WebPrintArticles/essay/AliviaChowdhuryEssay03.jpg"
                class="w-full md:w-4/5 rounded-lg shadow-lg"
                alt="Featured Image"
              />

              <p class="text-sm mt-1 text-center">
                <span class="font-semibold">Image courtesy: </span>Author
              </p>
            </div>
          </div>
          <div class="mt-24">
            <h1
              class="text-3xl text-midnight-sapphire font-cormorant font-semibold"
            >
              Author's Bio
            </h1>

            <p class="mt-2 text-gray-700">
              Alivia Chowdhury is a little girl who loves to draw and dance. She
              loves going to school and playing with her friends and her little
              sister.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-8"
    >
      <!-- Overlay for Background Image -->
      <div class="absolute inset-0 bg-gray-900 opacity-85"></div>

      <!-- Tooltip for Image Credit -->
      <div
        class="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Background Image by:
        <a
          class="hover:underline"
          href="https://ca.pinterest.com/pin/2251868554953302/"
          >https://ca.pinterest.com/pin/2251868554953302/</a
        >
        <div
          class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"
        ></div>
      </div>

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
import CookieConsent from "../../../components/CookieConsent.vue";
import heroBackgroundEssay from "@/assets/WebPrintArticles/webPrintArticlesCover.png";

export default {
  name: "meowly's-first-day-of-school",
  components: {
    CookieConsent,
  },

  data() {
    return {
      heroBackgroundEssay,
    };
  },
  methods: {
    join() {
      this.$router.push("/contribute/membership");
    },
  },
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("@/assets/img/bg-contribute.png");
}
</style>
