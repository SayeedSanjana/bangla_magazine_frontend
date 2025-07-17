<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- 🔹 First Section (Background Image with Quote) -->
    <div class="relative h-[50vh] bg-cover bg-center background-img">
      <div class="absolute inset-0 bg-gray-900 opacity-50"></div>

      <div
        class="relative z-10 flex flex-col justify-center items-center text-center lg:py-16 py-12 px-4"
      >
        <div class="fade-in">
          <p
            class="text-3xl md:text-6xl text-teal-200 tracking-wide mb-4 font-cormorant"
          >
            শৈল্পিক সন্ধ্যা | Shoilpik Sondhya
          </p>
          <p
            class="text-right text-2xl md:text-3xl mt-4 text-white font-cormorant tracking-wide"
          >
            - জয়ানন্দিনী | Jayanandini
          </p>
        </div>
      </div>
    </div>

    <!-- 🔹 Countdown Section -->
    <div
      class="relative bg-gradient-to-r from-green-50 to-gray-200 z-10 -mt-[20vh] max-w-4xl mx-auto p-6 rounded-lg"
    >
      <div class="w-full px-6 text-center">
        <h2
          class="text-2xl md:text-4xl font-bold text-midnight-sapphire text-center font-cormorant"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ countdown.days }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center w-full"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ countdown.hours }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center w-full"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ countdown.minutes }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center w-full"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ countdown.seconds }}
                  </h3>
                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center w-full"
                  >
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            <!-- 👇 Add this button after the countdown grid -->
            <!-- Add this after the countdown blocks -->
            <div class="mt-6 flex justify-center"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 🔻 About the Event Section -->
    <div
      class="min-h-screen flex flex-col justify-center items-center bg-white py-16"
    >
      <h2
        class="text-4xl md:text-6xl mb-20 md:mb-28 text-teal-900 font-cormorant text-center"
      >
        About the Event
      </h2>

      <div
        class="relative flex flex-col lg:flex-row gap-10 lg:items-center sm:items-stretch"
      >
        <!-- Image 1 -->
        <div class="relative z-10 w-full max-w-md mx-auto lg:-mt-10">
          <img
            src="@/assets/img/shoilpik1.jpeg"
            alt="Camera"
            class="w-full lg:w-full h-[400px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
          />
          <!-- Border only visible on md and up -->
          <div
            class="absolute -top-6 -left-6 w-full h-full border-t-[8px] border-l-[8px] border-teal-600 rounded-xl z-[-1]"
          ></div>
        </div>

        <!-- Image 2 -->
        <div class="relative z-20 w-full max-w-md mx-auto">
          <img
            src="@/assets/img/shoilpik2.jpeg"
            alt="Map"
            class="w-full lg:w-full h-[400px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
          />
          <!-- Border only visible on md and up -->
          <di5
            class="absolute -bottom-6 -right-6 w-full h-full border-b-[8px] border-r-[8px] border-honey-gold rounded-xl z-[-1]"
          ></di5>
        </div>

        <!-- Image 3 -->
        <div
          class="relative z-10 w-full max-w-md mx-auto mt-6 md:mt-8 lg:mt-12 lg:ml-12"
        >
          <img
            src="@/assets/img/shoilpik3.jpeg"
            alt="Glasses"
            class="w-full lg:w-full h-[400px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
          />
          <!-- Border only visible on md and up -->
          <div
            class="absolute -top-6 -left-6 w-full h-full border-t-[8px] border-l-[8px] border-teal-600 rounded-xl z-[-1]"
          ></div>
        </div>
      </div>
    </div>

    <!-- 🔻 Event Details + Sponsor CTA Section -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24">
      <div
        class="relative border border-gray-200 shadow-md rounded-2xl p-6 overflow-hidden sponsor-card bg-cover bg-center text-center"
      >
        <div class="absolute inset-0 bg-white opacity-80 z-0"></div>

        <div class="relative z-10">
          <h3
            class="text-2xl md:text-4xl font-bold text-midnight-sapphire text-center font-cormorant mb-6"
          >
            Event Details
          </h3>
          <div class="space-y-4 text-base text-gray-800">
            <div class="flex items-center justify-left gap-2">
              <span class="text-xl">📅</span>
              <strong class="text-teal-800">Date:</strong>
              <span>19th July, 2025 (Saturday)</span>
            </div>
            <div class="flex items-center justify-left gap-2">
              <span class="text-xl">⏰</span>
              <strong class="text-teal-800">Time:</strong>
              <span>6:00 PM</span>
            </div>
            <div class="flex items-center justify-left gap-2">
              <span class="text-xl">📍</span>
              <strong class="text-teal-800">Venue:</strong>
              <span
                >6767 Chemin de la Côte-des-Neiges, Montreal, Quebec, Canada –
                H3S 2T6</span
              >
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

export default {
  name: "ShoilpikShondhaView",
  components: {
    CookieConsent,
  },
  data() {
    return {
      eventDate: new Date("2025-07-19T18:00:00Z").getTime(), // 6:00 PM UTC
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
  background-image: url("../assets/img/shoilpik-shandha.png");
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
