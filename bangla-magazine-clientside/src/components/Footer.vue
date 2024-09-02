<template>
  <!-- Footer -->
  <footer class="bg-gradient-to-r fx  from-gray-700 to-midnight-sapphire text-white py-6">
    <div class="container mx-auto text-center space-y-4">
      <div class="space-x-4 sm:space-x-6">
        <button  class="hover:underline">Terms and Conditions of Use</button>
        <button class="hover:underline">Registration Details</button>
        <button @click="cookie" class="hover:underline">Cookie Management</button>
        <button class="hover:underline">Contact Us</button>
      </div>
      <p>&copy; 2024 Bangla Magazine. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
    methods:{
        cookie(){
            this.$router.push("/cookie-settings")
        }
    }

}
</script>

<style>
</style>
