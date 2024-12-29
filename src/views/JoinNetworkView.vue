<template>
  <section>
    <!-- Main Content -->
    <div
      class="container mx-auto md:mt-16 md:mb-16 mt-8 mb-8 p-4 md:p-6 min-h-screen"
    >
      <div class="space-y-6 md:p-4 lg:mx-32 md:mx-5">
        <div
          class="bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl shadow-md flex flex-col md:flex-row"
        >
          <!-- Submission Form -->
          <div class="w-full p-6 sm:p-8 md:p-12">
            <h3
              class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-midnight-sapphire font-cormorant"
            >
              Join - Bangali Abhibasi Network: a Glocal Linguo-cultural
              Association <span class="text-amber-600">(B.A.N.G.L.A.)</span>
            </h3>
            <p class="text-3xl font-cormorant font-semibold text-amber-600">
              PERSONAL INFORMATION
            </p>
            <p class="text-base py-3 text-gray-800 md:mb-6">
              Kindly fill up the form to become part of our network.
            </p>
            <form
              action="#"
              method="POST"
              class="space-y-4 text-base"
              @submit.prevent="submitForm"
            >
              <div class="flex flex-col sm:flex-row">
                <div class="w-full md:w-1/3 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium"
                    >First Name <span class="text-red-500">*</span></label
                  >
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                    v-model="form.firstname"
                  />
                </div>
                <div class="w-full md:w-1/3 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium"
                    >Middle Name
                  </label>
                  <input
                    type="text"
                    id="middle_name"
                    name="middle_name"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                    v-model="form.firstname"
                  />
                </div>
                <div class="w-full md:w-1/3 px-2">
                  <label for="last_name" class="block font-medium"
                    >Last Name <span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.lastname"
                    type="text"
                    id="last_name"
                    name="last_name"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row">
                <div class="w-full md:w-1/2 px-2 mb-4 sm:mb-0">
                  <label for="email" class="block font-medium"
                    >Email <span class="text-red-500">*</span>
                    <span class="text-xs text-gray-500 hidden xl:block">
                      (Kindly do not provide any institute email address;
                      instead please provide with your personal one.)</span
                    ></label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                    v-model="form.email"
                  />
                </div>

                <div class="w-full md:w-1/2 px-2">
                  <label for="last_name" class="block font-medium"
                    >Preferred Pronouns
                    <span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.lastname"
                    type="text"
                    id="preferred_pronouns"
                    name="preferred_pronouns"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row">
                <div class="w-full md:w-1/2 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium"
                    >Address <span class="text-red-500">*</span></label
                  >
                  <input
                    type="text"
                    id="address"
                    name="address"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                    v-model="form.firstname"
                  />
                </div>

                <div class="w-full md:w-1/2 px-2">
                  <label for="last_name" class="block font-medium"
                    >Phone Number <span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="form.lastname"
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                    required
                  />
                </div>
              </div>

              <div class="px-2">
                <label for="head_shot" class="block font-medium"
                  >Upload Headshot<span class="text-red-500">*</span>
                  <span class="text-sm text-gray-500">
                    (Upload an image in JPEG, JPG or PNG format, Maximum size
                    limit: 10MB.)</span
                  >
                </label>
                <input
                  @blur="v$.form.headshot.$touch()"
                  type="file"
                  @change="handleHeadshotUpload($event)"
                  accept="image/jpeg, image/png, image/jpg"
                  id="head_shot"
                  name="head_shot"
                  class="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
                <span
                  v-show="v$.form.headshot.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div
                    v-for="error of v$.form.headshot.$errors"
                    :key="error.$uid"
                  >
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>
              <div class="px-2">
                <label for="bio" class="block font-medium"
                  >Bio<span class="text-red-500">*</span>
                  <span class="text-sm text-gray-500">
                    (Maximum 255 characters.)</span
                  >
                </label>
                <textarea
                  @blur="v$.form.bio.$touch()"
                  v-model="form.bio"
                  id="bio"
                  name="bio"
                  rows="2"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                ></textarea>
                <span
                  v-show="v$.form.bio.$error"
                  class="mt-2 text-sm text-crimson-bloom"
                >
                  <div v-for="error of v$.form.bio.$errors" :key="error.$uid">
                    <small class="form-error-text">
                      {{ error.$message }}
                    </small>
                  </div>
                </span>
              </div>

              <p class="text-3xl font-cormorant text-amber-600 font-semibold">
                BROADER INTERESTS
              </p>
              <p class="text-base py-3 text-gray-800 md:mb-6">
                Please let us know your areas of interests with their
                preferences related to various upcoming/planned activities of
                the network. It will help us to reach you out with the
                information according to your preference.
              </p>
              <h3
                class="text-2xl font-cormorant font-semibold text-gray-800 mb-2"
              >
                Broader Interests I: Organization and Outreach
                <span class="text-red-500">*</span>
              </h3>
              <p class="text-sm text-gray-600 italic mb-6">
                e.g.: Preference 1 (Pref. 1) ...
              </p>

              <div class="overflow-x-auto">
                <table
                  class="w-full border-collapse border border-gray-300 text-left mb-4"
                >
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="px-4 py-2 border border-gray-300"></th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 1
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 2
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 3
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Not Interested
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Communication Row -->
                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Communication
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="communication"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="communication"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="communication"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="communication"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Social Media Row -->
                    <tr class="odd:bg-white">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Social Media
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="social-media"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="social-media"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="social-media"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="social-media"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Ground Network Row -->
                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Ground Network
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="ground-network"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="ground-network"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="ground-network"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="ground-network"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Virtual Network Row -->
                    <tr class="odd:bg-white">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Virtual Network
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="virtual-network"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="virtual-network"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="virtual-network"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="virtual-network"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3
                class="text-2xl font-cormorant font-semibold text-gray-800 mb-2"
              >
                Broader Interests II: Editing
                <span class="text-red-500">*</span>
              </h3>
              <p class="text-sm text-gray-600 italic mb-6">
                e.g.: Preference 1 (Pref. 1) ...
              </p>

              <div class="overflow-x-auto">
                <table
                  class="w-full border-collapse border border-gray-300 text-left mb-4"
                >
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="px-4 py-2 border border-gray-300"></th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 1
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 2
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 3
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Not Interested
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- editing text -->
                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Editing (Text)
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="editing_text"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="editing_text"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="editing_text"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="editing_text"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Editing (Visual/Graphic)-->
                    <tr class="">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Editing (Visual/Graphic)
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="edit_gr"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="edit_gr"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="edit_gr"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="edit_gr"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Content (Video) -->
                    <tr class="">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Content (Video)
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="content"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="content"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="content"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="content"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Design (Web) -->
                    <tr class="">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Design (Web)
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="design_web"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="design_web"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="design_web"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="design_web"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3
                class="text-2xl font-cormorant font-semibold text-gray-800 mb-2"
              >
                Preferred Language: Text Editing
                <span class="text-red-500">*</span>
              </h3>
              <p class="text-sm text-gray-600 italic mb-6">
                e.g.: Preference 1 (Pref. 1) ...
              </p>

              <div class="overflow-x-auto">
                <table
                  class="w-full border-collapse border border-gray-300 text-left mb-4"
                >
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="px-4 py-2 border border-gray-300"></th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 1
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 2
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 3
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Not Interested
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- editing text -->
                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Bengali
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="bengali"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="bengali"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="bengali"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="bengali"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Editing (Visual/Graphic)-->
                    <tr class="odd:bg-white">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        French
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="french"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="french"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="french"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="french"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        English
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3
                class="text-2xl font-cormorant font-semibold text-gray-800 mb-2"
              >
                Broader Interests III: Subject Area
                <span class="text-red-500">*</span>
              </h3>
              <p class="text-sm text-gray-600 italic mb-6">
                e.g.: Preference 1 (Pref. 1) ...
              </p>

              <div class="overflow-x-auto">
                <table
                  class="w-full border-collapse border border-gray-300 text-left mb-4"
                >
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="px-4 py-2 border border-gray-300"></th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 1
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 2
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 3
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 4
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 5
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Pref. 6
                      </th>
                      <th
                        class="px-4 py-2 border border-gray-300 text-center font-medium"
                      >
                        Not Interested
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Language and Literature -->
                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Language and Literature
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Pref. 4"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Pref. 5"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Pref. 6"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lang"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Lived Experiences-->
                    <tr class="odd:bg-white">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Lived Experiences
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Pref. 4"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Pref. 5"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Pref. 6"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="lived_exp"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Performing Arts -->
                    <tr class="even:bg-gray-50">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Performing Arts
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Pref. 4"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Pref. 5"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Pref. 6"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="perform_art"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Painting and Photography -->
                    <tr class="odd:bg-white">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Painting and Photography
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Pref. 4"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Pref. 5"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Pref. 6"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="paint_photo"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Science and Technology -->
                    <tr class="">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Science and Technology
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Pref. 4"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Pref. 5"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Pref. 6"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="science"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>

                    <!-- Social and Economic Sciences -->
                    <tr class="">
                      <td class="px-4 py-3 border border-gray-300 font-medium">
                        Social and Economic Sciences
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Pref. 1"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Pref. 2"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Pref. 3"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Pref. 4"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Pref. 5"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Pref. 6"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                      <td class="px-4 py-3 border border-gray-300 text-center">
                        <input
                          type="radio"
                          name="eco"
                          value="Not Interested"
                          class="form-radio text-midnight-sapphire focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="px-2">
                <label for="bio" class="block font-medium"
                  >Additional comments/Suggestions
                  <span class="text-sm text-gray-500">
                    (Maximum 255 characters - Optional)</span
                  >
                </label>
                <textarea
                  v-model="form.bio"
                  id="bio"
                  name="bio"
                  rows="2"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                ></textarea>
              </div>

              <!-- <button
                type="submit"
                class="text-base w-full text-center px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
              >
                Submit Form
              </button> -->
              <div class="pt-6 pb-6">
                <button
                  type="submit"
                  class="text-base w-full text-center px-4 py-3 border-2 border-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
                  :disabled="loading"
                >
                  <span v-if="loading">Submitting...</span>
                  <span v-else>Join Network</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
  helpers,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "JoinNetworkView",
  components: {},
  mounted() {
    this.form.submissionType = this.topicName || "";
    // console.log("Mounted - submissionType:", this.form.submissionType); // Check that the value is set correctly
  },
  watch: {
    topicName(newVal) {
      this.form.submissionType = newVal;
      console.log("Updated topicName:", newVal);
    },
  },

  data() {
    return {
      isDropdownOpen: false,
      options: [],
      loading: false,
      hashtagError: "",
      hashtags: "",
      form: {
        firstname: "",
        lastname: "",
        email: "",
        submissionType: this.topicName || " ",
        hashtags: [], // This will hold the processed hashtags as an array
        headshot: null,
        bio: "",
        files: [],
        description: "",
      },

      activeIndex: null,
    };
  },
  validations() {
    return {
      form: {
        firstname: { required },
        lastname: { required },
        bio: { required, maxLength: maxLength(255), minLength: minLength(10) },
        description: {
          required,
          maxLength: maxLength(255),
          minLength: minLength(10),
        },
        submissionType: { required },
        email: { required, email },
        headshot: {
          required,
          fileType: helpers.withParams({ type: "fileType" }, (value) =>
            ["image/jpeg", "image/png", "image/jpg"].includes(value?.type)
          ),
          size: helpers.withParams(
            { type: "size" },
            (value) => value?.size <= 10 * 1024 * 1024
          ), // 10MB limit
        },
        files: {
          required,
          size: helpers.withParams(
            { type: "size" },
            (value) =>
              Array.from(value || []).reduce(
                (acc, file) => acc + file.size,
                0
              ) <=
              20 * 1024 * 1024 // 20MB total
          ),
        },
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
.scrollable {
  max-height: 950px; /* Adjust height based on your design */
  overflow-y: auto; /* Adds vertical scroll */
  position: relative;
}
/* Loading Spinner */
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3); /* Light border */
  border-top: 4px solid #4b5563; /* Dark border for the spinning effect */
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.8s linear infinite;
}

/* Spinner Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
