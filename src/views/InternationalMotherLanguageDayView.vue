<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- Banner -->
    <!-- 🔹 First Section (Background Image with Quote) -->
    <div class="relative h-[60vh] bg-cover bg-center background-img">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-gray-900 opacity-80"></div>

      <!-- Content Wrapper -->
      <div
        class="relative z-10 flex flex-col justify-center items-center text-center lg:py-16 py-12 px-4"
      >
        <!-- Quote -->
        <div class="fade-in">
          <p
            class="text-2xl md:text-3xl text-white font-marck italic tracking-wide mb-4"
          >
            আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি<br />
            আমি কি ভুলিতে পারি<br />
            ছেলেহারা শত মায়ের অশ্রু গড়ায়ে ফেব্রুয়ারি<br />
            আমি কি ভুলিতে পারি<br />
            আমার সোনার দেশের রক্তে রাঙানো ফেব্রুয়ারি<br />
            আমি কি ভুলিতে পারি।।<br />
          </p>
        </div>

        <!-- Writer's Name -->
        <p
          class="text-md md:text-lg lg:text-xl text-gray-300 font-semibold font-marck"
        >
          - আবদুল গাফফার চৌধুরী
        </p>
      </div>
    </div>

    <!-- 🔹 Overlapping Section (Event Details) -->
    <div
      class="relative bg-gradient-to-r from-yellow-50 to-gray-200 z-10 -mt-[20vh] max-w-4xl mx-auto p-6 rounded-lg"
    >
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Side: Image -->
        <div class="w-full md:w-2/5">
          <img
            src="@/assets/img/21feb.jpeg"
            alt="Event Image"
            class="rounded-lg shadow-md object-cover w-full h-96"
          />
        </div>

        <!-- Right Side: Text -->
        <div
          class="w-full md:w-3/5 px-6 text-center md:text-left md:block hidden"
        >
          <h2 class="text-2xl font-bold text-red-700">
            International Mother Language Day
          </h2>
          <p class="text-gray-700 mt-2 text-sm">
            26th February, Wednesday <br />
            6 PM - 9 PM
          </p>
          <p class="text-gray-600 text-sm mt-2">
            Concordia University, SGW Campus, Hall Building, H625, <br />
            1455 BLVD. DE MAISONNEUVE OUEST, MONTREAL, H3G 1M8
          </p>

          <div
            class="relative shadow-lg rounded-lg w-full px-4 pr-4 p-4 m-4 text-center h-auto overflow-hidden flex flex-col items-center mx-2"
          >
            <!-- Lightened Background Image -->
            <!-- <img
          src="../assets/img/culture.jpg"
          alt="Event Background"
          class="absolute inset-0 w-full h-full object-cover rounded-lg opacity-15"
        /> -->

            <!-- Overlay for Readability -->
            <div
              class="absolute inset-0 bg-black bg-opacity-5 rounded-lg"
            ></div>

            <!-- Content on Top of Image -->
            <div class="relative z-10 w-full">
              <!-- Countdown Timer -->
              <div class="flex items-center justify-center w-full gap-1.5 mt-1">
                <div class="timer">
                  <div
                    class="rounded-xl bg-gradient-to-b border-2 border-white border-opacity-20 from-gray-200 to-light-blue py-3 min-w-[80px] md:min-w-[96px] flex items-center justify-center flex-col gap-1 aspect-square px-3"
                  >
                    <h3
                      class="countdown-element font-cormorant font-semibold text-5xl text-deep-red-wine text-center"
                    >
                      0
                    </h3>
                    <p
                      class="text-lg font-cormorant font-semibold text-rich-mahagony mt-1 text-center w-full"
                    >
                      Days
                    </p>
                  </div>
                </div>
                <h3 class="font-cormorant font-semibold text-4xl text-gray-900">
                  :
                </h3>

                <div class="timer">
                  <div
                    class="rounded-xl border-2 border-white border-opacity-20 bg-gradient-to-b from-gray-200 to-light-blue py-3 min-w-[80px] md:min-w-[96px] flex items-center justify-center flex-col gap-1 aspect-square px-3"
                  >
                    <h3
                      class="countdown-element font-cormorant font-semibold text-5xl text-deep-red-wine text-center"
                    >
                      0
                    </h3>
                    <p
                      class="text-lg font-cormorant font-semibold text-rich-mahagony mt-1 text-center w-full"
                    >
                      Hours
                    </p>
                  </div>
                </div>
                <h3 class="font-cormorant font-semibold text-4xl text-gray-900">
                  :
                </h3>

                <div class="timer">
                  <div
                    class="rounded-xl border-2 border-white border-opacity-20 bg-gradient-to-b from-gray-200 to-light-blue py-3 min-w-[80px] md:min-w-[96px] flex items-center justify-center flex-col gap-1 aspect-square px-3"
                  >
                    <h3
                      class="countdown-element font-cormorant font-semibold text-5xl text-deep-red-wine text-center"
                    >
                      0
                    </h3>
                    <p
                      class="text-lg font-cormorant font-semibold text-rich-mahagony mt-1 text-center w-full"
                    >
                      Minutes
                    </p>
                  </div>
                </div>
                <h3 class="font-cormorant font-semibold text-4xl text-gary-900">
                  :
                </h3>

                <div class="timer">
                  <div
                    class="rounded-xl border-2 border-white border-opacity-20 bg-gradient-to-b from-gray-200 to-light-blue py-3 min-w-[72px] md:min-w-[96px] flex items-center justify-center flex-col gap-1 aspect-square px-3"
                  >
                    <h3
                      class="countdown-element font-cormorant font-semibold text-5xl text-deep-red-wine text-center"
                    >
                      0
                    </h3>
                    <p
                      class="text-lg font-cormorant font-semibold text-rich-mahagony mt-1 text-center w-full"
                    >
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Event Picture -->
    <div class="pb-8 md:pb-16 pt-8 md:pt-16 py-8 bg-white">
      <div class="relative w-full max-w-6xl mx-auto px-6">
        <h2
          class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant text-center"
        >
          An Evening of Music, Poem & Language
        </h2>
        <p class="text-center text-gray-500 mb-6 mt-6">
          21st February is not just about remembrance—it’s also about
          celebrating the languages that make us who we are. Through music,
          dance, and poetry, we embraced the beauty of our diverse cultures.
          Enjoy the highlights from our special evening on 26th February, 2025
        </p>

        <div
          class="relative overflow-hidden w-full h-[400px]"
          @mouseenter="pauseAutoSlide"
          @mouseleave="startAutoSlide"
        >
          <!-- Navigation Arrows -->
          <button
            @click="prevSlide"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-2xl text-gray-800 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            @click="nextSlide"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-2xl text-gray-800 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            aria-label="Next"
          >
            ›
          </button>

          <div class="absolute inset-0 flex items-center justify-center">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="absolute transition-all duration-700 ease-in-out"
              :class="getCoverflowClass(index)"
            >
              <div
                class="p-2 border-4 border-gray-300 bg-white shadow-md rounded-lg w-[320px] h-[240px] flex items-center justify-center"
              >
                <img
                  :src="image"
                  class="rounded-sm object-contain w-full h-full transition-all duration-500 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- event video -->
      <div class="w-full max-w-5xl mx-auto px-6 py-12">
        <h2
          class="text-center text-3xl md:text-4xl font-normal mb-6 mt-6 font-cormorant text-red-700"
        >
          Explore Some Of the Highlights of Our Event
        </h2>

        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Main Large Video -->
          <div class="w-full md:w-4/5">
            <video
              :src="selectedVideo"
              controls
              class="w-full h-[400px] md:h-[500px] rounded-lg shadow-md object-cover"
            ></video>
          </div>

          <!-- Right-side Column with Clickable Thumbnails -->
          <div class="flex md:flex-col gap-4">
            <div
              v-for="(video, index) in videos"
              :key="index"
              class="relative cursor-pointer hover:opacity-80 transition-all duration-300"
              @click="swapVideo(index)"
            >
              <video
                :src="video"
                class="w-32 h-24 md:w-28 md:h-28 rounded-lg shadow-md object-cover border-2"
                :class="
                  video === selectedVideo
                    ? 'border-blue-500'
                    : 'border-transparent'
                "
                muted
                playsinline
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- writing -->
    <div
      class="bg-gradient-to-r from-gray-50 to-regal-blue border border-gray-200 rounded-lg shadow"
    >
      <div
        class="mb-8 md:mb-16 pt-8 md:pt-16 py-8 px-4 md:px-8 mx-auto max-w-screen-xl"
      >
        <div class="py-8">
          <h2
            class="text-3xl md:text-5xl font-cormorant text-midnight-sapphire mb-6"
          >
            Preserving Language, Honoring Sacrifice: Celebrating International
            Mother Language Day
          </h2>
          <p class="text-gray-600 text-sm mt-2"></p>
          <p class="text-gray-600 mt-2">
            Every year, on the 21st of February, we come together to honor the
            martyrs who made the ultimate sacrifice to protect the right to
            speak their mother tongue. International Mother Language Day stands
            as a powerful reminder of the resilience, identity, and cultural
            richness embedded in every language. This section features heartfelt
            writings, reflections, and tributes from members of
            <strong>B.A.N.G.L.A</strong>, a community deeply connected to the
            essence of linguistic heritage. Through essays and personal
            reflections, we celebrate the beauty of Bangla language and reaffirm
            our commitment to linguistic diversity and freedom. Join us in
            remembering, celebrating, and preserving the voices that fought for
            the right to express themselves in their mother tongue.
          </p>
        </div>
        <!-- Main Article -->

        <div
          class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 max-w-screen-xl mx-auto mb-12"
        >
          <!-- Left Side (Text & Image) -->
          <div class="w-full md:w-3/5">
            <!-- Image (Stacked on Mobile, Aligned Right on Desktop) -->
            <div class="mt-4 md:mt-6">
              <img
                src="../assets/img/21collage1.png"
                alt="Main article"
                class="rounded-lg w-full md:w-[80%] object-cover shadow-md opcaity-70"
              />
            </div>
          </div>

          <!-- Right Side (Smaller Articles) -->
          <div class="w-full md:w-2/5 space-y-6">
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 border-b pb-4 mt-4 md:mt-6 group"
              v-for="(article, index) in articles"
              :key="index"
            >
              <div class="w-full sm:w-3/4">
                <!-- Clickable Title -->
                <button
                  @click="goToArticle(article.slug)"
                  class="text-lg text-left font-semibold text-midnight transition-all duration-300 group-hover:text-deep-red-wine cursor-pointer"
                >
                  {{ article.title }}
                </button>

                <!-- Author Info -->
                <div class="flex items-center space-x-3 mt-2">
                  <img
                    :src="article.authorImage"
                    alt="Author image"
                    class="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"
                  />
                  <p
                    class="text-xl font-semibold text-midnight-sapphire font-cormorant"
                  >
                    <span class="font-semibold">{{ article.author }}</span>
                  </p>
                </div>

                <p class="text-gray-600 mt-1 text-sm">
                  {{ article.description }}
                </p>
                <p class="text-burnt-amber text-xs mt-1">
                  {{ article.date }}
                </p>
              </div>

              <!-- ✅ Clickable Image -->
              <button
                @click="goToArticle(article.slug)"
                class="focus:outline-none"
              >
                <img
                  :src="article.image"
                  alt="Article image"
                  class="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import CookieConsent from "../components/CookieConsent.vue";
