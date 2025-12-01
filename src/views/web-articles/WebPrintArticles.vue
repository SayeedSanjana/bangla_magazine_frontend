<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <header class="relative w-full h-[65vh] overflow-hidden">
      <img
        :src="heroBackground"
        alt="Webb Articles Banner"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-xs z-10 flex flex-col items-center justify-center text-center px-6"
      >
        <div class="text-white font-cormorant max-w-3xl animate-fadeInUp">
          <h1
            class="text-6xl md:text-5xl font-bold mb-4 drop-shadow-lg text-honey-gold"
          >
            Web Articles & Features
          </h1>
          <p class="text-lg md:text-2l italic font-light drop-shadow">
            A curated space of reflective essays and immersive features,
            bringing together voices, stories, and ideas that inspire, resonate,
            and linger long after the reading ends.
          </p>
        </div>
      </div>
    </header>

    <!-- Main Section -->
    <div class="bg-gray-50 py-10">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        <!-- Vertical Tabs -->
        <div class="md:col-span-1 border-r border-gray-300 pr-4 mt-4">
          <ul class="space-y-2">
            <li
              v-for="topic in webArticlesTopics"
              :key="topic.id"
              @click="scrollToSection(topic.id)"
              :class="[
                'cursor-pointer px-4 py-2 rounded text-lg',
                topic.id === selectedTopicId
                  ? 'bg-amber-200 text-amber-900 font-semibold'
                  : 'hover:bg-gray-100',
              ]"
            >
              {{ topic.name }}
            </li>

            <li
              class="px-4 py-2 bg-gray-100 text-gray-400 rounded cursor-not-allowed"
            >
              More coming soon...
            </li>
          </ul>
        </div>

        <!-- Right Content Sections -->
        <div class="md:col-span-3 space-y-20">
          <!-- Search + Sort (Right Side) -->
          <div class="max-w-7xl mx-auto px-2 mt-4 mb-8">
            <div
              class="md:col-span-3 flex flex-col md:flex-row gap-4 justify-end"
            >
              <!-- Search Bar -->
              <div class="relative w-full md:w-3/4">
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-4.35-4.35m1.85-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by title or author"
                  class="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>

              <!-- Sort Dropdown -->
              <select
                v-model="sortOrder"
                class="w-full md:w-1/4 px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none"
              >
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>
          </div>

          <!-- ESSAY SECTION -->
          <section id="essay-section" class="scroll-mt-20">
            <div class="flex items-center gap-2 mb-2 h-10">
              <h2
                class="text-3xl lg:text-4xl font-bold text-amber-700 font-cormorant leading-none"
              >
                Essays
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-10 h-10 text-amber-800"
              >
                <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                <path d="M15 3v4a1 1 0 0 0 1 1h3" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="13" x2="14" y2="13" />
                <line x1="8" y1="16" x2="12" y2="16" />
              </svg>
            </div>

            <p
              class="text-gray-700 mb-8 font-cormorant text-lg lg:text-xl italic"
            >
              Explore a curated selection of thought-provoking essays that delve
              into diverse topics, offering fresh perspectives and deep
              insights.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <!-- When no results -->
              <div
                v-if="essayCards.length === 0"
                class="col-span-full text-left text-gray-600 text-lg py-6 font-medium"
              >
                Coming Soon...
              </div>
              <div
                v-for="article in filteredSortedEssays"
                :key="article.title"
                class="group bg-white rounded-2xl shadow-lg hover:shadow-xl border overflow-hidden flex flex-col h-[420px] w-[300px]"
              >
                <!-- Large Image (unchanged height) -->
                <div class="relative h-80 overflow-hidden">
                  <img
                    :src="article.img"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div
                    class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"
                  ></div>
                </div>

                <div class="p-4 flex flex-col h-full justify-between">
                  <div>
                    <h3 class="text-lg font-semibold">{{ article.title }}</h3>
                    <p class="text-sm text-gray-600 line-clamp-3 mt-1 mb-2">
                      {{ article.excerpt }}
                    </p>

                    <!-- Reduced gap above metadata -->
                    <div
                      class="flex items-center text-xs text-gray-500 gap-2 mt-3 pt-1 border-t"
                    >
                      <span class="flex items-center gap-1">
                        <i class="fa-solid fa-user text-amber-600"></i
                        ><strong>{{ article.author }}</strong>
                      </span>
                      <span class="text-gray-400">|</span>
                      <span class="flex items-center gap-1">
                        <i class="fa-solid fa-calendar-days text-blue-600"></i
                        >{{ article.date }}
                      </span>
                    </div>
                  </div>

                  <!-- Reduced gap above button -->
                  <button
                    @click="goToArticle(article.type, article.slug)"
                    class="mt-1 px-4 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- PAITING SECTION -->
          <section id="painting-section" class="scroll-mt-20">
            <!-- Poems Heading -->
            <div class="flex items-center gap-2 mb-2 h-10">
              <h2
                class="text-3xl lg:text-4xl font-bold text-midnight-sapphire font-cormorant leading-none"
              >
                Art & Paintings
              </h2>

              <!-- Painting Icon (Framed Artwork) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-10 h-10 text-blue-900"
              >
                <!-- Frame -->
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
                <!-- Little “sun” / spotlight -->
                <circle cx="9" cy="9" r="1.3" />
                <!-- Stylized mountains / landscape -->
                <path d="M7 15l3-3 3 4 2-2 3 3" />
              </svg>
            </div>

            <!-- Subtitle Line Under Poems -->
            <p
              class="text-gray-700 mb-8 font-cormorant text-lg lg:text-xl italic"
            >
              A curated space of evocative paintings and visual narratives,
              bringing together colours, emotions, and moments that linger long
              after the viewing ends.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <!-- When no results -->
              <div
                v-if="paintingCards.length === 0"
                class="col-span-full text-left text-gray-600 text-lg py-6 font-medium"
              >
                Coming Soon...
              </div>
              <div
                v-for="article in filteredSortedPaintings"
                :key="article.title"
                class="group bg-white rounded-2xl shadow-lg hover:shadow-xl border overflow-hidden flex flex-col h-[420px] w-[300px]"
              >
                <!-- Large Image (unchanged height) -->
                <div class="relative h-80 overflow-hidden">
                  <img
                    :src="article.img"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div
                    class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"
                  ></div>
                </div>

                <div class="p-4 flex flex-col h-full justify-between">
                  <div>
                    <h3 class="text-lg font-semibold">{{ article.title }}</h3>
                    <p class="text-sm text-gray-600 line-clamp-3 mt-1 mb-2">
                      {{ article.excerpt }}
                    </p>

                    <!-- Reduced gap above metadata -->
                    <div
                      class="flex items-center text-xs text-gray-500 gap-2 mt-3 pt-1 border-t"
                    >
                      <span class="flex items-center gap-1">
                        <i class="fa-solid fa-user text-amber-600"></i
                        ><strong>{{ article.author }}</strong>
                      </span>
                      <span class="text-gray-400">|</span>
                      <span class="flex items-center gap-1">
                        <i class="fa-solid fa-calendar-days text-blue-600"></i
                        >{{ article.date }}
                      </span>
                    </div>
                  </div>

                  <!-- Reduced gap above button -->
                  <button
                    @click="goToArticle(article.type, article.slug)"
                    class="mt-1 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- POEM SECTION -->
          <section id="poem-section" class="scroll-mt-20">
            <!-- Poems Heading -->
            <div class="flex items-center gap-2 mb-2 h-10">
              <h2
                class="text-3xl lg:text-4xl font-bold text-amber-700 font-cormorant leading-none"
              >
                Poems
              </h2>

              <!-- Poem Icon (Feather/Quill) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                class="w-10 h-10 text-amber-800"
              >
                <path
                  d="M31.009 0.878c-5.937 0.218-10.752 1.502-14.433 3.482l-1.838 3.073-0.31-1.752c-0.657 0.462-1.266 0.949-1.827 1.46l-0.917 2.813-0.315-1.572c-2.724 3.049-3.942 6.736-3.635 10.504h-4.602v3.063h2.519l-2.703 2.373-1.389 5.303 0.907 0.99h11.058l0.907-0.99-1.389-5.303-2.558-2.373h2.206v-3.063h-4.055c1.596-0.827 3.146-1.971 4.68-3.293l-1.862 0.097 0.017-0.019 3.343-1.423c2.923-2.722 5.828-5.925 8.936-8.625l-1.529-0.324 3.535-1.317c1.673-1.276 3.413-2.358 5.254-3.105z"
                />
              </svg>
            </div>

            <!-- Subtitle Line Under Poems -->
            <p
              class="text-gray-700 mb-8 font-cormorant text-lg lg:text-xl italic"
            >
              A collection of lyrical expressions that capture emotion, rhythm,
              and the timeless beauty of poetic imagination.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <!-- When no results -->
              <div
                v-if="poemCards.length === 0"
                class="col-span-full text-left text-gray-600 text-lg py-6 font-medium"
              >
                Coming Soon...
              </div>
              <div
                v-for="article in filteredSortedPoems"
                :key="article.title"
                class="group bg-white rounded-2xl shadow-lg hover:shadow-xl border overflow-hidden flex flex-col h-[420px] w-[300px]"
              >
                <!-- Large Image (unchanged height) -->
                <div class="relative h-80 overflow-hidden">
                  <img
                    :src="article.img"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div
                    class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"
                  ></div>
                </div>

                <div class="p-4 flex flex-col h-full justify-between">
                  <div>
                    <h3 class="text-lg font-semibold">{{ article.title }}</h3>
                    <p class="text-sm text-gray-600 line-clamp-3 mt-1 mb-2">
                      {{ article.excerpt }}
                    </p>

                    <!-- Reduced gap above metadata -->
                    <div
                      class="flex items-center text-xs text-gray-500 gap-2 mt-3 pt-1 border-t"
                    >
                      <span class="flex items-center gap-1">
                        <i class="fa-solid fa-user text-amber-600"></i
                        ><strong>{{ article.author }}</strong>
                      </span>
                      <span class="text-gray-400">|</span>
                      <span class="flex items-center gap-1">
                        <i class="fa-solid fa-calendar-days text-blue-600"></i
                        >{{ article.date }}
                      </span>
                    </div>
                  </div>

                  <!-- Reduced gap above button -->
                  <button
                    @click="goToArticle(article.type, article.slug)"
                    class="mt-1 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-8"
    >
      <!-- Overlay for Background Image -->
      <div class="absolute inset-0 bg-gray-900 opacity-85"></div>

      <!-- Tooltip for Image Credit -->
      <div
        class="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Background Image by:
        <a
          class="hover:underline"
          href="https://ca.pinterest.com/pin/2251868554953302/"
          >https://ca.pinterest.com/pin/2251868554953302/</a
        >
        <div
          class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"
        ></div>
      </div>

      <!-- Content Overlay -->
      <div
        class="container md:mx-auto py-6 px-4 space-y-3 lg:px-32 relative z-10"
      >
        <h2
          class="text-4xl md:text-5xl font-bold mb-2 text-white font-cormorant pt-6"
        >
          Join Our Network
        </h2>
        <p class="text-white text-lg text-justify my-2 mb-6">
          Join - Bangali Abhibasi Network: a Glocal Linguo-cultural Association
        </p>
        <button
          @click="join"
          aria-label="Contribute to the community"
          class="text-base px-4 py-3 border-2 border-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:border-2 lg:hover:text-honey-gold transition duration-300 ease-in-out"
        >
          Join Our Network
        </button>
      </div>
    </div>

    <CookieConsent />
  </div>
