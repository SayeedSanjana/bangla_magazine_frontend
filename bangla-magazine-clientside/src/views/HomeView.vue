<template>
  <section>
    <!-- Main Content -->
    <div class="md:container md:mx-auto mt-8 p-4 md:p-6 flex-grow">
      <div class="relative flex flex-col rounded-lg shadow-lg md:flex-row">
        <!-- Left Section with Welcome Note -->
        <div
          class="relative w-full md:w-3/5 h-auto flex-shrink-0 bg-gradient-to-r from-gray-100 to-gray-200 p-6"
        >
          <img
            src="../assets/img/culture.jpg"
            alt="Cultural Background"
            class="absolute inset-0 w-full h-full object-cover opacity-20 z-10"
          />
          <div
            class="relative p-4 md:p-8 founding-note flex flex-col justify-start z-30 bg-white bg-opacity-80 rounded-lg shadow-inner"
          >
            <h2
              class="text-2xl font-bold mb-2 sm:mb-4 text-gray-700 md:text-gray-600"
            >
              Welcome to Bangla Abhibashi Network, a Glocal Linguo-cultural
              Association
            </h2>
            <blockquote class="fade-in">
              <svg
                class="w-6 sm:w-8 h-6 sm:h-8 pr-2 text-crimson-bloom mb-2 sm:mb-4"
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
                class="text-sm md:text-lg pl-1 sm:pl-2 mb-2 sm:mb-4 font-semibold text-gray-600"
              >
                We are a Montreal-based Bangali diaspora committed to connecting
                Bengalis worldwide and promoting our rich cultural heritage.
              </p>
              <p class="text-lg md:text-2xl font-semibold text-amber-600">
                "Bridging Distances, Celebrating Culture"
              </p>
            </blockquote>
          </div>
        </div>

        <!-- Right Section with Call for Contributions -->

        <div class="w-full md:w-2/5 flex flex-col items-center rounded-xl shadow-xl">
          <!-- Image Container with Enhanced Glass Effect and Bluish Tint -->
          <div class="relative w-full  rounded-xl shadow-lg" style="
              
            ">
            <div class="relative w-full h-auto  rounded-lg shadow-md">
              <img
                src="../assets/img/bg-1.gif"
                alt="Cultural GIF"
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <!-- Button with Enhanced Styling -->
          <button @click="contribute" class="w-full bg-gradient-to-r tracking-tight border-2 border-amber-500 from-honey-gold to-amber-600 text-burgundy-crush hover:text-autumn-auburn text-base font-bold rounded-lg shadow-md hover:from-amber-600 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 flex items-center justify-center py-2 px-4">
            <img src="../assets/img/arrow.png" alt="Submit" class="animate-bounce w-14 h-12 p-0.5 object-contain"/>
            <span class="text-lg font-bold">Click to submit your work!!</span>
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
