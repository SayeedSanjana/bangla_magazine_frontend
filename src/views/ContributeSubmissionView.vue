<template>
  <section>
    <!-- Main Content -->
    <div class="container mx-auto md:mt-16 mt-8 p-4 md:p-6 min-h-screen">
      <div class="space-y-6 md:p-4">
        <div
          class="bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl shadow-md flex flex-col md:flex-row"
        >
          <!-- Left Section with Scroll -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <div
              name="cta_section"
              class="border-b-2 border-gray-100 pb-4 mb-4"
            >
              <h3
                class="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-midnight-sapphire px-2 py-1"
              >
                <span class="font-cormorant font-bold">
                  Join the conversation with the B.A.N.G.L.A. community</span
                >

                <br />
                <span class="text-base mt-2 text-gray-800"
                  >Contribute with your visual/performance art, prose, poetry,
                  essays, and more..</span
                >
              </h3>
              <button
                @click="contribute"
                class="text-base px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-honey-gold hover:border-2 hover:text-honey-gold"
              >
                Explore Our Submission Topic
              </button>
            </div>

            <div name="guidelines" class="px-2 sm:px-4 py-4">
              <h4
                class="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 px-2 py-2 font-cormorant text-gray-700"
              >
                Submission Guidelines
              </h4>

              <div id="accordion-open" class="p-3 w-full">
                <div v-for="(item, index) in accordionItems" :key="index">
                  <h2 :id="`accordion-open-heading-${index}`">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full p-4 sm:p-5 font-medium text-gray-400 rounded-xl border text-base sm:text-lg border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                      @click="toggleAccordion(index)"
                      :aria-expanded="isOpen(index)"
                      :aria-controls="`accordion-open-body-${index}`"
                    >
                      <span class="flex items-center text-base text-gray-700">
                        <svg
                          class="w-5 h-5 me-2 shrink-0 text-amber-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {{ item.title }}
                      </span>
                      <svg
                        v-if="isOpen(index)"
                        class="w-3 h-3 rotate-180 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5L5 1 1 5"
                        />
                      </svg>
                      <svg
                        v-else
                        class="w-3 h-3 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1l4 4 4-4"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    v-show="isOpen(index)"
                    :id="`accordion-open-body-${index}`"
                    class="p-5 border border-b-0 border-gray-200 bg-slate-100 text-gray-700 text-sm md:text-base"
                    :aria-labelledby="`accordion-open-heading-${index}`"
                    v-html="item.content"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submission Form -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <h3
              class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-midnight-sapphire font-cormorant"
            >
              Submit Your Work For Review
            </h3>
            <p class="text-base py-6 text-gray-800 md:mb-6">
              Complete the form below to submit your work.
            </p>
            <form
              action="#"
              method="POST"
              class="space-y-4 text-base"
              @submit.prevent="handleSubmit"
            >
              <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <label for="first_name" class="block font-medium"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    required
                    v-model="form.firstName"
                  />
                </div>
                <div class="w-full sm:w-1/2 px-2">
                  <label for="last_name" class="block font-medium"
                    >Last Name</label
                  >
                  <input
                    v-model="form.lastName"
                    type="text"
                    id="last_name"
                    name="last_name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div class="px-2">
                <label for="email" class="block font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                  required
                  v-model="form.email"
                />
              </div>
              <div class="px-2 relative flex-grow">
                <label for="submission-type" class="block font-medium"
                  >Submission Type</label
                >
                <select
                  id="submission-type"
                  name="submission-type"
                  class="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  required
                  v-model="form.submissionType"
                >
                  <option value="">None</option>
                  <option value="non_fiction_annual_theme">Annual Theme</option>
                  <option value="non_fiction_open_submissions">
                    Open Submissions
                  </option>
                  <option value="non_fiction_travel">Travel Writing</option>
                  <option value="non_fiction_memoirs">Memoirs</option>
                  <option value="non_fiction_personal_accounts">
                    1st Person Accounts
                  </option>
                  <option value="non_fiction_interviews">Interviews</option>
                  <option value="non_fiction_science_tech">
                    Science & Technology
                  </option>
                  <option value="fiction_poetry">Fiction (Poetry)</option>
                  <option value="fiction_short">Fiction (Short)</option>
                  <option value="fiction_long">Fiction (Long)</option>
                  <option value="fiction_scripts">Fiction (Scripts)</option>
                  <option value="artwork">Artwork</option>
                  <option value="photography">Photography</option>
                </select>
              </div>
              <div class="px-2">
                <label for="tags" class="block font-medium">Hash tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                  v-model="form.hashtags"
                />
              </div>
              <div class="px-2">
                <label for="head_shot" class="block font-medium"
                  >Upload Headshot
                  <span class="text-sm text-gray-500">
                    (Upload an image in JPEG or PNG format, within 5MB.)</span
                  >
                </label>
                <input
                  @change="handleFileUpload('headshot', $event)"
                  type="file"
                  id="head_shot"
                  name="head_shot"
                  class="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
              </div>
              <div class="px-2">
                <label for="bio" class="block font-medium">Bio</label>
                <textarea
                  v-model="form.bio"
                  id="bio"
                  name="bio"
                  rows="2"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                ></textarea>
              </div>
              <div class="px-2">
                <label for="file" class="block font-medium"
                  >Upload File
                  <span class="text-sm text-gray-500">
                    (You can upload a single file or select multiple files at
                    once, in formats such as .doc, .pdf, and .docx, with a total
                    size limit of 10MB.)</span
                  ></label
                >
                <input
                  @change="handleFileUpload('files', $event)"
                  multiple
                  type="file"
                  id="file"
                  name="file"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                />
              </div>
              <div class="px-2">
                <label for="description" class="block text-lg font-medium"
                  >Brief description of your work</label
                >
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-yellow-400 focus:border-opcity-25"
                  required
                  v-model="this.form.briefDescriptionOfWork"
                >
                </textarea>
              </div>
              <button
                @click="handleSubmit"
                class="group relative inline-flex items-center w-full overflow-hidden border-4 border-yellow-400 border-opacity-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg px-6 py-3 font-medium text-midnight-sapphire shadow-md transition duration-300 ease-out hover:border-4 hover:border-double"
              >
                <span
                  class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gray-50 text-gray-600 duration-300 group-hover:translate-x-0"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span
                  class="ease text-base absolute flex h-full w-full transform items-center text-center text-white font-semibold tracking-widest justify-center transition-all duration-300 group-hover:translate-x-full"
                  >Submit Form</span
                >
                <span class="invisible relative">Submit</span>
              </button>
            </form>
            <p v-if="submissionResult">{{ submissionResult }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "ContributeView",
  mounted() {
    // Initialize the Google API and Token Client when the component is mounted
    this.initializeGoogleAPI();
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        submissionType: "",
        hashtags: "",
        bio: "",
        headshot: null,
        files: [],
        briefDescriptionOfWork: "",
      },
      submissionResult: "",
      tokenClient: null,
      accessToken: "",
      userId: "",
      documentId: "",
      activeIndex: null,
      apiKey: "AIzaSyAA4Oz0AN_hvg8cDAUCZNAPx3Qiuwd5Tf4",
      clientId:
        "356074979133-fsktc1d6jn7o1vkad83jp567lmnl0lh5.apps.googleusercontent.com",
      spreadsheetId: "18-GorhLZsJzKDo5COFDO_bWD5M2AO6ZHUWHfp4tCh9M",
      accordionItems: [
        {
          title: "Stylesheet",
          content:
            "Submissions in English can follow any of the variants (British, American, Canadian, Australian) in terms of spellings. All we request is that authors be consistent with whichever form they choose...",
        },
        {
          title: "Plagiarism",
          content:
            "We are soliciting original unpublished articles. Contributors are expected to provide due references, for example, weblinks for copyrighted materials...",
        },
        {
          title: "Regarding Generative AI",
          content:
            "For this magazine, the use of artificial intelligence (e.g., ChatGPT) is discouraged and will be treated as plagiarism...",
        },
        {
          title: "References",
          content:
            "We encourage contributors to include a list of in-text citations and references at the end of reflective, semi-academic, expository, and public writings...",
        },
        {
          title: "Formatting Logic",
          content:
            "For articles, author name (Last name, First name - Initials only), 'Article name.' Journal name, Volume, Issue, Year of publication...",
        },
        {
          title: "Page Limit for Individual Submissions",
          content:
            "Standard for Double-Spaced Times New Roman 12 in English as well as French and Vrinda 12 for Bangla...",
        },
        {
          title: "Contributor’s bio",
          content:
            "Contributors must include a brief bio in about 100 words and a photograph for publication along with their pieces...",
        },
        {
          title: "Contact info",
          content:
            "Contributors must provide their email ids. Other contact details including phone, address, and social media profile (optional)...",
        },
      ],
    };
  },
  methods: {
    async initializeGoogleAPI() {
      try {
        // Load the Google API client library
        await new Promise((resolve) => {
          gapi.load("client", async () => {
            await gapi.client.init({
              apiKey: this.apiKey, // Replace with your API Key
              discoveryDocs: [
                "https://sheets.googleapis.com/$discovery/rest?version=v4",
                "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
              ],
            });
            console.log("Google API initialized");
            resolve();
          });
        });

        // Initialize Google Identity Services token client
        this.tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: this.clientId, // Replace with your Client ID

          scope:
            "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file",

          // prompt: "consent",
          callback: (response) => {
            if (response.error) {
              console.error("Error obtaining token:", response);
            } else {
              console.log("Token received:", response.access_token);
              this.accessToken = response.access_token; // Store the token for further requests
              this.finalizeSubmission(); // Proceed with the form submission after authorization
            }
          },
        });
      } catch (error) {
        console.error("Error initializing Google API:", error);
      }
    },

    // Finalize form submission after authorization
    async finalizeSubmission() {
      try {
        // Step 1: Check if the user already exists in the Google Sheet
        const existingUserId = await this.checkIfUserExists(this.form.email);

        // Step 2: If user exists, reuse the same User ID; otherwise, generate a new one
        if (existingUserId) {
          this.userId = existingUserId;
          console.log(`User exists. Reusing User ID: ${this.userId}`);
        } else {
          this.userId = this.generateUUID(); // Generate a new UUID if the user doesn't exist
          console.log(`New user. Generated new User ID: ${this.userId}`);
        }

        // Step 3: Always generate a new Document ID for each submission
        this.documentId = this.generateDocumentId();
        console.log(`Generated new Document ID: ${this.documentId}`);

        // Step 4: Upload files to Google Drive
        await this.uploadFilesToGoogleDrive();
      } catch (error) {
        console.error("Error during form submission:", error);
        this.submissionResult = "Error occurred while submitting the form.";
      }
    },

    // Check if the user already exists in the Google Sheet
    async checkIfUserExists(email) {
      const sheets = gapi.client.sheets;
      const request = {
        spreadsheetId: this.spreadsheetId, // Replace with your Google Sheets ID
        range: "Sheet1!A1:Z1000", // Adjust the range to cover all rows where emails may exist
      };

      const response = await sheets.spreadsheets.values.get(request);
      const rows = response.result.values;

      if (rows) {
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          // Assuming email is in the 3rd column (index 2)
          if (row[2] === email) {
            // Assuming User ID is in the 8th column (index 7)
            return row[7]; // Return the existing User ID
          }
        }
      }

      return null; // Return null if the user doesn't exist
    },

    // Generate a unique UUID for the user
    generateUUID() {
      const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
      console.log("Generated UUID:", uuid); // Check if UUID is being generated
      return uuid;
    },

    // Generate a unique Document ID (based on timestamp)
    generateDocumentId() {
      const docId = `doc-${Date.now()}`;
      console.log("Generated Document ID:", docId); // Check if Document ID is being generated
      return docId;
    },

    // Upload files to Google Drive
    //   if (!this.form.headshot) {
    //     console.error("No headshot file to upload.");
    //     return null;
    //   }

    //   const folderId = "1McXenBj_Naz28o-Q3Ij21LQNWhLGjCRK"; // Your Folder ID

    //   const fileMetadata = {
    //     name: "Headshot-" + this.form.email,
    //     mimeType: this.form.headshot.type,
    //     parents: [folderId],
    //   };

    //   const media = {
    //     mimeType: this.form.headshot.type,
    //     body: this.form.headshot,
    //   };

    //   try {
    //     const response = await gapi.client.drive.files.create({
    //       resource: fileMetadata,
    //       media: media,
    //       fields: "id, parents, webContentLink",
    //     });

    //     if (response.status === 200) {
    //       console.log("File uploaded successfully", response.result);
    //       return `https://drive.google.com/drive/folders/${folderId}`;
    //     } else {
    //       console.error("Failed to upload file", response);
    //       return null;
    //     }
    //   } catch (err) {
    //     console.error("API Error during file upload: ", err);
    //     return null;
    //   }
    // },

    // Helper function to upload a file to Google Drive
    // async uploadFileToDrive(file, folderId) {
    //   try {
    //     const response = await gapi.client.drive.files.create({
    //       resource: {
    //         name: file.name,
    //         parents: [folderId],
    //       },
    //       media: {
    //         mimeType: file.type,
    //         body: new Blob([file]),
    //       },
    //       fields: "id",
    //       headers: {
    //         Authorization: `Bearer ${this.accessToken}`,
    //       },
    //     });

    //     console.log("File uploaded successfully: ", response.result);
    //     return response.result.id;
    //   } catch (error) {
    //     console.error("Error uploading file: ", error);
    //   }
    // },

    // Store form data in Google Sheets
    // async storeDataInGoogleSheets(folderLink) {
    //   const sheets = gapi.client.sheets;

    //   // Prepare row data for the spreadsheet
    //   const rowData = [
    //     this.form.firstName,
    //     this.form.lastName,
    //     this.form.email,
    //     this.form.submissionType,
    //     this.form.hashtags,
    //     folderLink, // Link to the uploaded files in Google Drive
    //     this.form.bio,
    //     this.userId, // Include the unique User ID
    //     this.documentId, // Include the unique Document ID
    //     new Date().toLocaleDateString(), // Date of submission
    //   ];

    //   const request = {
    //     spreadsheetId: this.spreadsheetId, // Replace with your Google Sheets ID
    //     range: "Sheet1!A1",
    //     valueInputOption: "RAW",
    //     insertDataOption: "INSERT_ROWS",
    //     resource: {
    //       values: [rowData],
    //     },
    //   };

    //   const response = await sheets.spreadsheets.values.append(request);
    //   return response.status === 200;
    // },

    handleFileUpload(type, event) {
      if (type === "headshot") {
        this.form.headshot = event.target.files[0]; // Single headshot file
      } else if (type === "files") {
        this.form.files = Array.from(event.target.files); // Store multiple files as an array
      }
    },

    handleSubmit() {
      if (!this.accessToken) {
        this.tokenClient.requestAccessToken();
      } else {
        finalizeSubmission();
      }
    },

    async uploadFilesToGoogleDrive() {
      try {
        const folderId = await this.createGoogleDriveFolder(); // Create folder for other files
        let uploadedFiles = [];

        let headshotLink = null;

        // Upload headshot if available
        if (this.form.headshot) {
          headshotLink = await this.uploadFile(
            this.form.headshot,
            folderId,
            "Headshot"
          );
        }

        // Upload additional files to the same folder
        for (let file of this.form.files) {
          const fileLink = await this.uploadFile(file, folderId, "File");
          uploadedFiles.push(fileLink);
        }

        // Generate the folder link (all other files are uploaded in this folder)
        const folderLink = `https://drive.google.com/drive/folders/${folderId}`;

        // Store data in Google Sheets
        const success = await this.storeDataInGoogleSheets(
          headshotLink,
          folderLink
        );

        if (success) {
          this.submissionResult = "Form submitted successfully!";
        } else {
          this.submissionResult = "Failed to store data in Google Sheets.";
        }
      } catch (error) {
        console.error("Error during file upload or data storage:", error);
        this.submissionResult = "An error occurred while uploading files.";
      }
    },

    async createGoogleDriveFolder() {
      const response = await axios.post(
        "https://www.googleapis.com/drive/v3/files",
        {
          name: `${this.form.email}-${this.documentId}`,
          mimeType: "application/vnd.google-apps.folder",
          parents: [this.folderId],
        },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      return response.data.id;
    },

    async uploadFile(file, folderId, fileType) {
      const fileMetadata = {
        name: `${fileType}-${this.userId}-${this.documentId}`,
        parents: [folderId],
      };

      const formData = new FormData();
      formData.append(
        "metadata",
        new Blob([JSON.stringify(fileMetadata)], { type: "application/json" })
      );
      formData.append("file", file);

      const response = await axios.post(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
        formData,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "multipart/related",
          },
        }
      );
      return `https://drive.google.com/file/d/${response.data.id}`;
    },

    async storeDataInGoogleSheets(headshotLink, folderLink) {
      const sheets = gapi.client.sheets;

      // Prepare row data for the spreadsheet
      const rowData = [
        this.form.firstName,
        this.form.lastName,
        this.form.email,
        this.form.submissionType,
        this.form.hashtags,
        headshotLink, // Store the headshot link in one column
        folderLink, // Store the folder link (containing other files) in another column

        this.userId, // Include the unique User ID
        this.documentId, // Include the unique Document ID
        new Date().toLocaleDateString(), // Date of submission
        this.form.bio,
        this.briefDescriptionOfWork,
      ];

      const request = {
        spreadsheetId: this.spreadsheetId, // Replace with your Google Sheets ID
        range: "Sheet1!A1",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        resource: {
          values: [rowData],
        },
      };

      const response = await sheets.spreadsheets.values.append(request);
      return response.status === 200;
    },

    contribute() {
      this.$router.push("/contribute");
    },
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isOpen(index) {
      return this.activeIndex === index;
    },
  },
};
</script>

<style scoped>
.scrollable {
  max-height: 950px; /* Adjust height based on your design */
  overflow-y: auto; /* Adds vertical scroll */
  position: relative;
}
</style>
