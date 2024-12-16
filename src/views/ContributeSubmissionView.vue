<template>
  <section>
    <!-- Main Content -->
    <div class="container mx-auto md:mt-16 mt-8 p-4 md:p-6 min-h-screen">
      <div class="space-y-6 md:p-4">
        <div class="bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl shadow-md flex flex-col md:flex-row">
          <!-- Left Section with Scroll -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-12 scrollable">
            <div name="cta_section" class="border-b-2 border-gray-100 pb-4 mb-4">
              <h3 class="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-midnight-sapphire px-2 py-1">
                <span class="font-cormorant font-bold">
                  Join the conversation with the B.A.N.G.L.A. community</span>

                <br />
                <span class="text-base mt-2 text-gray-800">Contribute with your visual/performance art, prose, poetry,
                  essays, and more..</span>
              </h3>
              <button @click="contribute"
                class="text-base px-4 py-3 border-2 border-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold hover:text-honey-gold">
                Explore Our Submission Topic for the Magazine
              </button>
            </div>

            <div name="guidelines" class="px-2 sm:px-4 py-4">
              <h4 class="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 px-2 py-2 font-cormorant text-gray-700">
                Submission Guidelines
              </h4>

              <div id="accordion-open" class="p-3 w-full">
                <div v-for="(item, index) in accordionItems" :key="index">
                  <h2 :id="`accordion-open-heading-${index}`">
                    <button type="button"
                      class="flex items-center justify-between w-full p-4 sm:p-5 font-medium text-gray-400 rounded-xl border text-base sm:text-lg border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                      @click="toggleAccordion(index)" :aria-expanded="isOpen(index)"
                      :aria-controls="`accordion-open-body-${index}`">
                      <span class="flex items-center text-base text-gray-700">
                        <svg class="w-5 h-5 me-2 shrink-0 text-amber-600" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd" />
                        </svg>
                        {{ item.title }}
                      </span>
                      <svg v-if="isOpen(index)" class="w-3 h-3 rotate-180 shrink-0" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5L5 1 1 5" />
                      </svg>
                      <svg v-else class="w-3 h-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 1l4 4 4-4" />
                      </svg>
                    </button>
                  </h2>
                  <div v-show="isOpen(index)" :id="`accordion-open-body-${index}`"
                    class="p-5 border border-b-0 border-gray-200 bg-slate-100 text-gray-700 text-sm md:text-base"
                    :aria-labelledby="`accordion-open-heading-${index}`" v-html="item.content"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submission Form -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <h3 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-midnight-sapphire font-cormorant">
              Submit Your Work For Review
            </h3>
            <p class="text-base py-6 text-gray-800 md:mb-6">
              Complete the form below to submit your work.
            </p>
            <form action="#" method="POST" class="space-y-4 text-base" @submit.prevent="submitForm">
              <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium">First Name</label>
                  <input @blur="v$.form.firstname.$touch()" type="text" id="first_name" name="first_name"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required v-model="form.firstname" />
                  <span v-show="v$.form.firstname.$error" class="mt-2 text-sm text-crimson-bloom">
                    <div v-for="error of v$.form.firstname.$errors" :key="error.$uid">
                      <small class="form-error-text">
                        {{ error.$message }}
                      </small>
                    </div>
                  </span>
                </div>
                <div class="w-full sm:w-1/2 px-2">
                  <label for="last_name" class="block font-medium">Last Name</label>
                  <input @blur="v$.form.lastname.$touch()" v-model="form.lastname" type="text" id="last_name"
                    name="last_name"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required />
                  <span v-show="v$.form.lastname.$error" class="mt-2 text-sm text-crimson-bloom">
                    <div v-for="error of v$.form.lastname.$errors" :key="error.$uid">
                      <small class="form-error-text">
                        {{ error.$message }}
                      </small>
                    </div>
                  </span>
                </div>
              </div>
              <div class="px-2">
                <label for="email" class="block font-medium">Email</label>
                <input @blur="v$.form.email.$touch()" type="email" id="email" name="email"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required v-model="form.email" />
                <span v-show="v$.form.email.$error" class="mt-2 text-sm text-crimson-bloom">
                  <div v-for="error of v$.form.email.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>

              <div class="px-2 relative flex-grow">
                <label for="submission-type" class="block font-medium">Submission Type</label>

                <!-- Custom Dropdown -->
                <div @click="toggleDropdown" @blur="closeDropdown" tabindex="0"
                  class="relative w-full p-2 border border-gray-300 bg-white rounded-lg cursor-pointer flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  :class="{ 'border-red-500': v$.form.submissionType.$error }">
                  <!-- Display the selected option or placeholder text -->
                  <span class="text-gray-700">
                    {{
                      form.submissionType || "Please select a submission type"
                    }}
                  </span>

                  <!-- Arrow Icon -->
                  <svg v-if="!isDropdownOpen" class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.938l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg v-else class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M14.77 12.79a.75.75 0 00-1.06-.02L10 15.938l-3.71-3.71a.75.75 0 10-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 00-.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>

                  <!-- Dropdown options -->
                  <div v-show="isDropdownOpen"
                    class="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-auto">
                    <div v-for="option in options" :key="option" @click.stop="selectOption(option)"
                      class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {{ option }}
                    </div>
                  </div>
                </div>

                <!-- Validation Error Message -->
                <span v-if="v$.form.submissionType.$error" class="mt-2 text-sm text-crimson-bloom">
                  <div v-for="error in v$.form.submissionType.$errors" :key="error.$uid">
                    <small class="form-error-text">{{ error.$message }}</small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="tags" class="block font-medium">Hash tags
                  <span class="text-sm text-gray-500">(Start each with #, separate by space or comma)</span></label>
                <input type="text" id="tags" name="tags"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required v-model="hashtags" />
                <span v-if="hashtagError" class="mt-2 text-xs text-crimson-bloom">{{ hashtagError }}</span>
              </div>
              <div class="px-2">
                <label for="head_shot" class="block font-medium">Upload Headshot
                  <span class="text-sm text-gray-500">
                    (Upload an image in JPEG, JPG or PNG format, Maximum size
                    limit: 10MB.)</span>
                </label>
                <input @blur="v$.form.headshot.$touch()" type="file" @change="handleHeadshotUpload($event)"
                  accept="image/jpeg, image/png, image/jpg" id="head_shot" name="head_shot"
                  class="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required />
                <span v-show="v$.form.headshot.$error" class="mt-2 text-sm text-crimson-bloom">
                  <div v-for="error of v$.form.headshot.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="bio" class="block font-medium">Bio
                  <span class="text-sm text-gray-500">
                    (Maximum 255 characters.)</span>
                </label>
                <textarea @blur="v$.form.bio.$touch()" v-model="form.bio" id="bio" name="bio" rows="2"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required></textarea>
                <span v-show="v$.form.bio.$error" class="mt-2 text-sm text-crimson-bloom">
                  <div v-for="error of v$.form.bio.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="file" class="block font-medium">Upload File
                  <span class="text-sm text-gray-500">
                    (You can upload upto 5 files , in formats such as .doc,
                    .pdf, and .docx, images , maximum size limit: 20MB .)</span></label>
                <input @blur="v$.form.files.$touch()" @change="handleFileUpload($event)" multiple type="file" id="file"
                  name="file"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required />
                <span v-show="v$.form.files.$error" class="mt-2 text-sm text-crimson-bloom">
                  <div v-for="error of v$.form.files.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="description" class="block text-lg font-medium">Brief description of your work
                  <span class="text-sm text-gray-500">
                    (Maximum 255 characters.)</span></label>
                <textarea @blur="v$.form.description.$touch()" id="description" name="description" rows="4"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required v-model="this.form.description">
                </textarea>
                <span v-show="v$.form.description.$error" class="mt-2 text-sm text-crimson-bloom">
                  <div v-for="error of v$.form.description.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <!-- <button
                type="submit"
                class="text-base w-full text-center px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
              >
                Submit Form
              </button> -->
              <button type="submit"
                class="text-base w-full text-center px-4 py-3 border-2 border-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
                :disabled="loading">
                <span v-if="loading">Submitting...</span>
                <span v-else>Submit Form</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Loading overlay -->
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div class="bg-white p-12 md:p-16 rounded-xl shadow-2xl text-center max-w-xs w-full">
        <!-- SVG Loading Spinner Centered -->
        <div class="flex justify-center mb-4">
          <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
        <p class="text-gray-700 text-lg font-semibold tracking-wide">
          Submitting your form, please wait...
        </p>
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
    this.form.submissionType = this.topicName || "";
    // console.log("Mounted - submissionType:", this.form.submissionType); // Check that the value is set correctly
  },
  watch: {
    topicName(newVal) {
      this.form.submissionType = newVal;
      console.log("Updated topicName:", newVal);
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    topicName: {
      type: String,
      default: "", // Default to an empty string if nothing is passed
    },
  },
  data() {
    return {
      isDropdownOpen: false,
      options: [
        "Poetry",
        "Short Fiction",
        "Long Fiction",
        "Reflective Essays",
        "Non-fiction Articles",
        "Life Writings",
        "Transcripted Interviews",
        "Script",
        "Science and Technology",
        "Health",
        "Sports",
        "Travel",
        "Cartoons and Caricature",
        "Paintings",
        "Photography",
      ],
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
      accordionItems: [
        {
          title: "Stylesheet",
          content:
            "Submissions in English can follow any of the variants (British, American, Canadian, Australian) in terms of spellings. All we request is that authors be consistent with whichever form they choose. For Bangla, submissions could follow variant spellings adopted by Bangla Academies in Dhaka and Kolkata. We understand that authors follow different spellings, for example, for instance,‘characterise’ and ‘characterize’ or ‘করব’/‘করবো’, ‘বলব’/’বলবো’. Authors are kindly requested to be consistent in their usage and not mix up the two versions.",
        },
        {
          title: "Plagiarism",
          content:
            "We are soliciting original unpublished articles. Contributors are expected to provide due references, for example, weblinks for copyrighted materials.",
        },
        {
          title: "Regarding Generative AI",
          content:
            "For this magazine, the use of artificial intelligence (e.g., ChatGPT) is discouraged and will be treated as plagiarism in the editorial process.",
        },
        {
          title: "References",
          content: `
      <p class="text-gray-700  mb-4">
        We encourage contributors to include a list of in-text citations and references at the end of reflective, semi-academic, expository, and public writings on the annual theme, other independent nonfiction entries, and submissions to be featured in the Annual Celebration. Since this is a public magazine, we are not asking for citations and references compulsorily. However, articles may be subject to fact-check and questions may be asked about sources of information to the contributors during the peer review process. Here are some examples of citations that we are looking for:
      </p>

      <h3 class="text-lg font-semibold text-gray-800  mb-2">In-text citations</h3>
      <p class="text-gray-700  mb-4">
        “Landscape, W. J. T. Mitchell tells us, is not an "object to but ... a process by which social and subjective identities are formed.( [2], p.1)..." 
      </p>

      <h3 class="text-lg font-semibold text-gray-800  mb-2">End Text References</h3>
      <ol class="list-decimal list-inside mb-4 text-gray-700">
        <li class="mb-2">
          Mamud, H. “Issue of Dalit Identity and the Partition of Bengal.” <i>The Creative Launcher</i>, Vol. 6 Issue 5, 2021, 53–62. 
          <a href="http://dx.doi.org/10.53032/tcl.2021.6.5.07" target="_blank" class="text-blue-600 hover:underline">http://dx.doi.org/10.53032/tcl.2021.6.5.07</a>
        </li>
        <li class="mb-2">
          Mitchell, WJT. “Introduction.” <i>Landscape and Power</i>. University of Chicago Press, 1994, 1-4.
        </li>
        <li>
          Murshid TM. “Bengali Identity, Secularism and the Language Movement." <i>The Emergence of Bangladesh</i>. Ed. Khondker, H., Muurlink, O., Bin Ali, A. Palgrave Macmillan Singapore, 2022. 
          <a href="https://doi.org/10.1007/978-981-16-5521-0_6" target="_blank" class="text-blue-600 hover:underline">https://doi.org/10.1007/978-981-16-5521-0_6</a>
        </li>
      </ol>
    `,
        },
        {
          title: "Formatting Logic",
          content: `
          <h4 class="text-md font-semibold text-gray-800  mb-2">For articles</h4>
      <p class="text-gray-700  mb-4">
        Author name (Last name, First name - Initials only), “Article name.” Journal name, Volume, Issue, Year of publication, page numbers (in the journal issue in which the article appears)
      </p>
      <h4 class="text-md font-semibold text-gray-800  mb-2">For books</h4>
      <p class="text-gray-700 ">
        Author name (Last name, First name initials), “Chapter name,” Book name, Press name, Year of publication, page numbers (of the relevant chapter)
      </p>`,
        },
        {
          title: "Page Limit for Individual Submissions",
          content: `
      <p class="text-gray-700 mb-4">
        Standard for Double-Spaced Times New Roman 12 in English as well as French and Vrinda 12 for Bangla.
      </p>

      <h3 class="text-lg font-semibold text-gray-800 mb-2">Submission Types & Limits</h3>

      <ul class="list-disc list-inside mb-4 text-gray-700">
        <li class="mb-2">Poetry: 1-10 pages</li>
        <li class="mb-2">Short Fiction: 1-10 pages</li>
        <li class="mb-2">Long Fiction: 10-20 pages</li>
        <li class="mb-2">Reflective Essays: 3-5 pages</li>
        <li class="mb-2">Non-fiction Articles: 5-10 pages</li>
        <li class="mb-2">Life Writings: 5-10 pages</li>
        <li class="mb-2">Transcripted Interviews: 5-10 pages</li>
        <li class="mb-2">Script: 1-20 pages</li>
        <li class="mb-2">Science and Technology: 1-10 pages</li>
        <li class="mb-2">Health: 1-10 pages</li>
        <li class="mb-2">Sports: 1-10 pages</li>
        <li class="mb-2">Travel: 1-10 pages</li>
        <li class="mb-2">Cartoons and Caricature: 1-2 pages</li>
      </ul>

      <h3 class="text-lg font-semibold text-gray-800 mb-2">Paintings</h3>
      <ul class="list-disc list-inside mb-4 text-gray-700">
        <li class="mb-2">2 paintings as a series with a common theme</li>
        <li class="mb-2">3-5 paintings as a single feature with a common theme</li>
      </ul>

      <h3 class="text-lg font-semibold text-gray-800  mb-2">Photography</h3>
      <ul class="list-disc list-inside text-gray-700 ">
        <li class="mb-2">2 photographs as a series with a common theme</li>
        <li class="mb-2">3-5 photographs as a single feature with a common theme</li>
      </ul>
    `,
        },
        {
          title: "Contributor’s bio",
          content:
            "Contributors must include a brief bio in about 100 words and a photograph for publication along with their pieces (only if they are comfortable with sharing their own photographs). Pseudonyms are welcome, however, contributors must furnish their contact details for correspondence with the editorial team.",
        },
        {
          title: "Contact info",
          content:
            "Contributors must provide their email ids. Other contact details including phone, address and social media profile (optional) will be required upon acceptance.",
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false; // Close the dropdown when it loses focus
      this.v$.form.submissionType.$touch();
    },
    selectOption(option) {
      this.form.submissionType = option;
      this.isDropdownOpen = false;
      // this.v$.form.submissionType.$touch();
    },
    async submitForm() {
      this.v$.$touch();
      if (!this.v$.$error && this.hashtagError === "") {
        this.loading = true; // Start loading here
        try {
          const formData = new FormData();
          formData.append("firstname", this.form.firstname);
          formData.append("lastname", this.form.lastname);
          formData.append("email", this.form.email);
          formData.append("submissionType", this.form.submissionType);
          this.form.hashtags.forEach((tag) =>
            formData.append("hashtags[]", tag)
          );
          formData.append("headshot", this.form.headshot);
          formData.append("bio", this.form.bio);
          formData.append("description", this.form.description);
          for (let i = 0; i < this.form.files.length; i++) {
            formData.append("files", this.form.files[i]);
          }

          const response = await axios.post(
            "http://localhost:3000/api/upload",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );

          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Form Submitted",
              text: "Your form has been submitted successfully! Please check your email for confirmation.",
            });
            this.resetForm();
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
        } finally {
          this.loading = false; // Stop loading here
        }
      }
    },
    resetForm() {
      this.hashtags = "";
      this.form = {
        firstname: "",
        lastname: "",
        email: "",
        submissionType: "",
        hashtags: [],
        headshot: null,
        bio: "",
        files: [],
        description: "",
      };
    },
    // async submitForm() {
    //   this.v$.$touch();
    //   if (!this.v$.$error && this.hashtagError == "") {
    //     this.loading = true;
    //     try {
    //       // Create FormData object for the request
    //       const formData = new FormData();
    //       formData.append("firstname", this.form.firstname);
    //       formData.append("lastname", this.form.lastname);
    //       formData.append("email", this.form.email);
    //       formData.append("submissionType", this.form.submissionType);
    //       // Append hashtags as an array
    //       this.form.hashtags.forEach((tag) => {
    //         formData.append("hashtags[]", tag);
    //       });
    //       formData.append("hashtags", this.form.hashtags); // Convert array to JSON string
    //       formData.append("headshot", this.form.headshot);
    //       formData.append("bio", this.form.bio);
    //       formData.append("description", this.form.description);

    //       // Append files
    //       for (let i = 0; i < this.form.files.length; i++) {
    //         formData.append("files", this.form.files[i]);
    //       }
    //       // Send form data to the backend API
    //       const response = await axios.post(
    //         "http://localhost:3000/api/upload",
    //         formData,
    //         {
    //           headers: { "Content-Type": "multipart/form-data" },
    //         }
    //       );
    //       if (response.status === 200) {
    //         Swal.fire({
    //           icon: "success",
    //           title: "Form Submitted",
    //           text: "Your form has been submitted successfully! Please check your email for confirmation.",
    //         });

    //         // Reset form
    //         this.hashtags = "";
    //         this.form = {
    //           firstname: "",
    //           lastname: "",
    //           email: "",
    //           submissionType: "",
    //           hashtags: [], // This will hold the processed hashtags as an array
    //           headshot: null,
    //           bio: "",
    //           files: [],
    //           description: "",
    //         };
    //       } else {
    //         Swal.fire({
    //           icon: "error",
    //           title: "Submission Failed",
    //           text: "There was an error submitting the form. Please try again.",
    //         });
    //       }
    //     } catch (error) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Submission Failed",
    //         text: "There was an error submitting the form. Please try again.",
    //       });
    //       console.error("Error submitting form:", error);
    //     }
    //   } else {
    //     return;
    //   }
    // },
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
