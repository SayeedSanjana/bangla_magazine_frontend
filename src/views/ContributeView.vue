<template>
  <section class="">
    <div class="md:mx-auto flex-grow min-h-screen">
      <!-- Mission and Objectives Banner -->
      <div class="h-auto shadow-md bg-cover bg-center bg-white">
        <!-- Heading -->
        <div
          class="md:container md:mx-auto py-10 px-4 lg:px-32 space-y-3 xl:pb-24 pb-12 pt-12 xl:pt-24 lg:pb-16 lg:pt-16"
        >
          <div
            class="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 md:h-92"
          >
            <!-- Text on Left -->
            <div class="w-full lg:w-1/2">
              <h2
                class="text-4xl xl:text-6xl font-bold text-midnight-sapphire mb-6 font-cormorant"
              >
                Make Your Mark by Contributing to Our Magazine!
              </h2>
              <p class="text-gray-600 text-lg text-justify mt-4">
                Our magazine is open for creative voices across languages and
                mediums.
              </p>
              <button
                @click="submissionForm"
                class="text-base border-2 border-yellow-400 px-4 py-3 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg mt-3 transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold"
              >
                Contribute to the Magazine
              </button>
            </div>

            <!-- SVG on Right -->
            <div class="w-full lg:w-1/2 flex justify-center">
              <!-- <img
                src="../assets/img/collage6.png"
                alt="SVG Image 1"
                class="lg:w-full lg:h-full"
              /> -->
              <div>
                <img
                  src="../assets/img/submission.gif"
                  alt="SVG Image 1"
                  class="w-auto h-auto"
                />
                <div class="text-gray-500 text-sm text-center pt-3">
                  Illustration By:
                  <span class="font-semibold">Trisha Ghosh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img1 bg-cover bg-center h-24 md:h-40 lg:h-80 group pt-1"
      >
        <!-- Overlay for Background Image -->
        <div class="absolute inset-0 bg-gray-900 opacity-40"></div>

        <!-- Content Overlay -->
        <div class="container md:mx-auto px-4 lg:px-32 relative z-10"></div>
      </div>
      <div
        class="text-gray-500 text-sm text-center bg-gradient-to-l from-regal-blue to-gray-200"
      >
        Photography By:
        <span class="font-semibold"
          >Arindaam Das, Avik Dey, Moinak Banerjee, Rudranil Raha and Upasana
          Dasgupta
        </span>
      </div>
      <div
        class="text-gray-500 text-sm text-center bg-gradient-to-l from-regal-blue to-gray-200"
      >
        Collage By:
        <span class="font-semibold">Ami Saha</span>
      </div>

      <!-- Magazine Section -->
      <div
        class="bg-gradient-to-r from-regal-blue to-gray-200 py-8 px-2 rounded-lg shadow pt-12 mb:pt-24"
      >
        <div class="md:container md:mx-auto px-4 lg:px-32">
          <div class="mb-8">
            <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
              The Magazine
            </h2>
            <p class="font-light text-base text-gray-700 mb-4">
              Join us as
              <span
                class="text-midnight-sapphire font-bold font-cormorant text-2xl"
                >"Porijaan"</span
              >, B.A.N.G.L.A.’s flagship digital magazine, embarks on a journey
              of creative expression in Bangla, English, and French. Be part of
              a dynamic community of storytellers, artists, and innovators.
              Showcase your expertise or interest. Submit your work today and
              let your voice resonate in a global, multicultural dialogue.
            </p>
            <p class="font-light text-base text-gray-700">
              Our magazine will feature poetry, fiction, non-fiction, travel,
              science, health, sports, art, photography, cartoons, interviews,
              and unpublished scripts. It will also have two major sub-sections.
              One sub-section will introduce an
              <span class="text-midnight-sapphire font-semibold"
                >Annual Theme</span
              >, starting with ‘Bangla-French Crossings,’ exploring interactions
              between Bangla and French languages, cultures, and worldviews. It
              will include public articles on artistic or literary
              interventions, translations, and personal experiences. The second
              sub-section, the
              <span class="text-midnight-sapphire font-semibold"
                >Annual Celebration</span
              >
              , will honor significant Bangla literary and cultural figures on
              their birth or death anniversaries.
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

      <!-- What We are Looking for -->
      <div
        class="px-2 bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen lg:pb-24 pb-10"
      >
        <div class="container mx-auto md:mx-auto py-5 px-4 space-y-3 lg:px-32">
          <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
            What Are We Looking For?
          </h2>
          <!-- Card Container -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <!-- Card 1 -->
            <div
              class="bg-white flex flex-col lg:flex-row shadow-lg rounded-lg relative overflow-visible mt-4 md:mt-16 lg:mt-24"
            >
              <!-- Image Section -->
              <div class="relative lg:w-1/3 sm:w-full hidden md:block">
                <div
                  class="absolute inset-x-0 -top-8 h-72 bg-cover bg-center transform scale-110 rounded-lg lg:rounded-l-lg z-10 bg1"
                ></div>
              </div>
              <!-- Card Content -->
              <div class="py-6 px-6 flex flex-col justify-between lg:w-2/3">
                <h2 class="text-2xl font-normal text-gray-800 mb-4">
                  Independent Category
                </h2>
                <p class="mt-2 text-gray-600 text-sm">
                  Porijaan invites submissions on topics like fiction, art,
                  poetry, essays, and photography, exploring Bangla-French
                  cultural intersections.
                </p>
                <div class="mt-6 flex justify-end">
                  <button
                    @click="topic"
                    class="text-base border border-yellow-400 px-3 py-1 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-700 font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold"
                  >
                    Find Out
                  </button>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div
              class="bg-white flex flex-col lg:flex-row shadow-lg rounded-lg relative overflow-visible mt-4 md:mt-16 lg:mt-24"
            >
              <!-- Image Section -->
              <div class="relative lg:w-1/3 sm:w-full hidden md:block">
                <div
                  class="absolute inset-x-0 -top-8 h-72 bg-cover bg-center transform scale-110 rounded-lg lg:rounded-l-lg z-10 bg2"
                ></div>
              </div>
              <!-- Card Content -->
              <div class="py-6 px-6 flex flex-col justify-between lg:w-2/3">
                <h2 class="text-2xl font-normal text-gray-800 mb-4">
                  Annual Theme
                </h2>
                <p class="mt-2 text-gray-600 text-sm">
                  Our inaugural issue explores the vibrant intersections of
                  Bangla and French languages, cultures, and histories through
                  literature, art, and lived experiences.
                </p>
                <div class="mt-6 flex justify-end">
                  <button
                    @click="theme"
                    class="text-base border border-yellow-400 px-3 py-1 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-700 font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold"
                  >
                    Find Out
                  </button>
                </div>
              </div>
            </div>

            <!-- Card 3 -->
            <div
              class="bg-white flex flex-col lg:flex-row shadow-lg rounded-lg relative overflow-visible mt-4 md:mt-16 lg:mt-24"
            >
              <!-- Image Section -->
              <div class="relative lg:w-1/3 sm:w-full hidden md:block">
                <div
                  class="absolute inset-x-0 -top-8 h-72 bg-cover bg-center transform scale-110 rounded-lg lg:rounded-l-lg z-10 bg3"
                ></div>
              </div>
              <!-- Card Content -->
              <div class="py-6 px-6 flex flex-col justify-between lg:w-2/3">
                <h2 class="text-2xl font-normal text-gray-800">
                  Literary and Cultural Figures
                </h2>
                <p class="mt-2 text-gray-600 text-sm">
                  This section celebrates iconic figures whose works shaped
                  Bangla and global culture, inviting reflections on their
                  legacy and contributions.
                </p>
                <div class="mt-6 flex justify-end">
                  <button
                    @click="celebration"
                    class="text-base border border-yellow-400 px-3 py-1 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-700 font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold"
                  >
                    Find Out
                  </button>
                </div>
              </div>
            </div>

            <!-- Card 4 -->
            <div
              class="bg-white flex flex-col lg:flex-row shadow-lg rounded-lg relative overflow-visible mt-4 md:mt-16 lg:mt-24"
            >
              <!-- Image Section -->
              <div class="relative lg:w-1/3 sm:w-full hidden md:block">
                <div
                  class="absolute inset-x-0 -top-8 h-72 bg-cover bg-center transform scale-110 rounded-lg lg:rounded-l-lg z-10 bg4"
                ></div>
              </div>
              <!-- Card Content -->
              <div class="py-6 px-6 flex flex-col justify-between lg:w-2/3">
                <h2 class="text-2xl font-normal text-gray-800">
                  Memory of Luminaries
                </h2>
                <p class="mt-2 text-gray-600 text-sm">
                  This section will feature obituaries of recent luminaries who
                  pursued diverse creative interests.
                </p>
                <div class="mt-6 flex justify-end">
                  <button
                    @click="memory"
                    class="text-base border border-yellow-400 px-3 py-1 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-700 font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold"
                  >
                    Find Out
                  </button>
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
            Contribute Now...
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
  name: "ContributeView",
  components: {
    CookieConsent,
  },

  mounted() {
    window.addEventListener("resize", this.updateFiguresPerPage);
    this.updateFiguresPerPage(); // Set initial value
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateFiguresPerPage);
  },
  data() {
    return {
      currentSlide: 0,
      figuresPerPage: 4, // Default visible cards per page
      activeIndex: null,
    };
  },

  methods: {
    topic() {
      this.$router.push("/magazine/topics");
    },
    theme() {
      this.$router.push("/magazine/theme");
    },
    celebration() {
      this.$router.push("/magazine/celebration");
    },
    memory() {
      this.$router.push("/magazine/memory");
    },
    submissionForm(topicName) {
      this.$router.push({ name: "submission", params: { topicName } });
    },
    nextSlide() {
      // Only increase the currentSlide if we haven't reached the last slide
      if (this.currentSlide < this.totalSlides - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      // Only decrease the currentSlide if we're not at the first slide
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    updateFiguresPerPage() {
      const width = window.innerWidth;
      if (width >= 1280) {
        this.figuresPerPage = 4; // Extra-large screens
      } else if (width >= 1024) {
        this.figuresPerPage = 3; // Large screens
      } else if (width >= 768) {
        this.figuresPerPage = 2; // Medium screens
      } else {
        this.figuresPerPage = 1; // Small screens
      }
    },
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isOpen(index) {
      return this.activeIndex === index;
    },
  },
  computed: {
    isNextDisabled() {
      return this.currentSlide >= this.totalSlides - this.figuresPerPage;
    },
    totalSlides() {
      return Math.ceil(this.figures.length);
    },
    calcMinWidth() {
      return `calc(100% / ${this.figuresPerPage})`;
    },
  },
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
.height {
  height: 1000px;
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
.bg-img {
  background-image: url("../assets/img/blackwhite.jpg");
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
.bg-img1 {
  background-image: url("../assets/img/blackwhite.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
