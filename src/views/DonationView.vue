<template>
  <div>
    <!-- Hero Banner Section -->
    <div
      class="relative w-screen h-[40vh] flex items-center justify-center text-center text-white bg-section"
    >
      <!-- Gradient overlay -->
      <div class="absolute inset-0"></div>

      <!-- Content -->
      <div class="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1
          class="text-4xl sm:text-5xl font-cormorant font-bold mb-4 text-midnight-sapphire"
        >
          Support Our Cultural Mission
        </h1>
        <p class="text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-purple-800">
          Your contribution helps us bridge distances and celebrate Bengali
          culture across the globe.
        </p>
        <a
          href="#donate"
          class="inline-block bg-amber-400 hover:bg-amber-500 text-indigo-800 font-semibold px-6 py-3 rounded-lg transition"
        >
          Donate Now
        </a>
      </div>
    </div>

    <section class="bg-white py-12 px-4 sm:px-6 lg:px-8 font-playfair">
      <!-- Donation Section -->
      <div
        id="donate"
        class="bg-white rounded-lg p-6 sm:p-10 max-w-5xl mx-auto mb-16"
      >
        <div class="pb-4 mb-4">
          <h2
            class="text-4xl font-cormorant font-bold text-purple-800 mb-3 text-left"
          >
            {{ donationContent.title }}
          </h2>
          <p class="text-gray-600 text-lg text-left max-w-3xl">
            {{ donationContent.subtitle }}
          </p>
        </div>

        <div
          class="bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-10 mb-10"
        >
          <div class="text-center mb-10">
            <h3 class="text-xl font-semibold text-gray-700 mb-2">
              <span class="font-bold text-purple-700">Zeffy</span>
              {{ donationContent.platform.title.split(" ").slice(1).join(" ") }}
            </h3>
            <p class="text-gray-600 mb-6">
              {{ donationContent.platform.description }}
            </p>
            <div
              class="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <button
                @click="toggleZeffyEmbed"
                class="inline-flex items-center gap-2 bg-amber-400 hover:bg-yellow-500 text-indigo-800 font-bold px-6 py-3 rounded-md transition"
              >
                {{ donationContent.platform.buttonText }}
                <svg
                  :class="[
                    'w-4 h-4 transform transition-transform duration-300',
                    showZeffyEmbed ? 'rotate-180' : 'rotate-0',
                  ]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 6.414V17a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 01-1.414-1.414l4-4z"
                  />
                </svg>
              </button>

              <img
                :src="zeffyQR"
                alt="Donate via QR Code"
                class="w-40 h-40 rounded shadow"
              />
            </div>

            <div v-if="showZeffyEmbed" class="mt-6">
              <div
                style="
                  position: relative;
                  overflow: hidden;
                  height: 1200px;
                  width: 100%;
                "
              >
                <iframe
                  title="Donation form powered by Zeffy"
                  style="
                    position: absolute;
                    border: 0;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                  "
                  src="https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-16032"
                  allowpaymentrequest
                  allowTransparency="true"
                ></iframe>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-bold text-purple-700 mb-4">
                Why Donate?
              </h4>
              <ul class="space-y-3 text-gray-700">
                <li
                  v-for="(point, index) in donationContent.impact"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <div class="mt-1 flex-shrink-0">
                    <CircleCheck class="text-amber-500 w-5 h-5" />
                  </div>
                  {{ point }}
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-bold text-purple-700 mb-4">
                Donation Information
              </h4>
              <div class="text-sm text-gray-700 space-y-4">
                <!-- <p> -->
                <!-- <strong>Tax Receipts:</strong> {{ donationContent.info.tax }} -->
                <!-- </p> -->
                <p>
                  <strong>Donation Methods:</strong>
                  {{ donationContent.info.methods }}
                </p>
                <p>
                  <strong>Questions?</strong>
                  {{ donationContent.info.contact }}
                  <a
                    href="mailto:organization@banglaglocal.org"
                    class="text-amber-600 underline"
                    >organization@banglaglocal.org</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Your Impact Section -->
      <div class="bg-white rounded-lg p-6 sm:p-10 max-w-5xl mx-auto mb-16">
        <h2
          class="text-4xl font-cormorant font-bold text-purple-800 mb-3 text-left"
        >
          Your Impact
        </h2>
        <p class="text-gray-600 text-lg text-left max-w-3xl mb-10">
          See how your donations help us preserve and promote Bengali culture
          across Canada and beyond.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(card, index) in impactCards"
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div v-if="card.placeholder">
              <img
                :src="card.placeholder"
                :alt="card.alt"
                class="w-full h-48 object-cover"
              />
            </div>
            <div
              v-else
              class="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 text-sm"
            >
              Image coming soon...
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-900 mb-2">
                {{ card.title }}
              </h3>
              <p class="text-gray-600">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-5xl rounded-lg p-6 sm:p-10 mx-auto mb-16">
        <h2
          class="text-4xl font-cormorant font-bold text-purple-800 mb-3 text-left"
        >
          Frequently Asked Questions
        </h2>
        <p class="text-gray-600 text-lg text-left max-w-3xl mb-10">
          Find answers to common questions about donating to B.A.N.G.L.A.
        </p>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in donationContent.faq"
            :key="index"
            class="border-b pb-2"
          >
            <button
              class="w-full text-left px-1 py-3 font-medium text-purple-800 focus:outline-none flex justify-between items-center"
              @click="toggleFaq(index)"
            >
              <span class="text-base sm:text-lg">{{ faq.question }}</span>
              <svg
                :class="{ 'rotate-180': openFaqIndex === index }"
                class="w-5 h-5 text-purple-800 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition
              enter-active-class="transition-all duration-500 ease-in-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-40 opacity-100"
            >
              <div
                v-if="openFaqIndex === index"
                class="px-1 pt-1 text-gray-600 text-sm overflow-hidden"
              >
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CircleCheck from "@/components/svg/CircleCheck.vue";
import zeffyQR from "@/assets/zeffy/zeffy.png";
import communityEventImg from "@/assets/donation/community-event.png";

