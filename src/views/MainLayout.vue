<template>
  <div class="text-gray-800 min-h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Navigation -->
    <Navigation />

    <!-- Main content -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
div::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      to right,
      rgba(238, 191, 104, 0.7),
      #8585f3b3
    ),
    url("../assets/img/alphabets.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: -1;
}
</style>
