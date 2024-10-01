<template>
  <!-- Header -->
  <header
    class="bg-gradient-to-r from-amber-50 to-light-blue shadow font-cormorant"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center p-2"
    >
      <button @click="home" class="">
        <img
          src="../assets/img/logo.png"
          alt="logo"
          class="h-16 w-16 md:h-44 lg:w-full md:w-24 object-cover"
        />
      </button>
      <h1 class="text-4xl md:text-6xl font-bold text-center">
        <span class="text-midnight-sapphire text-gradient text-shadow"
          >B.A.N.G.L.A.</span
        >
      </h1>
      <nav class="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
        <button class="">
          <img
            src="../assets/svg/facebook.svg"
            alt="facebook"
            class="w-8 h-8 fill-white"
          />
        </button>
        <button class="">
          <img
            src="../assets/svg/instagram.svg"
            alt="instagram"
            class="w-8 h-8 fill-white"
          />
        </button>
        <button class="">
          <img
            src="../assets/svg/youtube.svg"
            alt="youtube"
            class="w-8 h-8 fill-white"
          />
        </button>
        <button class="">
          <img
            src="../assets/svg/twitter.svg"
            alt="twitter"
            class="w-8 h-8 fill-midnight-sapphire"
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
<style scoped>
.text-gradient {
  background: linear-gradient(
    90deg,
    #280b8b,
    rgb(100, 100, 230)
  ); /* Gradient with red, blue, and green */
  -webkit-background-clip: text; /* Clips the gradient to the text */
  -webkit-text-fill-color: transparent; /* Makes the text itself transparent to show the gradient */
}
.text-shadow {
  color: rgb(37, 44, 95);
  text-shadow: 2px 2px 4px rgba(46, 33, 191, 0.3);
}
</style>
