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
            class="text-3xl md:text-6xl text-autumn-auburn tracking-wide mb-4 font-cormorant"
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
      class="relative bg-gradient-to-r from-yellow-50 to-gray-200 z-10 -mt-[20vh] max-w-4xl mx-auto p-6 rounded-lg shadow-lg"
    >
      <div class="w-full px-2 sm:px-6 text-center">
        <h2
          class="text-2xl md:text-4xl font-bold text-yellow-900 text-center font-cormorant"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-yellow-600 text-center"
                  >
                    {{ formattedCountdown.days }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-800 mt-1 text-center"
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

              <div class="timer">
                <div
                  class="rounded-xl bg-gradient-to-b from-gray-200 to-light-blue border-2 border-white border-opacity-20 py-2 min-w-[100px] sm:min-w-[110px] flex items-center justify-center flex-col gap-1 aspect-square px-2 sm:px-3"
                >
                  <h3
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-yellow-600 text-center"
                  >
                    {{ formattedCountdown.hours }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-800 mt-1 text-center"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-yellow-600 text-center"
                  >
                    {{ formattedCountdown.minutes }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-800 mt-1 text-center"
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
                    class="countdown-element font-cormorant font-semibold text-4xl sm:text-5xl text-yellow-600 text-center"
                  >
                    {{ formattedCountdown.seconds }}
                  </h3>

                  <p
                    class="text-base sm:text-lg font-cormorant font-semibold text-yellow-800 mt-1 text-center"
                  >
                    Seconds
                  </p>
                </div>
              </div>
            </div>

            <p
              v-if="eventStarted"
              class="mt-6 text-xl font-semibold text-yellow-900"
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
  <!-- Heading -->
  <div class="text-center max-w-5xl">
    <h2
      class="text-4xl md:text-6xl text-autumn-auburn font-cormorant"
    >
      About the Event
    </h2>
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-2 items-center mt-12 lg:mt-20 mb-12">

        <!-- Image -->
  <div class="flex justify-center">
    <div class="relative w-full max-w-sm">

      <!-- Decorative Border -->
      <div
        class="absolute -top-3 -left-3 w-full h-full rounded-3xl border-4 border-yellow-500/60"
      ></div>

      <div
        class="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-4 border-red-800/40"
      ></div>

      <img
        src="@/assets/bangladeshDayParade/img2.jpeg"
        alt="Bangladesh Day Parade"
        class="relative rounded-3xl shadow-xl w-full h-auto object-contain"
      />
    </div>
  </div>

  <!-- Description -->
  <div
  class="text-left border-l-4 border-amber-200 pl-6"
>
  <p
    class="text-gray-600 leading-7"
  >
    Bangladesh Day Parade organized by <span class="text-amber-800">Global Allaince Against Atrocity And Violence on Humanity</span> is a vibrant community celebration of
    Bangladeshi culture, tradition and heritage. The event brings
    together families, artists and community members for a day filled
    with a colourful parade, cultural performances, music, dance,
    children’s activities and shared celebration.
  </p>
</div>

</div>

  </div>

  <!-- Participation Card -->
  <div class="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12">

    <div
      class="bg-white rounded-3xl shadow-xl border border-amber-200 p-8 md:p-12 text-center"
    >

      <!-- Badge -->
      <span
        class="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold mb-6"
      >
        Dance Performance
      </span>

      <!-- Heading -->
      <h2
        class="text-4xl md:text-5xl font-cormorant text-amber-900 mb-6"
      >
        Our Participation
      </h2>

      <!-- Description -->
       
      <p
        class="text-lg text-gray-700 leading-8 max-w-3xl mx-auto mb-10"
      >
        We are delighted to announce that our association will proudly
        participate in the Bangladesh Day Parade through a special
        <span class="font-semibold text-amber-800">
          duet dance performance
        </span>
        celebrating the rich cultural heritage of Bangladesh.
      </p>

      <!-- Performance Card -->
      <div
        class="relative overflow-hidden bg-gradient-to-r from-amber-100 to-yellow-50 rounded-3xl border border-amber-200 shadow-xl"
      >

        <!-- Background Portrait -->
        <img
          src="@/assets/bangladeshDayParade/img5.png"
          alt=""
          class="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] opacity-10 pointer-events-none select-none"
        />

        <div class="grid lg:grid-cols-2 items-center">

          <!-- LEFT IMAGE -->
          <div>
            <img
              src="@/assets/bangladeshDayParade/img4.png"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- RIGHT CONTENT -->
          <div class="relative z-10 p-10 lg:p-14">

            <div class="text-5xl mb-6">
              💃
            </div>

            <h3
              class="text-3xl lg:text-4xl font-cormorant text-amber-900 mb-5"
            >
              Duet Dance Performance
            </h3>

            <p class="text-gray-700 leading-8">
              As part of the cultural programme, our association is proud
              to present a
              <span class="font-semibold text-amber-800">
                duet dance performance
              </span>
              by
              <span class="font-semibold text-rose-700">
                Soumie Mukhopadhyay
              </span>
              and
              <span class="font-semibold text-rose-700">
                Arpita Adikary
              </span>,
              beautifully choreographed to the timeless song
              <span class="font-semibold text-emerald-700">
                "Shyamo Sudor Giridhari"
              </span>
              by
              <span class="font-semibold text-amber-700">
                Poet Kazi Nazrul Islam</span>, 
              celebrating the richness of Bengali music, culture and artistic
              expression.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

  <!-- Event Image -->
  <!--
  <div class="flex justify-center mt-10">
    <div class="relative w-full max-w-5xl">

      <div
        class="absolute -top-5 -left-5 w-full h-full rounded-3xl border-4 border-yellow-500 border-opacity-75"
      ></div>

      <div
        class="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-4 border-red-800 border-opacity-55"
      ></div>

      <img
        src="@/assets/bangladeshDayParade/img2.jpeg"
        alt="Bangladesh Day Parade"
        class="relative rounded-3xl shadow-2xl w-full h-[550px] md:h-[700px] object-cover"
      />
    </div>
  </div>
  -->

</section>


    <!-- Event Details Section -->
    <section
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 mt-12"
    >
      <div
        class="relative border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 overflow-hidden sponsor-card bg-cover bg-center"
      >
        <div class="absolute inset-0 bg-white opacity-85 z-0"></div>

        <div class="relative z-10">
          <h3
            class="text-2xl md:text-4xl font-bold text-rich-mahagony text-center font-cormorant mb-8"
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
                <strong class="text-yellow-800">Date:</strong>
              </div>

              <span>25 July 2026</span>
            </div>

            <!-- Time -->
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
            >
              <div class="flex items-center gap-2">
                <span class="text-xl">⏰</span>
                <strong class="text-yellow-800">Time:</strong>
              </div>

              <span>2:00 PM – 11:00 PM</span>
            </div>

            <!-- Venue -->
            <div
              class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3"
            >
              <div class="flex items-center gap-2 flex-shrink-0">
                <span class="text-xl">📍</span>
                <strong class="text-yellow-800">Venue:</strong>
              </div>

              <a
                href="https://www.google.com/maps?q=5366+Côte-des-Neiges,+Montreal,+Quebec,+H3T+1Y2"
                target="_blank"
                rel="noopener noreferrer"
                class="text-black hover:text-yellow-800 hover:underline"
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
      class="relative px-2 bg-gradient-to-r from-amber-50 to-yellow-50 bg-img bg-cover bg-center min-h-96 group pt-8"
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
      
      eventDate: new Date("2026-07-25T14:00:00-04:00").getTime(),

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
  background-image: url("../assets/bangladeshDayParade/img1.png");
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