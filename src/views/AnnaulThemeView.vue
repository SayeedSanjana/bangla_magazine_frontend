<template>
  <section class="">
    <div class="md:mx-auto flex-grow min-h-screen">
      <div
        class="bg-gradient-to-r from-regal-blue to-gray-200 h-auto px-2 rounded-lg shadow pt-16 mb:pt-16 py-4"
      >
        <div class="md:container md:mx-auto px-4 lg:px-32">
          <div class="mb-8">
            <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
              Annual Theme
            </h2>
            <p
              class="text-2xl md:text-4xl mb-2 text-amber-600 font-cormorant font-semibold"
            >
              Bangla-French-Crossings
            </p>

            <p class="text-gray-600 text-base text-justify pt-4">
              Our inaugural issue explores the rich connections between Bangla
              and French languages, cultures, and histories. We invite
              submissions that delve into the intersections of these two
              worlds—through literature, translation, art, or lived experiences.
              Whether it’s exploring cultural exchanges, artistic
              collaborations, or personal stories, we seek contributions that
              highlight the unique interactions between these vibrant cultures.
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <!-- Wave Svg -->

      <div class="wave-divider bg-gradient-to-r from-amber-50 to-blue-50">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <!-- Gradient Definition -->
          <defs>
            <linearGradient
              id="gradient-fill"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style="stop-color: #e2e9ed; stop-opacity: 1" />
              <!-- Ending color gray-200 #e5e7eb -->
              <stop
                offset="100%"
                style="stop-color: #e5e7eb; stop-opacity: 1"
              />
            </linearGradient>
          </defs>

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#gradient-fill)"
          ></path>
        </svg>
      </div>
      <!-- Annual Theme Section -->
      <div class="bg-gradient-to-r from-amber-50 to-blue-50 pt-8 pb-8 lg:pb-32">
        <div class="md:container md:mx-auto px-4 lg:px-32">
          <!-- <h2
            class="text-3xl md:text-5xl text-midnight-sapphire font-cormorant mb-8"
          >
            2. Annual Theme
          </h2> -->
          <div
            class="flex flex-col lg:flex-row items-start justify-between lg:space-x-8"
          >
            <!-- Left Section: Sticky on Scroll -->
            <div class="w-full lg:w-1/2 md:pr-6 lg:sticky lg:top-0 self-start">
              <!-- <p
                class="text-amber-600 text-2xl md:text-3xl font-cormorant text-justify pb-4 font-semibold"
              >
                Bangla-French-Crossings
              </p> -->

              <div class="flex justify-center items-center">
                <img
                  src="../assets/svg/annual.svg"
                  alt="SVG Image 1"
                  class="lg:h-full lg:w-full h-96"
                />
              </div>
              <div class="text-gray-500 text-sm text-center pt-3">
                Illustration By:
                <span class="font-semibold">Rudranil Raha</span>
              </div>
            </div>

            <!-- Right Section: Accordion -->
            <div class="lg:w-1/2 w-full lg:overflow-y-auto my-4">
              <div class="pt-4">
                <p
                  class="text-2xl md:text-4xl mb-2 text-midnight-sapphire font-cormorant text-center"
                >
                  Become a part of the thriving community
                </p>
                <!-- <p class="text-gray-700 text-xl text-justify p-4">
                  Become part of the thriving community
                </p>
                <p class="text-gray-600 text-base text-justify p-4">
                  Our inaugural issue explores the rich connections between
                  Bangla and French languages, cultures, and histories. We
                  invite submissions that delve into the intersections of these
                  two worlds—through literature, translation, art, or lived
                  experiences. Whether it’s exploring cultural exchanges,
                  artistic collaborations, or personal stories, we seek
                  contributions that highlight the unique interactions between
                  these vibrant cultures.
                </p> -->
                <div id="accordion-open" class="p-3 w-full">
                  <div v-for="(item, index) in accordionItems" :key="index">
                    <h2 :id="`accordion-open-heading-${index}`">
                      <button
                        type="button"
                        class="flex items-center justify-between w-full p-4 sm:p-5 font-medium text-gray-400 rounded-xl border text-base border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                        @click="toggleAccordion(index)"
                        :aria-expanded="isOpen(index)"
                        :aria-controls="`accordion-open-body-${index}`"
                      >
                        <span class="flex items-center text-gray-700">
                          <svg
                            class="w-5 h-5 me-2 shrink-0 text-midnight-sapphire"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          {{ item.title }}
                        </span>
                        <svg
                          v-if="isOpen(index)"
                          class="w-3 h-3 rotate-180 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5L5 1 1 5"
                          />
                        </svg>
                        <svg
                          v-else
                          class="w-3 h-3 shrink-0"
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
                    </h2>
                    <div
                      v-show="isOpen(index)"
                      :id="`accordion-open-body-${index}`"
                      class="p-5 border border-b-0 border-gray-200 bg-slate-100 text-gray-700 text-sm md:text-base"
                      :aria-labelledby="`accordion-open-heading-${index}`"
                      v-html="item.content"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Submission Form Section -->

      <div
        class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-16"
      >
        <!-- Overlay for Background Image -->
        <div class="absolute inset-0 bg-gray-900 opacity-85"></div>

        <!-- Tooltip for Image Credit -->
        <!-- <div
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
        </div> -->

        <!-- Content Overlay -->
        <div
          class="container md:mx-auto py-6 px-4 space-y-3 lg:px-32 relative z-10"
        >
          <h2
            class="text-4xl md:text-5xl font-bold mb-2 text-white font-cormorant pt-6"
          >
            Join Now...
          </h2>
          <p class="text-white text-lg text-justify my-2 mb-6">
            Share your work and become a valued member of our network!
          </p>
          <button
            @click="submissionForm"
            aria-label="Contribute to the community"
            class="text-base px-4 py-3 border-2 border-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:border-2 lg:hover:text-honey-gold transition duration-300 ease-in-out"
          >
            Contribute to the Magazine
          </button>
        </div>
      </div>
    </div>
    <!-- Cookie Consent Popup -->
    <CookieConsent />
  </section>
