<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative h-[50vh] bg-cover bg-center background-img">
      <div class="absolute inset-0 bg-gray-900 opacity-50"></div>

      <div
        class="relative z-10 flex flex-col justify-center items-center text-center lg:py-16 py-12 px-4"
      >
        <div class="fade-in">
          <p
            class="text-3xl md:text-6xl text-teal-200 tracking-wide mb-4 font-cormorant"
          >
            বাংলাদেশ ডে প্যারেড | Bangladesh Day Parade
          </p>

          <p
            class="text-center text-2xl md:text-3xl mt-4 text-white font-cormorant tracking-wide"
          >
            Celebrating Tradition, Culture and Unity
          </p>
        </div>
      </div>
    </div>

    <!-- Countdown Section -->
    <div
      class="relative bg-gradient-to-r from-green-50 to-gray-200 z-10 -mt-[20vh] max-w-4xl mx-auto p-6 rounded-lg shadow-lg"
    >
      <div class="w-full px-2 sm:px-6 text-center">
        <h2
          class="text-2xl md:text-4xl font-bold text-midnight-sapphire text-center font-cormorant"
        >
          Event Countdown
        </h2>

        <div
          class="relative rounded-lg w-full px-4 py-4 mt-4 text-center overflow-hidden flex flex-col items-center"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-5 rounded-lg"
          ></div>

          <div class="relative z-10 w-full">
            <div
              class="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center w-full gap-3 sm:gap-2 mt-4"
            >
              <!-- Days -->
              <div class="timer">
                <div
                  class="rounded-xl bg-gradient-to-b from-gray-200 to-light-blue border-2 border-white border-opacity-20 py-2 min-w-[100px] sm:min-w-[110px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ formattedCountdown.days }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center"
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
                  class="rounded-xl bg-gradient-to-b from-gray-200 to-light-blue border-2 border-white border-opacity-20 py-2 min-w-[100px] sm:min-w-[110px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ formattedCountdown.hours }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center"
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
                  class="rounded-xl bg-gradient-to-b from-gray-200 to-light-blue border-2 border-white border-opacity-20 py-2 min-w-[100px] sm:min-w-[110px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ formattedCountdown.minutes }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center"
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
                  class="rounded-xl bg-gradient-to-b from-gray-200 to-light-blue border-2 border-white border-opacity-20 py-2 min-w-[100px] sm:min-w-[110px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-teal-600 text-center"
                  >
                    {{ formattedCountdown.seconds }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-teal-800 mt-1 text-center"
                  >
                    Seconds
                  </p>
                </div>
              </div>
            </div>

            <p
              v-if="eventStarted"
              class="mt-6 text-xl font-semibold text-teal-900"
            >
              The event has started.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- About the Event Section -->
    <section
      class="min-h-screen flex flex-col justify-center items-center bg-white py-16 px-4"
    >
      <div class="text-center max-w-6xl">
        <h2
          class="text-4xl md:text-6xl text-teal-900 font-cormorant"
        >
          About the Event
        </h2>

        <p
          class="text-gray-600 mt-4 mb-16 md:mb-24 max-w-4xl mx-auto leading-7"
        >
          Bangladesh Day Parade is a vibrant community celebration of
          Bangladeshi culture, tradition and heritage. The event brings
          together families, artists and community members for a day filled
          with a colourful parade, cultural performances, music, dance,
          children’s activities and shared celebration.
        </p>
      </div>

      <!-- Event Images -->
      <div
        class="relative flex flex-col lg:flex-row gap-10 lg:items-center sm:items-stretch w-full max-w-7xl"
      >
        <!-- Image 1 -->
        <div class="relative z-10 w-full max-w-md mx-auto lg:-mt-10">
          <img
            src="@/assets/img/shoilpik1.jpeg"
            alt="Bangladesh Day Parade cultural event"
            class="w-full h-[400px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
          />

          <div
            class="absolute -top-6 -left-6 w-full h-full border-t-[8px] border-l-[8px] border-teal-600 rounded-xl z-[-1]"
          ></div>
        </div>

        <!-- Image 2 -->
        <div class="relative z-20 w-full max-w-md mx-auto">
          <img
            src="@/assets/img/shoilpik2.jpeg"
            alt="Bangladesh Day Parade performance"
            class="w-full h-[400px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
          />

          <!-- Fixed: this was incorrectly written as di5 -->
          <div
            class="absolute -bottom-6 -right-6 w-full h-full border-b-[8px] border-r-[8px] border-honey-gold rounded-xl z-[-1]"
          ></div>
        </div>

        <!-- Image 3 -->
        <div
          class="relative z-10 w-full max-w-md mx-auto mt-6 md:mt-8 lg:mt-24 lg:ml-12"
        >
          <img
            src="@/assets/img/shoilpik3.jpeg"
            alt="Bangladesh Day Parade community celebration"
            class="w-full h-[400px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
          />

          <div
            class="absolute -top-6 -left-6 w-full h-full border-t-[8px] border-l-[8px] border-teal-600 rounded-xl z-[-1]"
          ></div>
        </div>
      </div>
    </section>

    <!-- Event Details Section -->
    <section
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24"
    >
      <div
        class="relative border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 overflow-hidden sponsor-card bg-cover bg-center"
      >
        <div class="absolute inset-0 bg-white opacity-85 z-0"></div>

        <div class="relative z-10">
          <h3
            class="text-2xl md:text-4xl font-bold text-midnight-sapphire text-center font-cormorant mb-8"
          >
            Event Details
          </h3>

          <div class="space-y-5 text-base text-gray-800">
            <!-- Date -->
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
            >
              <div class="flex items-center gap-2">
                <span class="text-xl">📅</span>
                <strong class="text-teal-800">Date:</strong>
              </div>

              <span>20 July 2026</span>
            </div>

            <!-- Time -->
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
            >
              <div class="flex items-center gap-2">
                <span class="text-xl">⏰</span>
                <strong class="text-teal-800">Time:</strong>
              </div>

              <span>2:00 PM – 11:00 PM</span>
            </div>

            <!-- Venue -->
            <div
              class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3"
            >
              <div class="flex items-center gap-2 flex-shrink-0">
                <span class="text-xl">📍</span>
                <strong class="text-teal-800">Venue:</strong>
              </div>

              <a
                href="https://www.google.com/maps?q=5366+Côte-des-Neiges,+Montreal,+Quebec,+H3T+1Y2"
                target="_blank"
                rel="noopener noreferrer"
                class="text-black hover:text-teal-800 hover:underline"
              >
                5366 Côte-des-Neiges, Montréal, Québec, H3T 1Y2
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Network Section -->
    <section
      class="relative px-2 bg-gradient-to-r from-amber-50 to-blue-50 bg-img bg-cover bg-center min-h-96 group pt-8"
    >
      <div class="absolute inset-0 bg-gray-900 opacity-85"></div>

      <div
        class="container md:mx-auto py-6 px-4 space-y-3 lg:px-32 relative z-10"
      >
        <h2
          class="text-4xl md:text-5xl font-bold mb-2 text-white font-cormorant pt-6"
        >
          Join Our Network
        </h2>

        <p class="text-white text-lg text-left md:text-justify my-2 mb-6">
          Join Bangali Abhibasi Network, a glocal linguo-cultural association
          connecting members of the Bengali community.
        </p>

        <button
          type="button"
          aria-label="Join our network"
          class="text-base px-4 py-3 border-2 border-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold transition duration-300 ease-in-out"
          @click="join"
        >
          Join Our Network
        </button>
      </div>
    </section>

    <CookieConsent />
  </div>
</template>

<script>
import CookieConsent from "../components/CookieConsent.vue";

export default {
  name: "BangladeshDayParadeView",

  components: {
    CookieConsent,
  },

  data() {
    return {
      // Montreal time on 20 July 2026 at 2:00 PM.
      eventDate: new Date("2026-07-20T14:00:00-04:00").getTime(),

      countdownInterval: null,

      eventStarted: false,

      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },

  computed: {
    formattedCountdown() {
      return {
        days: this.formatNumber(this.countdown.days),
        hours: this.formatNumber(this.countdown.hours),
        minutes: this.formatNumber(this.countdown.minutes),
        seconds: this.formatNumber(this.countdown.seconds),
      };
    },
  },

  mounted() {
    this.updateCountdown();

    this.countdownInterval = window.setInterval(() => {
      this.updateCountdown();
    }, 1000);
  },

  beforeUnmount() {
    if (this.countdownInterval) {
      window.clearInterval(this.countdownInterval);
    }
  },

  methods: {
    updateCountdown() {
      const now = Date.now();
      const timeLeft = this.eventDate - now;

      if (timeLeft <= 0) {
        this.eventStarted = true;

        this.countdown = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };

        if (this.countdownInterval) {
          window.clearInterval(this.countdownInterval);
          this.countdownInterval = null;
        }

        return;
      }

      this.eventStarted = false;

      const totalSeconds = Math.floor(timeLeft / 1000);

      this.countdown = {
        days: Math.floor(totalSeconds / (60 * 60 * 24)),
        hours: Math.floor(
          (totalSeconds % (60 * 60 * 24)) / (60 * 60),
        ),
        minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
        seconds: totalSeconds % 60,
      };
    },

    formatNumber(value) {
      return String(value).padStart(2, "0");
    },

    join() {
      this.$router.push("/contribute/membership");
    },
  },
};
</script>

<style scoped>
button {
  transition: all 0.3s ease-in-out;
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

.sponsor-card {
  background-image: url("../assets/PohelaBaishakh/img5.png");
  background-size: cover;
  background-position: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .timer h3 {
    font-size: 1.75rem;
  }

  .timer p {
    font-size: 0.875rem;
  }
}
</style>