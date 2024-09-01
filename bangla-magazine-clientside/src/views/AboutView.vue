<template>
  <body class="text-gray-800 flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-amber-50">
    <!-- Header -->
    <Header />
    <!-- Navigation bar -->
    <div class="relative flex-grow">
      <div class="relative z-30">
        <NavBar />
      </div>
      <img src="../assets/img/alphabets.jpg" alt="Background"
        class="absolute inset-0 w-full h-full object-cover opacity-5 z-10" />
      <div class="absolute inset-0 bg-opacity-60 z-15"></div>

      <main class="container mx-auto p-6 flex-grow">
        <!-- Mission and Objectives Banner -->
        <section
          class="background-img relative bg-cover bg-center bg-no-repeat p-6 h-auto md:mb-16 mb-8 flex items-center justify-center rounded-lg shadow-md">
          <div class="absolute inset-0 bg-gray-900 opacity-80 rounded-lg"></div>
          <div class="relative z-10 text-center note lg:py-8">
            <blockquote class="fade-in">
              <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-8 text-white">
                Who We Are?
              </h2>
              <p class="text-lg md:text-xl max-w-3xl mx-auto text-honey-gold font-light">
                Our mission is to celebrate and sustain Bengali language and
                culture globally, fostering connections among the diaspora and
                promoting cultural exchanges. We aim to provide spaces for
                learning, cultural exchanges, and celebrations that acknowledge
                and promote the diverse experiences of Bengalis worldwide.
              </p>
            </blockquote>
          </div>
        </section>

        <!-- Activities and Goals -->
        <section class="md:mb-16 mb-8 lg:py-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-8 text-midnight-sapphire text-center">
            What We Do?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="p-6 rounded-lg shadow-lg border-2 border-amber-100 bg-gradient-to-r from-amber-100 to-indigo-100 flex flex-col justify-between note">
              <blockquote class="fade-in">
                <h3 class="text-xl md:text-2xl font-semibold mb-4 text-blue-900 mt-4 md:mt-0">
                  Celebration of Bengali Culture Globally
                </h3>
                <p class="text-lg md:text-xl text-gray-700">
                  <span class="md:text:3xl text-2xl text-blue-800 font-bold">W</span>e acknowledge the existence of
                  Bengalis both outside and
                  inside their territorial borderlands, situating ourselves in
                  the global distribution of Bengalis as a linguo-cultural
                  group.
                </p>
              </blockquote>
            </div>
            <div
              class="p-6 rounded-lg shadow-lg border-2 border-amber-100 bg-gradient-to-l from-amber-100 to-indigo-100 flex flex-col justify-between note">
              <blockquote class="fade-in">
                <h3 class="text-xl md:text-2xl font-semibold mb-4 text-blue-900">
                  Cultural Diaspora Experiences
                </h3>
                <p class="text-lg md:text-xl text-gray-700">
                  <span class="md:text:3xl text-2xl text-blue-800 font-bold">U</span>sing Bengali as a medium of
                  instruction to teach foreign
                  languages and to interact with other languages through
                  literary-cultural translations, we promote symbiotic
                  coexistence of different diasporic identities.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <!-- Meet Our Team -->

        <!-- <section class="bg-gradient-to-r from-amber-100 to-gray-200 shadow-lg mb-8">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-8 text-midnight-sapphire">Our Team</h2>
                        <p class="font-light lg:mb-16 sm:text-xl text-gray-600">Passionate about preserving and promoting Bengali culture, our team is a vibrant mix of storytellers, artists, and language enthusiasts. Together, we celebrate our heritage and connect the global Bengali community</p>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div v-for="(member, index) in teamMembers" :key="index" class="items-center rounded-lg shadow sm:flex bg-gradient-to-r from-gray-500 to-blue-950  dark:border-gray-700">
                            <a href="#">
                                <img :src="member.image" :alt="member.name + ' Avatar'" class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg">
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-white">
                                    <a href="#">{{ member.name }}</a>
                                </h3>
                                <span class="text-gray-200 ">{{ member.position }}</span>
                                <p class="mt-3 mb-4 font-light text-honey-gold">{{ member.description }}</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </section> -->
       
            <section @click="move" class="bg-gradient-to-r from-regal-blue to-gray-300 shadow-lg mb-8" >
              
      <div class="text-center mb-8 lg:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-8 text-midnight-sapphire">
          Our Team
        </h2>
        <p class="font-light lg:mb-16 sm:text-xl text-gray-700">
          Passionate about preserving and promoting Bengali culture, our team is a vibrant mix of storytellers, artists, and language enthusiasts. Together, we celebrate our heritage and connect the global Bengali community.
        </p>
      </div>

      <!-- <div class="flex flex-wrap justify-center gap-y-10 max-w-3xl mx-auto lg:max-w-full">
        <div v-for="i in 23" :key="i" 
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
          @click="move"
          class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full mr-5 bg-blue-200">
          <div
            class="relative w-64 h-64 text-gray-900 bg-gray-900 overflow-hidden rounded-2xl transform transition-transform duration-300 hover:-translate-y-2">
            <div class="font-bold text-2xl px-3 py-1.5 text-gray-200">
              Place image here
            </div>
            <div
              :class="{'translate-y-0': hover, 'translate-y-36': !hover}"
              class="absolute left-0 bottom-0 w-full p-5 bg-gray-100 rounded-tl-2xl transition-transform duration-150">
              <span class="font-bold text-gray-900 leading-4">This is a Title</span>
              <span class="block text-xs mb-2">This is a subtitle of this page. Let us see how it looks on the Web.</span>
              <p class="text-sm transition-opacity duration-500 opacity-0 group-hover:opacity-1">
                Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.
              </p>
            </div>
          </div>
        </div>
      </div> -->
  </section>
  


  

        <!-- Follow Us or Contact Us -->
        <section class="mb-8">
          <div class="flex flex-col md:flex-row md:space-x-6">
            <h2 class="text-2xl font-bold mb-4 text-gray-800 py-2 px-2">
              Follow us on:
            </h2>
            <div class="flex space-x-4">
              <a href="#" class="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.494v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.462.098 2.793.142v3.24l-1.918.001c-1.505 0-1.794.715-1.794 1.764v2.311h3.588l-.467 3.622h-3.121v9.293h6.116c.733 0 1.325-.592 1.325-1.325v-21.349c0-.733-.592-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" class="text-blue-400 hover:text-blue-600" aria-label="Twitter">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.043.763.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.726-.667 1.57-.667 2.473 0 1.707.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.412.112-.847.171-1.296.171-.317 0-.626-.031-.928-.089.627 1.956 2.444 3.379 4.6 3.418-1.68 1.318-3.804 2.103-6.104 2.103-.396 0-.787-.023-1.175-.068 2.179 1.397 4.768 2.211 7.557 2.211 9.055 0 14.002-7.504 14.002-14.002 0-.213-.005-.425-.014-.637.964-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
              <a href="#" class="text-pink-600 hover:text-pink-800" aria-label="Instagram">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.315 3.608 1.29.975.975 1.228 2.243 1.29 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.315 2.633-1.29 3.608-.975.975-2.243 1.228-3.608 1.29-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.315-3.608-1.29-.975-.975-1.228-2.243-1.29-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.315-2.633 1.29-3.608.975-.975 2.243-1.228 3.608-1.29 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.485.066-2.966.314-4.064 1.412s-1.346 2.579-1.412 4.064c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.485.314 2.966 1.412 4.064s2.579 1.346 4.064 1.412c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.485-.066 2.966-.314 4.064-1.412s1.346-2.579 1.412-4.064c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.485-.314-2.966-1.412-4.064s-2.579-1.346-4.064-1.412c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
                </svg>
              </a>
              <a href="#" class="text-red-600 hover:text-red-800" aria-label="YouTube">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.498 6.186a2.9 2.9 0 0 0-2.047-2.047c-1.809-.497-9.067-.497-9.067-.497s-7.257 0-9.067.497a2.9 2.9 0 0 0-2.047 2.047c-.497 1.809-.497 5.586-.497 5.586s0 3.778.497 5.586a2.9 2.9 0 0 0 2.047 2.047c1.809.497 9.067.497 9.067.497s7.257 0 9.067-.497a2.9 2.9 0 0 0 2.047-2.047c.497-1.809.497-5.586.497-5.586s0-3.778-.497-5.586zm-14.182 8.814v-6.8l6.332 3.4-6.332 3.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-6 mt-4">
            <h2 class="text-2xl font-bold mb-4 text-gray-800 px-2 py-2">
              Contact us on-
            </h2>
            <p class="text-2xl mb-4 py-2">
              <a href="mailto:info@bangaliabhibasi.org"
                class="text-midnight-sapphire hover:underline">info@bangaliabhibasi.org</a>.
            </p>
          </div>
        </section>

        <button
       @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
      @click="move"
      class="w-64 h-64 bg-gray-900 text-white text-center hover:bg-gray-100">
      Hover over me
  </button>
      </main>
    </div>

    

    <!-- Footer -->
    <div class="relative">
      <Footer />
    </div>
  </body>