import image1 from "@/assets/img/writing1.png";
import image6 from "@/assets/img/writing2.png";
import image7 from "@/assets/img/writing3.png";
import image8 from "@/assets/img/writing4.png";
import image2 from "@/assets/members/Ajna.png";
import image3 from "@/assets/members/ArchismanChaudhuri_1.png";
import image4 from "@/assets/members/MoinakBanerjee_1.png";
import image5 from "@/assets/members/AzfarAdib_1.png";

// Dynamically import all images from the event folder (Vite-compatible)
const imageModules = import.meta.glob(
  "@/assets/21stFebEventImage/*.{jpg,jpeg,png}",
  { eager: true }
);
const eventImages = Object.values(imageModules).map((mod) => mod.default);

export default {
  name: "InternationalMotherLanguageDayView",
  components: {
    CookieConsent,
  },
  mounted() {
    this.updateCountdown();
    this.startAutoSlide();
    setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  computed: {
    buttonPosition() {
      if (window.innerWidth < 768) {
        return "left-2 top-1/2 transform -translate-y-1/2 z-20"; // 📌 Mobile: Half inside, half outside
      } else if (window.innerWidth < 1200) {
        return "left-[-20px] top-1/2 transform -translate-y-1/2 z-10"; // 📌 Medium screens: Slightly outside
      } else {
        return "left-[-50px] top-1/2 transform -translate-y-1/2 z-10"; // 📌 Large screens: Fully outside
      }
    },
    buttonPositionRight() {
      if (window.innerWidth < 768) {
        return "right-2 top-1/2 transform -translate-y-1/2 z-20"; // 📌 Mobile: Half inside, half outside
      } else if (window.innerWidth < 1200) {
        return "right-[-20px] top-1/2 transform -translate-y-1/2 z-10"; // 📌 Medium screens: Slightly outside
      } else {
        return "right-[-50px] top-1/2 transform -translate-y-1/2 z-10"; // 📌 Large screens: Fully outside
      }
    },
    visibleImages() {
      // Always show only the current image, regardless of screen size
      return [this.images[this.currentIndex]];
    },
  },

  data() {
    return {
      selectedVideo: "/videos/v1.mp4", // Directly a string, not a ref
      videos: [
        "/videos/v2.mp4",
        "/videos/v3.mp4",
        "/videos/v4.mp4",
        "/videos/v5.mp4",
      ],
      eventDate: new Date("2025-02-26T00:00:00").getTime(),
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      currentIndex: 1, // Middle image index
      autoSlideInterval: null,
      facebookEventUrl: "https://www.facebook.com/events/your-event-id",
      images: eventImages,
      slideDirection: "slide-left",
      articles: [
        {
          title:
            "Funny languages: Bengali via South Asia, Central Asia, and the Indian Ocean",
          author: "Archisman Chaudhuri",
          description:
            "Lanx satura; the Oxford Latin dictionary defines ‘lanx’ as ‘a plateful, dish...",
          date: "21 February, 2025",
          image: image6,
          authorImage: image3,
          slug: "funny-languages-bengali",
        },
        {
          title: "Mother Languages: Key Pillars of Diversity and Strength",
          author: "Azfar Adib",
          description:
            "Right after birth, every human child cries out notifying the world about their...",
          date: "21 February, 2025",
          image: image8,
          authorImage: image5,
          slug: "mother-languages-diversity-strength",
        },
        {
          title:
            "BANGLA sets sail on the 25th International Mother Language Day",
          author: "Moinak Banarjee",
          description:
            "February 21st 2025 marks the 25th anniversary of International Mother Language Day that...",
          date: "21 February, 2025",
          image: image7,
          authorImage: image4,
          slug: "bangla-sets-sail-25th-international-mother-language-day",
        },
        {
          title:
            "আমার ভাইয়ের রক্তে রাঙ্গানো একুশে ফেব্রুয়ারি,  আমি কি ভুলিতে পারি?",
          author: "Ajna Islam",
          description:
            "ফেব্রুয়ারির ২১ তারিখ একি সাথে মর্মান্তিক এবং গৌরবোজ্জল স্মৃতিবিজড়িত একটি দিন। ১৯৫২...",
          date: "21 February, 2025",
          image: image1,
          authorImage: image2,
          slug: "amar-vaiyer-rokte-rangano-ekushe-february",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.slideDirection = "slide-left";
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.slideDirection = "slide-right";
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    pauseAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    getCoverflowClass(index) {
      const total = this.images.length;
      const current = this.currentIndex;
      const distance = (index - current + total) % total;

      if (index === current) {
        return "z-30 scale-110 opacity-100";
      } else if (distance === 1 || distance === total - 1) {
        // Use custom translate-x for coverflow effect; adjust if Tailwind doesn't support translate-x-60
        return `z-20 scale-100 opacity-60 ${
          distance === 1 ? "translate-x-60" : "-translate-x-60"
        }`;
      } else {
        return "opacity-0 scale-75 z-10";
      }
    },
    swapVideo(index) {
      console.log("Clicked Video Index:", index);

      // Store the clicked video from the right-side column
      const clickedVideo = this.videos[index];

      // Swap the clicked video with the main large video
      this.videos[index] = this.selectedVideo;
      this.selectedVideo = clickedVideo;
    },

    updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = this.eventDate - now;

      this.countdown.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.countdown.minutes = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.countdown.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    },
    join() {
      this.$router.push("/join");
    },

    goToArticle(slug) {
      if (!slug) {
        console.error("Article slug is missing!");
        return;
      }
      this.$router.push(`/events/${slug}`);
    },
  },
};
</script>

<style scoped>
button {
  transition: all 0.3s ease-in-out;
}
video {
  transition: transform 0.3s ease-in-out;
}
.img {
  background-image: url("@/assets/img/21feb.jpeg");
  background-size: cover;
  background-position: center;
}
.background-img {
  background-image: url("../assets/img/211.jpg");
}
.background-img1 {
  background-image: url("../assets/img/21feb.jpeg");
}
.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("../assets/img/alphabets.jpg");
}
.container-class {
  overflow: visible !important; /* Ensure the image isn't clipped */
}
.rounded-2xl {
  border-radius: 20px !important; /* Ensures proper rounding */
}
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.6s ease;
  position: absolute;
  width: 100%;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
