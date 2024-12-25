<template>
  <section class="">
    <div class="md:mx-auto flex-grow min-h-screen">
      <!-- Celebrating Icons Section -->
      <div
        class="bg-gradient-to-r from-regal-blue to-gray-200 px-2 rounded-lg shadow pt-16 mb:pt-16 py-4"
      >
        <div class="md:container md:mx-auto px-4 lg:px-32">
          <div class="mb-8">
            <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
              Literary and Cultural Figures
            </h2>
            <p
              class="text-2xl md:text-4xl mb-2 text-amber-600 font-cormorant font-semibold"
            >
              Celebrating Icons
            </p>

            <p class="text-gray-600 text-base text-justify pt-4">
              This section honors literary and cultural icons whose works have
              left an indelible mark on Bangla and world culture. For the
              inaugural issue, we commemorate the anniversaries of figures who
              have shaped literature, art, and thought across generations. We
              invite submissions that reflect on their contributions, engage
              with their works, or offer fresh perspectives on their legacy.
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

      <!--  Literary and Cultural Figures-->

      <div
        class="pt-8 px-2 bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen pb-8"
      >
        <div class="container md:mx-auto py-10 px-4 space-y-3 lg:px-32">
          <!--  Carousel-->
          <div class="flex justify-center items-center md:pt-12">
            <div class="overflow-hidden relative w-full">
              <!-- Slider wrapper -->
              <div
                class="flex transition-transform duration-300 ease-out"
                :style="`transform: translateX(-${
                  currentSlide * (100 / figuresPerPage)
                }%)`"
              >
                <!-- Cards -->
                <div
                  v-for="(card, index) in figures"
                  :key="index"
                  class="flex justify-center items-center px-4"
                  :style="{ minWidth: calcMinWidth }"
                >
                  <div
                    class="bg-white p-6 shadow-lg rounded-lg text-center"
                    style="width: 380px; height: 460px"
                  >
                    <img
                      :src="card.img"
                      alt="Card Image"
                      class="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-xl mb-1 text-gray-800 font-cormorant">
                      <span class="text-2xl">{{ index + 1 }}.</span>
                      {{ card.title }}
                    </h3>
                    <p class="text-amber-600 mb-1">
                      {{ card.birthdate }}
                    </p>
                    <p class="text-red-500 mb-4">
                      {{ card.anniversary }}
                    </p>
                    <p class="text-gray-500 mb-4 text-sm">
                      {{ card.content }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Navigation buttons -->
              <button
                @click="prevSlide"
                :disabled="currentSlide === 0"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-midnight-sapphire text-white px-4 py-2 rounded-l-lg text-xs"
                :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
              >
                Prev
              </button>
              <button
                @click="nextSlide"
                :disabled="isNextDisabled"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-midnight-sapphire text-white px-4 py-2 rounded-r-lg text-xs"
                :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Submission Form Section -->

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
  </section>
</template>

<script>
import author1 from "@/assets/authorImage/rassundaridevi.webp";
import author2 from "@/assets/authorImage/aushutoshmukharjee.jpg";
import author3 from "@/assets/authorImage/leonard.jpg";
import author4 from "@/assets/authorImage/jibananandadas.jpg";
import author5 from "@/assets/authorImage/sufiakamal.jpg";
import author6 from "@/assets/authorImage/shuchitramitra.jpg";
import author7 from "@/assets/authorImage/samareshbasu.jpg";
import author8 from "@/assets/authorImage/madhusudan.jpg";
import author9 from "@/assets/authorImage/paul.png";
import author10 from "@/assets/authorImage/bose.jpg";
import author11 from "@/assets/authorImage/sharadindu.jpg";
import author12 from "@/assets/authorImage/kamaldasgupta.jpg";
import author13 from "@/assets/authorImage/kanika.jpg";
import author14 from "@/assets/authorImage/Father_Detienne.jpg";
import author15 from "@/assets/authorImage/sarat.jpg";
import author16 from "@/assets/authorImage/sarojini.jpg";
import author17 from "@/assets/authorImage/nazrul.jpg";
import author18 from "@/assets/authorImage/mujtaba.jpg";
import author19 from "@/assets/authorImage/begum.jpg";
import author20 from "@/assets/authorImage/nirendranath.jpg";
import author21 from "@/assets/authorImage/murshid.jpg";
import author22 from "@/assets/authorImage/buddhadeb.jpg";
import author23 from "@/assets/authorImage/utpalendu.jpg";
import author24 from "@/assets/authorImage/shafinahmed.jpg";

export default {
  name: "AboutView",
  components: {},

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

      figures: [
        {
          title: "Rassundari Devi",
          birthdate: "1810-1899",
          content:
            "Pioneer in autobiographical writing, the first Indian woman to write an autobiography.",
          anniversary: "125th death anniversary",
          img: author1,
        },
        {
          title: "Ashutosh Mukherjee",
          birthdate: "1864-1924",
          content:
            "Academic and education reformer who championed modern education in Bengal.",
          anniversary: "100th death anniversary",
          img: author2,
        },
        {
          title: "Leonard Knight Elmhirst",
          birthdate: "1893-1974",
          content:
            "British philanthropist who co-founded rural development institutes in India.",
          anniversary: "50th death anniversary",
          img: author3,
        },
        {
          title: "Jibanananda Das",
          birthdate: "1899-1954",
          content:
            "Iconic modern Bengali poet known for his meditative and nature-centric poetry.",
          anniversary: "125th birth anniversary",
          img: author4,
        },
        {
          title: "Begum Sufia Kama",
          birthdate: "1911-1999",
          content:
            "A leading figure in Bangladeshi literature, social activism, and women’s rights.",
          anniversary: "25th death anniversary",
          img: author5,
        },
        {
          title: "Suchitra Mitra",
          birthdate: "1924-2011",
          content:
            "Eminent exponent of Rabindra Sangeet, bringing Tagore’s music to a wider audience.",
          anniversary: "100th death anniversary",
          img: author6,
        },
        {
          title: "Samaresh Basu ",
          birthdate: "1924-1988",
          content:
            "Bengali novelist known for his socially conscious works and unique narrative style.",
          anniversary: "100th birth anniversary",
          img: author7,
        },
        {
          title: "Michael Madhusudan Dutta",
          birthdate: "1824-1873",
          content:
            "A major poet and dramatist, credited with introducing blank verse in Bengali literature.",
          anniversary: "200th birth anniversary",
          img: author8,
        },
        {
          title: "Paul Antoine Richard",
          birthdate: "1874-1967",
          content:
            "French politician, writer, and spiritual thinker with links to both Bengal and France.",
          anniversary: "150th birth anniversary",
          img: author9,
        },
        {
          title: "Satyendra Nath Bose",
          birthdate: "1894-1974",
          content:
            "Physicist best known for his work on quantum mechanics and Bose-Einstein statistics.",
          anniversary: "50th death anniversary",
          img: author10,
        },
        {
          title: "Sharadindu Bandyopadhyay",
          birthdate: "1899-1970",
          content:
            "Creator of the famous detective Byomkesh Bakshi, and a renowned historical novelist.",
          anniversary: "125th birth anniversary",
          img: author11,
        },
        {
          title: "Kamal Dasgupta",
          birthdate: "1912-1974",
          content:
            "Bengali music composer, credited with blending traditional and modern musical forms.",
          anniversary: "50th death anniversary",
          img: author12,
        },
        {
          title: "Kanika Bandyopadhyay ",
          birthdate: "1924-2000",
          content:
            "Another celebrated Rabindra Sangeet singer, noted for her soulful interpretations of Tagore's songs.",
          anniversary: "100th birth anniversary",
          img: author13,
        },
        {
          title: "Father Paul Detienne",
          birthdate: "1924-2016",
          content:
            "French Jesuit priest and cultural ambassador who contributed to Bengali literature.",
          anniversary: "100th birth anniversary",
          img: author14,
        },
        {
          title: "Babu Sarat Chandra Das",
          birthdate: "1849-1917",
          content:
            "Renowned scholar, explorer, and writer who played a key role in documenting Tibetan culture.",
          anniversary: "175th birth anniversary",
          img: author15,
        },
        {
          title: "Sarojini Naidu ",
          birthdate: "1879-1949",
          content:
            "A prominent Indian independence activist and poet known as the 'Nightingale of India.'",
          anniversary: "75th death anniversary",
          img: author16,
        },
        {
          title: "Kazi Nazrul Islam",
          birthdate: "1899-1976",
          content:
            "The 'Rebel Poet,' whose works championed political and social justice.",
          anniversary: "125th death anniversary",
          img: author17,
        },
        {
          title: "Syed Mujtaba Ali",
          birthdate: "1904-1974",
          content:
            "Bangladeshi author, known for his travel writings and satirical works.",
          anniversary: "50th death anniversary",
          img: author18,
        },
        {
          title: "Begum Akhtar",
          birthdate: "1914-1974",
          content:
            "Indian singer renowned for her performances of ghazals, dadra, and thumri.",
          anniversary: "50th death anniversary",
          img: author19,
        },
        {
          title: "Nirendranath Chakravarty",
          birthdate: "1924-2018",
          content:
            "Modern Bengali poet and writer, acclaimed for his profound and accessible poetry.",
          anniversary: "100th death anniversary",
          img: author20,
        },
      ],

      luminaries: [
        {
          name: "Ghulam Murshid",
          birthdate: "1940-2024",
          description:
            "A pioneering figure in Bangladeshi literary circles, Ghulam Murshid was an author, researcher, and cultural historian. His work significantly shaped the understanding of Bengali identity and language.",
          img: author21,
        },
        {
          name: "Buddhadeb Bhattacharjee",
          birthdate: "1944-2024",
          description:
            "Former Chief Minister of West Bengal and a key figure in Indian politics, Bhattacharjee was also known for his literary contributions and commitment to social justice.",
          img: author22,
        },
        {
          name: "Utpalendu Chakraborty",
          birthdate: "1948-2024",
          description:
            "A renowned filmmaker and playwright, Chakraborty’s films brought socially conscious themes to the forefront of Indian cinema, focusing on the lives of marginalized communities.",
          img: author23,
        },
        {
          name: "Shafin Ahmed",
          birthdate: "1961-2024",
          description:
            "A legendary Bangladeshi musician, Shafin Ahmed was the lead vocalist of the iconic band Miles. His contributions to rock and pop music in Bangladesh have left an enduring legacy.",
          img: author24,
        },
      ],
    };
  },

  methods: {
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
  background-image: url("../assets/img/bg-contribute.png");
}
</style>
