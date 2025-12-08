<template>
  <div class="items-center justify-center min-h-screen bg-white">
    <!-- Hero Section -->
    <header class="relative w-full h-[65vh] overflow-hidden">
      <img
        :src="heroBackgroundEssay"
        alt="Webb Articles Banner"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-xs z-10 flex flex-col items-center justify-center text-center px-6"
      >
        <div class="text-white font-cormorant max-w-3xl animate-fadeInUp">
          <h1
            class="text-6xl md:text-5xl font-bold mb-4 drop-shadow-lg text-honey-gold"
          >
            Web Articles & Features
          </h1>
          <h1
            class="text-6xl md:text-5xl font-bold mb-4 drop-shadow-lg text-light-red"
          >
            Essays
          </h1>
          <p class="text-lg md:text-2l italic font-light drop-shadow">
            A curated selection of thought-provoking essays that delve into
            diverse topics, offering fresh perspectives and deep insights.
          </p>
        </div>
      </div>
    </header>

    <div class="my-8 py-8 mb-0 mx-auto max-w-screen-xl">
      <div class="bg-white text-gray-900 font-sans">
        <!-- Main Container -->
        <div class="max-w-5xl mx-auto px-4 py-12">
          <!-- Article Meta Info -->
          <div class="text-gray-600 text-sm flex justify-between items-center">
            <p>7 December 2025 • Sunday</p>
          </div>

          <!-- Article Title -->
          <h1 class="text-4xl font-bold mt-2">What We Leave Behind</h1>

          <!-- Authors Section -->
          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center">
              <img
                src="@/assets/authorImage/joyshreeNath.jpg"
                class="rounded-full h-28 w-28 mr-3 object-cover"
                alt="Author 2"
              />
              <div>
                <p class="text-lg font-semibold">Joyshree Nath</p>
                <p class="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
          </div>

          <!-- Article Content -->
          <div class="mt-8">
            <p class="mt-8 text-gray-700">
              What a beautiful planet our Earth is. The scenic beauty we see,
              the warm people we mingle with, the delicious food we eat, the
              gorgeous clothes we wear—these are just a few of the countless
              wonders of this world. I often wonder how we’ve come so far, from
              eating raw meat to tapping on smartphones to order delectable
              meals online. How did we evolve from barely meeting our needs to
              chasing insatiable wants? What if we focused only on our needs
              today, not our endless desires? How would that shift
              “consumerism,” and how would it change our lives? What really
              matters? Does a designer handbag or an imported shoe matter so
              much that we’d die without it? Or does the quality of life we have
              right now matter more? I ask myself these questions sometimes.
            </p>

            <p class="mt-6 text-gray-700">
              For me, the answer is clear: what truly matters is fresh air to
              breathe, the sun shining in our lives, enough healthy food to
              sustain us, clean clothes to wear, a sturdy roof over our heads,
              and kind, helpful friends and family around us. Everything else is
              just what we think will make our lives better. Too often, we chase
              more—more than our already dreamlike existence needs—hoping to
              make it enviable to those around us.
            </p>

            <p class="mt-6 text-gray-700">
              So we crave more things. We buy more clothes than we could wear in
              a lifetime, eat more food than we can digest in a day, snag more
              gadgets in a year than we’ll ever use—or even toss out—and collect
              trinkets from travels that gather dust within a month. I’ve
              wondered why we do this. I’ve done it myself; so many of us have.
              Why? Two answers stand out. First, we mimic those we admire,
              buying what they buy, eating what they eat, often without asking
              if it actually improves our lives or drags us down. Second, we
              rarely consider the impact of our actions on future generations.
              Do we think about how eating too much meat affects animal life or
              what it leaves behind for our kids? Do we care that overproducing
              goods pumps out toxic waste, poisoning the air, water, and soil
              our grandchildren will inherit?
            </p>

            <p class="mt-6 text-gray-700">
              We don’t seem bothered by ocean degradation from deep-sea mining,
              water pollution from plastic and toxic dumping, air choked with
              smoke, or noise so loud it drowns out our children’s peace. Why
              should we care what happens a hundred years from now? We won’t be
              here to see it. Our children will, but that’s their problem,
              right? We gave them life—isn’t that enough? They should be
              grateful, we tell ourselves, even as we ruin that life with every
              overindulgent choice, making their future unbearable with stress,
              toxicity, and filth. Some might even wish to escape it altogether
              one day.
            </p>

            <p class="mt-6 text-gray-700">
              It’s high time we thought beyond ourselves. What will our children
              face when we’re gone? How will they live in the dump we’ve made of
              Mother Nature? How can they fix it if they don’t even know the
              real problems—distracted by petty squabbles over reality TV,
              dinner-time news drama, or which politician will magically save us
              from troubles we refuse to see? Like us, they’ll fuss over not
              having the latest car or the trendiest outfit. But what will any
              of that matter if the air is unbreathable, the water undrinkable,
              and the food laced with poison?
            </p>
            <p class="mt-6 text-gray-700">
              I’ve realized it’s up to us to make the change we want. I’ve
              shifted from mindless consumerism to finding contentment with what
              I have. I want my children to breathe fresh air, eat healthy food,
              buy only what they need, and face life’s challenges with laughter
              and courage. So I practice what I preach: I buy second-hand
              clothes, use simple products for basics like washing my hair or
              cleaning the kitchen, avoid anything made with toxic materials,
              and—most importantly—use only what I need, donating the rest to
              organizations that share it with those in need.
            </p>
            <div class="flex flex-col mt-8 justify-center items-center">
              <img
                src="@/assets/WebPrintArticles/essay/JoyshreeNathEssay02.jpg"
                class="w-full md:w-4/5 rounded-lg shadow-lg"
                alt="Featured Image"
              />

              <p class="text-sm mt-1 text-center">
                <span class="font-semibold">Image courtesy: </span>Author (AI Generated).
              </p>
            </div>
          </div>

          <div class="mt-24">
            <h1
              class="text-3xl text-midnight-sapphire font-cormorant font-semibold"
            >
              Author's Bio
            </h1>

            <p class="mt-2 text-gray-700">
              Joyshree Nath is a mother of two beautiful children, and has a
              patient and supporting husband who puts up with all her quirky
              habits. She has a Master's degree in IT and is a software
              developer by profession.
            </p>
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
import CookieConsent from "../../../components/CookieConsent.vue";
import heroBackgroundEssay from "@/assets/WebPrintArticles/webPrintArticlesCover.png";

export default {
  name: "what-weleave-behind",
  components: {
    CookieConsent,
  },

  data() {
    return {
      heroBackgroundEssay,
    };
  },
  methods: {
    join() {
      this.$router.push("/contribute/membership");
    },
  },
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.bg-img {
  background-image: url("@/assets/img/bg-contribute.png");
}
</style>
