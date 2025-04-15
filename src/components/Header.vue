<template>
  <!-- Header -->
  <header
    class="hidden md:block bg-gradient-to-r from-amber-50 to-light-blue shadow font-cormorant"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center p-2"
    >
      <button @click="home">
        <img
          src="../assets/img/logo.png"
          alt="logo"
          class="h-24 w-24 lg:h-44 lg:w-full lg:object-cover"
        />
      </button>
      <h1 class="text-4xl md:text-4xl lg:text-6xl font-bold text-center">
        <span class="text-midnight-sapphire text-gradient text-shadow"
          >B.A.N.G.L.A.</span
        >
      </h1>
      <div class="flex space-x-4 md:space-x-6 mt-4 md:mt-0 relative">
        <a
          href="https://www.facebook.com/share/19QKxGBpQ5/"
          class="relative group"
        >
          <img
            src="../assets/svg/facebook.svg"
            alt="facebook"
            class="w-8 h-8"
          />
          <!-- <div
            v-if="tooltip === 'facebook'"
            class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
          >
            Coming Soon
          </div> -->
        </a>

        <a
          href="https://www.instagram.com/bangla_glocal?igsh=MzExbG90cmFvbzJy"
          class="relative group"
        >
          <img
            src="../assets/svg/instagram.svg"
            alt="instagram"
            class="w-8 h-8"
          />
          <!-- <div
            v-if="tooltip === 'instagram'"
            class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
          >
            Coming Soon
          </div> -->
        </a>
        <a href="https://www.youtube.com/@bangla_glocal" class="relative group">
          <img
            src="../assets/svg/youtube.svg"
            alt="instagram"
            class="w-8 h-8"
          />
          <!-- <div
            v-if="tooltip === 'instagram'"
            class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
          >
            Coming Soon
          </div> -->
        </a>

        <!-- <button
          class="relative group"
          @mouseover="showTooltip('twitter')"
          @mouseleave="hideTooltip"
        >
          <img src="../assets/svg/twitter.svg" alt="twitter" class="w-8 h-8" />
          <div
            v-if="tooltip === 'twitter'"
            class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
          >
            Coming Soon
          </div>
        </button> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tooltip: null, // Initialize tooltip as null
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    showTooltip(button) {
      this.tooltip = button; // Set the current tooltip to the button name
    },
    hideTooltip() {
      this.tooltip = null; // Clear the tooltip on mouse leave
    },
  },
};
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #280b8b, rgb(100, 100, 230));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-shadow {
  color: rgb(37, 44, 95);
  text-shadow: 2px 2px 4px rgba(46, 33, 191, 0.3);
}
</style>
