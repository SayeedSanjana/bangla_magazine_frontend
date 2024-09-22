<template>
  <!-- Header -->
  <header
    class="bg-gradient-to-r from-gray-600 to-midnight-sapphire shadow font-cormorant"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-8"
    >
      <button @click="home" class="hidden md:block">
        <img
          src="../assets/img/logo.png"
          alt="logo"
          class="h-28 w-full object-cover"
        />
      </button>
      <h1 class="text-4xl md:text-6xl font-bold text-center">
        <span class="text-gray-200">B.A.N.G.L.A.</span>
      </h1>
      <nav class="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
        <button>
          <img
            src="../assets/svg/facebook.svg"
            alt="facebook"
            class="w-6 md:w-7 h-6 md:h-7 fill-white"
          />
        </button>
        <button>
          <img
            src="../assets/svg/twitter.svg"
            alt="twitter"
            class="w-6 md:w-7 h-6 md:h-7 fill-white"
          />
        </button>
        <button>
          <img
            src="../assets/svg/instagram.svg"
            alt="instagram"
            class="w-6 md:w-7 h-6 md:h-7 fill-white"
          />
        </button>
        <button>
          <img
            src="../assets/svg/youtube.svg"
            alt="youtube"
            class="w-6 md:w-7 h-6 md:h-7 fill-white"
          />
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>
