<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- 🔹 First Section (Background Image with Quote) -->
    <div class="relative h-[60vh] bg-cover bg-center background-img">
      <div class="absolute inset-0 bg-gray-900 opacity-80"></div>

      <div
        class="relative z-10 flex flex-col justify-center items-center text-center lg:py-16 py-12 px-4"
      >
        <div class="fade-in">
          <p
            class="text-2xl md:text-4xl text-honey-gold tracking-wide mb-4 font-cormorant"
          >
            রবীন্দ্র-নজরুল সন্ধ্যা
            <br />
            <span class="text-xl md:text-2xl">সুরে, ছন্দে বসন্তবরণ।</span>
            <br />
          </p>
          <p
            class="text-xl md:text-3xl mt-4 text-white font-cormorant tracking-wide"
          >
            An evening of music and dance, celebrating Rabindranath Tagore and
            Kazi Nazrul Islam
          </p>
          <p
            class="text-xl md:text-3xl text-white font-cormorant tracking-wide"
          >
            Une soirée de musique et de danse, célébrant Rabindranath Tagore et
            Kazi Nazrul Islam
          </p>
        </div>
      </div>
    </div>

    <!-- 🔹 Countdown Section -->
    <div
      class="relative bg-gradient-to-r from-yellow-50 to-gray-200 z-10 -mt-[20vh] max-w-4xl mx-auto p-6 rounded-lg"
    >
      <div class="w-full px-6 text-center">
        <h2
          class="text-2xl md:text-4xl font-bold text-deep-red-wine text-center font-cormorant"
        >
          Event CountDown
        </h2>

        <div
          class="relative shadow-lg rounded-lg w-full px-4 pr-4 p-4 m-4 text-center h-auto overflow-hidden flex flex-col items-center mx-2"
        >
          <div class="absolute inset-0 bg-black bg-opacity-5 rounded-lg"></div>

          <div class="relative z-10 w-full">
            <!-- Countdown Blocks -->
            <div
              class="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center w-full gap-2 sm:gap-1.5 mt-4"
            >
              <!-- Days -->
              <div class="timer">
                <div
                  class="rounded-xl bg-gradient-to-b border-2 border-white border-opacity-20 from-gray-200 to-light-blue py-2 min-w-[70px] sm:min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-amber-600 text-center"
                  >
                    {{ countdown.days }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-700 mt-1 text-center w-full"
                  >
                    Days
                  </p>
                </div>
              </div>
              <h3
                class="font-cormorant font-semibold text-3xl sm:text-4xl text-gray-900 hidden sm:block"
              >
                :
              </h3>

              <!-- Hours -->
              <div class="timer">
                <div
                  class="rounded-xl border-2 border-white border-opacity-20 bg-gradient-to-b from-gray-200 to-light-blue py-2 min-w-[70px] sm:min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-amber-600 text-center"
                  >
                    {{ countdown.hours }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-700 mt-1 text-center w-full"
                  >
                    Hours
                  </p>
                </div>
              </div>
              <h3
                class="font-cormorant font-semibold text-3xl sm:text-4xl text-gray-900 hidden sm:block"
              >
                :
              </h3>

              <!-- Minutes -->
              <div class="timer">
                <div
                  class="rounded-xl border-2 border-white border-opacity-20 bg-gradient-to-b from-gray-200 to-light-blue py-2 min-w-[70px] sm:min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-amber-600 text-center"
                  >
                    {{ countdown.minutes }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-700 mt-1 text-center w-full"
                  >
                    Minutes
                  </p>
                </div>
              </div>
              <h3
                class="font-cormorant font-semibold text-3xl sm:text-4xl text-gray-900 hidden sm:block"
              >
                :
              </h3>

              <!-- Seconds -->
              <div class="timer">
                <div
                  class="rounded-xl border-2 border-white border-opacity-20 bg-gradient-to-b from-gray-200 to-light-blue py-2 min-w-[70px] sm:min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-amber-600 text-center"
                  >
                    {{ countdown.seconds }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-700 mt-1 text-center w-full"
                  >
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            <!-- 👇 Add this button after the countdown grid -->
            <!-- Add this after the countdown blocks -->
            <div class="mt-6 flex justify-center">
              <a
                href="https://www.facebook.com/share/1ae8qUL94e/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 bg-[#3b5998] hover:bg-[#2d4373] text-white font-semibold px-5 py-3 rounded-lg transition duration-300"
              >
                <!-- Facebook Icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1c-.6 0-1 .4-1 1v1h2.5l-.5 3H14v7A10 10 0 0022 12z"
                  />
                </svg>

                RSVP on Facebook

                <!-- External Link Icon -->
                <svg
                  class="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 3h3.5a.5.5 0 01.5.5V7a.5.5 0 01-1 0V4.7l-6.3 6.3a.5.5 0 11-.7-.7L16.3 4H14a.5.5 0 110-1z"
                  />
                  <path
                    d="M5 5h5a.5.5 0 010 1H5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-5a.5.5 0 011 0v5a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 🔻 About the Event Section -->
    <div class="pb-8 md:pb-16 pt-8 md:pt-16 py-8 bg-white">
      <div class="relative w-full max-w-6xl mx-auto px-6">
        <h2
          class="text-4xl md:text-6xl mb-8 text-midnight-sapphire font-cormorant text-center"
        >
          About the Event
        </h2>
        <p class="text-left text-autumn-auburn mt-6 text-2xl md:text:4xl">
          রবীন্দ্র-নজরুল সন্ধ্যা
        </p>
        <p class="text-left text-gray-500 mt-3">
          এই অনুষ্ঠানে আমরা রবীন্দ্রনাথ ঠাকুর এবং কাজী নজরুল ইসলামের সংগীত ও
          নৃত্য উদযাপন করব। বাংলা সাহিত্য ও সংস্কৃতির এই দুই মহান ব্যক্তিত্বের
          সৃষ্টিকর্মের মাধ্যমে আমরা বাংলা ভাষা ও সংস্কৃতির সমৃদ্ধি উদযাপন করব।
        </p>
        <p
          class="text-left text-deep-red-wine mb-6 mt-6 text-2xl md:text:7xl font-cormorant font-bold"
        >
          An evening of music and dance
        </p>
        <p class="text-left text-gray-500 mt-3">
          Join us for a beautiful evening celebrating the works of Rabindranath
          Tagore and Kazi Nazrul Islam through music and dance. This event
          brings together the community to honor these two pillars of Bengali
          literature and culture, showcasing their timeless contributions to
          Bengali arts.
        </p>
        <p
          class="text-left text-autumn-auburn mb-3 mt-3 text-2xl md:text:7xl font-cormorant font-bold"
        >
          Une soirée de musique et de danse
        </p>
        <p class="text-left text-gray-500 mb-3 mt-3">
          Rejoignez-nous pour une belle soirée célébrant les œuvres de
          Rabindranath Tagore et Kazi Nazrul Islam à travers la musique et la
          danse. Cet événement rassemble la communauté pour honorer ces deux
          piliers de la littérature et de la culture bengalies, mettant en
          valeur leurs contributions intemporelles aux arts bengalis.
        </p>
      </div>
    </div>

    <!-- 🔻 Event Details + Sponsor CTA Section -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- 🎤 Event Details -->
        <div
          class="relative border border-gray-200 shadow-md rounded-2xl p-6 overflow-hidden event-details-bg bg-cover bg-center"
        >
          <div class="absolute inset-0 bg-white opacity-75 z-0"></div>

          <div class="relative z-10">
            <h3
              class="text-2xl md:text-4xl font-cormorant font-semibold text-deep-red-wine mb-4"
            >
              Event Details
            </h3>
            <div class="space-y-4 text-base text-gray-700">
              <div>
                <strong class="block text-yellow-700">📅 Date</strong>
                25th May, Sunday
              </div>
              <div>
                <strong class="block text-yellow-700">⏰ Time</strong>
                4:00 – 6:30 PM<br />
                <span class="text-sm text-gray-600">Doors open at 3:30 PM</span>
              </div>
              <div>
                <strong class="block text-yellow-700">📍 Venue</strong>
                Community Hall<br />
                1070 rue St Mathieu, H3H 2S8
              </div>
              <div>
                <strong class="block text-yellow-700">🍽 Food Partner</strong>
                Diksha's Kitchen
              </div>
            </div>
          </div>
        </div>

        <!-- 💡 Sponsor CTA -->
        <div
          class="relative sponsor-card border border-yellow-200 shadow-md rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
        >
          <div class="absolute inset-0 bg-white opacity-85 z-0"></div>

          <div class="relative z-10">
            <h3
              class="text-2xl md:text-3xl font-cormorant font-semibold text-deep-red-wine mb-3"
            >
              Want to sponsor this event?
            </h3>
            <p class="text-base text-gray-700">
              Your support helps us continue to organize cultural events that
              celebrate and preserve Bengali heritage.
            </p>
          </div>

          <div class="mt-6 relative z-10">
            <button
              @click="donate"
              class="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-6 py-2 rounded-xl transition duration-300 font-cormorant text-lg"
            >
              Donate Now
            </button>
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

export default {
  name: "RabindraNazrulShondhaView",
  components: {
    CookieConsent,
  },
  data() {
    return {
      eventDate: new Date("2025-05-25T15:30:00Z").getTime(), // 3:30 PM UTC
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = this.eventDate - now;

      if (timeLeft <= 0) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return;
      }

      const totalSeconds = Math.floor(timeLeft / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      this.countdown = {
        days,
        hours,
        minutes,
        seconds,
      };
    },

    join() {
      this.$router.push("/contribute/membership");
    },
    donate() {
      this.$router.push("/contribute/donate");
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
.background-img {
  background-image: url("../assets/img/rabindra-nazrul.png");
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("../assets/img/bg-contribute.png");
}
.container-class {
  overflow: visible !important;
}
.rounded-2xl {
  border-radius: 20px !important;
}
.event-details-bg {
  background-image: url("../assets/PohelaBaishakh/img2.png");
}
.sponsor-card {
  background-image: url("../assets/PohelaBaishakh/img5.png");
  background-size: cover;
  background-position: center;
}

/* Responsive tweaks */
@media (max-width: 640px) {
  .timer h3 {
    font-size: 1.75rem; /* Smaller numbers */
  }
  .timer p {
    font-size: 0.875rem; /* Smaller labels */
  }
}
</style>