const openFaqIndex = ref(null);
const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const showZeffyEmbed = ref(false);
const toggleZeffyEmbed = () => {
  showZeffyEmbed.value = !showZeffyEmbed.value;
};

const donationContent = {
  title: "Make Your Donation",
  subtitle:
    "Your support helps preserve and promote Bengali culture for future generations.",
  platform: {
    title: "Zeffy Donation Platform",
    description:
      "We've partnered with Zeffy to process donations securely. Zeffy is a donation platform that charges 0% platform fees, ensuring that 100% of your donation goes directly to supporting our mission.",
    buttonText: "Donate via Zeffy",
    buttonUrl:
      "https://www.zeffy.com/en-CA/ticketing/bangali-abhibasi-network-a-glocal-linguo-cultural-association-memberships--2025",
  },
  impact: [
    "Support cultural programs and events that preserve Bengali heritage",
    "Fund educational initiatives for the next generation",
    "Help publish our magazine and other cultural materials",
    "Connect Bengali communities across Canada and worldwide",
  ],
  info: {
    // tax: "B.A.N.G.L.A. is a registered non-profit organization. Your donations may be eligible for tax benefits according to Canadian regulations.",
    methods:
      "Through Zeffy, you can donate using credit card, PayPal, or other payment methods.",
    contact: "If you have any questions about donating, please contact us at",
  },
  faq: [
    // {
    //   question: "Is my donation tax-deductible?",
    //   answer:
    //     "Yes, B.A.N.G.L.A. is a registered non-profit organization in Canada. Donations are eligible for tax benefits according to Canadian regulations. You will receive a tax receipt for donations of $20 or more.",
    // },
    {
      question: "How will my donation be used?",
      answer:
        "Your donation directly supports our cultural programs, educational initiatives, magazine publication, and community events. We maintain transparency in our financial reporting, and detailed information is available in our annual reports.",
    },
    {
      question: "Can I make a donation in memory or honor of someone?",
      answer:
        "You can make a tribute donation in memory or honor of someone special. Simply include this information in the message field when making your donation, and we'll acknowledge your thoughtful gift appropriately.",
    },
    {
      question: "Is there a minimum donation amount?",
      answer:
        "No, we appreciate donations of any amount. Every contribution helps us further our mission of preserving and promoting Bengali culture.",
    },
    {
      question: "Why do you use Zeffy for donations?",
      answer:
        "We've partnered with Zeffy because they charge 0% platform fees, ensuring that 100% of your donation goes directly to supporting our mission. Zeffy provides a secure, easy-to-use platform for processing donations while maximizing the impact of your contribution.",
    },
    {
      question: "I am having trouble paying with zeffy, how else can I pay?",
      answer: `Please contact organization@banglaglocal.org for help and we will get back to you within 48 hours.`,
    },
    {
      question: "Can organizations or businesses make donations?",
      answer:
        "Yes, we welcome corporate donations and sponsorships. Businesses can support specific events, programs, or make general contributions. Please contact us at organization@banglaglocal.org to discuss corporate giving opportunities.",
    },
  ],
};

const impactCards = [
  {
    title: "Cultural Events",
    description:
      "Your support helps us organize cultural events, festivals, and performances that showcase Bengali traditions, music, dance, and art.",
    placeholder: communityEventImg,
    alt: "Cultural Events",
  },
  {
    title: "Community Outreach",
    description:
      "We build bridges between Bengali communities worldwide and promote cultural exchange through our magazine and digital platforms.",
    placeholder: "",
    alt: "Community Outreach",
  },
];
</script>
<style>
html {
  scroll-behavior: smooth;
}
.bg-section {
  background-image: url("@/assets/img/donation.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
