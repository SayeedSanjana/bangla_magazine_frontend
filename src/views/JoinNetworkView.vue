<template>
  <section>
    <div
      class="container mx-auto md:mt-16 md:mb-16 mt-8 mb-8 p-4 md:p-6 min-h-screen"
    >
      <div class="space-y-6 md:p-4 lg:mx-32 md:mx-5">
        <div
          class="bg-gradient-to-r from-light-yellow to-amber-50 rounded-xl shadow-md flex flex-col md:flex-row"
        >
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
                <div>
                  <img
                    src="../assets/img/sanjana.png"
                    alt="SVG Image 1"
                    class="lg:w-auto lg:h-auto"
                  />
                  <div class="text-gray-500 text-sm text-center pt-3">
                    Illustration and Collage By:
                    <span class="font-semibold">Sanjana Sayeed</span>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2 pt-6 lg:pt-16">
                <p
                  class="text-3xl font-cormorant font-semibold text-amber-600 px-2"
                >
                  PERSONAL INFORMATION
                </p>
                <p class="text-base py-3 text-gray-800 md:mb-6 px-2">
                  Kindly fill up the form to express your interest to join the
                  network.
                </p>

                <form @submit.prevent="submitForm" class="space-y-4 text-base">
                  <div class="px-2">
                    <label for="first_name" class="block font-medium"
                      >First Name <span class="text-red-500">*</span>
                      <span class="text-sm text-gray-500">
                        (Only alphabets allowed)</span
                      >
                    </label>
                    <input
                      @blur="v$.form.firstname.$touch()"
                      type="text"
                      id="first_name"
                      name="first_name"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                      v-model="form.firstname"
                    />
                    <span
                      v-show="v$.form.firstname.$error"
                      class="mt-2 text-sm text-crimson-bloom"
                    >
                      <div
                        v-for="error of v$.form.firstname.$errors"
                        :key="error.$uid"
                      >
                        <small class="form-error-text">{{
                          error.$message
                        }}</small>
                      </div>
                    </span>
                  </div>
                  <div class="px-2">
                    <label for="last_name" class="block font-medium"
                      >Last Name <span class="text-red-500">*</span
                      ><span class="text-sm text-gray-500">
                        (Only alphabets allowed)</span
                      ></label
                    >
                    <input
                      @blur="v$.form.lastname.$touch()"
                      type="text"
                      id="last_name"
                      name="last_name"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                      v-model="form.lastname"
                    />
                    <span
                      v-show="v$.form.lastname.$error"
                      class="mt-2 text-sm text-crimson-bloom"
                    >
                      <div
                        v-for="error of v$.form.lastname.$errors"
                        :key="error.$uid"
                      >
                        <small class="form-error-text">{{
                          error.$message
                        }}</small>
                      </div>
                    </span>
                  </div>
                  <div class="px-2">
                    <label for="email" class="block font-medium"
                      >Email <span class="text-red-500">*</span></label
                    >
                    <input
                      @blur="v$.form.email.$touch()"
                      type="email"
                      id="email"
                      name="email"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                      v-model="form.email"
                    />
                    <span
                      v-show="v$.form.email.$error"
                      class="mt-2 text-sm text-crimson-bloom"
                    >
                      <div
                        v-for="error of v$.form.email.$errors"
                        :key="error.$uid"
                      >
                        <small class="form-error-text">{{
                          error.$message
                        }}</small>
                      </div>
                    </span>
                  </div>
                  <div class="px-2">
                    <label for="location" class="block font-medium"
                      >Location (City/Area)
                      <span class="text-red-500">*</span>
                      <p class="text-sm text-gray-500">
                        (Only alphabets, spaces and comma accepted)
                      </p></label
                    >

                    <input
                      @blur="v$.form.location.$touch()"
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Montreal, QC"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                      v-model="form.location"
                    />
                    <span
                      v-show="v$.form.location.$error"
                      class="mt-2 text-sm text-crimson-bloom"
                    >
                      <div
                        v-for="error of v$.form.location.$errors"
                        :key="error.$uid"
                      >
                        <small class="form-error-text">{{
                          error.$message
                        }}</small>
                      </div>
                    </span>
                  </div>
                  <div class="px-2">
                    <label for="phone" class="block font-medium">
                      Phone Number
                      <span class="text-gray-500 text-sm">(Optional)</span>
                    </label>
                    <div
                      class="flex rounded-md shadow-sm overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-amber-400"
                    >
                      <div class="relative w-1/4 bg-gray-100">
                        <div
                          class="absolute top-0 left-0 h-full flex items-center px-3 pointer-events-none text-gray-800"
                        >
                          {{
                            selectedCountry
                              ? `${selectedCountry.flag} ${selectedCountry.code}`
                              : "Country ↓"
                          }}
                        </div>
                        <select
                          v-model="form.phoneCode"
                          class="w-full h-full pl-14 pr-2 py-2 bg-transparent appearance-none text-transparent focus:outline-none"
                        >
                          <option value="" disabled class="text-gray-600">
                            Country
                          </option>
                          <option
                            v-for="option in countryOptions"
                            :key="option.code"
                            :value="option.code"
                          >
                            {{ option.flag }} {{ option.name }}
                            {{ option.code }}
                          </option>
                        </select>
                      </div>
                      <input
                        @blur="v$.form.phone.$touch()"
                        type="text"
                        id="phone"
                        name="phone"
                        class="w-3/4 p-2 bg-white focus:outline-none"
                        v-model="form.phone"
                      />
                    </div>
                    <span
                      v-show="v$.form.phone.$error"
                      class="mt-2 text-sm text-crimson-bloom"
                    >
                      <div
                        v-for="error of v$.form.phone.$errors"
                        :key="error.$uid"
                      >
                        <small class="form-error-text">{{
                          error.$message
                        }}</small>
                      </div>
                    </span>
                  </div>
                  <div class="pt-6 pb-6 lg:pt-10">
                    <button
                      type="submit"
                      class="text-base w-full text-center px-4 py-3 border-2 border-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg"
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
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "JoinNetworkView",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loading: false,
      countryOptions: [
        { name: "United States", code: "+1-US", flag: "🇺🇸" },
        { name: "Canada", code: "+1-CA", flag: "🇨🇦" },
        { name: "India", code: "+91", flag: "🇮🇳" },
        { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
        { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
        { name: "Australia", code: "+61", flag: "🇦🇺" },
      ],
      form: {
        firstname: "",
        lastname: "",
        email: "",
        location: "",
        phoneCode: "",
        phone: "",
      },
    };
  },
  validations() {
    return {
      form: {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        location: {
          required,
          matches: helpers.withMessage(
            "Location can only contain alphabets, spaces, and commas",
            (value) => /^[A-Za-z\s,]+$/.test(value) // Ensures proper validation
          ),
        },
        phone: {
          matches: helpers.withMessage(
            "Phone number must contain 7 to 14 digits",
            (value) => {
              if (!value) return true; // Allow empty phone number
              return /^\d{7,14}$/.test(value); // Validate only if provided
            }
          ),
        },
      },
    };
  },
  computed: {
    selectedCountry() {
      return this.countryOptions.find((c) => c.code === this.form.phoneCode);
    },
    formattedPhoneCodeOptions() {
      // Not strictly needed for this implementation, but included per instructions.
      // Returns array of { value, text } for dropdown
      return this.countryOptions.map((option) => ({
        value: option.code,
        text: `${option.flag} ${option.name} ${option.code}`,
      }));
    },
  },
  methods: {
    async submitForm() {
      this.loading = true;
      const phone =
        this.form.phone && !isNaN(this.form.phone)
          ? `${this.form.phoneCode.split("-")[0]}${this.form.phone}` // Concatenate only numeric code part
          : null; // Null or undefined to omit from payload

      const payload = {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        email: this.form.email,
        location: this.form.location,
        ...(phone ? { phone } : {}), // Only include phone if it's a valid number
      };

      try {
        const response = await axios.post(
          "https://api.banglaglocal.org/api/join-network",
          payload
        );
        Swal.fire("Success", "Your submission was successful!", "success");
        this.resetForm();
      } catch (error) {
        if (error.response && error.response.status === 409) {
          const message =
            error.response.data?.message ||
            "You are already registered in the system.";
          Swal.fire("Alert", message, "warning");
        } else {
          Swal.fire(
            "Error",
            "Something went wrong. Please try again.",
            "error"
          );
        }
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.form = {
        firstname: "",
        lastname: "",
        email: "",
        location: "", // Ensure dropdowns are reset
        phoneCode: "", // Reset country code selection
        phone: "", // Reset phone input
      };

      // If you are using Vue refs for dropdowns, reset them explicitly
      this.$nextTick(() => {
        const dropdowns = document.querySelectorAll("select");
        dropdowns.forEach((dropdown) => {
          dropdown.selectedIndex = 0;
        });
      });
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
