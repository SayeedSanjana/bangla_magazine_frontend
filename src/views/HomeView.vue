<template>
  <section class="bg-slate-50">
    <!-- Main Content -->
    <div class="md:container md:mx-auto p-4 md:p-6 flex-grow bg-slate-50">
      <div class="h-auto bg-cover bg-center bg-slate-50 rounded-xl">
        <!-- Heading -->
        <div class="md:container md:mx-auto py-10 px-4 lg:px-32 space-y-3">
          <div
            class="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8"
          >
            <!-- Text on Left -->
            <div class="w-full lg:w-1/2">
              <h2
                class="text-4xl md:text-5xl font-bold text-midnight-sapphire mb-6 font-cormorant"
              >
                Welcome to Bangla Abhibashi Network: a Glocal Linguo-cultural
                Association ,
                <span class="italic font-bold text-amber-600"
                  >B.A.N.G.L.A.</span
                >
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
                  class="text-sm md:text-lg pl-1 sm:pl-2 mb-2 sm:mb-4 text-gray-500"
                >
                  We are a Montreal-based Bangali diaspora committed to
                  connecting Bengalis worldwide and promoting our rich cultural
                  heritage.
                </p>
                <p
                  class="text-lg md:text-3xl font-bold text-amber-600 font-cormorant"
                >
                  "Bridging Distances, Celebrating Culture"
                </p>
              </blockquote>
            </div>

            <!-- SVG on Right -->
            <div class="w-full lg:w-1/2 flex justify-center">
              <div>
                <img
                  src="../assets/img/bg-8.gif"
                  alt="SVG Image 1"
                  class="w-full h-auto"
                />
                <button
                  @click="contribute"
                  class="group relative mb-8 inline-flex items-center w-full overflow-hidden border-4 border-yellow-600 border-opacity-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl px-6 py-3 font-medium text-gray-600 shadow-md transition duration-300 ease-out hover:border-4 hover:border-double"
                >
                  <span
                    class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-r from-gray-100 to-amber-50 text-gray-600 duration-300 group-hover:translate-x-0"
                  >
                    <svg
                      class="h-6 w-6 fill-honey-gold"
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
                    class="ease absolute flex h-full w-full transform items-center text-gray-700 font-semibold text-base justify-center transition-all duration-300 group-hover:translate-x-full"
                    >Click to Begin Your Journey</span
                  >
                  <span class="invisible relative">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wave-divider bg-regal-blue hidden md:block">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-slate-50"
        ></path>
      </svg>
    </div>
    <div class="bg-regal-blue py-10 sm:py-20 hidden md:block">
      <div class="md:container md:mx-auto">
        <h2
          class="text-2xl sm:text-3xl font-cormorant text-midnight-sapphire text-center pb-4"
        >
          "Step in, publish your work and start making an impact with our
          vibrant community today!"
        </h2>
        <img
          src="../assets/svg/blobs.svg"
          alt="SVG Image 1"
          class="w-full h-60 mt-4"
        />
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
