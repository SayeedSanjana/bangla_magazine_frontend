
<template>
  <body class="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!--Navigation bar-->
    <div class="">
      <NavBar />
    </div>

    <!-- Main Content -->
    <main class="md:container overflow-hidden md:mx-auto p-4 md:p-6 flex-grow">
      <div class="relative flex flex-col mb-8 rounded-lg shadow-lg md:flex-row">
        <!-- Left Section with Welcome Note -->
        <div class="relative w-full md:w-3/5 h-auto">
          <img src="../assets/img/culture.jpg" alt="Background"
            class="absolute inset-0 w-full h-full object-cover opacity-30">
          <div class="absolute inset-0 bg-white bg-opacity-60"></div>
          <div class="relative p-4 md:p-8 founding-note flex flex-col justify-start">
            <h2 class="text-2xl font-bold mb-2 sm:mb-4 text-cyan-700 md:cyan-600">Welcome to Bangla Abhibashi Network, a
              Glocal Linguo-cultural Association</h2>
            <blockquote class="fade-in">
              <svg class="w-6 sm:w-8 h-6 sm:h-8 pr-2 text-gray-500 mb-2 sm:mb-4" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path
                  d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p class="text-sm md:text-lg pl-1 sm:pl-2 mb-2 sm:mb-4 font-semibold text-gray-500">We are a Montreal-based
                Bangali
                diaspora committed to connecting Bengalis worldwide and promoting our rich cultural heritage.</p>
              <p class="text-lg md:text-2xl font-semibold text-cyan-600">"Bridging Distances, Celebrating Culture"</p>
            </blockquote>
          </div>
        </div>
        <!-- Right Section with Call for Contributions -->
        <div class="w-full md:w-2/5 bg-gray-100 flex flex-col items-center">
          <img src="../assets/img/contribution.gif" alt="GIF Description"
            class="w-full h-auto mb-0  bg-cover max-w-xs sm:max-w-md md:max-w-full">
          <!-- Button -->
          <button
            class="bg-gradient-to-r from-amber-300 to-amber-500  uppercase w-full text-gray-600 font-bold py-3 px-4 rounded hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            Click to submit your work!
          </button>
        </div>
      </div>
    </main>

    <!--Footer-->
    <div class="">
      <Footer />
    </div>

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

    body {
      overflow: auto;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex-grow: 1;
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