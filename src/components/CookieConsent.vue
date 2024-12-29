<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
  >
    <div
      class="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3"
    >
      <h2 class="text-lg mb-4">Cookie Consent</h2>
      <div class="flex">
        <div class="text-sm">
          We use cookies to enhance your experience. By continuing to visit this
          site, you agree to our use of cookies.

          <button
            @click="cookie"
            class="ml-1 mt-1 mb-4 text-blue-500 text-sm hover:text-blue-600 hover:underline"
          >
            See our cookie policies
          </button>
        </div>
      </div>

      <div class="flex text-base">
        <!-- <button
          @click="cookie"
          class="text-honey-gold hover:underline text-base"
        >
          Cookie Management
        </button> -->
        <button
          @click="acceptCookies"
          class="mr-2 py-1 px-2 bg-gradient-to-l from-amber-400 to-honey-gold text-white font-normal rounded-lg shadow-md hover:bg-gradient-to-l hover:from-amber-500 hover:to-honey-gold focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
        >
          Accept all
        </button>
        <button
          @click="acceptCookies"
          class="mr-2 py-1 px-2 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-normal rounded-lg shadow-md hover:bg-gradient-to-l hover:from-rose-500 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
        >
          Deny
        </button>
        <button
          @click="acceptCookies"
          class="py-1 px-2 bg-gradient-to-l from-amber-400 to-honey-gold text-white font-normal rounded-lg shadow-md hover:bg-gradient-to-l hover:from-amber-500 hover:to-honey-gold focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
        >
          Cancel
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

<style scoped></style>
