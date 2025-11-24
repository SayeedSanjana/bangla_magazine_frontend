<template>
  <div class="min-h-screen">
    <template v-if="loading">
      <!-- Loading Animation (Spinner) -->
      <div class="flex flex-col items-center justify-center min-h-screen">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"
        ></div>
        <p class="mt-3 text-gray-600">Loading article...</p>
      </div>
    </template>

    <template v-else-if="articleComponent">
      <component :is="articleComponent" />
    </template>

    <template v-else>
      <!-- When article is not found, still show a loading screen -->
      <div class="flex flex-col items-center justify-center min-h-screen">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-4 border-red-500"
        ></div>
        <p class="mt-3 text-gray-600">Loading article...</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "DynamicWomenMonthArticle",
  props: ["slug"], // Get the slug from the route
  data() {
    return {
      articleComponent: null, // Placeholder for dynamically imported component
      loading: true, // Add loading state
    };
  },
  async created() {
    try {
      // ✅ Update the path to `ekushe-articles` instead of `articles`
      this.articleComponent = (
        await import(`@/views/women-month-articles/${this.slug}.vue`)
      ).default;
    } catch (error) {
      console.error("Article not found:", error);
      this.articleComponent = null;
    } finally {
      setTimeout(() => {
        this.loading = false; // Hide loading after 3 seconds (simulated delay)
      }, 3000);
    }
  },
};
</script>

<style scoped>
/* Loading Spinner Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
