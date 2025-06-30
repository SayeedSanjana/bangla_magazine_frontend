<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <header class="relative w-full h-[60vh] overflow-hidden">
      <img
        :src="heroBackground"
        alt="Birth Anniversary Banner"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-xs z-10 flex flex-col items-center justify-center text-center px-6"
      >
        <div class="text-white font-cormorant max-w-3xl animate-fadeInUp">
          <h1
            class="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg"
          >
            Birth Anniversaries of Bengali Legends
          </h1>
          <p class="text-lg md:text-xl font-light italic drop-shadow">
            Honoring timeless contributions through heartfelt tributes,
            reflections, and remembrances from the community.
          </p>
        </div>

        <!-- Infinite Carousel -->
        <div class="w-full mt-6 flex justify-center">
          <div class="relative mx-auto w-full max-w-2xl overflow-hidden">
            <div
              class="marquee-track flex gap-8 will-change-transform px-4 py-2"
            >
              <div
                v-for="legend in [...legendImages, ...legendImages]"
                :key="legend.name + Math.random()"
                class="flex-shrink-0 flex flex-col items-center text-white w-48 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
              >
                <img
                  :src="legend.img"
                  :alt="legend.name"
                  class="w-24 h-24 object-cover rounded-full border-4 border-yellow-500 mb-4"
                />
                <p class="text-sm font-medium text-center">{{ legend.name }}</p>
                <p class="text-xs italic text-center text-amber-300">
                  {{ legend.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- closes the overlay text container -->
    </header>

    <!-- Content Section -->
    <div class="bg-gray-50 py-12">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <!-- Vertical Tabs -->
        <div class="md:col-span-1 border-r border-gray-300 pr-4">
          <ul class="space-y-2">
            <li
              v-for="figure in culturalFigures"
              :key="figure.id"
              @click="selectedFigureId = figure.id"
              :class="[
                'cursor-pointer px-4 py-2 rounded',
                figure.id === selectedFigureId
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'hover:bg-gray-100',
              ]"
            >
              {{ figure.name }}
            </li>
            <li
              class="cursor-not-allowed px-4 py-2 rounded bg-gray-100 text-gray-400 font-medium"
            >
              More coming soon...
            </li>
          </ul>
        </div>

        <!-- Article Grid -->
        <div class="md:col-span-3">
          <div class="flex flex-col md:flex-row gap-4 mb-6">
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
                placeholder="Search by title"
                class="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
            <select
              v-model="sortOrder"
              class="w-full md:w-1/4 px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>

          <div v-if="selectedFigure" class="space-y-8">
            <div>
              <div class="mb-6">
                <h2 class="text-2xl font-bold mb-1 text-gray-800">
                  {{ selectedFigure.name }}
                  <span class="text-lg font-normal italic text-amber-500">
                    — {{ selectedFigure.field }}
                  </span>
                </h2>
                <p class="text-sm text-gray-600 italic">
                  Years: {{ selectedFigure.years }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  v-for="article in filteredArticles"
                  :key="article.id"
                  @click="openArticleModal(article)"
                  class="cursor-pointer bg-white border border-gray-200 p-4 rounded-lg shadow transform transition duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-[0.5deg] hover:scale-[1.02] text-gray-900"
                >
                  <div
                    class="w-full h-48 overflow-hidden rounded mb-4 relative"
                  >
                    <iframe
                      v-if="article.article_thumbnail"
                      :src="`https://drive.google.com/file/d/${article.article_thumbnail}/preview`"
                      class="absolute top-0 left-0 w-full h-full scale-[1.75] origin-center"
                      style="border: none; pointer-events: none"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <h3 class="text-lg font-semibold text-amber-700 mb-2">
                    {{ article.title || "Title coming soon..." }}
                  </h3>
                  <p class="text-sm italic font-normal text-amber-500 mb-2">
                    {{ article.author || "Anonymous Author" }}
                  </p>
                  <p class="text-sm text-gray-600">
                    {{
                      article.short_description || "short into coming soon..."
                    }}
                  </p>
                </div>
              </div>

              <div v-if="filteredArticles.length < 3" class="text-center mt-6">
                <p class="text-sm text-gray-500 italic">
                  More articles coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArticleModal
      v-if="selectedArticle"
      :key="selectedArticle.id"
      :article="selectedArticle"
      @close="selectedArticle = null"
    />
    <div
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center h-96 group pt-8"
    >
      <!-- Overlay for Background Image -->
      <div class="absolute inset-0 bg-gray-900 opacity-85"></div>

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
import axios from "axios";
import tagoreImg from "@/assets/birth-anniversary/tagore.jpg";
import nazrulImg from "@/assets/authorImage/nazrul.jpg";
import rayImg from "@/assets/birth-anniversary/ray.jpg";
import heroBackground from "@/assets/birth-anniversary/image.png";
import ArticleModal from "./ArticleModal.vue";
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  name: "BirthAnniversary",
  components: {
    ArticleModal,
    CookieConsent,
  },
  data() {
    return {
      heroBackground: heroBackground,
      carouselLegends: [
        { name: "Rabindranath Tagore", title: "Poet & Philosopher" },
        { name: "Kazi Nazrul Islam", title: "Rebel Poet" },
        { name: "Satyajit Ray", title: "Filmmaker & Writer" },
        { name: "Lalon Shah", title: "Mystic Folk Saint" },
        { name: "Begum Rokeya", title: "Educator & Reformer" },
      ],
      legendImages: [
        {
          name: "Rabindranath Tagore",
          title: "Poet & Philosopher",
          img: tagoreImg,
        },
        {
          name: "Kazi Nazrul Islam",
          title: "Rebel Poet",
          img: nazrulImg,
        },
        {
          name: "Satyajit Ray",
          title: "Filmmaker",
          img: rayImg,
        },
      ],
      culturalFigures: [
        {
          id: 1,
          name: "Rabindranath Tagore",
          label: "tagore",
          field: "Literature and Music",
          years: "1861 - 1941",
          showArticles: false,
          articles: [],
        },
        {
          id: 2,
          name: "Kazi Nazrul Islam",
          label: "nazrul",
          field: "Literature and Music",
          years: "1899–1976",
          showArticles: false,
          articles: [],
        },
      ],
      selectedFigureId: 1,
      searchQuery: "",
      sortOrder: "desc", // default to newest first
      dynamicArticles: [],
      selectedArticle: null,
    };
  },
  computed: {
    displayedFigures() {
      return this.culturalFigures;
    },
    selectedFigure() {
      return this.culturalFigures.find((f) => f.id === this.selectedFigureId);
    },
    filteredArticles() {
      if (!this.selectedFigure) return [];
      return this.selectedFigure.articles
        .filter((article) => {
          return article.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        })
        .sort((a, b) => {
          if (this.sortOrder === "asc") {
            return new Date(a.date) - new Date(b.date);
          } else {
            return new Date(b.date) - new Date(a.date);
          }
        });
    },
  },
  methods: {
    join() {
      this.$router.push("/contribute/membership");
    },
    extractId(url) {
      const match = url.match(/[-\w]{25,}/);
      return match ? match[0] : null;
    },
    getImageSrc(id) {
      return `https://drive.google.com/uc?export=view&id=${id}`;
    },
    toggleArticles(id) {
      const figure = this.culturalFigures.find((f) => f.id === id);
      if (figure) {
        figure.showArticles = !figure.showArticles;
      }
    },
    toggleLabel(figure) {
      return figure.showArticles ? "Hide Articles" : "View Articles";
    },
    openArticleModal(article) {
      this.selectedArticle = null;
      this.$nextTick(() => {
        this.selectedArticle = article;
      });
    },
  },
  async mounted() {
    const sheetId = "1TmXC9ysbt8FYoO84DlOTk8qSQ4i4oClTEZjvZw9Vd98";
    const sheetName = "BirthAnniversary";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    console.log("Attempting to fetch Google Sheet data from:", url);

    try {
      const response = await axios.get(url);
      const text = response.data;
      const json = JSON.parse(text.substr(47).slice(0, -2));
      const rows = json.table.rows;
      const headers = json.table.cols.map((col) => col.label);
      const allArticles = rows
        .map((row) => {
          const entry = {};
          row.c.forEach((cell, i) => {
            entry[headers[i]] = cell?.v ?? "";
          });
          return entry;
        })
        .map((entry) => {
          const rawDate = entry.date_published;
          let date_published = "";
          if (
            typeof rawDate === "string" &&
            rawDate.match(/^Date\(\d+,\d+,\d+\)$/)
          ) {
            const [_, y, m, d] = rawDate.match(/^Date\((\d+),(\d+),(\d+)\)$/);
            date_published = new Date(+y, +m, +d).toISOString();
          }

          return {
            id: entry.article_id,
            title: entry.title,
            author: entry.content_author,
            short_description: entry.short_description,
            driveEmbedUrl: `https://drive.google.com/file/d/${entry.article_id}/preview`,
            article_thumbnail: entry.article_thumbnail,
            legend: entry.legend_label?.toLowerCase(),
            date: date_published,
          };
        });

      this.dynamicArticles = allArticles;
      console.log(this.dynamicArticles);
      this.culturalFigures.forEach((figure) => {
        figure.articles = allArticles.filter(
          (article) => article.legend === figure.label
        );
      });
      console.log("Articles per figure updated:", this.culturalFigures);
    } catch (error) {
      console.error("Error fetching Google Sheet:", error);
    }
  },
};
</script>
<style scoped>
@keyframes seamlessScroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.bg-img {
  background-image: url("../../assets/img/bg-contribute.png");
}

.marquee-track {
  width: 200%;
  animation: seamlessScroll 30s linear infinite;
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
