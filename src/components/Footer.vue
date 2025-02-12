<template>
  <!-- Footer -->
  <footer class="w-full bg-gradient-to-r from-gray-200 to-amber-50 shadow-md">
    <div class="mx-auto md:container p-4 md:p-6">
      <!-- Grid for Main Content -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-8 py-10"
      >
        <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
          <button
            @click="home"
            class="flex justify-center lg:justify-start hover:underline"
          >
            <img
              src="../assets/img/logo.png"
              alt="logo"
              class="h-auto w-44 mt-0 m-2 mr-0"
            />
            <div>
              <p
                class="font-cormorant text-lg sm:text-2xl text-midnight-sapphire p-2 pl-0 pt-2 font-bold"
              >
                Bangali Abhibashi Network: a Glocal Linguo-cultural Association
              </p>
            </div>
          </button>
        </div>

        <!-- Footer Links -->
        <div class="text-center text-xs sm:text-sm mx-8">
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
                @click="story"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Our Story
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="team"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Team Members
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="contribute"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Porijaan - The Magazine
              </button>
            </li>
          </ul>
        </div>

        <div class="text-center text-xs sm:text-sm mx-8">
          <ul class="transition-all duration-500">
            <li class="mb-4 sm:mb-6">
              <button
                @click="topic"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Independent Category
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="celebration"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Annual Remembrance
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="theme"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Annual Theme
              </button>
            </li>

            <li class="mb-4 sm:mb-6">
              <button
                @click="memory"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Obituary
              </button>
            </li>
          </ul>
        </div>

        <div class="text-center text-xs sm:text-sm mx-8">
          <ul class="transition-all duration-500">
            <li class="mb-4 sm:mb-6">
              <button
                @click="join"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Join Our Network
              </button>
            </li>
            <li class="mb-4 sm:mb-6">
              <button
                @click="submissionForm"
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Contribute to Our Magazine
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
            <li class="mb-4 sm:mb-6">
              <button
                class="text-gray-600 hover:text-midnight-sapphire hover:underline"
              >
                Terms and Conditions of Use
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Address and Contact Info Details -->
      <div class="grid grid-cols-1 sm:grid-cols-2 py-10">
        <div class="lg:mx-8 text-center md:text-left">
          <div class="py-4">
            <p class="text-base text-gray-800">Address:</p>
            <p class="text-gray-600 text-base">
              4003 Bd Décarie Apt-102 Montréal QC H4A 3J8
            </p>
          </div>
          <div class="pt-4 text-center md:text-left">
            <p class="text-base text-gray-800">Email Us:</p>
            <a
              href="mailto:info@banglaglocal.org"
              class="text-base flex justify-center md:justify-start text-midnight-sapphire transition-all duration-500 font-semibold tracking-wide hover:text-gray-500 hover:underline"
            >
              info@banglaglocal.org
            </a>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="flex mt-4 space-x-4 justify-center md:justify-end relative">
          <div class="relative group">
            <a
              href="https://www.facebook.com/share/19QKxGBpQ5/"
              class="w-14 h-14 rounded-full bg-gray-100 flex justify-center border-4 border-midnight-sapphire border-opacity-35 items-center hover:bg-gray-300"
            >
              <img
                src="../assets/svg/facebook.svg"
                alt="facebook"
                class="w-7 h-7 fill-white"
              />
            </a>
            <!-- <div
              v-if="tooltip === 'Facebook'"
              class="absolute bottom-full text-center mb-2 px-2 py-1 text-sm bg-gray-600 text-white rounded"
            >
              Coming Soon
            </div> -->
          </div>

          <div class="relative group">
            <a
              href="https://www.instagram.com/bangla_glocal?igsh=MzExbG90cmFvbzJy"
              class="w-14 h-14 border-4 border-midnight-sapphire border-opacity-35 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-300"
            >
              <img
                src="../assets/svg/instagram.svg"
                alt="instagram"
                class="w-7 h-7 fill-white"
              />
            </a>
            <!-- <div
              v-if="tooltip === 'Instagram'"
              class="absolute text-center bottom-full mb-2 px-2 py-1 text-sm bg-gray-600 text-white rounded"
            >
              Coming Soon
            </div> -->
          </div>

          <div
            class="relative group"
            @mouseover="showTooltip('YouTube')"
            @mouseleave="hideTooltip"
          >
            <a
              href=""
              class="w-14 h-14 border-4 border-midnight-sapphire border-opacity-35 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-300"
            >
              <img
                src="../assets/svg/youtube.svg"
                alt="youtube"
                class="w-7 h-7 fill-white"
              />
            </a>
            <div
              v-if="tooltip === 'YouTube'"
              class="absolute bottom-full text-center mb-2 px-2 py-1 text-sm bg-gray-600 text-white rounded"
            >
              Coming Soon
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Section -->
      <div class="py-7 border-t border-gray-300">
        <div class="text-center lg:flex-row py-2">
          <p class="text-sm sm:text-base text-gray-500">
            © 2025 B.A.N.G.L.A • All rights reserved.
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
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      tooltip: null, // Initialize tooltip state
    };
  },
  methods: {
    showTooltip(platform) {
      this.tooltip = platform; // Set tooltip to the platform name
    },
    hideTooltip() {
      this.tooltip = null; // Clear tooltip on mouse leave
    },
    submissionForm() {
      this.$router.push("/contribute/submission-form");
    },
    cookie() {
      this.$router.push("/cookie-settings");
    },
    story() {
      this.$router.push("/about/story");
    },
    team() {
      this.$router.push("/about/team");
    },
    topic() {
      this.$router.push("/magazine/topics");
    },
    theme() {
      this.$router.push("/magazine/theme");
    },
    celebration() {
      this.$router.push("/magazine/celebration");
    },
    memory() {
      this.$router.push("/magazine/memory");
    },
    home() {
      this.$router.push("/");
    },
    join() {
      this.$router.push("/contribute/join");
    },
    contribute() {
      this.$router.push("/magazine");
    },
  },
};
</script>

<style scoped>
/* Tooltip styles */
.relative {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  margin-bottom: 8px;
  padding: 4px 8px;
  font-size: 0.875rem;
  color: white;
  background-color: #333;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;
}
</style>
