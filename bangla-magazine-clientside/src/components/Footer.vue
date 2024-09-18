<template>
  <!-- Footer -->
  <footer class="w-full bg-gradient-to-r from-gray-200 to-amber-50 shadow-md">
    <div class="mx-auto md:container p-4 md:p-6">
      <!--Grid-->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8"
      >
        <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
          <button
            @click="home"
            class="flex justify-center lg:justify-start hover:underline"
          >
            <img src="../assets/img/logo.jpg" alt="logo" class="h-20 m-2" />
            <div>
              <p
                class="font-cormorant text-lg sm:text-2xl text-midnight-sapphire p-2 pt-2 font-bold"
              >
                Bangali Abhibasi Network: a Glocal Linguo-cultural Association
              </p>
            </div>
          </button>
        </div>
        <!--End Col-->
        <div class="lg:mx-auto text-left text-sm sm:text-base mx-8">
          <ul class="transition-all duration-500">
            <li class="mb-4 sm:mb-6">
              <button
                @click="home"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Home
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="about"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                About Us
              </button>
            </li>
          </ul>
        </div>
        <!--End Col-->
        <div class="lg:mx-auto text-left text-sm sm:text-base mx-8">
          <ul class="transition-all duration-500">
            <li class="mb-4 sm:mb-6">
              <button
                @click="contribute"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Contribute to Our Organization
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="cookie"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Cookie Management
              </button>
            </li>
          </ul>
        </div>
        <!--End Col-->
        <!--End Col-->
        <div class="lg:mx-auto text-left text-sm sm:text-base mx-8">
          <ul class="transition-all duration-500">
            <li class="mb-4 sm:mb-6">
              <button
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Terms and Conditions of Use
              </button>
            </li>
          </ul>
        </div>
        <!--End Col-->
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8"
      >
        <div class="lg:mx-8">
          <div class="py-4 lg:px-16 pb-0">
            <p class="text-lg text-gray-800 lg:max-w-xs lg:text-left">
              Address:
            </p>
            <p class="text-gray-600 text-base">
              4003 Bd Décarie Apt-102 Montréal QC H4A 3J8
            </p>
          </div>
          <div class="pt-4 lg:px-16 pb-0">
            <p class="text-base text-gray-800 lg:max-w-xs lg:text-left">
              Email Us:
            </p>
            <a
              href="mailmailto:baanglaarmulh@gmail.com"
              class="block w-fit text-lg text-midnight-sapphire transition-all duration-500 lg:mx-0 font-semibold tracking-wide hover:text-gray-500 hover:underline"
            >
              baanglaarmukh@gmail.com
            </a>
          </div>
        </div>

        <div
          class="flex mt-4 space-x-4 sm:justify-center md:justify-end lg:mt-0 md:py-6 pb-0 mx-8"
        >
          <button
            class="w-10 h-10 rounded-full bg-midnight-sapphire flex justify-center items-center hover:bg-gray-600"
          >
            <img
              src="../assets/svg/facebook.svg"
              alt="facebook"
              class="w-5 h-5 fill-white"
            />
          </button>
          <button
            class="w-10 h-10 rounded-full bg-midnight-sapphire flex justify-center items-center hover:bg-gray-600"
          >
            <img
              src="../assets/svg/instagram.svg"
              alt="instagram"
              class="w-5 h-5 fill-white"
            />
          </button>
          <button
            class="w-10 h-10 rounded-full bg-midnight-sapphire flex justify-center items-center hover:bg-gray-600"
          >
            <img
              src="../assets/svg/youtube.svg"
              alt="youtube"
              class="w-5 h-5 fill-white"
            />
          </button>
        </div>
      </div>
      <!--Grid-->
      <div class="py-7 border-t border-gray-300">
        <div class="text-center lg:flex-row py-2">
          <p class="text-sm sm:text-base text-gray-500">
            © 2024 B.A.N.G.L.A • All rights reserved.
          </p>
          <p class="text-sm sm:text-base text-gray-500">
            Quebec Non-Profit Registration Number: 1180053424
          </p>
          <p class="text-sm sm:text-base text-gray-500">
            Federal Non-Profit Registration Number: 1618784-6
          </p>
        </div>
      </div>
    </div>
    <!-- <div
      class="lg:h-24 bg-gradient-to-r from-midnight-sapphire to-gray-600"
    ></div> -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    cookie() {
      this.$router.push("/cookie-settings");
    },
    about() {
      this.$router.push("/about-us");
    },
    home() {
      this.$router.push("/");
    },
    contribute() {
      this.$router.push("/contribute");
    },
  },
};
</script>

<style></style>
