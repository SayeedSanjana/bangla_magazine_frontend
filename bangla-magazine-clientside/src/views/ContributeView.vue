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
                class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-midnight-sapphire px-2 py-1 font-cormorant"
              >
                Join the conversation with the B.A.N.G.L.A. community
                <br />
                <span class="text-sm sm:text-lg md:text-xl mt-2 text-gray-800"
                  >Contribute with your visual/performance art, prose, poetry,
                  essays, and more..</span
                >
              </h3>
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
                      <span class="flex items-center text-gray-700">
                        <svg
                          class="w-5 h-5 me-2 shrink-0 text-midnight-sapphire"
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
                    class="p-5 border border-b-0 border-gray-200 bg-slate-100 text-gray-700 text-sm sm:text-base md:text-lg"
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
            <p
              class="text-sm sm:text-lg font-cormorant font-semibold py-6 text-gray-600 md:mb-6"
            >
              Complete the form below to submit your work.
            </p>
            <form action="#" method="POST" class="space-y-4">
              <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div class="w-full sm:w-1/2 px-2">
                  <label for="last_name" class="block font-medium"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div class="px-2">
                <label for="email" class="block font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div class="px-2 relative flex-grow">
                <label for="submission-type" class="block font-medium"
                  >Submission Type</label
                >
                <select
                  id="submission-type"
                  name="submission-type"
                  class="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  required
                >
                  <option value="">None</option>
                  <option value="non_fiction_annual_theme">Annual Theme</option>
                  <option value="non_fiction_open_submissions">
                    Open Submissions
                  </option>
                  <option value="non_fiction_travel">Travel Writing</option>
                  <option value="non_fiction_memoirs">Memoirs</option>
                  <option value="non_fiction_personal_accounts">
                    1st Person Accounts
                  </option>
                  <option value="non_fiction_interviews">Interviews</option>
                  <option value="non_fiction_science_tech">
                    Science & Technology
                  </option>
                  <option value="fiction_poetry">Fiction (Poetry)</option>
                  <option value="fiction_short">Fiction (Short)</option>
                  <option value="fiction_long">Fiction (Long)</option>
                  <option value="fiction_scripts">Fiction (Scripts)</option>
                  <option value="artwork">Artwork</option>
                  <option value="photography">Photography</option>
                </select>
              </div>
              <div class="px-2">
                <label for="tags" class="block font-medium">Hash tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
              </div>
              <div class="px-2">
                <label for="head_shot" class="block font-medium"
                  >Upload Headshot
                  <span class="text-sm text-gray-500">
                    (Upload an image in JPEG, PNG, or WebP format, within
                    300KB.)</span
                  >
                </label>
                <input
                  type="file"
                  id="head_shot"
                  name="head_shot"
                  class="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
              </div>
              <div class="px-2">
                <label for="bio" class="block font-medium">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="2"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                ></textarea>
              </div>
              <div class="px-2">
                <label for="file" class="block font-medium">Upload File</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
              </div>
              <div class="px-2">
                <label for="description" class="block text-lg font-medium"
                  >Brief description of your work</label
                >
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                >
                </textarea>
              </div>
              <button
                @click="contribute"
                class="group relative inline-flex items-center w-full overflow-hidden border-4 border-yellow-400 border-opacity-20 bg-gray-50 rounded-br-2xl rounded-tl-2xl rounded-lg px-6 py-3 font-medium text-midnight-sapphire shadow-md transition duration-300 ease-out hover:border-4 hover:border-double"
              >
                <span
                  class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-600 duration-300 group-hover:translate-x-0"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span
                  class="ease uppercase absolute flex h-full w-full transform items-center text-center text-midnight-sapphire font-semibold tracking-widest text-xs justify-center transition-all duration-300 group-hover:translate-x-full"
                  >Submit</span
                >
                <span class="invisible relative">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContributeView",
  data() {
    return {
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
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isOpen(index) {
      return this.activeIndex === index;
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
