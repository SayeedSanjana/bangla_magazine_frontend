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
              Memory of Luminaries
            </h2>
            <!-- <p
                class="text-2xl md:text-4xl mb-2 text-amber-600 font-cormorant font-semibold"
              >
                Celebrating Icons
              </p>-->

            <p class="text-gray-600 text-base text-justify pt-4">
              This year we will feature obituaries of a few luminaries who
              recently passed away - and pursued multifaceted creative
              interests.
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

      <!--  Memory Luminaries-->
      <div
        class="bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen py-8 pb-16"
      >
        <div class="container mx-auto px-4 space-y-3 lg:px-32">
          <p
            class="text-2xl md:text-4xl mb-2 text-amber-600 font-cormorant font-semibold pb-8 lg:pb-16"
          >
            In Memory of Luminaries
          </p>

          <ol
            class="relative border-s-4 border-yellow-300 ml-8"
            v-for="item in figures"
            :key="item"
          >
            <li class="ms-8 lg:ms-12 p-0">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 mr-8"
              >
                <div class="relative mx-auto z-10 flex flex-col items-center">
                  <!-- Upper Line -->
                  <div class="h-full w-1 bg-yellow-300"></div>
                  <!-- Circle -->
                  <div
                    class="w-20 h-20 bg-white border-2 border-yellow-300 rounded-full flex items-center justify-center text-center"
                  >
                    <span
                      class="text-2xl font-cormorant text-midnight-sapphire font-bold"
                      >{{ item.date }}</span
                    >
                  </div>
                  <!-- Lower Line -->
                  <div class="h-full w-1 bg-yellow-300"></div>
                </div>
              </span>
              <div class="ml-10 pb-6">
                <div class="md:flex items-center">
                  <div class="ml-4 md:ml-0">
                    <img
                      class="w-16 h-16 lg:w-28 lg:h-28 border-2 border-midnight-sapphire border-opacity-30 rounded-lg object-cover bg-cover"
                      :src="item.img"
                      alt="author image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <h3
                      class="flex items-center mb-1 text-2xl font-cormorant font-semibold text-gray-800"
                    >
                      {{ item.name }}
                    </h3>
                    <time
                      class="block mb-2 text-base leading-none text-amber-600 font-normal"
                      >{{ item.birthdate }}</time
                    >
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <div
                      class="mb-4 text-base font-normal text-gray-600"
                      v-html="item.content"
                    ></div>
                    <!-- <p class="mb-4 text-base font-normal text-gray-600">
                      {{ item.content }}
                    </p> -->
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <!-- Submission Form Section -->

      <div
        class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-1"
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
import author1 from "@/assets/authorImage/Murshid1.jpg";
import author2 from "@/assets/authorImage/buddhadeb.jpg";
import author3 from "@/assets/authorImage/utpalendu.jpg";
import author4 from "@/assets/authorImage/shafinahmed.jpg";
import author5 from "@/assets/authorImage/suniti.jpg";
import author6 from "@/assets/authorImage/manoj.webp";
import author7 from "@/assets/authorImage/aashish.webp";
import author8 from "@/assets/authorImage/Uma-Dasgupta.jpg";
import author9 from "@/assets/authorImage/chanda.jpg";
import author10 from "@/assets/authorImage/Raja.jpg";
import author11 from "@/assets/authorImage/helal.jpg";
import author12 from "@/assets/authorImage/Debraj.jpg";
import author13 from "@/assets/authorImage/Partha.jpg";
import author14 from "@/assets/authorImage/sreela.jpg";
import author15 from "@/assets/authorImage/rashid.webp";
import author16 from "@/assets/members/noimage.jpg";

