<template>
  <!-- Header -->
  <header class="bg-white shadow">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
      <a href="#" class="hidden md:block"><img src="../assets/img/logo.jpg" alt="logo" class="h-14"/></a>
      <h1 class="text-2xl md:text-3xl font-bold text-center md:text-left text-gray-800">
        <span class="text-honey-gold">B.A.N.G.L.A </span>
        <span class="text-burgundy-crush">Magazine</span>
      </h1>
      <nav class="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
        <a href="#"><img src="../assets/svg/facebook.svg" alt="facebook" class="w-6 md:w-7 h-6 md:h-7"/></a>
        <a href="#"><img src="../assets/svg/twitter.svg" alt="twitter" class="w-6 md:w-7 h-6 md:h-7"/></a>
        <a href="#"><img src="../assets/svg/instagram.svg" alt="instagram" class="w-6 md:w-7 h-6 md:h-7"/></a>
        <a href="#"><img src="../assets/svg/youtube.svg" alt="youtube" class="w-6 md:w-7 h-6 md:h-7"/></a>
      </nav>
    </div>
  </header>
</template> 



<script>
export default {
  name: "Header",
};
</script>