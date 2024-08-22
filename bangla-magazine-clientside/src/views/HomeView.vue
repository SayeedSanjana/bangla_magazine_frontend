<template>
  <body class=" text-gray-800 flex flex-col min-h-screen bg-gradient-to-r from-rose-50 to-emerald-50">
    
    <!-- Header -->
    <Header />

    <!-- Navigation bar -->
    <div class="relative flex-grow">
      <div class="relative z-30">
        <NavBar />
      </div>
      <img src="../assets/img/alphabets.jpg" alt="Background"
            class="absolute inset-0 w-full h-full object-cover opacity-5 clip-smooth z-10">
      <div class="absolute inset-0 bg-opacity-60 z-15"></div>

      <!-- Main Content -->
      <main class="md:container overflow-hidden md:mx-auto relative border-gray-50 p-4 md:p-6 mt-2">
        <div class="relative flex flex-col rounded-lg shadow-lg md:flex-row overflow-hidden z-30">
          <!-- Left Section with Welcome Note -->
          <div class="relative w-full md:w-2/5 h-auto flex-shrink-0 overflow-hidden">
            <img src="../assets/img/culture.jpg" alt="Background"
                 class="absolute inset-0 w-full h-full object-cover opacity-10 clip-smooth z-30">
            <div class="absolute inset-0 bg-opacity-60 z-20"></div>
            <div class="relative p-4 md:p-8 founding-note flex flex-col justify-start z-30">
              <h2 class="text-2xl font-bold mb-2 sm:mb-4 text-gray-700 md:text-gray-600">
                Welcome to Bangla Abhibashi Network, a Glocal Linguo-cultural Association
              </h2>
              <blockquote class="fade-in">
                <svg class="w-6 sm:w-8 h-6 sm:h-8 pr-2 text-rose-900 mb-2 sm:mb-4" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path
                    d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <p class="text-sm md:text-lg pl-1 sm:pl-2 mb-2 sm:mb-4 font-semibold text-gray-500">
                  We are a Montreal-based Bangali diaspora committed to connecting Bengalis worldwide and promoting our rich cultural heritage.
                </p>
                <p class="text-lg md:text-2xl font-semibold text-rose-800">"Bridging Distances, Celebrating Culture"</p>
              </blockquote>
            </div>
          </div>

          <!-- Right Section with Call for Contributions -->
          <div class="relative w-full md:w-3/5 border-gray-300 flex flex-col p-3 sm:p-4 overflow-hidden z-40">
            <img src="../assets/img/announcement.gif" alt="Background"
                 class="absolute inset-0 w-full h-full object-cover opacity-35 z-0 clip-smooth-right">
            <div class="absolute inset-0 bg-opacity-60 z-10"></div>
            <div class="relative text-gray-600 z-20">
              <h2 class="text-2xl underline md:text-4xl font-bold mb-2 md:mb-4 text-rose-900">Call for Contributions</h2>
              <p class="mb-6 text-base md:text-xl font-medium">Share your creativity and join us in celebrating Bengali culture! We welcome:</p>
              <ul class="list-none mb-4 text-base md:text-lg space-y-4">
                <li class="flex-col">
                  <span class="flex items-center">
                    <img src="../assets/svg/article.svg" class="w-5 md:w-7 h-5 md:h-7" alt="article">
                    <span class="pl-4 text-lg font-semibold md:text-xl">Articles:</span>
                  </span>
                  <p class="pl-10 font-medium text-base font-sans text-gray-500">Insights on our annual theme, Bengali culture, and diaspora experiences.</p>
                </li>
                <li class="flex flex-col">
                  <span class="flex items-center">
                    <img src="../assets/svg/literary.svg" class="w-5 md:w-7 h-5 md:h-7" alt="literary">
                    <span class="pl-4 text-lg font-semibold md:text-xl">Literary Works:</span>
                  </span>
                  <p class="pl-10 font-medium text-base font-sans text-gray-500">Original poetry, short stories, and captivating fiction.</p>
                </li>
                <li class="flex flex-col">
                  <span class="flex items-center">
                    <img src="../assets/svg/photography.svg" class="w-5 md:w-7 h-5 md:h-7" alt="photography">
                    <span class="pl-4 text-lg font-semibold md:text-xl">Art and Photography:</span>
                  </span>
                  <p class="pl-10 font-medium text-base font-sans text-gray-500">Visual art and photography that tell powerful stories.</p>
                </li>
                <li class="flex flex-col pb-4 border-b border-gray-400">
                  <span class="flex items-center">
                    <img src="../assets/svg/narratives.svg" class="w-5 md:w-7 h-5 md:h-7" alt="narratives">
                    <span class="pl-4 text-lg font-semibold md:text-xl">Personal Narratives:</span>
                  </span>
                  <p class="pl-10 font-medium text-base font-sans text-gray-500">Travel writing, memoirs, and interviews with cultural icons.</p>
                </li>
                <li class="block py-2 px-2 border-l-4 border-gray-600">
                  <p>
                    <i>For any queries email us at</i><a href="mailto:info@bangaliabhibasi.org" class="ml-1 font-semibold">info@bangaliabhibasi.org</a>
                  </p>
                </li>
              </ul>
              <div class="flex md:justify-start mt-1">
                <a href="./src/contribute.html"
                   class="px-4 sm:px-6 py-2 sm:py-3 bg-rose-900 text-white font-semibold rounded-lg shadow-md hover:bg-rose-800 transition duration-300">Submit your work here</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="relative">
      <Footer />
    </footer>

    <!-- Cookie Consent Popup -->
    <CookieConsent />
  </body>
</template>


<script>
import NavBar from "../components/icons/Navigation.vue";
import Footer from "../components/icons/Footer.vue";
import CookieConsent from "../components/icons/CookieConsent.vue";
import Header from "../components/icons/Header.vue";
export default {

  components: {
    NavBar,
    Footer,
    CookieConsent,
    Header
  },
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style>

.founding-note {
  font-family: 'Georgia', serif;
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

/* Custom clip-path for smooth clipping on the left side */
.clip-smooth {
  clip-path: polygon(0 0, 80% 0, 95% 50%, 80% 100%, 0 100%);
}

/* Custom clip-path for smooth clipping on the right side */
.clip-smooth-right {
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 5% 50%);
}

/* Background opacity for seamless transition */
.bg-white {
  background-color: rgba(255, 255, 255, 0.6);
}

/* Ensuring the alphabets background blends well */
.mix-blend-overlay {
  mix-blend-mode: overlay;
}
</style>