export default {
  name: "MemoryLuminariesView",
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
          name: "Suniti Kumar Pathak",
          birthdate: "1924-2024",
          date: "1924",
          content:
            "Renowned scholar in Buddhist and Tibetan Studies, Research Professor at the Asiatic Society, Kolkata, former Reader in Indo-Tibetan Studies Department, Visva-Bharati University.",
          img: author5,
        },
        {
          name: "Nikhilesh Purakait",
          birthdate: "1936-2024",
          date: "1936",
          content:
            "Former professor of Department of Bengali, Gauhati University, he wrote on history of Bangla literature, focusing on - and identifying - the interrelationship between the different dialects of the language.",
          img: author16,
        },
        {
          name: "Manoj Mitra",
          birthdate: "1938-2024",
          date: "1938",
          content: "Theater and Film acting.",
          img: author6,
        },
        {
          name: "Aashish Khan ",
          birthdate: "1939-2024",
          date: "1939",
          content:
            "Sarod maestro and musician, torchbearer of the famed Senia Maihar gharana of Acharya Alauddin Khan and Ustad Ali Akbar Khan.",
          img: author7,
        },
        {
          name: "Ghulam Murshid",
          birthdate: "1940-2024",
          date: "1940",
          content:
            "A pioneering figure in Bangladeshi literary circles, Ghulam Murshid was an author, researcher, and cultural historian. His work significantly shaped the understanding of Bengali identity and language.",
          img: author1,
        },
        {
          name: "Uma Dasgupta",
          birthdate: "1940-2024",
          date: "1940",
          content: "Acting.",
          img: author8,
        },
        {
          name: "Budheshwari Roy ",
          birthdate: "1944(approx.) - 2024",
          date: "~1944",
          content: `<div class="mb-4 text-base font-normal text-gray-600">(Folk singer, Jalpaiguri) - Exponent of  <span class="italic">Mecheni Gaan </span> - traditionally sung by inhabitants residing by the banks of the River Teesta in northern Bengal; it was her family tradition - and craft; she was awarded the Thakur Panchanan Barma Puraskar in 2023 for her indefatigable efforts in promoting and disseminating <span class="italic">Mecheni Gaan</span>. An octogenarian, she passed away in 2024.</div>`,
          img: author16,
        },
        {
          name: "Buddhadeb Bhattacharjee",
          birthdate: "1944-2024",
          date: "1944",
          content:
            "Former Chief Minister of West Bengal and a key figure in Indian politics, Bhattacharjee was also known for his literary contributions and commitment to social justice.",
          img: author2,
        },
        {
          name: "Chhanda Sen",
          birthdate: "1946~2024",
          date: "1946",
          content:
            "News Anchoring (Doordarshan) , Known for her own iconic style of Disinterested (!) News Presentation.",
          img: author9,
        },
        {
          name: "Raja Mitra",
          birthdate: "1947-2024",
          date: "1947",
          content:
            "Bengali filmmaker and music director, best known for his documentary films on social and cultural issues.",
          img: author10,
        },
        {
          name: "Helal Hafiz",
          birthdate: "1948-2024",
          date: "1948",
          content:
            "Bengali poet, known for evocative and soul-stirring poetry.",
          img: author11,
        },
        {
          name: "Utpalendu Chakraborty",
          birthdate: "1948-2024",
          date: "1948",
          content:
            "A renowned filmmaker and playwright, Chakraborty’s films brought socially conscious themes to the forefront of Indian cinema, focusing on the lives of marginalized communities.",
          img: author3,
        },
        {
          name: "Debraj Roy",
          birthdate: "1954-2024",
          date: "1954",
          content: "Acting.",
          img: author12,
        },
        {
          name: "Parthasarathi Deb",
          birthdate: "1956-2024",
          date: "1956",
          content: "Acting.",
          img: author13,
        },
        {
          name: "Sreela (/Shrila) Majumdar",
          birthdate: "1958/1959 – 2024",
          date: "1958/59",
          content: "Acting.",
          img: author14,
        },
        {
          name: "Shafin Ahmed",
          birthdate: "1961-2024",
          date: "1961",
          content:
            "A legendary Bengali musician, Shafin Ahmed was the lead vocalist of the iconic band Miles. His contributions to rock and pop music in Bangladesh have left an enduring legacy.",
          img: author4,
        },
        {
          name: "Rashid Khan",
          birthdate: "1968-2024",
          date: "1968",
          content: "Singing - Indian Classical Music.",
          img: author15,
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
