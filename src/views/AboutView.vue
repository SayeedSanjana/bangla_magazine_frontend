<template>
  <div class="md:mx-auto flex-grow min-h-screen">
    <!-- Mission and Objectives Banner -->
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
            class="text-2xl md:text-3xl lg:text-4xl text-honey-gold font-marck italic tracking-wide mb-4"
          >
            "In Bangla I love,<br />
            Bangla is my love.<br />
            Bangla holds my hands<br />
            And brings me to people in distant lands.<br />
            With humility I regard all there is to revere,<br />
            Seven seas and thirteen rivers<br />
            In Ganga and Padma appear..."
          </p>
        </div>

        <!-- Writer's Name -->
        <div class="mt-4">
          <p
            class="text-md md:text-lg lg:text-xl text-gray-300 font-semibold font-marck"
          >
            - Protul Mukhopadhyay (Ami Banglay Gaan Gaai)
          </p>
        </div>
      </div>
    </div>

    <!-- Who We Are -->
    <div
      class="bg-gradient-to-r from-amber-100 to-regal-blue border border-gray-200 rounded-lg shadow pt-8 md:pt-16 mb-8 md:mb-16 relative overflow-hidden"
    >
      <!-- Image for Mobile (Positioned Behind Text) -->
      <div class="block md:hidden absolute inset-0 z-0">
        <img
          src="../assets/img/about1-img.png"
          alt="Image representing Bangla culture"
          class="w-full h-full object-cover opacity-20"
        />
      </div>

      <!-- Content Section -->
      <div class="py-8 px-4 mx-auto max-w-screen-xl relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Image for Large and Medium Screens -->
          <div class="md:col-span-1 hidden md:block relative group">
            <img
              src="../assets/img/about1-img.png"
              alt="Image representing Bangla culture"
              class="w-full h-auto object-cover rounded shadow-sm"
            />
            <!-- Tooltip -->
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Image Credit:
              <a
                class="hover:underline"
                href="https://ca.pinterest.com/pin/1055599907087001/"
                >https://ca.pinterest.com/pin/1055599907087001/</a
              >
              <div
                class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"
              ></div>
            </div>
          </div>

          <!-- Content for All Screens -->
          <div class="md:col-span-2 py-8 px-2">
            <div class="text-center md:text-left">
              <h2
                class="text-4xl md:text-6xl mb-8 text-gray-800 font-cormorant"
              >
                Récit: Our Story
              </h2>
              <p
                class="text-base text-black md:text-gray-700 text-justify font-normal md:font-light"
              >
                Bangla continues to be the shared language of expression for a
                considerable part of the global population (approximately, 250
                million native speakers and 41 million second language speakers)
                even though many of them, like us, continue to drift away
                physically from the geographical area where it is a major spoken
                and written language - primarily, in
                <span class="text-midnight-sapphire">Bangladesh</span> and some
                parts of <span class="text-midnight-sapphire">India</span>. A
                corollary to being a migrant or an expat is the often
                unintentional and unnoticed assimilation in their adopted
                land(s) and language(s) driven by the constant need of
                communication in a non-native language in both professional
                spaces and social circles. While this results in a certain
                ‘globalization’ of Bangalis through the movement of people and
                ideas, it also diminishes the presence of Bangla, the language,
                in our daily parlance. Oftentimes, the language is relegated to
                silent musings and nostalgic reveries of a world left behind. At
                times, this is directly reflected through the lives of
                second-generation Bangalis across the world for whom the
                transition from a linguistic familiarity to a shared collective
                identity remains a constant struggle. Yet certain moments of
                collective engagement in Bangla, the language, during
                religio-cultural events, family and friendly gatherings,
                academic conferences, protest movements or even social media
                interactions provide a sense of camaraderie in lands far from
                home. This makes the language and its cultural coordinates
                accessible to not only those who ethnically identify as Bangali
                or use Bangla as their native language, but also those who have
                adopted it through their mediated or lived experiences.
              </p>
              <p
                class="text-base text-black md:text-gray-700 text-justify pt-6 font-normal md:font-light"
              >
                The recognition of
                <span class="text-midnight-sapphire">February 21</span> as the
                <span class="text-midnight-sapphire">International Mother</span>
                Language Day by
                <span class="text-midnight-sapphire">UNESCO</span> (observed
                since 2000) commemorates one of the most significant events in
                the recent history of the language, that is,
                <span class="text-midnight-sapphire">Bhasha Andolon</span>
                (transliterated as “The Language Movement”). Nonetheless, what
                remains untapped is an immensely diverse potential that
                characterises Bangla as the cradle for a collective of
                intersectional worldviews and not just a landmass or language.
                The huge geographical presence of Bangla speakers implies that
                this ‘worldview’ currently encompasses large swathes of the
                globe. Therefore, the diverse - and many - ‘Bengals’ that exist
                now could perhaps fully appreciate or explore their modern
                multifarious contours and identities by forging connections with
                Bangalis of different perspectives and across different
                countries.
              </p>
              <p
                class="font-light text-base text- text-black md:text-gray-700 text-justify pt-6 font-normal md:font-light"
              >
                Building on such observations, we have ideated our network,
                <span class="text-midnight-sapphire">B.A.N.G.L.A.</span>, an
                acronym for Bangali Abhibasi Network: a Glocal Linguo-cultural
                Association. We endeavour to build an intersectional space for
                engagement between the Bangali diaspora, their homeland(s), and
                consciously extend it to everyone in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Objective -->
    <div class="mb-8 md:mb-16 pt-8 md:pt-16 py-8 px-2 mx-auto max-w-screen-xl">
      <h2
        class="text-4xl md:text-6xl mb-8 text-gray-800 text-center font-cormorant"
      >
        Exposé: Our Plot
      </h2>

      <div class="container mx-auto py-10 px-4 space-y-16">
        <!-- Row 1: Text on Left, SVG on Right -->
        <div
          class="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0"
        >
          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-cormorant"
            >
              Bangla as the language of thinking, questioning, and expressing
            </h2>
            <p
              class="text-gray-700 text-base text-justify first-letter:uppercase first-letter:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-honey-gold first-letter:me-3 first-letter:float-start"
            >
              We believe that nurturing the use of Bangla in a land away from
              home can only be effectivized if communicating and reading Bangla
              texts works in tandem with a platform for writing. A language like
              Bangla, that is not regularly deployed to map the new nodal points
              of enquiring the global order, may often lose out on dynamism of
              thought and a holistic worldview. Hence, the use of Bangla
              vocabulary as well as stretching its limits by introducing new
              forms of expression or refurbishing obscure ones is one of our
              primary initiatives. The long term goal of this initiative will be
              to ensure that such conversations in and around Bangla are
              recognized through a publication enterprise with an ISSN
              registration that will facilitate a literary exchange and develop
              an internationally standardized publication process.
            </p>
          </div>

          <!-- Image -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <img
              src="../assets/img/Vector1.png"
              alt="SVG Image 1"
              class="w-96 h-auto"
            />
            <div
              class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Image Credit:
              <a
                href="https://ca.pinterest.com/pin/14988611253363489/"
                class="hover:underline"
              >
                https://ca.pinterest.com/pin/14988611253363489/
              </a>
            </div>
          </div>
        </div>

        <!-- Row 2: SVG on Left, Text on Right -->
        <div
          class="flex flex-col lg:flex-row-reverse items-center lg:space-x-10 lg:space-x-reverse space-y-8 lg:space-y-0"
        >
          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-cormorant"
            >
              Bangla as a mode of exchange
            </h2>
            <p
              class="text-gray-700 text-base text-justify first-letter:uppercase first-letter:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-midnight-sapphire first-letter:me-3 first-letter:float-start"
            >
              Based out of Canada, our network will primarily focus on building
              a platform of trilingual exchange in Bangla, French, and English.
              We believe that such a platform is required to posit Bangla as a
              world language in all its diverse formations including its
              specific dialects and creole forms. Furthermore, we intend to
              trace the historicity of international as well as intersectional
              exchange associated with Bangla. Going forward one of the primary
              objectives of the network will be to create a polyvocal space
              across class, caste, religious, gender, and other identities. We
              also intend to actively engage with indigenous languages and
              cultures beginning with North America but expanding into other
              parts of the world when the network develops bases in other
              continents.
            </p>
          </div>

          <!-- Image -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <img
              src="../assets/img/Vector2.png"
              alt="SVG Image 2"
              class="w-96 h-auto"
            />
            <div
              class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Image Credit:
              <a
                href="https://ca.pinterest.com/pin/105412447521750832/"
                class="hover:underline"
              >
                https://ca.pinterest.com/pin/105412447521750832/
              </a>
            </div>
          </div>
        </div>

        <!-- Row 3: Text on Left, SVG on Right -->
        <div
          class="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0"
        >
          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-cormorant"
            >
              Tracing international and global experiences of Bangalis
            </h2>
            <p
              class="text-gray-700 text-base text-justify first-letter:uppercase first-letter:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-honey-gold first-letter:me-3 first-letter:float-start"
            >
              One of our primary objectives is to identify the global and glocal
              existence(s) of Bangalis across the world - and in the
              geographical region of Bangla - in order to situate ourselves
              against the varied lived realities of these spaces. We start off
              as a venture of expats based out of Canada and would like to
              eventually grow as an international cultural emissary of Bangalis
              who will encourage and nurture art and culture in relation to
              their homeland(s). We would like to enter into dialogues with
              other migrant as well as expat Bangalis around the world to
              reflect on questions of symbiotic relationships with the different
              communities that we encounter during our voyage across the world.
            </p>
          </div>

          <!-- Image -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <img
              src="../assets/img/Vector3.png"
              alt="SVG Image 3"
              class="w-96 h-auto"
            />
            <div
              class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Image Credit:
              <a
                href="https://ca.pinterest.com/pin/311663236730020802/"
                class="hover:underline"
              >
                https://ca.pinterest.com/pin/311663236730020802/
              </a>
            </div>
          </div>
        </div>

        <!-- Row 4: SVG on Left, Text on Right -->
        <div
          class="flex flex-col lg:flex-row-reverse items-center lg:space-x-10 lg:space-x-reverse space-y-8 lg:space-y-0"
        >
          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-cormorant"
            >
              Bangla Language Teaching
            </h2>
            <p
              class="text-gray-700 text-base text-justify first-letter:uppercase first-letter:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-midnight-sapphire first-letter:me-3 first-letter:float-start"
            >
              believe that without a sense of Bangla, as a language and its
              literary lineage, it becomes quite difficult for the second and
              successive generations to negotiate questions of familial as well
              as linguistic identity. To put it broadly, it leads to a feeling
              of disconnection. Lack of linguistic knowledge also acts as an
              obstruction while accessing the historicity of literary or
              cultural productions in and around Bangla. Therefore, we have
              resolved to focus on providing a platform for Bangla language
              teaching. This will act as a platform that will bring first
              generation immigrants as teachers to engage with successive
              generations and other language enthusiasts as students in a
              classroom set-up.
            </p>
          </div>

          <!-- Image -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <img
              src="../assets/img/Vector4.png"
              alt="SVG Image 4"
              class="w-96 h-auto"
            />
            <div
              class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Image Credit:
              <a
                href="https://ca.pinterest.com/pin/605945324893094181/"
                class="hover:underline"
              >
                https://ca.pinterest.com/pin/605945324893094181/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  data() {
    return {
      hoveredIndex: { section: null, index: null },
    };
  },
  methods: {},
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
