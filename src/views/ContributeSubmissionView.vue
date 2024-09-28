<template>
  <section>
    <!-- Main Content -->
    <div class="container mx-auto md:mt-16 mt-8 p-4 md:p-6 min-h-screen">
      <div class="space-y-6 md:p-4">
        <div
          class="bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl shadow-md flex flex-col md:flex-row"
        >
          <!-- Left Section with Scroll -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <div
              name="cta_section"
              class="border-b-2 border-gray-100 pb-4 mb-4"
            >
              <h3
                class="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-midnight-sapphire px-2 py-1"
              >
                <span class="font-cormorant font-bold">
                  Join the conversation with the B.A.N.G.L.A. community</span
                >

                <br />
                <span class="text-base mt-2 text-gray-800"
                  >Contribute with your visual/performance art, prose, poetry,
                  essays, and more..</span
                >
              </h3>
              <button
                @click="contribute"
                class="text-base px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
              >
                Explore Our Submission Topic
              </button>
            </div>

            <div name="guidelines" class="px-2 sm:px-4 py-4">
              <h4
                class="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 px-2 py-2 font-cormorant text-gray-700"
              >
                Submission Guidelines
              </h4>

              <div id="accordion-open" class="p-3 w-full">
                <div v-for="(item, index) in accordionItems" :key="index">
                  <h2 :id="`accordion-open-heading-${index}`">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full p-4 sm:p-5 font-medium text-gray-400 rounded-xl border text-base sm:text-lg border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                      @click="toggleAccordion(index)"
                      :aria-expanded="isOpen(index)"
                      :aria-controls="`accordion-open-body-${index}`"
                    >
                      <span class="flex items-center text-base text-gray-700">
                        <svg
                          class="w-5 h-5 me-2 shrink-0 text-amber-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {{ item.title }}
                      </span>
                      <svg
                        v-if="isOpen(index)"
                        class="w-3 h-3 rotate-180 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5L5 1 1 5"
                        />
                      </svg>
                      <svg
                        v-else
                        class="w-3 h-3 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1l4 4 4-4"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    v-show="isOpen(index)"
                    :id="`accordion-open-body-${index}`"
                    class="p-5 border border-b-0 border-gray-200 bg-slate-100 text-gray-700 text-sm md:text-base"
                    :aria-labelledby="`accordion-open-heading-${index}`"
                    v-html="item.content"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submission Form -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <h3
              class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-midnight-sapphire font-cormorant"
            >
              Submit Your Work For Review
            </h3>
            <p class="text-base py-6 text-gray-800 md:mb-6">
              Complete the form below to submit your work.
            </p>
            <form
              action="#"
              method="POST"
              class="space-y-4 text-base"
              @submit.prevent="submitForm"
            >
              <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium"
                    >First Name</label
                  >
                  <input
                    @blur="v$.form.firstname.$touch()"
                    type="text"
                    id="first_name"
                    name="first_name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
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
                      <small class="form-error-text">
                        {{ error.$message }}
                      </small>
                    </div>
                  </span>
                </div>
                <div class="w-full sm:w-1/2 px-2">
                  <label for="last_name" class="block font-medium"
                    >Last Name</label
                  >
                  <input
                    @blur="v$.form.lastname.$touch()"
                    v-model="form.lastname"
                    type="text"
                    id="last_name"
                    name="last_name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <span
                    v-show="v$.form.lastname.$error"
                    class="mt-2 text-sm text-crimson-bloom"
                  >
                    <div
                      v-for="error of v$.form.lastname.$errors"
                      :key="error.$uid"
                    >
                      <small class="form-error-text">
                        {{ error.$message }}
                      </small>
                    </div>
                  </span>
                </div>
              </div>
              <div class="px-2">
                <label for="email" class="block font-medium">Email</label>
                <input
                  @blur="v$.form.email.$touch()"
                  type="email"
                  id="email"
                  name="email"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                  required
                  v-model="form.email"
                />
                <span
                  v-show="v$.form.email.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div v-for="error of v$.form.email.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2 relative flex-grow">
                <label for="submission-type" class="block font-medium"
                  >Submission Type</label
                >
                <select
                  @blur="v$.form.submissionType.$touch()"
                  id="submission-type"
                  name="submission-type"
                  class="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  required
                  v-model="form.submissionType"
                >
                  <option value="">None</option>
                  <option value="Annual Theme">Annual Theme</option>
                  <option value="Open Submissions">Open Submissions</option>
                  <option value="Travel Writing">Travel Writing</option>
                  <option value="Memoirs">Memoirs</option>
                  <option value="1st Person Accounts">
                    1st Person Accounts
                  </option>
                  <option value="Interviews">Interviews</option>
                  <option value="Science and Technology">
                    Science & Technology
                  </option>
                  <option value="Fiction Poetry">Fiction Poetry</option>
                  <option value="Fiction Short">Fiction Short</option>
                  <option value="Fiction Long">Fiction Long</option>
                  <option value="Fiction Scripts">Fiction Scripts</option>
                  <option value="Artwork">Artwork</option>
                  <option value="Photography">Photography</option>
                </select>
                <span
                  v-show="v$.form.submissionType.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div
                    v-for="error of v$.form.submissionType.$errors"
                    :key="error.$uid"
                  >
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="tags" class="block font-medium"
                  >Hash tags
                  <span class="text-sm text-gray-500"
                    >(Start each with #, separate by space or comma)</span
                  ></label
                >
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                  v-model="hashtags"
                />
                <span
                  v-if="hashtagError"
                  class="mt-2 text-xs text-crimson-bloom"
                  >{{ hashtagError }}</span
                >
              </div>
              <div class="px-2">
                <label for="head_shot" class="block font-medium"
                  >Upload Headshot
                  <span class="text-sm text-gray-500">
                    (Upload an image in JPEG, JPG or PNG format, Maximum size
                    limit: 10MB.)</span
                  >
                </label>
                <input
                  @blur="v$.form.headshot.$touch()"
                  type="file"
                  @change="handleHeadshotUpload($event)"
                  accept="image/jpeg, image/png, image/jpg"
                  id="head_shot"
                  name="head_shot"
                  class="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
                <span
                  v-show="v$.form.headshot.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div
                    v-for="error of v$.form.headshot.$errors"
                    :key="error.$uid"
                  >
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="bio" class="block font-medium"
                  >Bio
                  <span class="text-sm text-gray-500">
                    (Maximum 255 characters.)</span
                  >
                </label>
                <textarea
                  @blur="v$.form.bio.$touch()"
                  v-model="form.bio"
                  id="bio"
                  name="bio"
                  rows="2"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                ></textarea>
                <span
                  v-show="v$.form.bio.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div v-for="error of v$.form.bio.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="file" class="block font-medium"
                  >Upload File
                  <span class="text-sm text-gray-500">
                    (You can upload multiple files , in formats such as .doc,
                    .pdf, and .docx, images , maximum size limit: 20MB .)</span
                  ></label
                >
                <input
                  @blur="v$.form.files.$touch()"
                  @change="handleFileUpload($event)"
                  multiple
                  type="file"
                  id="file"
                  name="file"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
                <span
                  v-show="v$.form.files.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div v-for="error of v$.form.files.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="description" class="block text-lg font-medium"
                  >Brief description of your work
                  <span class="text-sm text-gray-500">
                    (Maximum 255 characters.)</span
                  ></label
                >
                <textarea
                  @blur="v$.form.description.$touch()"
                  id="description"
                  name="description"
                  rows="4"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                  v-model="this.form.description"
                >
                </textarea>
                <span
                  v-show="v$.form.description.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div
                    v-for="error of v$.form.description.$errors"
                    :key="error.$uid"
                  >
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <button
                type="submit"
                class="text-base w-full text-center px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
              >
                Submit Form
              </button>
            </form>
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
  name: "ContributeView",
  mounted() {
    // Initialize the Google API and Token Client when the component is mounted
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      hashtagError: "",
      hashtags: "",
      form: {
        firstname: "",
        lastname: "",
        email: "",
        submissionType: "",
        hashtags: [], // This will hold the processed hashtags as an array
        headshot: null,
        bio: "",
        files: [],
        description: "",
      },

      activeIndex: null,
      accordionItems: [
        {
          title: "Stylesheet",
          content:
            "Submissions in English can follow any of the variants (British, American, Canadian, Australian) in terms of spellings. All we request is that authors be consistent with whichever form they choose...",
        },
        {
          title: "Plagiarism",
          content:
            "We are soliciting original unpublished articles. Contributors are expected to provide due references, for example, weblinks for copyrighted materials...",
        },
        {
          title: "Regarding Generative AI",
          content:
            "For this magazine, the use of artificial intelligence (e.g., ChatGPT) is discouraged and will be treated as plagiarism...",
        },
        {
          title: "References",
          content:
            "We encourage contributors to include a list of in-text citations and references at the end of reflective, semi-academic, expository, and public writings...",
        },
        {
          title: "Formatting Logic",
          content:
            "For articles, author name (Last name, First name - Initials only), 'Article name.' Journal name, Volume, Issue, Year of publication...",
        },
        {
          title: "Page Limit for Individual Submissions",
          content:
            "Standard for Double-Spaced Times New Roman 12 in English as well as French and Vrinda 12 for Bangla...",
        },
        {
          title: "Contributor’s bio",
          content:
            "Contributors must include a brief bio in about 100 words and a photograph for publication along with their pieces...",
        },
        {
          title: "Contact info",
          content:
            "Contributors must provide their email ids. Other contact details including phone, address, and social media profile (optional)...",
        },
      ],
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
        // hashtags: {
        //   required,
        //   validHashtags: helpers.withParams(
        //     { message: "Each hashtag must start with #" },
        //     (value) =>
        //       Array.isArray(value) && value.every((tag) => tag.startsWith("#"))
        //   ), // Ensure every hashtag starts with #
        // },
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
  methods: {
    async submitForm() {
      this.v$.$touch();
      if (!this.v$.$error && this.hashtagError == "") {
        try {
          // Create FormData object for the request
          const formData = new FormData();
          formData.append("firstname", this.form.firstname);
          formData.append("lastname", this.form.lastname);
          formData.append("email", this.form.email);
          formData.append("submissionType", this.form.submissionType);
          // Append hashtags as an array
          this.form.hashtags.forEach((tag) => {
            formData.append("hashtags[]", tag);
          });
          formData.append("hashtags", this.form.hashtags); // Convert array to JSON string
          formData.append("headshot", this.form.headshot);
          formData.append("bio", this.form.bio);
          formData.append("description", this.form.description);

          // Append files
          for (let i = 0; i < this.form.files.length; i++) {
            formData.append("files", this.form.files[i]);
          }
          // Send form data to the backend API
          const response = await axios.post(
            "http://localhost:3000/api/upload",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Form Submitted",
              text: "Your form has been submitted successfully! Please check your email for confirmation.",
            });

            // Reset form
            this.hashtags = "";
            this.form = {
              firstname: "",
              lastname: "",
              email: "",
              submissionType: "",
              hashtags: [], // This will hold the processed hashtags as an array
              headshot: null,
              bio: "",
              files: [],
              description: "",
            };
          } else {
            Swal.fire({
              icon: "error",
              title: "Submission Failed",
              text: "There was an error submitting the form. Please try again.",
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "There was an error submitting the form. Please try again.",
          });
          console.error("Error submitting form:", error);
        }
      } else {
        return;
      }
    },
    handleHeadshotUpload(event) {
      const file = event.target.files[0];
      this.form.headshot = file;
    },
    handleFileUpload(event) {
      this.form.files = event.target.files;
    },
    contribute() {
      this.$router.push("/contribute");
    },
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isOpen(index) {
      return this.activeIndex === index;
    },
    validateHashtagsBeforeArray(newValue) {
      // Check if all hashtags are valid before processing
      const invalidTags = newValue
        .split(/[ ,\n]+/) // Split input on spaces, commas, or newlines
        .filter((tag) => tag && !tag.startsWith("#"));

      if (invalidTags.length > 0) {
        this.hashtagError = `Hashtags must start with #. Invalid tags: ${invalidTags.join(
          ", "
        )}`;
      } else {
        this.hashtagError = ""; // No error if all hashtags are valid
      }
    },
  },
  watch: {
    // Whenever the hashtags input changes, update the form.hashtags array
    hashtags(newValue) {
      // Validate hashtags before processing them into an array
      this.validateHashtagsBeforeArray(newValue);

      if (!this.hashtagError) {
        this.form.hashtags = newValue
          .split(/[ ,\n]+/) // Split input on spaces, commas, or newlines
          .filter((tag) => tag) // Remove empty strings
          .map((tag) => tag.trim()); // Remove excess whitespace
      } else {
        this.form.hashtags = []; // Reset hashtags if invalid
      }
    },
  },
};
</script>

<style scoped>
.scrollable {
  max-height: 950px; /* Adjust height based on your design */
  overflow-y: auto; /* Adds vertical scroll */
  position: relative;
}
</style>
