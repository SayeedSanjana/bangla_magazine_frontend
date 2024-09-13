<template>
  <body class="text-gray-800 min-h-screen flex flex-col">
    <header>
      <!-- Your header component -->
      <Header />
    </header>

    <nav>
      <!-- Your navigation component -->
      <Navigation />
    </nav>

    <main class>
      <!-- This is where the router-view will inject the page content -->
      <RouterView />
    </main>

    <footer>
      <!-- Your footer component -->
      <Footer />
    </footer>
  </body>
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
body::before {
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
  opacity: 0.2; /* Adjust the opacity here */
  z-index: -1; /* Make sure the background stays behind the content */
}
</style>
