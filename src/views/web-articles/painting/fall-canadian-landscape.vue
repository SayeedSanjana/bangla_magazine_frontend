<template>
  <div class="bg-white min-h-screen flex flex-col">
    <!-- ===================== HERO ===================== -->
    <header class="relative w-full h-[65vh] overflow-hidden">
      <img
        :src="heroImage"
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
            Art & Paintings
          </h1>
          <p class="text-lg md:text-2l italic font-light drop-shadow">
            A curated space of evocative paintings and visual narratives,
            bringing together colours, emotions, and moments that linger long
            after the viewing ends.
          </p>
        </div>
      </div>
    </header>

    <!-- ===================== ARTISTIC GALLERY ===================== -->
    <div class="w-full py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Meta -->
        <div class="text-gray-600 text-sm flex justify-between items-center">
          <p>30 November 2025 • Sunday</p>
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-bold mt-2">Fall, Canadian Landscape</h1>

        <!-- Author Section -->
        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <img
              src="@/assets/authorImage/Ashoka.jpg"
              class="rounded-full h-28 w-28 mr-3 object-cover border via-orange-300 to-yellow-500 border-4"
              alt="Author"
            />
            <div>
              <p class="text-lg font-semibold">Asoke Chakravarty</p>
              <p class="text-sm text-gray-600">
                BOIMELA-UTSAV Award winner, is a poet, writer, artist,
                playwright, musician and humanist
              </p>
            </div>
          </div>
        </div>

        <!-- ===================== POEM + ART GALLERY ===================== -->
        <div class="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-16 mt-20">
          <!-- LEFT — POEM -->
          <div class="space-y-3">
            <div>
              <h2
                class="text-2xl font-cormorant font-bold text-autumn-auburn pl-4"
              >
                পাতাঝরার গান
              </h2>
              <h5
                class="text-lg font-cormorant font-semibold text-gray-600 pl-4"
              >
                অশোক চক্রবর্তী
              </h5>
              <h5
                class="text-sm font-cormorant font-semibold text-gray-600 mb-8 pl-4"
              >
                ( সৈকত বাগচী,অনুজপ্রতিমেষু )
              </h5>

              <div
                class="text-gray-700 italic text-base space-y-2 pt-4 border-opacity-20 border-l-2 border-autumn-auburn pl-4"
              >
                <p>অশ্রুনদীর পারে গান হয় কোমল নিষাদে</p>
                <p>ঈষৎ বিষন্ন সুর। পুরিয়া ধানেশ্রী। বিলম্বিত</p>
                <p>পাতা ঝরে সুন্দরের ভয়ঙ্কর মৃত্যুর বিষাদে</p>
                <p>শীতের প্রার্থনা ওই হাহাকারে গোপনে নিহিত</p>

                <br />

                <p>এখন প্রস্তুতি চলে, শীতঘুমে শোধ করে ঋণ</p>
                <p>আবার জীবিত হবে ফুলে ফলে রঙে ও রেখায়</p>
                <p>মুছে দেবে পৃথিবীর সমূহ বিষাদ ভরা দিন</p>
                <p>ঝরাপাতা! ঋতুরঙ্গ। নবজাতকের গান গায়</p>

                <br />

                <p>শীত তো ভূমিকা মাত্র, জীবন বৃত্তকে ঘুরে দেখা</p>
                <p>বসন্তের ওম তাই যন্ত্রণার গান দিয়ে লেখা।</p>
              </div>
            </div>

            <div class="pt-12">
              <h2
                class="text-2xl font-cormorant font-bold text-autumn-auburn pl-4"
              >
                A Song for Falling Leaves
              </h2>
              <h5
                class="text-lg font-cormorant font-semibold text-gray-600 pl-4"
              >
                Asoke Chakravarty
              </h5>
              <h5
                class="text-base font-cormorant font-semibold text-gray-600 mb-8 pl-4"
              >
                (Saikat Bagchi with love)
              </h5>

              <div
                class="text-gray-700 italic text-base space-y-2 pt-4 border-opacity-20 border-l-2 border-autumn-auburn pl-4"
              >
                <p>Beyond the tear-river, in Komal Nishad,</p>
                <p>a sad, silent melody drifts—</p>
                <p>a slow Puriadhaneshree trembling in the dusk</p>

                <br />

                <p>The leaves fall, knowing the briefness</p>
                <p>of this brutal beauty.</p>
                <p>Each leaf groans softly,</p>
                <p>already praying for winter.</p>

                <br />

                <p>For after winter’s deep, dreamless sleep,</p>
                <p>they will rise again—</p>
                <p>in full bloom, in fruit,</p>
                <p>in colors that erase</p>
                <p>the melancholy of nature’s dimming days.</p>
                <p>The falling leaves sing of birth,</p>
                <p>of seasons turning.</p>

                <br />

                <p>Winter? Only a prelude</p>
                <p>to the circle of life—</p>
                <p>a cold that conceals</p>
                <p>the warmth of the womb,</p>
                <p>where every suffering song</p>
                <p>becomes a promise of return.</p>
              </div>
            </div>
          </div>

          <!-- RIGHT — ART GALLERY -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Column 1 -->
            <div class="space-y-16">
              <!-- Painting 1 -->
              <div
                class="relative group p-3 border-[6px] border-black/20 rounded-lg bg-white shadow-xl cursor-zoom-in"
                @click="openModal(painting1)"
              >
                <!-- Hover overlay -->
                <div
                  class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition"
                  >
                    Click to View
                  </span>
                </div>

                <img
                  :src="painting1"
                  class="w-full h-auto object-contain max-h-[750px] rounded-sm group-hover:scale-[1.02] transition duration-300"
                  alt="Painting 1"
                />
                <p class="text-center mt-2">Hibernation</p>
                <p class="text-center mt-1">Oil on canvas, 20"X30"</p>
              </div>

              <!-- Painting 3 -->
              <div
                class="relative group p-3 border-[6px] border-black/20 rounded-lg bg-white shadow-xl cursor-zoom-in"
                @click="openModal(painting3)"
              >
                <div
                  class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition"
                  >
                    Click to View
                  </span>
                </div>

                <img
                  :src="painting3"
                  class="w-full h-auto object-contain max-h-[750px] rounded-sm group-hover:scale-[1.02] transition duration-300"
                  alt="Painting 3"
                />
                <p class="text-center mt-2">A Song for falling leaves</p>
                <p class="text-center mt-1">Oil on Canvas, 20"X24"</p>
              </div>
            </div>

            <!-- Column 2 (offset) -->
            <div class="space-y-16 md:mt-24">
              <!-- Painting 2 -->
              <div
                class="relative group p-3 border-[6px] border-black/20 rounded-lg bg-white shadow-xl cursor-zoom-in"
                @click="openModal(painting2)"
              >
                <div
                  class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition"
                  >
                    Click to View
                  </span>
                </div>

                <img
                  :src="painting2"
                  class="w-full h-auto object-contain max-h-[850px] rounded-sm group-hover:scale-[1.02] transition duration-300"
                  alt="Painting 2"
                />
                <p class="text-center mt-2">Praying for the Winter</p>
                <p class="text-center mt-1">Oil on Canvas, 20"X24"</p>
              </div>

              <!-- Painting 4 -->
              <div
                class="relative group p-3 border-[6px] border-black/20 rounded-lg bg-white shadow-xl cursor-zoom-in"
                @click="openModal(painting4)"
              >
                <div
                  class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition"
                  >
                    Click to View
                  </span>
                </div>

                <img
                  :src="painting4"
                  class="w-full h-auto object-contain max-h-[850px] rounded-sm group-hover:scale-[1.02] transition duration-300"
                  alt="Painting 4"
                />
                <p class="text-center mt-2">Waiting for the Winter</p>
                <p class="text-center mt-1">Oil on Canvas, 20"X24"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ===================== শিল্পীর পরিচিতি (BANGLA) ===================== -->
        <div class="mt-24">
          <h1
            class="text-xl text-midnight-sapphire font-cormorant font-semibold"
          >
            শিল্পীর পরিচিতি
          </h1>

          <div class="mt-2 text-gray-700 space-y-3">
            <p>
              কবি, প্রাবন্ধিক, ছড়াকার, গল্পলেখক, চিত্রশিল্পী, নাট্যকার অশোক
              চক্রবর্তী প্রাচ্য ও পাশ্চাত্য মার্গসঙ্গীতের অনুরাগী। সঙ্গে আছে
              প্রায় ষাটটি দেশভ্রমনের অভিজ্ঞতা। পেশায় তিনি একজন প্রযুক্তিবিদ ও
              দক্ষ প্রশাসক। পঞ্চাশ বছর বিদেশ বাসী।
            </p>

            <p>
              কবিতা প্রকাশিত হয়েছে দেশ, কৃত্তিবাস, কবিসন্মেলন, কবিতাপাক্ষিক,
              ভাষানগর ইত্যাদি প্রায় পঞ্চাশটি বিভিন্ন পত্রিকায়। কানাডা, ইউ.এস.এ.
              এবং ইউরোপের পত্রিকায় প্রকাশিত হয়েছে তাঁর ইংরেজি কবিতা ও এনথোলজি।
              কলকাতা ও কানাডার সাহিত্য পত্রিকা প্রচ্ছদ করেছে তাঁর আঁকা ছবি নিয়ে।
            </p>

            <p>
              ২০০৪ সালে প্রবাসী কবি ও লেখক হিসেবে বইমেলা-উত্সব পুরস্কারে
              সম্মানিত। প্রকাশিত গ্রন্থ 20 টি। পৃথিবীর উজ্জ্বল কবিদের কবিতা
              অনুবাদ করেছেন। তাঁর কবিতার অনুবাদ হয়েছে স্প্যানিশ, জার্মান, ফরাসী
              ও তুরস্ক ভাষায়। তিনটি মহাদেশে কুড়িটি একক চিত্রপ্রদর্শনী হয়েছে।
              আমেরিকা, ইউরোপ ও ভারতবর্ষে খ্যাতনামা ব্যক্তিদের সংগ্রহে রয়েছে তাঁর
              ছবি।
            </p>

            <p>
              "টরন্টোর আন্তর্জাতিক প্রতিরোধী কবিসম্মেলন"- এর প্রাক্তন সভাপতি।
              টরন্টো "কৃত্তিবাস" শাখার প্রতিষ্ঠাতা ও পরিচালক। সাহিত্য ও সংস্কৃতি
              সম্পর্কে কানাডা ও কলকাতার টেলিভিশনে অজস্র সাক্ষাত্কার দিয়েছেন।
            </p>
          </div>
        </div>

        <!-- ===================== ARTIST BIO (ENGLISH) ===================== -->
        <div class="mt-12">
          <h1
            class="text-3xl text-midnight-sapphire font-cormorant font-semibold"
          >
            Artist's Bio
          </h1>

          <p class="mt-2 text-gray-700">
            Asoke Chakravarty, BOIMELA-UTSAV Award winner, is a poet, writer,
            artist, playwright, musician and humanist who is of Indian origin
            and has lived in Canada for 55 years. Chakravarty’s written work
            appears in 18 publications and has been translated to Spanish,
            French, German, Turkish and other languages. He published his first
            short story in 1955. He contributes his written work to over 80
            leading magazines across three continents and many International
            Anthologies. Chakravarty has exhibited at 22 solo art shows in three
            continents. He has played classical tabla with leading musicians of
            India. Chakravarty is the founder-director of Krittibas Literary
            Group of Toronto and was the former President of The International
            Festival of Poetry of Resistance in Toronto. His collection of poems
            <span class="italic">Vaater thaalaai eto kaantaajhop</span> was
            nominated for the Shahityo Academy in Delhi. He regularly speaks at
            seminars and literary conferences. He is an Engineer with an MBA and
            holds Fine Arts Diplomas.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== JOIN OUR NETWORK STRIP ===================== -->
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

    <!-- ===================== FULLSCREEN MODAL ===================== -->
    <div
      v-if="modalImage"
      class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div
        class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)]"
      ></div>

      <button
        @click="closeModal"
        class="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
      >
        ✕
      </button>

      <img
        :src="modalImage"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-black/60 ring-4 ring-white/20 ring-offset-4 ring-offset-black"
        alt="Fullscreen painting"
      />
    </div>

    <CookieConsent />
  </div>
</template>

<script>
import heroImage from "@/assets/WebPrintArticles/webPrintArticlesCover.png";
import painting1 from "@/assets/WebPrintArticles/painting/AsokeChakravartyPainting01.jpg";
import painting2 from "@/assets/WebPrintArticles/painting/AsokeChakravartyPainting02.jpg";
import painting3 from "@/assets/WebPrintArticles/painting/AsokeChakravartyPainting03.jpg";
import painting4 from "@/assets/WebPrintArticles/painting/AsokeChakravartyPainting04.jpg";
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  name: "fall-canadian-landscape",
  components: { CookieConsent },
  data() {
    return {
      heroImage,
      painting1,
      painting2,
      painting3,
      painting4,
      modalImage: null,
    };
  },
  methods: {
    join() {
      this.$router.push("/contribute/membership");
    },
    openModal(image) {
      this.modalImage = image;
    },
    closeModal() {
      this.modalImage = null;
    },
  },
};
</script>

<style scoped>
.bg-img {
  background-image: url("@/assets/img/bg-contribute.png");
}
</style>
