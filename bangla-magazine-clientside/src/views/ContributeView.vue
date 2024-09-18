<template>
  <section class="">
    <div class="md:mx-auto flex-grow min-h-screen">
      <!-- Mission and Objectives Banner -->
      <div class="h-auto shadow-md bg-cover bg-center bg-gray-50">
        <!-- Heading -->
        <div class="md:container md:mx-auto py-10 px-4 lg:px-32 space-y-3">
          <div
            class="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8"
          >
            <!-- Text on Left -->
            <div class="w-full lg:w-1/2">
              <h2
                class="text-4xl md:text-6xl font-bold text-midnight-sapphire mb-6 font-cormorant"
              >
                Want to join our community and become an organizer?
              </h2>
              <p class="text-gray-600 text-lg text-justify mt-4">
                <span class="text-midnight-sapphire">B.A.N.G.L.A.</span>
                Magazine is open for creative voices across languages and
                mediums.
              </p>
              <button
                @click="submissionForm"
                class="text-base px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg mt-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
              >
                Contribute Now..
              </button>
            </div>

            <!-- SVG on Right -->
            <div class="w-full lg:w-1/2 flex justify-center">
              <img
                src="../assets/img/contribute.jpeg"
                alt="SVG Image 1"
                class="lg:w-full lg:h-auto w-60 h-60"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Magazine Section -->
      <div
        class="bg-gradient-to-r from-regal-blue to-gray-200 py-8 px-2 rounded-lg shadow pt-8 mb:pt-16"
      >
        <div class="py-8 px-4 mx-auto max-w-screen-xl">
          <div class="mb-8">
            <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
              The Magazine
            </h2>
            <p class="font-light text-base text-gray-700 mb-4">
              Join us as
              <span class="text-midnight-sapphire font-bold">Porijaan</span>,
              BANGLA’s premier digital magazine, embarks on a journey of
              creative expression in Bangla, English, and French. Be part of a
              dynamic community of storytellers, artists, and innovators, and
              showcase your work across fiction, non-fiction, art, science, and
              more. Submit today and let your voice resonate in a global,
              multicultural dialogue.
            </p>
            <p class="font-light text-base text-gray-700">
              The magazine features two main sections with sub-sections covering
              fiction, non-fiction, travel, science, health, sports, art,
              photography, cartoons, interviews, and scripts. One section will
              introduce an
              <span class="text-midnight-sapphire font-semibold"
                >Annual Theme</span
              >
              , starting with ‘Bangla-French Crossings,’ exploring interactions
              between Bangla and French languages, cultures, and worldviews. It
              will include public articles on artistic or literary
              interventions, translations, and personal experiences. The second
              section, the
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
      <div class="px-2 bg-gradient-to-r from-amber-50 to-blue-50">
        <div class="container mx-auto md:mx-auto py-10 px-4 space-y-3 lg:px-32">
          <!-- <div class="absolute inset-0 bg-gray-900 opacity-85"></div> -->
          <h2
            class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant pt-6"
          >
            What We Are Looking For?
          </h2>
          <h2
            class="text-4xl md:text-5xl mb-2 text-gray-800 font-cormorant pt-6"
          >
            Independent Category
          </h2>

          <div
            class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-8 md:pt-16 p-8"
          >
            <!-- Background Image with Opacity -->
            <img
              src="../assets/img/culture.jpg"
              class="absolute inset-0 w-full h-full object-cover opacity-5 rounded-lg"
              alt="Background Image"
            />

            <!-- Content on top of the background -->
            <div
              v-for="(topic, i) in topics"
              :key="i"
              class="p-6 relative z-10"
            >
              <div
                class="relative border border-gray-200 rounded-xl shadow-lg bg-white p-6 h-full transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
              >
                <!-- Positioned and Rounded SVG -->
                <div
                  class="absolute -top-8 left-16 transform -translate-x-1/2 p-2"
                >
                  <img :src="topic.image" class="w-12 h-12" />
                </div>

                <div>
                  <!-- Title -->
                  <h5 class="mt-6 mb-2 text-lg tracking-tight text-amber-600">
                    {{ topic.name }}
                  </h5>

                  <!-- Divider -->
                  <div
                    class="border-t-2 border-gray-300 border-opacity-35 my-3"
                  ></div>

                  <!-- Description -->
                  <p class="font-normal text-base text-gray-600">
                    {{ topic.description }}
                  </p>
                </div>

                <!-- Button aligned at the bottom -->
                <div class="mt-4">
                  <button
                    href="#"
                    class="inline-flex font-medium text-sm items-center text-midnight-sapphire hover:underline"
                  >
                    See our guideline
                    <svg
                      class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Annual Theme Section -->

      <div class="bg-gradient-to-r from-amber-50 to-blue-50 pt-8">
        <div class="md:container md:mx-auto px-4 lg:px-32">
          <h2 class="text-4xl md:text-5xl text-gray-800 font-cormorant mb-8">
            Annual Theme
          </h2>
          <div
            class="flex flex-col lg:flex-row items-start justify-between lg:space-x-8 pb-8 md:pb-12"
          >
            <!-- Left Section: Sticky on Scroll -->
            <div class="w-full lg:w-1/2 md:pr-6 lg:sticky lg:top-0 self-start">
              <p class="text-amber-600 text-xl text-justify pb-4">
                Bangla-French-Crossings
              </p>

              <div class="pt-6">
                <img
                  src="../assets/svg/combined.svg"
                  alt="SVG Image 1"
                  class="lg:h-full lg:w-full h-96"
                />
              </div>
            </div>

            <!-- Right Section: Accordion -->
            <div class="lg:w-1/2 w-full lg:overflow-y-auto">
              <div>
                <p class="text-amber-600 text-xl text-justify p-4">
                  Become part of-
                </p>
                <p class="text-gray-600 text-base text-justify mt-2 p-4">
                  Our inaugural issue explores the rich connections between
                  Bangla and French languages, cultures, and histories. We
                  invite submissions that delve into the intersections of these
                  two worlds—through literature, translation, art, or lived
                  experiences. Whether it’s exploring cultural exchanges,
                  artistic collaborations, or personal stories, we seek
                  contributions that highlight the unique interactions between
                  these vibrant cultures.
                </p>
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

      <!--  Literary and Cultural Figures-->

      <div class="pt-8 px-2 bg-gradient-to-r min-h-screen">
        <div class="container md:mx-auto py-10 px-4 space-y-3 lg:px-32">
          <h2
            class="text-4xl md:text-5xl mb-2 text-gray-800 font-cormorant pt-6 lg:pt-16"
          >
            Literary and Cultural Figures
          </h2>
          <p class="text-amber-600 text-xl text-justify my-2">
            Celebrating Icons
          </p>
          <p class="text-gray-600 text-base text-justify my-8">
            This section honors literary and cultural icons whose works have
            left an indelible mark on Bangla and world culture. For the
            inaugural issue, we commemorate the anniversaries of figures who
            have shaped literature, art, and thought across generations. We
            invite submissions that reflect on their contributions, engage with
            their works, or offer fresh perspectives on their legacy.
          </p>

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

      <!-- Memory of Luminaries-->
      <div class="px-2 bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen">
        <div class="container md:mx-auto py-6 px-4 space-y-3 lg:px-32">
          <h2
            class="text-4xl md:text-5xl mb-2 text-gray-800 font-cormorant pt-6"
          >
            Memory of Luminaries
          </h2>
          <p class="text-amber-600 text-xl text-justify my-2">
            In Memory of Luminaries
          </p>
          <p class="text-gray-600 text-lg text-justify my-8">
            Besides, this year we will feature obituaries of a few luminaries
            who recently passed away - and pursued multifaceted creative
            interests.
          </p>

          <!--  Main Section-->
          <div class="flex justify-center items-center md:pt-12">
            <div class="overflow-hidden relative w-full">
              <!-- Slider wrapper -->
              <div class="flex transition-transform duration-300 ease-out">
                <!-- Cards -->
                <div
                  v-for="(card, index) in luminaries"
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
                      {{ card.name }}
                    </h3>
                    <p class="text-amber-600 mb-1">
                      {{ card.birthdate }}
                    </p>

                    <p class="text-gray-500 mb-4 text-sm">
                      {{ card.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Submission Form Section -->

      <div
        class="px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center relative h-96"
      >
        <div class="absolute inset-0 bg-gray-900 opacity-85"></div>
        <div
          class="container md:mx-auto py-6 px-4 space-y-3 lg:px-32 relative z-10"
        >
          <h2
            class="text-4xl md:text-5xl font-bold mb-2 text-white font-cormorant pt-6"
          >
            Join Now...
          </h2>
          <p class="text-white text-lg text-justify my-2 mb-6">
            Share your work and become a valued member of our community!
          </p>
          <button
            @click="submissionForm"
            class="text-base px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
          >
            Contribute Now..
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from "@/assets/img/science-fiction.png";
import image2 from "@/assets/img/book.gif";
import image3 from "@/assets/img/food.png";
import image4 from "@/assets/img/photography.gif";
import image5 from "@/assets/img/health.gif";
import image6 from "@/assets/img/sports.gif";
import image7 from "@/assets/img/cartoon.png";
import image8 from "@/assets/img/cinema.gif";
import image9 from "@/assets/img/write.png";

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

      topics: [
        {
          name: "Fiction",
          image: image1,
          description:
            "We welcome imaginative stories, including short fiction, novellas, and experimental writing that push the boundaries of storytelling.",
        },
        {
          name: "Non-Fiction",
          image: image2,
          description:
            "Submit essays, memoirs, and articles exploring real-world topics, personal reflections, or thought-provoking analyses.",
        },
        {
          name: "Science And Technology",
          image: image3,
          description:
            "Share insights, discoveries, or public articles on the latest advancements and challenges in science, tech, health, and innovation.",
        },
        {
          name: "Art And Photography",
          image: image4,
          description:
            "Bring your vision to life through powerful images or themed artwork. We seek creative works that captivate and inspire, offering fresh perspectives and emotional depth.",
        },
        {
          name: "Health",
          image: image5,
          description:
            "Contribute articles or reports addressing health-related topics, from medical breakthroughs to wellness trends.",
        },
        {
          name: "Sports",
          image: image6,
          description:
            "Write about current events, profiles, or personal experiences in the world of sports, whether professional or grassroots.",
        },
        {
          name: "Cartoons & Caricature",
          image: image7,
          description:
            "Contribute original, witty, or insightful cartoons and caricatures that comment on culture, society, or personal experiences.",
        },
        {
          name: "Scripts (Drama & Short Film)",
          image: image8,
          description:
            "Submit original scripts for drama or short films that bring fresh, engaging narratives to life.",
        },
        {
          name: "Poetry",
          image: image9,
          description:
            "Contribute original, insightful poetry that captures life, emotions, and diverse cultural expressions.",
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
    submissionForm() {
      this.$router.push("/submission-form");
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
    // nextSlide() {
    //   const totalSlides = Math.ceil(this.figures.length);
    //   if (this.currentSlide < totalSlides - 1) {
    //     this.currentSlide++;
    //   } else {
    //     this.currentSlide = 0; // Loop back to the first slide
    //   }
    // },
    // prevSlide() {
    //   const totalSlides = Math.ceil(this.figures.length);
    //   if (this.currentSlide > 0) {
    //     this.currentSlide--;
    //   } else {
    //     this.currentSlide = totalSlides - 1; // Loop to the last slide
    //   }
    // },
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
