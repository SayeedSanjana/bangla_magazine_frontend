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
            <!-- <p
              class="text-2xl md:text-4xl mb-2 text-amber-600 font-cormorant font-semibold"
            >
              Celebrating Icons
            </p>-->

            <p class="text-gray-600 text-base text-justify pt-4">
              This section pays tribute to literary and cultural icons whose
              contributions have profoundly influenced Bangla and global
              culture. In our inaugural issue, we celebrate the anniversaries of
              luminaries who have left an enduring legacy in literature, art,
              and intellectual thought across generations. We invite submissions
              that delve into their impactful works, reflect on their
              significance, or offer new interpretations and perspectives on
              their lasting influence. Through this, we aim to honor their
              remarkable achievements and inspire a deeper connection to their
              enduring contributions.
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
        class="bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen py-8 pb-16"
      >
        <div class="container mx-auto px-4 space-y-3 lg:px-32">
          <p
            class="text-2xl md:text-4xl mb-2 text-amber-600 font-cormorant font-semibold"
          >
            Celebrating Icons
          </p>

          <p class="text-gray-600 text-base text-justify pt-4 pb-8 lg:pb-16">
            Honoring literary and cultural icons, our inaugural issue
            commemorates the anniversaries of luminaries who shaped Bangla and
            global culture, inviting reflections on their legacy and influence.
          </p>
          <div class="relative">
            <!-- Timeline -->
            <div
              class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-300 z-0"
            ></div>

            <div class="space-y-16 mt-8 timeline-md hidden md:mb-16">
              <!-- Timeline Items -->
              <div
                v-for="(item, index) in figures"
                :key="index"
                class="relative flex items-center"
              >
                <!-- Left Content for odd index -->
                <div v-if="index % 2 === 0" class="w-1/2 pr-8">
                  <div class="relative mt-6 mb-6 max-w-sm mx-auto">
                    <div
                      class="rounded-lg overflow-hidden shadow-lg bg-white py-6"
                    >
                      <div class="absolute -mt-20 w-full flex justify-center">
                        <div
                          class="h-36 w-36 border-4 border-midnight-sapphire border-opacity-30 rounded-full"
                        >
                          <img
                            :src="item.img"
                            class="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div class="px-6 mt-24">
                        <h1
                          class="font-bold font-cormorant text-2xl text-center mb-1"
                        >
                          {{ item.title }}
                        </h1>
                        <p class="text-amber-600 text-base text-center">
                          {{ item.birthdate }}
                        </p>
                        <p
                          class="text-rose-500 text-sm font-semibold text-center cards-md"
                        >
                          {{ item.anniversary }}
                        </p>
                        <div
                          class="text-gray-600 text-base text-justify"
                          v-html="item.content"
                        ></div>
                        <!-- <p
                          class="text-center text-gray-600 text-base pt-3 font-normal mt-2"
                        >
                          {{ item.content }}
                        </p> -->
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Horizontal Dotted Line for missing card -->
                <div
                  v-else
                  class="w-1/2 pr-8 flex items-center justify-end relative"
                >
                  <div class="relative w-2/3 flex items-center">
                    <!-- Dotted Line -->

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-gray-300 mr-2 border-4 border-midnight-sapphire border-opacity-40 rounded-full"
                    >
                      <circle cx="12" cy="12" r="12" />
                    </svg>

                    <div
                      class="border-t-2 border-dashed border-gray-400 flex-grow mr-2"
                    ></div>
                    <p
                      class="text-rose-700 text-2xl font-cormorant font-bold text-center mb-2 timeline-md"
                    >
                      {{ item.anniversary }}
                    </p>
                    <div
                      class="border-t-2 border-dashed border-gray-400 flex-grow ml-2 timeline-md"
                    ></div>
                    <!-- SVG Circle -->
                  </div>
                </div>

                <!-- Center Circle with Gapped Line -->
                <div class="relative mx-auto z-10 flex flex-col items-center">
                  <!-- Upper Line -->
                  <div class="h-1/2 w-1 bg-yellow-300"></div>
                  <!-- Circle -->
                  <div
                    class="w-24 h-24 bg-white border-2 border-yellow-300 rounded-full flex items-center justify-center text-center"
                  >
                    <span
                      class="text-3xl font-cormorant text-midnight-sapphire font-bold"
                      >{{ item.date }}</span
                    >
                  </div>
                  <!-- Lower Line -->
                  <div class="h-1/2 w-1 bg-yellow-300"></div>
                </div>

                <!-- Right Content for even index -->
                <div v-if="index % 2 !== 0" class="w-1/2 pl-8">
                  <div class="relative mt-6 mb-6 max-w-sm mx-auto">
                    <div
                      class="rounded-lg overflow-hidden shadow-lg bg-white py-6"
                    >
                      <div class="absolute -mt-20 w-full flex justify-center">
                        <div
                          class="h-36 w-36 border-4 border-midnight-sapphire border-opacity-30 rounded-full"
                        >
                          <img
                            :src="item.img"
                            class="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div class="px-6 mt-24">
                        <h1
                          class="font-bold font-cormorant text-2xl text-center mb-1"
                        >
                          {{ item.title }}
                        </h1>
                        <p class="text-amber-600 text-base text-center">
                          {{ item.birthdate }}
                        </p>
                        <p
                          class="text-rose-500 text-sm text-center font-semibold cards-md"
                        >
                          {{ item.anniversary }}
                        </p>
                        <div
                          class="text-gray-600 text-base text-justify"
                          v-html="item.content"
                        ></div>
                        <!-- <p
                          class="text-center text-gray-600 text-base pt-3 font-normal mt-2"
                        >
                          {{ item.content }}
                        </p> -->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Horizontal Dotted Line for missing card -->
                <div
                  v-else
                  class="w-1/2 pl-8 flex items-center justify-start relative"
                >
                  <div class="relative w-2/3 flex items-center">
                    <!-- Dotted Line -->
                    <div
                      class="border-t-2 border-dashed border-gray-400 flex-grow mr-2"
                    ></div>
                    <p
                      class="text-rose-700 text-2xl font-cormorant font-bold text-center mb-2 timeline-md"
                    >
                      {{ item.anniversary }}
                    </p>
                    <div
                      class="border-t-2 border-dashed border-gray-400 flex-grow ml-2 timeline-md"
                    ></div>
                    <!-- SVG Circle -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-gray-300 ml-2 rounded-full border-4 border-midnight-sapphire border-opacity-40"
                    >
                      <circle cx="12" cy="12" r="12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stacked Cards for Small Screens -->
          <div class="cards-md hidden">
            <div
              v-for="(item, index) in figures"
              :key="index"
              class="mb-6 bg-white rounded-lg shadow-lg p-6"
            >
              <div class="flex justify-center mb-4">
                <img
                  :src="item.img"
                  class="rounded-full h-24 w-24 object-cover shadow-md"
                />
              </div>
              <h1
                class="font-bold font-cormorant text-xl text-center mb-2 text-gray-800"
              >
                {{ item.title }}
              </h1>
              <p
                class="text-amber-600 text-base text-center font-semibold mb-1"
              >
                {{ item.birthdate }}
              </p>
              <p class="text-rose-500 text-sm font-semibold text-center mb-2">
                {{ item.anniversary }}
              </p>
              <div
                class="text-gray-600 text-base text-justify"
                v-html="item.content"
              ></div>
              <!-- <p class="text-gray-600 text-base text-justify">
                {{ item.content }}
              </p> -->
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
    <!-- Cookie Consent Popup -->
    <CookieConsent />
  </section>