</template>

<script>
import essay01 from "@/assets/WebPrintArticles/essay/AtrayeeMajumderEssay01.png";
import painting01 from "@/assets/WebPrintArticles/painting/painting01.png";
import heroBackground from "@/assets/WebPrintArticles/webPrintArticlesCover.png";
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  name: "WebPrintArticles",
  components: { CookieConsent },

  data() {
    return {
      heroBackground,
      searchQuery: "",
      sortOrder: "desc", // newest first

      webArticlesTopics: [
        { id: 1, name: "Essays" },
        { id: 2, name: "Art & Paintings" },
        { id: 3, name: "Poems" },
      ],

      selectedTopicId: 1,

      essayCards: [
        {
          title: "The Strange Unreality of Things",
          excerpt:
            "Joan Didion watches her beloved die in the hospital in the opening pages of The Year of Magical ...",
          author: "Atreyee Majumder",
          date: "2025-11-23",
          img: essay01,
          slug: "the-strange-reality-of-things",
          type: "essay",
        },
      ],
      paintingCards: [
        {
          title: "Fall Canadian Landscape",
          excerpt:
            "Fall, Canadian Landscape Paintings by Asoke Chakravarty ...",
          author: "Asoke Chakravarty",
          date: "2025-11-30",
          img: painting01,
          slug: "fall-canadian-landscape",
          type: "painting",
        },
      ],

      poemCards: [],
    };
  },

  computed: {
    filteredSortedEssays() {
      return this.processList(this.essayCards);
    },
    filteredSortedPoems() {
      return this.processList(this.poemCards);
    },
    filteredSortedPaintings() {
      return this.processList(this.paintingCards);
    },
  },

  methods: {
    processList(list) {
      let q = this.searchQuery.toLowerCase();

      let filtered = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.author.toLowerCase().includes(q)
      );

      return filtered.sort((a, b) => {
        return this.sortOrder === "desc"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });
    },

    scrollToSection(id) {
      this.selectedTopicId = id;

      const sectionMap = {
        1: "essay-section",
        2: "painting-section",
        3: "poem-section",
      };

      const sectionId = sectionMap[id];
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },

    goToArticle(type, slug) {
      if (!slug) {
        console.error("Article slug is missing!");
        return;
      }
      this.$router.push(`/web-articles/${type}/${slug}`);
    },

    join() {
      this.$router.push("/contribute/membership");
    },
  },
};
</script>

<style scoped>
.bg-img {
  background-image: url("../../assets/img/bg-contribute.png");
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out both;
}
</style>
