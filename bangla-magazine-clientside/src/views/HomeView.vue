<template>
  <section>
    <!-- Main Content -->
    <div
      class="md:container md:mx-auto md:mt-16 mt-8 p-4 md:p-6 flex-grow min-h-screen"
    >
      <div class="relative flex flex-col rounded-2xl shadow-md md:flex-row">
        <!-- Left Section with Welcome Note -->
        <div class="relative w-full md:w-2/3 h-auto flex-shrink-0 p-6">
          <img
            src="../assets/img/culture.jpg"
            alt="Cultural Background"
            class="absolute inset-0 w-full h-full object-cover opacity-20 z-10 rounded-2xl"
          />
          <div
            class="relative p-4 md:p-8 founding-note flex flex-col justify-start z-30 bg-white bg-opacity-80 rounded-3xl shadow-inner"
          >
            <h2 class="text-2xl font-bold mb-2 sm:mb-4 text-gray-600">
              Welcome to Bangla Abhibashi Network, a Glocal Linguo-cultural
              Association
            </h2>
            <blockquote class="fade-in">
              <svg
                class="w-6 sm:w-8 h-6 sm:h-8 pr-2 text-honey-gold mb-2 sm:mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path
                  d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
                />
              </svg>
              <p
                class="text-sm md:text-lg pl-1 sm:pl-2 mb-2 sm:mb-4 font-semibold text-gray-500"
              >
                We are a Montreal-based Bangali diaspora committed to connecting
                Bengalis worldwide and promoting our rich cultural heritage.
              </p>
              <p
                class="text-lg md:text-2xl font-bold text-amber-600 font-cormorant"
              >
                "Bridging Distances, Celebrating Culture"
              </p>
            </blockquote>
          </div>
        </div>

        <!-- Right Section with Call for Contributions -->

        <div class="w-full md:w-1/3 flex flex-col items-center">
          <!-- Image Container with Enhanced Glass Effect and Bluish Tint -->
          <div class="relative w-full h-auto">
            <img
              src="../assets/img/bg-5.gif"
              alt="Cultural GIF"
              class="bg-cover object-cover rounded-2xl rounded-tl-none w-full"
            />
          </div>
          <button
            @click="contribute"
            class="group relative inline-flex items-center w-full overflow-hidden border-4 border-yellow-400 border-opacity-20 bg-gray-50 rounded-br-2xl px-6 py-3 font-medium text-midnight-sapphire shadow-md transition duration-300 ease-out hover:border-4 hover:border-double"
          >
            <span
              class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-600 duration-300 group-hover:translate-x-0"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              class="ease uppercase absolute flex h-full w-full transform items-center text-midnight-sapphire font-semibold tracking-wider text-xs justify-center transition-all duration-300 group-hover:translate-x-full"
              >Click to Begin Your Journey</span
            >
            <span class="invisible relative">Get Started</span>
          </button>

          <!-- Button with Enhanced Styling -->
          <!-- <button
            @click="contribute"
            class="w-full bg-gradient-to-r tracking-wide border border-amber-500 from-regal-blue to-gray-200 text-white hover:text-indigo-800 text-base font-bold rounded-lg shadow-md hover:from-amber-600 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 flex items-center justify-center py-3 px-4"
          >
            <span class="text-lg font-bold">Click to submit your work!!</span>
          </button> -->
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
  name: "HomeView",
  components: {
    CookieConsent,
  },
  data() {
    return {};
  },
  methods: {
    contribute() {
      this.$router.push("/contribute");
    },
  },
};
</script>

<style>
.founding-note {
  color: #1a202c;
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

main {
  flex-grow: 1;
  position: relative;
}

body::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
  /* Hides the scrollbar in Webkit browsers */
}

/* Hide scrollbar for Edge and Internet Explorer */
@supports (-ms-overflow-style: none) {
  body {
    -ms-overflow-style: none;
  }
}
</style>
