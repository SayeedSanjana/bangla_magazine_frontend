<template>
  <section>
    <!-- Main Content -->
    <div
      class="container mx-auto md:mt-16 md:mb-16 mt-8 mb-8 p-4 md:p-6 min-h-screen"
    >
      <div class="space-y-6 md:p-4 lg:mx-32 md:mx-5">
        <div
          class="bg-gradient-to-r from-light-yellow to-amber-50 rounded-xl shadow-md flex flex-col md:flex-row"
        >
          <!-- Submission Form -->
          <div class="w-full p-6 sm:p-8 md:p-12">
            <div class="p-6">
              <h3
                class="text-2xl md:text-4xl font-semibold mb-4 sm:mb-6 text-midnight-sapphire font-cormorant"
              >
                Join - Bangali Abhibasi Network: a Glocal Linguo-cultural
                Association
              </h3>
            </div>

            <div
              class="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8"
            >
              <div class="w-full lg:w-1/2 flex justify-center pt-6 lg:pt-16">
                <!-- <img
                src="../assets/img/collage6.png"
                alt="SVG Image 1"
                class="lg:w-full lg:h-full"
              /> -->
                <div>
                  <img
                    src="../assets/img/sanjana.png"
                    alt="SVG Image 1"
                    class="lg:w-auto lg:h-auto"
                  />
                  <div class="text-gray-500 text-sm text-center pt-3">
                    Illustration By:
                    <span class="font-semibold">Sanjana Sayeed</span>
                  </div>
                </div>
              </div>
              <!-- Text on Left -->
              <div class="w-full lg:w-1/2 pt-6 lg:pt-16">
                <p
                  class="text-3xl font-cormorant font-semibold text-amber-600 px-2"
                >
                  PERSONAL INFORMATION
                </p>
                <p class="text-base py-3 text-gray-800 md:mb-6 px-2">
                  Kindly fill up the form to become part of our network.
                </p>

                <form
                  action="#"
                  method="POST"
                  class="space-y-4 text-base"
                  @submit.prevent="submitForm"
                >
                  <div class="px-2">
                    <label for="first_name" class="block font-medium"
                      >First Name <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                      required
                      v-model="form.firstname"
                    />
                  </div>
                  <div class="px-2">
                    <label for="first_name" class="block font-medium"
                      >Last Name <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                      required
                      v-model="form.firstname"
                    />
                  </div>

                  <div class="px-2">
                    <label for="email" class="block font-medium"
                      >Email <span class="text-red-500">*</span>
                      <span class="text-xs text-gray-500 hidden xl:block">
                        (Kindly do not provide any institute email address;
                        instead please provide with your personal one.)</span
                      ></label
                    >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                      required
                      v-model="form.email"
                    />
                  </div>
                  <div class="px-2">
                    <label for="first_name" class="block font-medium"
                      >Preferred Pronoun
                      <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      id="preferred_pronoun"
                      name="preferred_pronoun"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                      required
                      v-model="form.firstname"
                    />
                  </div>

                  <div class="px-2">
                    <label for="first_name" class="block font-medium"
                      >Location <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      id="location"
                      name="preferred_pronoun"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                      required
                      v-model="location"
                    />
                  </div>

                  <div class="pt-6 pb-6 lg:pt-10">
                    <button
                      type="submit"
                      class="text-base w-full text-center px-4 py-3 border-2 border-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
                      :disabled="loading"
                    >
                      <span v-if="loading">Submitting...</span>
                      <span v-else>Join Network</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
  helpers,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "JoinNetworkView",
  components: {},
  mounted() {
    this.form.submissionType = this.topicName || "";
    // console.log("Mounted - submissionType:", this.form.submissionType); // Check that the value is set correctly
  },
  watch: {
    topicName(newVal) {
      this.form.submissionType = newVal;
      console.log("Updated topicName:", newVal);
    },
  },

  data() {
    return {
      isDropdownOpen: false,
      options: [],
      loading: false,
      hashtagError: "",
      hashtags: "",
      form: {
        firstname: "",
        lastname: "",
        email: "",
        submissionType: this.topicName || " ",
        hashtags: [], // This will hold the processed hashtags as an array
        headshot: null,
        bio: "",
        files: [],
        description: "",
      },

      activeIndex: null,
    };
  },
  validations() {
    return {
      form: {
        firstname: { required },
        lastname: { required },
        bio: { required, maxLength: maxLength(255), minLength: minLength(10) },
        description: {
          required,
          maxLength: maxLength(255),
          minLength: minLength(10),
        },
        submissionType: { required },
        email: { required, email },
        headshot: {
          required,
          fileType: helpers.withParams({ type: "fileType" }, (value) =>
            ["image/jpeg", "image/png", "image/jpg"].includes(value?.type)
          ),
          size: helpers.withParams(
            { type: "size" },
            (value) => value?.size <= 10 * 1024 * 1024
          ), // 10MB limit
        },
        files: {
          required,
          size: helpers.withParams(
            { type: "size" },
            (value) =>
              Array.from(value || []).reduce(
                (acc, file) => acc + file.size,
                0
              ) <=
              20 * 1024 * 1024 // 20MB total
          ),
        },
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
.scrollable {
  max-height: 950px; /* Adjust height based on your design */
  overflow-y: auto; /* Adds vertical scroll */
  position: relative;
}
/* Loading Spinner */
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3); /* Light border */
  border-top: 4px solid #4b5563; /* Dark border for the spinning effect */
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.8s linear infinite;
}

/* Spinner Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
