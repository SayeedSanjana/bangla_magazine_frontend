<template>
  <section class="">
    <div class="md:mx-auto flex-grow min-h-screen">
      <!-- What We are Looking for -->
      <div
        class="bg-gradient-to-r from-regal-blue to-gray-200 px-2 rounded-lg shadow pt-16 mb:pt-16 py-4"
      >
        <div class="md:container md:mx-auto px-4 lg:px-32">
          <div class="mb-8">
            <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
              Independent Category
            </h2>

            <p class="text-gray-600 text-base text-justify pt-4">
              Our inaugural issue explores the rich connections between Bangla
              and French languages, cultures, and histories. We invite
              submissions that delve into the intersections of these two
              worlds—through literature, translation, art, or lived experiences.
              Whether it’s exploring cultural exchanges, artistic
              collaborations, or personal stories, we seek contributions that
              highlight the unique interactions between these vibrant
              cultures.At
              <span
                class="text-midnight-sapphire font-bold font-cormorant text-2xl"
                >"Porijaan"</span
              >, we invite you to contribute your creative and intellectual
              works across a variety of topics, including Short Fiction, Long
              Fiction, Non-Fiction, Science and Technology, Sports, Painting,
              Transcripted Interviews, Reflected Essays, Life Writings, Health,
              Cartoons & Caricature, Travel, Scripts (Drama & Short Film),
              Poetry, and Photography. Share your unique voice, inspire minds,
              and become a part of our vibrant storytelling journey!
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-regal-blue to-gray-200">
        <div class="container mx-auto px-4"></div>
      </div>

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

      <div
        class="px-2 bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen pb-8"
      >
        <div class="container mx-auto md py-10 space-y-3 lg:px-32">
          <h2
            class="text-2xl md:text-4xl mb-2 text-midnight-sapphire font-cormorant font-semibold"
          >
            Topics We Are Interested In:
          </h2>
          <div
            class="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-8 md:pt-16 p-16"
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
              class="p-4 pt-4 relative z-10"
            >
              <div
                class="relative border bg-white border-gray-200 rounded-xl shadow-xl md:p-6 p-4 w-full h-full transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
              >
                <!-- Background Image with Opacity -->
                <!-- <img
                    src="../assets/img/culture.jpg"
                    class="absolute inset-0 w-full h-full object-cover opacity-5 rounded-lg "
                    alt="Background Image"
                  /> -->
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
                    @click="submissionForm(topic.name)"
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
import image1 from "@/assets/img/science-fiction.png";
import image2 from "@/assets/img/book.gif";
import image3 from "@/assets/img/food.png";
import image4 from "@/assets/img/photography.gif";
import image5 from "@/assets/img/health.gif";
import image6 from "@/assets/img/sports.gif";
import image7 from "@/assets/img/cartoon.png";
import image8 from "@/assets/img/cinema.gif";
import image9 from "@/assets/img/write.png";
import image10 from "@/assets/img/location.gif";
import image11 from "@/assets/img/palette.png";
import image12 from "@/assets/img/mic.gif";
import image13 from "@/assets/img/write.gif";
import image14 from "@/assets/img/essay.png";
import image15 from "@/assets/img/pencil.gif";

export default {
  name: "IndependentCategoryView",
  components: {},

  data() {
    return {
      currentSlide: 0,
      figuresPerPage: 4, // Default visible cards per page
      activeIndex: null,
      topics: [
        {
          name: "Short Fiction",
          image: image15,
          description:
            "We welcome imaginative short stories that capture powerful moments and unique perspectives, delivering a punch in a concise form.",
        },
        {
          name: "Long Fiction",
          image: image1,
          description:
            "Bring your narrative journey to life! We seek novellas and longer works that dive deep into character, plot, and world-building, offering readers an immersive storytelling experience.",
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
          name: "Sports",
          image: image6,
          description:
            "Write about current events, profiles, or personal experiences in the world of sports, whether professional or grassroots.",
        },

        {
          name: "Painting",
          image: image11,
          description:
            "Bring your vision to life through powerful images or themed artwork. We seek creative works that captivate and inspire, offering fresh perspectives and emotional depth.",
        },

        {
          name: "Transcripted Interviews",
          image: image12,
          description:
            "Bring forward voices of wisdom. Share interviews that highlight inspiring journeys, unique perspectives, and impactful stories.",
        },
        {
          name: "Reflected Essays",
          image: image14,
          description:
            "Share personal insights that resonate. We seek essays that explore deep reflections, connecting on a human level and inspiring thought.",
        },
        {
          name: "Life Writings",
          image: image13,
          description:
            "Capture life’s essence. We welcome autobiographical pieces that reveal the joys, challenges, and lessons of everyday moments.",
        },
        {
          name: "Health",
          image: image5,
          description:
            "Contribute articles or reports addressing health-related topics, from medical breakthroughs to wellness trends.",
        },

        {
          name: "Cartoons & Caricature",
          image: image7,
          description:
            "Contribute original, witty, or insightful cartoons and caricatures that comment on culture, society, or personal experiences.",
        },
        {
          name: "Travel",
          image: image10,
          description:
            "Take readers on a journey. Share travel stories that transport, delight, and intrigue, whether it's through immersive landscapes, cultural insights, or unforgettable encounters with people and places.",
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
        {
          name: "Photography",
          image: image4,
          description:
            "Capture the essence of the world through your lens. We invite you to share photographs that reveal hidden beauty, evoke emotion, or tell untold stories, capturing moments that linger in the mind.",
        },
      ],
    };
  },

  methods: {
    submissionForm(topicName) {
      this.$router.push({ name: "submission", params: { topicName } });
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