</template>

<script>
import CookieConsent from "../components/CookieConsent.vue";
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
import author21 from "@/assets/authorImage/behari.jpg";
import author22 from "@/assets/authorImage/balai.jpg";
import author23 from "@/assets/authorImage/buddha.jpg";
import author24 from "@/assets/authorImage/talat.jpg";
import author25 from "@/assets/authorImage/tapan.jpg";
export default {
  name: "CelebratingIconsView",
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

      figures: [
        {
          title: "Rassundari Devi",
          birthdate: "1810-1899",
          date: "1810",
          content:
            "Pioneer in autobiographical writing, the first Indian woman to write an autobiography.",
          anniversary: "125th death anniversary",
          img: author1,
        },
        {
          title: "Michael Madhusudan Dutta",
          birthdate: "1824-1873",
          date: "1824",
          content:
            "A major poet and dramatist, credited with introducing blank verse in Bengali literature.",
          anniversary: "200th birth anniversary",
          img: author8,
        },
        {
          title: "Reverend Lal Behari Day",
          birthdate: "1824-1894",
          date: "1824",
          content: `<div class="text-gray-600 text-base text-justify">Bengali writer and journalist converted to Christianity, and later a Christian missionary. <span class="italic font-serif">Author of Bengal Peasant Life (1874)</span>, Chandramukhi, A Tale of Bengali Life (1859), and Govinda Samanta which highlighted the plight of peasants in 19th century Bengal. </div`,
          anniversary: " 200th birth anniversary ",
          img: author21,
        },
        {
          title: "Sarat Chandra Das",
          birthdate: "1849-1917",
          date: "1849",
          content:
            "Renowned scholar, explorer, and writer who played a key role in documenting Tibetan culture.",
          anniversary: "175th birth anniversary",
          img: author15,
        },
        {
          title: "Ashutosh Mukherjee",
          birthdate: "1864-1924",
          date: "1864",
          content:
            "Academic and education reformer who championed modern education in Bengal.",
          anniversary: "100th death anniversary",
          img: author2,
        },
        {
          title: "Paul Antoine Richard",
          birthdate: "1874-1967",
          date: "1874",
          content:
            "French politician, writer, and spiritual thinker connecting  Bengal and France.",
          anniversary: "150th birth anniversary",
          img: author9,
        },
        {
          title: "Sarojini Naidu ",
          birthdate: "1879-1949",
          date: "1879",
          content:
            "A prominent Indian independence activist and poet known as the 'Nightingale of India.'",
          anniversary: "75th death anniversary",
          img: author16,
        },
        {
          title: "Leonard Knight Elmhirst",
          birthdate: "1893-1974",
          date: "1893",
          content:
            "British philanthropist who co-founded rural development institutes in India.",
          anniversary: "50th death anniversary",
          img: author3,
        },
        {
          title: "Satyendranath Bose",
          birthdate: "1894-1974",
          date: "1894",
          content:
            "Physicist best known for his work on quantum mechanics and Bose-Einstein statistics.",
          anniversary: "50th death anniversary",
          img: author10,
        },
        {
          title: "Jibanananda Das",
          birthdate: "1899-1954",
          date: "1899",
          content:
            "Bengali poet, writer, novelist, and essayist, associated with modernism in Bangla literature.",
          anniversary: "125th birth anniversary",
          img: author4,
        },
        {
          title: "Sharadindu Bandyopadhyay",
          birthdate: "1899-1970",
          date: "1899",
          content:
            "Creator of the famous detective Byomkesh Bakshi, and author of historical fiction.",
          anniversary: "125th birth anniversary",
          img: author11,
        },
        {
          title: "Kazi Nazrul Islam",
          birthdate: "1899-1976",
          date: "1899",
          content:
            "The rebel poet and lyricist whose works championed political and social issues.",
          anniversary: "125th birth anniversary",
          img: author17,
        },
        {
          title: "Balai Chand Mukhopadhyay",
          birthdate: "1899-1979",
          date: "1899",
          content:
            "Bengali novelist, short-story writer, playwright, and physician who wrote underthe pen name 'Bonophool.'",
          anniversary: "125th birth anniversary",
          img: author22,
        },
        {
          title: "Syed Mujtaba Ali",
          birthdate: "1904-1974",
          date: "1904",
          content:
            "Bangali/Bengali author, known for his travel writings and satirical works.",
          anniversary: "50th death anniversary",
          img: author18,
        },
        {
          title: "Buddhadeva Bose",
          birthdate: "1908-1974",
          date: "1908",
          content: `<div class="text-gray-600 text-base text-justify">Bengali novelist, poet, essayist, and educator. He helped set up the Department of Comparative Literature at Jadavpur University, Kolkata. Associated with Bengali poetry magazines, <span class="italic font-serif">Kallol</span> and <span class="italic"> Kavita</span> .</div>`,
          anniversary: "50th death anniversary",
          img: author23,
        },
        {
          title: "Begum Sufia Kamal",
          birthdate: "1911-1999",
          date: "1911",
          content:
            "Leading Bengali writer and social activist, known for her work on women's rights.",
          anniversary: "25th death anniversary",
          img: author5,
        },
        {
          title: "Kamal Dasgupta",
          birthdate: "1912-1974",
          date: "1912",
          content:
            "Bengali music composer, credited with blending traditional and modern musical forms.",
          anniversary: "50th death anniversary",
          img: author12,
        },
        {
          title: "Begum Akhtar",
          birthdate: "1914-1974",
          date: "1914",
          content:
            "Indian singer renowned for her performances of ghazals, dadra, and thumri.",
          anniversary: "50th death anniversary",
          img: author19,
        },
        {
          title: "Samaresh Basu ",
          birthdate: "1924-1988",
          date: "1924",
          content:
            "Bengali novelist known for his socially conscious works and unique narrative style.",
          anniversary: "100th birth anniversary",
          img: author7,
        },
        {
          title: "Talat Mahmood",
          birthdate: "1924-1998",
          date: "1924",
          content:
            "Indian actor and ghazal singer whose early career took shape in Kolkata when he made cameo appearances in films under the screen name Tapan Kumar. Married to a Bengali lady, he acted in and sung playback for Bengali films.",
          anniversary: " 100th birth anniversary ",
          img: author24,
        },
        {
          title: "Kanika Bandyopadhyay ",
          birthdate: "1924-2000",
          date: "1924",
          content:
            "Another celebrated Rabindra Sangeet singer, noted for her soulful interpretations of Tagore's songs.",
          anniversary: "100th birth anniversary",
          img: author13,
        },
        {
          title: "Tapan Sinha",
          birthdate: "1924-2009",
          date: "1924",
          content:
            "Bengali filmmaker renowned for his on-screen adaptations of Bengali literary works.",
          anniversary: "100th birth anniversary ",
          img: author25,
        },
        {
          title: "Suchitra Mitra",
          birthdate: "1924-2011",
          date: "1924",
          content:
            "Eminent exponent of Rabindra Sangeet, bringing Tagore’s music to a wider audience.",
          anniversary: "100th birth anniversary",
          img: author6,
        },

        {
          title: "Father Paul Detienne",
          birthdate: "1924-2016",
          date: "1924",
          content:
            "Belgium born French-speaking Jesuit priest and cultural ambassador who contributed to Bengali literature.",
          anniversary: "100th birth anniversary",
          img: author14,
        },

        {
          title: "Nirendranath Chakravarty",
          birthdate: "1924-2018",
          date: "1924",
          content:
            "Modern Bengali poet and writer, acclaimed for his profound and accessible poetry.",
          anniversary: "100th birth anniversary",
          img: author20,
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
@media (min-width: 768px) {
  .timeline-md {
    display: block !important;
  }
  .cards-md {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .timeline-md {
    display: none !important;
  }
  .cards-md {
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