</template>

<script>
import CookieConsent from "../components/CookieConsent.vue";
export default {
  name: "AnnualThemeView",
  components: {
    CookieConsent,
  },

  data() {
    return {
      activeIndex: null,
      accordionItems: [
        {
          title: "Cultural Translations",
          content:
            "Explore literary or artistic translations between Bangla and French. How do these cultures interpret each other through art, language, and media?",
        },
        {
          title: "Colonial Histories & Legacies",
          content:
            "Analyze the colonial history of French Bengal and its impact on the region's cultural development. What traces of this history remain today?",
        },
        {
          title: "Bilingual & Creole Expressions",
          content:
            "Submit works in Bangla, French, or Creole forms that reflect the fluid, multilingual nature of these cultures.",
        },
        {
          title: "Personal Narratives",
          content:
            "Share your lived experience navigating Bangla-French cultural intersections. How has your identity been shaped by both influences?",
        },
        {
          title: "Literary & Artistic Dialogues",
          content:
            "Examine how Bangla and French authors, artists, or filmmakers have engaged with each other's works. What unique perspectives or new interpretations arise from this engagement?",
        },
        {
          title: "Fusion Art & Music",
          content:
            "How have Bangla and French music, art, or performance styles blended to create new genres or hybrid forms?",
        },
      ],
    };
  },

  methods: {
    submissionForm(topicName) {
      this.$router.push({ name: "submission", params: { topicName } });
    },

    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isOpen(index) {
      return this.activeIndex === index;
    },
  },
  computed: {},
};
</script>

<style scoped>
@media (max-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  .hidden {
    display: none;
  }
}

@media (max-width: 1258px) {
  .hidden {
    display: none !important;
  }
}

@media (min-width: 1259px) {
  .hidden {
    display: block !important;
  }
}
.bg1 {
  background-image: url("../assets/img/card1.jpg");
}
.bg2 {
  background-image: url("../assets/img/card02.jpg");
}
.bg3 {
  background-image: url("../assets/img/card03.jpg");
}
.bg4 {
  background-image: url("../assets/img/card04.jpg");
}

.background-img {
  background-image: url("../assets/img/unity_symbol.webp");
}
.wave-divider {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

@media (min-width: 768px) {
  .wave-divider svg {
    height: 150px;
  }
}
.fade-in {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
img {
  transition: opacity 0.3s ease;
}

.h-12 {
  height: 3rem;
}

.h-full {
  height: 100%;
}

.opacity-50 {
  opacity: 0.5;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.bg-img {
  background-image: url("../assets/img/alphabets.jpg");
}
</style>
