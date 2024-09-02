<template>
  <div v-if="visible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
    <div class="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
      <h2 class="text-lg font-bold mb-4">Cookie Consent</h2>
      <p class="text-sm mb-4">We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.</p>
      <div class="flex justify-between items-center">
        <button @click="cookie" class="text-honey-gold font-semibold hover:underline text-sm">Cookie Management</button>
        <button  @click="acceptCookies" class="py-2 px-4 bg-gradient-to-l from-amber-400 to-honey-gold text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-amber-500 hover:to-honey-gold focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300">
          Accept it!
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      visible: false, // Default to false; will be set based on localStorage in mounted()
    };
  },
  methods: {
    hasAcceptedCookies() {
      return localStorage.getItem("cookies_accepted") === "true";
    },
    acceptCookies() {
      localStorage.setItem("cookies_accepted", "true");
      this.visible = false;
    },
    cookie() {
      this.$router.push("/cookie-settings");
    },
  },
  created() {
    // Delay showing the popup by 5 seconds
    setTimeout(() => {
      if (!this.hasAcceptedCookies()) {
        this.visible = true;
      }
    }, 7000); // 5000 milliseconds = 5 seconds
    console.log("CookieConsent mounted: visible =", this.visible);
  },
};
</script>
  
<style scoped>
</style>
  



  <!-- <div class="flex flex-wrap justify-center gap-y-10 max-w-3xl mx-auto lg:max-w-full">
        <div v-for="i in 23" :key="i" 
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
          @click="move"
          class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full mr-5 bg-blue-200">
          <div
            class="relative w-64 h-64 text-gray-900 bg-gray-900 overflow-hidden rounded-2xl transform transition-transform duration-300 hover:-translate-y-2">
            <div class="font-bold text-2xl px-3 py-1.5 text-gray-200">
              Place image here
            </div>
            <div
              :class="{'translate-y-0': hover, 'translate-y-36': !hover}"
              class="absolute left-0 bottom-0 w-full p-5 bg-gray-100 rounded-tl-2xl transition-transform duration-150">
              <span class="font-bold text-gray-900 leading-4">This is a Title</span>
              <span class="block text-xs mb-2">This is a subtitle of this page. Let us see how it looks on the Web.</span>
              <p class="text-sm transition-opacity duration-500 opacity-0 group-hover:opacity-1">
                Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.
              </p>
            </div>
          </div>
        </div>
      </div> -->