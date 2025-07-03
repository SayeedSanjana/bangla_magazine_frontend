<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- 🔹 First Section (Background Image with Quote) -->
    <div class="relative h-[60vh] bg-cover bg-center background-img">
      <div class="absolute inset-0 bg-gray-900 opacity-90"></div>

      <div
        class="relative z-10 flex flex-col justify-center items-center text-center lg:py-16 py-12 px-4"
      >
        <div class="fade-in">
          <p
            class="text-xl md:text-5xl mt-4 font-cormorant tracking-wide text-amber-600"
          >
            Reframing My Worth: Memoir of a Bangladeshi-Canadian Woman
          </p>
          <p
            class="text-lg md:text-4xl mt-4 text-white font-cormorant tracking-wide"
          >
            - Interactive Session with Dr. Zaman
          </p>
        </div>
      </div>
    </div>

    <!-- Introduction Section -->
    <div
      class="relative bg-gradient-to-r from-yellow-50 to-gray-200 z-10 -mt-[20vh] max-w-4xl mx-auto p-6 rounded-lg"
    >
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Side -->
        <div class="relative w-full md:w-1/3 flex justify-center mb-10 md:mb-0">
          <!--  image with overlay text -->
          <div class="relative">
            <img
              src="../assets/interactiveSession/habiba-zaman-book.jpg"
              alt="Laptop"
              class="rounded-lg shadow-xl"
            />
            <!-- <div
            class="absolute inset-0 bg-pink-600 bg-opacity-60 flex items-center justify-center"
          >
            <h2 class="text-white text-3xl font-bold">hello.</h2>
          </div> -->
          </div>
        </div>

        <!-- Right Side -->
        <div class="w-full md:w-2/3 text-center md:text-left m-6">
          <h2 class="text-4xl font-bold text-gray-900 font-cormorant">
            Reframing My Worth
          </h2>
          <div
            class="w-12 h-1 bg-midnight-sapphire mt-4 mb-6 mx-auto md:mx-0"
          ></div>
          <p class="text-lg text-amber-600 font-semibold mb-2">
            A Memoir of a Bangladeshi-Canadian Woman
          </p>
          <p class="text-gray-600 mb-4">
            Join us for an inspiring evening as we celebrate the launch of this
            powerful memoir that explores identity, belonging, and the immigrant
            experience through a deeply personal Bangladeshi-Canadian lens.
          </p>
        </div>
      </div>
    </div>

    <!--Event Section-->
    <div class="pb-8 md:pb-16 pt-8 md:pt-16 py-8 bg-white">
      <div class="relative w-full max-w-6xl mx-auto px-6">
        <h2
          class="text-4xl md:text-5xl mb-8 text-gray-800 font-cormorant text-center"
        >
          Event Details and Highlights
        </h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <!-- Card 1 -->

          <div
            class="bg-gray-800 text-white px-6 py-10 text-center relative w-full max-w-md mx-auto shadow-sm rounded-md flex flex-col justify-between h-full"
          >
            <!-- Top Line  -->
            <div class="relative w-full h-px bg-gray-700 mb-3">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>

            <!-- Card Content -->
            <div class="flex flex-col items-center">
              <!-- Text -->
              <p class="uppercase text-honey-gold tracking-widest text-sm mb-1">
                Date and Time
              </p>
              <h3 class="text-lg font-extrabold font-display mb-2 text-white">
                Saturday, July 12, 2025
              </h3>

              <p
                class="text-gray-300 text-sm leading-relaxed flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 1.75a10.25 10.25 0 1 0 0 20.5 10.25 10.25 0 0 0 0-20.5Zm0 1.5a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5Zm.75 4.75v4.25l3.25 2a.75.75 0 0 1-.75 1.3l-3.5-2.15A.75.75 0 0 1 11.25 13V8a.75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                5:30 PM – 7:30 PM
              </p>

              <p class="text-gray-300 text-sm leading-relaxed">
                Doors open at 5:00 PM
              </p>
            </div>

            <!-- Bottom Line -->
            <div class="relative w-full h-px bg-gray-700 mt-8">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-gray-800 text-white px-6 py-10 text-center relative w-full max-w-md mx-auto shadow-sm rounded-md flex flex-col justify-between h-full"
          >
            <!-- Top Line -->
            <div class="relative w-full h-px bg-gray-700 mb-3">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>

            <!-- Card Content -->
            <div class="flex flex-col items-center">
              <!-- Text -->
              <p class="uppercase text-honey-gold tracking-widest text-sm mb-1">
                Location
              </p>
              <h3 class="text-lg font-extrabold font-display mb-2 text-white">
                SANAAQ Center
              </h3>

              <p
                class="text-gray-300 text-sm leading-relaxed flex items-center justify-center gap-2"
              >
                Montreal, Canada
              </p>
              <a
                href="https://www.google.com/maps?q=SANAAQ+Center,+Montreal,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-amber-600 text-white text-sm px-4 py-2 rounded hover:bg-amber-700 transition mt-3"
              >
                <!-- Direction SVG -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  class="w-4 h-4"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 
             0-2.5-1.12-2.5-2.5s1.12-2.5 
             2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  />
                </svg>
                Get Directions
              </a>

              <!-- <p class="text-gray-300 text-sm leading-relaxed">
                Doors open at 5:00 PM
              </p> -->
            </div>

            <!-- Bottom Line -->
            <div class="relative w-full h-px bg-gray-700 mt-6">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="bg-gray-800 text-white px-6 py-10 text-center relative w-full max-w-md mx-auto shadow-sm rounded-md flex flex-col justify-between h-full"
          >
            <!-- Top Line  -->
            <div class="relative w-full h-px bg-gray-700 mb-3">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>

            <!-- Card Content -->
            <div class="flex flex-col items-center">
              <!-- Text -->
              <p class="uppercase text-honey-gold tracking-widest text-sm mb-1">
                Reserve Your Spot
              </p>

              <p
                class="text-gray-300 text-sm leading-relaxed flex items-center justify-center gap-2"
              >
                Register for free
              </p>
              <ul
                class="list-disc list-inside text-sm text-gray-300 space-y-1 mt-3 text-left"
              >
                <li>Book signing opportunity</li>
                <li>Q&amp;A session with the author</li>
                <li>Networking with community members</li>
              </ul>

              <button
                @click="showRSVPModal = true"
                class="inline-flex items-center gap-2 bg-amber-600 text-white text-sm px-4 py-2 rounded hover:bg-amber-700 transition mt-3"
              >
                <!-- Direction SVG -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                RSVP Now
              </button>

              <!-- <p class="text-gray-300 text-sm leading-relaxed">
                Doors open at 5:00 PM
              </p> -->
            </div>

            <!-- Bottom Line -->
            <div class="relative w-full h-px bg-gray-700 mt-6">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>
          </div>

          <!-- Card 4 -->
          <div
            class="bg-gray-800 text-white px-6 py-10 text-center relative w-full max-w-md mx-auto shadow-sm rounded-md flex flex-col justify-between h-full"
          >
            <!-- Top Line -->
            <div class="relative w-full h-px bg-gray-700 mb-3">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>

            <!-- Card Content -->
            <div class="flex flex-col items-center">
              <!-- Text -->
              <p class="uppercase text-honey-gold tracking-widest text-sm mb-1">
                Event Highlights
              </p>

              <ul
                class="list-disc list-inside text-sm text-gray-300 space-y-1 mt-3 text-left"
              >
                <li class="mt-0.5">Author sharing her journey firsthand</li>
                <li class="mt-0.5">
                  Interactive discussion on diaspora experiences
                </li>
                <li class="mt-0.5">
                  Author will be available to sign books that have been
                  purchased before
                </li>
              </ul>
            </div>

            <!-- Bottom Line -->
            <div class="relative w-full h-px bg-gray-700 mt-6">
              <div
                class="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-px bg-amber-600"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- RSVP Modal -->

    <div
      v-if="showRSVPModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative">
        <!-- Close Button -->
        <button
          @click="showRSVPModal = false"
          class="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h3 class="text-xl font-semibold mb-4 text-center">RSVP Form</h3>

        <!-- Embedded Google Form -->
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="googleFormUrl"
            width="100%"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            class="w-full"
            allowfullscreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>

    <div class="wave-divider bg-regal-blue">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-white"
        ></path>
      </svg>
    </div>
    <!--About the Book-->
    <div class="bg-regal-blue pb-10 md:pb-20">
      <div class="md:container md:mx-auto px-4 lg:px-32 space-y-3">
        <h2
          class="text-4xl md:text-5xl mb-8 text-gray-800 font-cormorant text-center"
        >
          About the Book
        </h2>
        <div
          class="flex flex-col md:flex-row items-center md:items-stretch gap-8"
        >
          <!-- Left: Image -->
          <div class="w-full md:w-1/3 flex justify-center">
            <img
              src="../assets/interactiveSession/habiba-zaman-book.jpg"
              alt="Reframing My Worth Book Cover"
              class="rounded shadow w-auto h-auto"
            />
          </div>

          <!-- Right: Text centered vertically -->
          <div class="w-full md:w-2/3 flex items-center">
            <div class="w-full">
              <p class="text-gray-700 text-base mb-6">
                <em
                  >Reframing My Worth: A Memoir of a Bangladeshi-Canadian
                  Woman</em
                >
                is a compelling memoir that navigates the complex journey of
                identity formation within the Bangladeshi-Canadian diaspora.
                Through intimate storytelling, the author explores themes of
                cultural belonging, generational differences, and the ongoing
                process of defining self-worth in a multicultural context.
              </p>

              <div class="w-full flex justify-center md:justify-start">
                <a
                  href="https://www.amazon.ca/Reframing-My-Worth-Memoir-Bangladeshi-Canadian-ebook/dp/B0DLP9JJ49"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-amber-600 text-white text-sm px-4 py-3 rounded hover:bg-amber-700 transition"
                >
                  <!-- Arrow SVG -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  View on Amazon
                </a>
              </div>
              <p class="text-gray-700 mt-10 mb-5">
                Check out acclaimed reviews for
                <em
                  >Reframing My Worth: A Memoir of a Bangladeshi-Canadian
                  Woman</em
                >:
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="https://www.thedailystar.net/books-literature/news/transnational-identity-negotiating-the-choices-3881296"
                    target="_blank"
                    class="text-midnight-sapphire hover:text-gray-700 inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 3h7m0 0v7m0-7L10 14m-4 0H3v7h7v-3"
                      />
                    </svg>
                    The Daily Star
                  </a>
                </li>
                <li>
                  <a
                    href="https://globalbangladesh.org/book-review-reframing-my-worth-memoir-of-a-bangladeshi-canadian-woman/"
                    target="_blank"
                    class="text-midnight-sapphire hover:text-gray-700 inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 3h7m0 0v7m0-7L10 14m-4 0H3v7h7v-3"
                      />
                    </svg>
                    Global Bangladesh
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/u/1/#search/adib/FMfcgzQbfxbzKnWxxqbvgbWNjbvDrtlV?projector=1&messagePartId=0.1"
                    target="_blank"
                    class="text-midnight-sapphire hover:text-gray-700 inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 3h7m0 0v7m0-7L10 14m-4 0H3v7h7v-3"
                      />
                    </svg>
                    SFU Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="https://monographs.lib.sfu.ca/index.php/sfulibrary/catalog/download/79/49/2041?inline=1"
                    target="_blank"
                    class="text-midnight-sapphire hover:text-gray-700 inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 3h7m0 0v7m0-7L10 14m-4 0H3v7h7v-3"
                      />
                    </svg>
                    SFU Monographs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--About the author-->
    <div class="author-section bg-cover bg-center bg-no-repeat pb-10 md:pb-20">
      <div class="py-16">
        <div class="container mx-auto px-4 lg:px-32 text-center">
          <!-- Section Title -->
          <h2 class="text-4xl md:text-5xl mb-8 text-gray-800 font-cormorant">
            About the Author
          </h2>

          <!-- Avatar -->
          <img
            src="../assets/interactiveSession/habiba-zaman.png"
            alt="Author"
            class="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
          />

          <!-- Name + Role -->
          <div class="mb-6">
            <p class="text-lg font-semibold text-gray-700">Dr. Habiba Zaman</p>
            <p class="text-sm text-gray-400">/ Author</p>
          </div>

          <!-- Quote -->
          <p class="text-gray-600 text-lg mx-auto leading-relaxed">
            Dr. Habiba Zaman is a distinguished academic and author whose work
            explores themes of identity, migration, and cultural belonging
            within the South Asian diaspora. Through her memoir Reframing My
            Worth: A Memoir of a Bangladeshi-Canadian Woman, she offers an
            intimate and powerful exploration of the Bangladeshi-Canadian
            experience, drawing from her personal journey and academic
            expertise.
          </p>
          <p class="text-gray-500 text-sm mx-auto leading-relaxed mt-3">
            Join us for an evening of meaningful conversation as Dr. Zaman
            shares insights from her memoir and engages with our community about
            the complexities of cultural identity and belonging.
          </p>
        </div>
      </div>
    </div>

    <!--Join Network-->
    <div
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-8"
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
import CookieConsent from "../components/CookieConsent.vue";

export default {
  name: "InteractiveDiscussionView",
  components: {
    CookieConsent,
  },
  data() {
    return {
      showRSVPModal: false,
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuLtadTF_zuKT5Lxm49u5rh4rG6KIx8BcxhWsArFCP2_ZNfQ/viewform?embedded=true",
    };
  },
  mounted() {},
  methods: {
    join() {
      this.$router.push("/contribute/membership");
    },
  },
};
</script>

<style scoped>
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
button {
  transition: all 0.3s ease-in-out;
}
video {
  transition: transform 0.3s ease-in-out;
}
.background-img {
  background-image: url("../assets/interactiveSession/habiba-zaman-book.jpg");
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("../assets/img/bg-contribute.png");
}

.container-class {
  overflow: visible !important;
}
.rounded-2xl {
  border-radius: 20px !important;
}

.author-section {
  background-image: url("../assets/PohelaBaishakh/img2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Responsive tweaks */
@media (max-width: 640px) {
  .timer h3 {
    font-size: 1.75rem; /* Smaller numbers */
  }
  .timer p {
    font-size: 0.875rem; /* Smaller labels */
  }
}
</style>
