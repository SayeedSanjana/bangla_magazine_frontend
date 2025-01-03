<template>
  <section class="">
    <div class="md:mx-auto flex-grow min-h-screen">
      <!-- Note -->
      <div class="bg-gradient-to-r from-regal-blue to-gray-200 py-12 sm:py-20">
        <div class="container mx-auto px-4">
          <div class="px-4 mt-8 text-center">
            <h2 class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant">
              Meet Our Team
            </h2>
            <p class="font-light text-lg text-gray-700">
              Passionate about preserving and promoting the rich tapestry of
              Bengali culture, our team is a dynamic and vibrant group of
              storytellers, artists, and language enthusiasts. United by a
              shared love for our heritage, we work together to celebrate the
              traditions, arts, and language that define the Bengali identity.
              Through our collective efforts, we aim to foster a deeper
              connection to our roots while building bridges across generations
              and geographies. By creating meaningful content, organizing
              cultural events, and engaging with the global Bengali diaspora, we
              strive to keep our heritage alive and thriving in today’s
              interconnected world.
            </p>

            <button
              @click="join"
              class="text-base border-2 border-yellow-400 px-4 py-3 mt-4 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold"
            >
              Join Our Network
            </button>
          </div>
        </div>
      </div>

      <!-- wave -->
      <div class="bg-gradient-to-r from-regal-blue to-gray-200">
        <div class="container mx-auto px-4"></div>
      </div>

      <div class="wave-divider bg-gradient-to-r from-amber-50 to-blue-50">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <!-- Gradient Definition -->
          <defs>
            <linearGradient
              id="gradient-fill"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style="stop-color: #e2e9ed; stop-opacity: 1" />
              <!-- Ending color gray-200 #e5e7eb -->
              <stop
                offset="100%"
                style="stop-color: #e5e7eb; stop-opacity: 1"
              />
            </linearGradient>
          </defs>

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#gradient-fill)"
          ></path>
        </svg>
      </div>

      <!-- Meet Our Team -->
      <div
        class="bg-gradient-to-r from-amber-50 to-blue-50 px-2 rounded-lg shadow pb-8 lg:pb-28"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <div>
            <!-- Section 1: Founding Board of Directors -->
            <div class="p-4">
              <h2
                class="text-3xl lg:text-4xl text-center font-semibold text-midnight-sapphire font-cormorant mb-12"
              >
                Founding Board of Directors
              </h2>
              <div
                class="flex flex-wrap justify-center gap-y-12 max-w-3xl mx-auto lg:max-w-full"
              >
                <div
                  v-for="(member, index) in filteredTeamMembers('Founder')"
                  :key="'founder' + index"
                  @mouseover="handleMouseOver(index, 'Founder')"
                  @mouseleave="handleMouseLeave"
                  class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full mr-5 xl:mr-10"
                >
                  <div
                    class="relative md:w-auto w-full h-72 bg-honey-gold overflow-hidden rounded-2xl transform transition-transform duration-300 border-2 border-indigo-300 border-opacity-80"
                  >
                    <img
                      :src="member.image"
                      alt="Profile Image"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                      :class="{
                        'opacity-55':
                          hoveredIndex.section === 'Founder' &&
                          hoveredIndex.index === index,
                      }"
                    />
                    <div
                      class="absolute bottom-0 left-0 right-8 bg-indigo-900 bg-opacity-70 text-gray-100 p-2 rounded-tr-xl rounded-br-xl transition-all duration-300 border-b-4 border-honey-gold border-opacity-80"
                      :class="
                        hoveredIndex.section === 'Founder' &&
                        hoveredIndex.index === index
                          ? 'h-full '
                          : 'h-10'
                      "
                    >
                      <h3
                        v-if="
                          hoveredIndex.section !== 'Founder' ||
                          hoveredIndex.index !== index
                        "
                        class="text-sm md:text-xs lg:text-sm font-semibold"
                      >
                        {{ member.name }}
                      </h3>
                      <div v-else class="flex flex-col justify-center h-full">
                        <h3 class="text-sm md:text-xs lg:text-sm font-bold">
                          {{ member.name }}
                        </h3>
                        <p class="text-xs mt-2 font-bold text-honey-gold">
                          {{ member.location }}
                        </p>
                        <p class="text-xs mt-2">{{ member.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: Content Sculptors -->
            <div class="mt-12 lg:mt-16 p-4">
              <h2
                class="text-3xl lg:text-4xl text-center font-semibold text-midnight-sapphire font-cormorant mb-12"
              >
                Founding Members
              </h2>
              <div
                class="flex flex-wrap justify-center gap-y-12 max-w-3xl mx-auto lg:max-w-full"
              >
                <div
                  v-for="(member, index) in filteredTeamMembers('Member')"
                  :key="'contentSculptors' + index"
                  @mouseover="handleMouseOver(index, 'Member')"
                  @mouseleave="handleMouseLeave"
                  class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full mr-5 xl:mr-10"
                >
                  <div
                    class="relative w-full h-72 bg-honey-gold overflow-hidden rounded-2xl transform transition-transform duration-300 border-2 border-indigo-300 border-opacity-80"
                  >
                    <img
                      :src="member.image"
                      alt="Profile Image"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                      :class="{
                        'opacity-55':
                          hoveredIndex.section === 'Member' &&
                          hoveredIndex.index === index,
                      }"
                    />
                    <div
                      class="absolute bottom-0 left-0 right-8 bg-indigo-900 bg-opacity-70 text-gray-100 p-2 rounded-tr-xl rounded-br-xl transition-all duration-300 border-b-4 border-honey-gold border-opacity-80"
                      :class="
                        hoveredIndex.section === 'Member' &&
                        hoveredIndex.index === index
                          ? 'h-full '
                          : 'h-10'
                      "
                    >
                      <h3
                        v-if="
                          hoveredIndex.section !== 'Member' ||
                          hoveredIndex.index !== index
                        "
                        class="text-sm md:text-xs lg:text-sm font-bold"
                      >
                        {{ member.name }}
                      </h3>

                      <div v-else class="flex flex-col justify-center h-full">
                        <h3 class="text-sm md:text-xs lg:text-sm font-semibold">
                          {{ member.name }}
                        </h3>
                        <p class="text-xs font-bold mt-2 text-honey-gold">
                          {{ member.location }}
                        </p>
                        <p class="text-xs mt-2">{{ member.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Creative Visionaries -->
            <!-- <div class="mt-12 p-8">
              <h2
                class="text-4xl font-semibold text-center text-midnight-sapphire font-cormorant mb-12"
              >
                Creative Visionaries
              </h2>
              <div
                class="flex flex-wrap justify-center gap-y-12 max-w-3xl mx-auto lg:max-w-full"
              >
                <div
                  v-for="(member, index) in filteredTeamMembers(
                    'Creative Visionary'
                  )"
                  :key="'creativeVisionaries' + index"
                  @mouseover="handleMouseOver(index, 'Creative Visionary')"
                  @mouseleave="handleMouseLeave"
                  class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full mr-10"
                >
                  <div
                    class="relative w-64 h-64 bg-honey-gold overflow-hidden rounded-2xl transform transition-transform duration-300"
                  >
                    <img
                      :src="member.image"
                      alt="Profile Image"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                      :class="{
                        'opacity-55':
                          hoveredIndex.section === 'Creative Visionary' &&
                          hoveredIndex.index === index,
                      }"
                    />
                    <div
                      class="absolute bottom-0 left-0 right-16 bg-indigo-900 bg-opacity-70 text-gray-100 p-2 rounded-tr-xl rounded-br-xl transition-all duration-300 border-b-4 border-honey-gold border-opacity-80"
                      :class="
                        hoveredIndex.section === 'Creative Visionary' &&
                        hoveredIndex.index === index
                          ? 'h-full '
                          : 'h-10'
                      "
                    >
                      <h3
                        v-if="
                          hoveredIndex.section !== 'Creative Visionary' ||
                          hoveredIndex.index !== index
                        "
                        class="text-lg font-bold"
                      >
                        {{ member.name }}
                      </h3>
                      <div v-else class="flex flex-col justify-center h-full">
                        <h3 class="text-base font-semibold">
                          {{ member.name }}
                        </h3>
                        <p class="text-sm mt-2">{{ member.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Section 4: Tech Wizards -->
            <!-- <div class="mt-12 p-8">
              <h2
                class="text-4xl font-semibold text-center text-midnight-sapphire font-cormorant mb-12"
              >
                Tech Wizards
              </h2>
              <div
                class="flex flex-wrap justify-center gap-y-12 max-w-3xl mx-auto lg:max-w-full"
              >
                <div
                  v-for="(member, index) in filteredTeamMembers('Tech Wizard')"
                  :key="'techWizards' + index"
                  @mouseover="handleMouseOver(index, 'Tech Wizard')"
                  @mouseleave="handleMouseLeave"
                  class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full mr-10"
                >
                  <div
                    class="relative w-64 h-64 bg-honey-gold overflow-hidden rounded-2xl transform transition-transform duration-300"
                  >
                    <img
                      :src="member.image"
                      alt="Profile Image"
                      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                      :class="{
                        'opacity-55':
                          hoveredIndex.section === 'Tech Wizard' &&
                          hoveredIndex.index === index,
                      }"
                    />
                    <div
                      class="absolute bottom-0 left-0 right-16 bg-indigo-900 bg-opacity-70 text-gray-100 p-2 rounded-tr-xl rounded-br-xl transition-all duration-300 border-b-4 border-honey-gold border-opacity-80"
                      :class="
                        hoveredIndex.section === 'Tech Wizard' &&
                        hoveredIndex.index === index
                          ? 'h-full '
                          : 'h-10'
                      "
                    >
                      <h3
                        v-if="
                          hoveredIndex.section !== 'Tech Wizard' ||
                          hoveredIndex.index !== index
                        "
                        class="text-base font-semibold"
                      >
                        {{ member.name }}
                      </h3>
                      <div v-else class="flex flex-col justify-center h-full">
                        <h3 class="text-lg font-bold">{{ member.name }}</h3>
                        <p class="text-sm mt-2">{{ member.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Cookie Consent Popup -->
    <CookieConsent />
  </section>
</template>

<script>
import CookieConsent from "../components/CookieConsent.vue";
import image1 from "@/assets/members/AnweshaBhattacharjee_1.png";
import image2 from "@/assets/members/ArchismanChaudhuri_1.png";
import image3 from "@/assets/members/SoubhikSamanta_1.png";
import image4 from "@/assets/members/umibhakta_1.png";
import image5 from "@/assets/members/Saikat_2.png";
import image6 from "@/assets/members/TrishaGhosh_2.png";
import image7 from "@/assets/members/MoinakBanerjee_1.png";
import image8 from "@/assets/members/IktisadRashid_1.png";
import image9 from "@/assets/members/SanjanaSayeed_1.png";
import image10 from "@/assets/members/SomduttaMajumder_1.png";
import image11 from "@/assets/members/AzfarAdib_1.png";
import image12 from "@/assets/members/Avik_1.png";
import image13 from "@/assets/members/Saptara_1.png";
import image14 from "@/assets/members/Ajna.png";
import image15 from "@/assets/members/SamiparnaChakraborty_1.png";
import image16 from "@/assets/members/images.png";
import image17 from "@/assets/members/Ananyo.png";
export default {
  name: "TeamMemberView",
  components: {
    CookieConsent,
  },
  data() {
    return {
      hoveredIndex: { section: null, index: null },
      teamMembers: [
        {
          name: "Ajna Islam",
          position: "Founder",
          image: image14,
          bio: "My name is Ajna Islam. I am from  Bangladesh. I competed my  Masters(Thesis) from Mcgill University. My research was about women freedomfighters of the liberation war of Bangladesh. Professionally, I am experienced with feature report writing in Bengali newspapers and moderating contents. I have been living in Montreal since 2016.",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Urmibhushan Bhakta",
          position: "Founder",
          image: image4,
          bio: "Scientist by profession, love literature, deeply interested in politics.",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Shoubhik Samanta",
          position: "Founder",
          image: image3,
          bio: "An engineer by education, but a passionate admirer of the Bengali language, I find joy in exploring its rich literary heritage and cultural nuances. With a deep appreciation for the beauty and depth of Bengali, I strive to promote and preserve this vibrant language in every aspect of my life. My journey is fueled by a love for words and a commitment to celebrating the essence of Bengal.",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Archisman Chaudhuri",
          position: "Member",
          image: image2,
          bio: "An historian by training, a language enthusiast, and an academic nomad. Favourite hobby is reading. At present I continually flit between working on my academic research, honing my language skills, and volunteering for BANGLA and Porijaan.",
          location: "Highland Park, New Jersey, USA",
        },
        // {
        //   name: "Ananyo Kazi ",
        //   position: "Member",
        //   image: image16,
        //   bio: "-",
        //   location: "Zürich, Zürich, Switzerland",
        // },
        {
          name: "Anwesha Bhattacharjee ",
          position: "Member",
          image: image1,
          bio: "Journalism and content production have been Anwesha's passion for almost 20 years now, from her school years well into collegiate journalism. She hopes to contribute with her experiences both as a member of the diaspora and as a content producer toward B.A.N.G.L.A.'s mission",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Azfar Adib ",
          position: "Member",
          image: image11,
          bio: "A public scholar and PhD candidate at Concordia University.",
          location: "Montreal, Quebec, Canada",
        },

        // {
        //   name: "Abhijeet Dutta",
        //   position: "Member",
        //   image: image16,
        //   bio: "-",
        //   location: "Montreal, Quebec, Canada",
        // },
        {
          name: "Avik Chakraborty",
          position: "Member",
          image: image12,
          bio: "Currently Postdoc at UNAB, Santiago, Chile. PhD in Theoretical High Energy Physics from USC, Los Angeles, USA. JU (B.Sc.) & IIT-B (M.Sc.) alumni. Hometown Kolkata, India. . Photography and travel enthusiast. Love to read and listen to music.",
          location: "Santiago, Santiago, Chile",
        },
        {
          name: "Iktisad Rashid ",
          position: "Member",
          image: image8,
          bio: "Current Grad Student at Concordia pursing MEng in Quality Systems Engineering.A problem solver at heart and Software engineer by profession.An Enthusiast in exploring cultures and cuisine",
          location: "Montreal, Quebec, Canada",
        },
        // {
        //   name: "Ali Hossain",
        //   position: "Member",
        //   image: image16,
        //   bio: "-",
        //   location: "Montreal, Quebec, Canada",
        // },
        // {
        //   name: "Yusuf Saadi",
        //   position: "Member",
        //   image: image16,
        //   bio: "-",
        //   location: "Montreal, Quebec, Canada",
        // },
        {
          name: "Trisha Ghosh",
          position: "Member",
          image: image6,
          bio: "Scientist by day and artist by night. Graduate student in Synthetic Biology, at Concordia University, Montreal. ",
          location: "Montreal, Quebec, Canada",
        },
        // {
        //   name: "Debapriya Mondal",
        //   position: "Member",
        //   image: image16,
        //   bio: "-",
        //   location: "Montreal, Quebec, Canada",
        // },
        {
          name: "Moinak Banerjee",
          position: "Member",
          image: image7,
          bio: "A student of liberal arts and humanities interested in reading, writing and debating ideas.",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Sanjana Sayeed ",
          position: "Member",
          image: image9,
          bio: "Currently pursuing Masters in Software Engineering from Concordia University. A Software Engineer by profession with a passion for sketching and painting. Deeply interested in Bangla culture, exploring its rich traditions, language, and heritage.",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Saptara Gupta",
          position: "Member",
          image: image13,
          bio: "-",
          location: "Palm Beach Gardens, Florida, USA",
        },
        {
          name: "Samiparna Chakraborty",
          position: "Member",
          image: image15,
          bio: "Somiparna Chakraborty, a software engineer based in Toronto and living in Waterloo, Ontario, hails from Barrackpore, Kolkata. A Concordia University graduate, she’s been in Canada since 2017 and is now a Canadian citizen. Passionate about films, music, literature, and Bengali culture, she enjoys food, travel, and meaningful conversations.",
          location: "Waterloo, Ontario, Canada",
        },
        {
          name: "Saikat ",
          position: "Member",
          image: image5,
          bio: "Civil/Structural engineer by professional training - Loves Art and Literature",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Somdutta Majumder ",
          position: "Member",
          image: image10,
          bio: "Bengali is not just a language for me. It is my identity that I wear with pride. I am a geologist by profession, currently residing in the US, but that does not stop me from staying informed on the socio-political situation and culture of West Bengal and India.",
          location: "Jefferson City, Missouri, USA",
        },
        {
          name: "Louis-Felix Blanchet-Cohen",
          position: "Member",
          image: image16,
          bio: "Lived 20 years in bangladesh where i socialized actively with bengalis every day . Of quebecois origin i define myself as bengali as i got to know bangladesh well and lived there a long time ",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Ali Hossain",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Yusuf Saadi",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Debapriya Mondal",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Susmita Bose ",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Montreal, Quebec, Canada",
        },
        {
          name: "Ananyo Kazi ",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Zürich, Zürich, Switzerland",
        },
        {
          name: "Abhijeet Dutta",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Montreal, Quebec, Canada",
        },

        {
          name: "Soumik Ghosh",
          position: "Member",
          image: image16,
          bio: "-",
          location: "Montreal, Quebec, Canada",
        },
      ],
    };
  },
  methods: {
    join() {
      this.$router.push("/join");
    },
    handleMouseOver(index, section) {
      this.hoveredIndex = { section, index }; // Store both section and index
    },
    handleMouseLeave() {
      this.hoveredIndex = { section: null, index: null }; // Reset on mouse leave
    },
    filteredTeamMembers(position) {
      // Filter team members based on the passed position
      return this.teamMembers.filter((member) => member.position === position);
    },
  },
};
</script>

<style scoped>
.background-img {
  background-image: url("../assets/img/unity_symbol.webp");
}
.wave-divider {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

@media (min-width: 768px) {
  .wave-divider svg {
    height: 150px;
  }
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
img {
  transition: opacity 0.3s ease;
}

.h-12 {
  height: 3rem;
}

.h-full {
  height: 100%;
}

.opacity-50 {
  opacity: 0.5;
}
</style>