</template>

<script>
import NavBar from "../components/icons/Navigation.vue";
import Footer from "../components/icons/Footer.vue";
import Header from "../components/icons/Header.vue";
export default {
  components: {
      NavBar,
      Footer,
      Header,
    },
  data() {
    return {
      hover: false,

      teamMembers: [
        {
          name: "Antonio Roberto",
          position: "Founder",
          image: "https://pagedone.io/asset/uploads/1696238374.png",
        },
        {
          name: "Patricia Angely",
          position: "Co-Founder",
          image: "https://pagedone.io/asset/uploads/1696238396.png",
        },
        {
          name: "Jerom Bell",
          position: "Chairman",
          image: "https://pagedone.io/asset/uploads/1696238411.png",
        },
        {
          name: "Yasmine Tano",
          position: "CEO",
          image: "https://pagedone.io/asset/uploads/1696238425.png",
        },
        {
          name: "Martin Darbys",
          position: "Product Manager",
          image: "https://pagedone.io/asset/uploads/1696238446.png",
        },
        {
          name: "Sophia Lee",
          position: "Marketing Head",
          image: "https://pagedone.io/asset/uploads/1696238446.png",
        },
        {
          name: "John Doe",
          position: "Lead Developer",
          image: "https://pagedone.io/asset/uploads/1696238472.png",
        },
        {
          name: "Jane Smith",
          position: "UI/UX Designer",
          image: "https://pagedone.io/asset/uploads/1696238484.png",
        },
      ],
    };
  },

    methods: {
    handleMouseOver() {
      console.log('Mouse over event triggered');
      this.hover = true;
    },
    handleMouseLeave() {
      console.log('Mouse leave event triggered');
      this.hover = false;
  },
  move(){
    console.log("entered");
  }
}
}
</script>
<style scoped>
.background-img {
  background-image: url("../assets/img/unity_symbol.webp");
}

.note {
  color: #1a202c !important;
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card_content::before {
  content: "";
  position: absolute;
  top: -47px;
  right: -45px;
  width: 100px;
  height: 100px;
  transform: rotate(-175deg);
  border-radius: 50%;
  box-shadow: inset 48px 48px #f2f2f2;
}
</style>
