<template>
  <div class="items-center justify-center min-h-screen">
    <!-- Banner -->
    <div class="relative h-auto shadow-md bg-cover bg-center background-img">
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
        <!-- <div class="mt-4 flex justify-end"> -->
        <!-- Writer's Name (Slightly to the Right) -->
        <p
          class="text-md md:text-lg lg:text-xl text-gray-300 font-semibold font-marck pl-10 md:pl-16"
        >
          - আবদুল গাফফার চৌধুরী
        </p>
      </div>
    </div>

    <!-- Upcoming Event Section -->
    <div
      class="flex flex-col md:flex-row my-8 py-8 px-2 mx-auto max-w-screen-xl"
    >
      <!-- Left Section (Image) -->
      <div class="flex flex-col items-center w-full md:w-1/3">
        <div
          class="relative shadow-md bg-cover bg-center md:w-full w-96 h-96 img"
        ></div>
      </div>

      <!-- Right Section (Countdown Timer + Facebook Button) -->
      <div
        class="relative shadow-lg rounded-lg p-6 w-full md:w-2/3 text-center mt-6 md:mt-0 h-auto overflow-hidden flex flex-col items-center pl-0 ml-0"
      >
        <!-- Lightened Background Image -->
        <!-- <img
          src="../assets/img/culture.jpg"
          alt="Event Background"
          class="absolute inset-0 w-full h-full object-cover rounded-lg opacity-15"
        /> -->

        <!-- Overlay for Readability -->
        <div class="absolute inset-0 bg-black bg-opacity-15 rounded-lg"></div>

        <!-- Content on Top of Image -->
        <div class="relative z-10 w-full">
          <h2 class="text-2xl font-bold font-serif text-gray-900">
            UPCOMING EVENT
          </h2>

          <p
            class="text-gray-900 text-2xl mb-6 mt-6 font-cormorant font-semibold"
          >
            Join us for an exciting event on
            <strong
              ><span class="text-deep-red-wine font-bold"
                >February 26, 2025</span
              ></strong
            >
          </p>

          <!-- Countdown Timer -->
          <div class="flex items-center justify-center w-full gap-1.5 mt-6">
            <div class="timer">
              <div
                class="rounded-xl bg-gradient-to-b border-2 border-white border-opacity-20 from-gray-200 to-light-blue py-3 min-w-[80px] md:min-w-[96px] flex items-center justify-center flex-col gap-1 aspect-square px-3"
              >
                <h3
                  class="countdown-element font-cormorant font-semibold text-5xl text-deep-red-wine text-center"
                >
                  {{ countdown.days }}
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
                  {{ countdown.hours }}
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
                  {{ countdown.minutes }}
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
                  {{ countdown.seconds }}
                </h3>
                <p
                  class="text-lg font-cormorant font-semibold text-rich-mahagony mt-1 text-center w-full"
                >
                  Seconds
                </p>
              </div>
            </div>
          </div>

          <!-- Facebook Button (Moved Below Countdown Timer) -->
          <div class="flex justify-center w-full mt-8">
            <a
              href="https://www.facebook.com/events/s/25th-international-mother-lang/1328395418181985/"
              aria-label="Join the Event on Facebook"
              class="text-base px-6 py-3 border bg-gradient-to-r border-red-900 from-deep-red-wine to-red-700 text-white font-semibold rounded-lg hover:bg-amber-700 transition duration-300 ease-in-out w-full md:w-auto"
            >
              Join Our Event on Facebook
            </a>
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
            class="text-2xl md:text-4xl font-bold font-cormorant text-midnight-sapphire"
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
                    class="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
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
import CookieConsent from "../components/CookieConsent.vue";
import image1 from "@/assets/img/writing1.png";
import image6 from "@/assets/img/writing2.png";
import image7 from "@/assets/img/writing3.png";
import image8 from "@/assets/img/writing4.png";
import image2 from "@/assets/members/Ajna.png";
import image3 from "@/assets/members/ArchismanChaudhuri_1.png";
import image4 from "@/assets/members/MoinakBanerjee_1.png";
import image5 from "@/assets/members/AzfarAdib_1.png";
export default {
  name: "InternationalMotherLanguageDayView",
  components: {
    CookieConsent,
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  data() {
    return {
      eventDate: new Date("2025-02-26T00:00:00").getTime(),
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      facebookEventUrl: "https://www.facebook.com/events/your-event-id",
      articles: [
        // {
        //   title:
        //     "আমার ভাইয়ের রক্তে রাঙ্গানো একুশে ফেব্রুয়ারি,  আমি কি ভুলিতে পারি?",
        //   author: "Ajna Islam",
        //   description:
        //     "ফেব্রুয়ারির ২১ তারিখ একি সাথে মর্মান্তিক এবং গৌরবোজ্জল স্মৃতিবিজড়িত একটি দিন। ১৯৫২...",
        //   date: "21 February, 2025",
        //   image: image1,
        //   authorImage: image2,
        //   slug: "amar-vaiyer-rakte-rangano-ekushe-february",
        // },
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
      ],
    };
  },
  methods: {
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
.img {
  background-image: url("@/assets/img/21feb.jpeg");
  background-size: cover;
  background-position: center;
}
.background-img {
  background-image: url("../assets/img/211.jpg");
}
.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("../assets/img/bg-contribute.png");
}
</style>
