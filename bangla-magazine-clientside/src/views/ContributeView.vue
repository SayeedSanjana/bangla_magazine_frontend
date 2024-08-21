<template ">
    <body class="bg-gray-100 text-gray-800 flex flex-col min-h-screen relative">
        <!-- Header -->
        <Header/>

        <!--Navigation bar-->
        <div class="">
            <NavBar />
        </div>

       <!-- Wrapper with Background Image -->
       <div class="relative flex-grow">
        
        <div class="absolute inset-0 "></div>
        <!-- <img src="../assets/img/culture.jpg" alt="Background"  class="absolute inset-0 w-full h-full object-cover opacity-100">  -->
        

            <!-- Main Content -->
            <main class="container mx-auto p-6 relative z-10 flex-grow">
                <div class="space-y-6">
                    <section class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                        <div class="md:w-3/5">
                            <!-- CTA -->
                            <section name="cta_section" class="border-b-2 border-gray-100 px-4 mb-4">
                                <h3 class="text-3xl font-bold mb-6 text-shadow text-cyan-700 px-2 py-2">Write for Us / Share
                                    your Art | Photography</h3>
                                <p class="text-xl mb-4 font-medium border-l-4 border-cyan-700 text-gray-700 px-4">
                                    We are always seeking fresh perspectives and new voices. Whether you are a seasoned writer
                                    or just starting out, we welcome your contributions. If you are an artist or photographer,
                                    we would love to feature your work in our magazine. Below are some guidelines to help you
                                    get started.
                                </p>
                            </section>

                            <section name="themes" class="border-b-2 border-gray-100 px-4 mb-4">
                                <h4 class="text-2xl font-bold mb-4 text-cyan-700 px-2 py-2">Themes We Are Interested In</h4>
                                <ul class="text-xl space-y-2 mb-4">
                                    <li class="flex items-center"><img src="../assets/svg/check-circle.svg" alt=""
                                            class="w-6 h-6"> <span class="px-2 font-semibold text-gray-800">Bengali culture and
                                            traditions</span></li>
                                    <li class="flex items-center"><img src="../assets/svg/check-circle.svg" alt=""
                                            class="w-6 h-6"><span class="px-2 font-semibold text-gray-800">Stories of the
                                            Bengali diaspora</span></li>
                                    <li class="flex items-center"><img src="../assets/svg/check-circle.svg" alt=""
                                            class="w-6 h-6"> <span class="px-2 font-semibold text-gray-800">Contemporary issues
                                            in Bangladesh</span></li>
                                    <li class="flex items-center"><img src="../assets/svg/check-circle.svg" alt=""
                                            class="w-6 h-6"> <span class="px-2 font-semibold text-gray-800">Historical
                                            perspectives on Bengali heritage</span></li>
                                    <li class="flex items-center"><img src="../assets/svg/check-circle.svg" alt=""
                                            class="w-6 h-6"> <span class="px-2 font-semibold text-gray-800">Innovations and
                                            achievements of Bengalis worldwide</span></li>
                                    <li class="flex items-center"><img src="../assets/svg/check-circle.svg" alt=""
                                            class="w-6 h-6"><span class="px-2 font-semibold text-gray-800">Personal narratives
                                            and memoirs related to Bengali identity</span></li>
                                </ul>
                            </section>

                            <section name="guidelines" class="bg-gradient-to-r from-amber-50 to-gray-100 border-4 border-amber-100 rounded-lg px-4 py-4">
                                <h4 class="text-2xl font-bold mb-4 px-2 py-2">Submission Guidelines</h4>
                                <ul class="list-disc list-inside text-xl space-y-2 mb-4 font-medium">
                                    <li>Choose a topic that aligns with our themes of Bengali culture and diaspora experiences.
                                    </li>
                                    <li>Include a brief bio and a headshot with your submission.</li>
                                    <li>Provide a description of your work and its significance to Bengali culture.</li>
                                    <li>Contributions are accepted in Bengali, English, and French.</li>
                                    <li>All submissions should be in DOCX or PDF format.</li>
                                    <li>Submit high-resolution images in JPG or PNG format.</li>
                                    <li>Length:
                                        <ul class="list-disc list-inside pl-6">
                                            <li>Articles: Up to 3000 words.</li>
                                            <li>Short Stories: Up to 5000 words.</li>
                                            <li>Poetry: Up to 50 lines per poem.</li>
                                            <li>Art & Photography: Up to 15 photos.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <!-- Submission Form -->
                        <div class="md:w-2/5 md:pl-6">
                            <h3 class="text-3xl font-bold mb-6 text-shadow text-cyan-700">Submit Your Work</h3>
                            <form action="#" method="POST" class="space-y-4">
                                <!-- First name & Last name -->
                                <div class="flex">
                                    <div class="w-1/2 px-2">
                                        <label for="first_name" class="block text-lg font-medium">First Name</label>
                                        <input type="text" id="first_name" name="first_name"
                                            class="w-full p-2 border border-gray-300 rounded-lg" required>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <label for="last_name" class="block text-lg font-medium">Last Name</label>
                                        <input type="text" id="last_name" name="last_name"
                                            class="w-full p-2 border border-gray-300 rounded-lg" required>
                                    </div>
                                </div>
                                <!-- Email and submission type -->
                                <div class="px-2">
                                    <label for="email" class="block text-lg font-medium">Email</label>
                                    <input type="email" id="email" name="email"
                                        class="w-full p-2 border border-gray-300 rounded-lg" required>
                                </div>
                                <div class="px-2">
                                    <label for="submission-type" class="block text-lg font-medium">Submission Type</label>
                                    <select id="submission-type" name="submission-type"
                                        class="w-full p-2 border border-gray-300 bg-amber-50 rounded-lg" required>
                                        <option value="">None</option>
                                        <option value="non_fiction_annual_theme">Annual Theme</option>
                                        <option value="non_fiction_open_submissions">Open Submissions</option>
                                        <option value="non_fiction_travel">Travel Writing</option>
                                        <option value="non_fiction_memoirs">Memoirs</option>
                                        <option value="non_fiction_personal_accounts">1st Person Accounts</option>
                                        <option value="non_fiction_interviews">Interviews</option>
                                        <option value="non_fiction_science_tech">Science & Technology</option>
                                        <option value="fiction_poetry">Fiction (Poetry)</option>
                                        <option value="fiction_short">Fiction (Short)</option>
                                        <option value="fiction_long">Fiction (Long)</option>
                                        <option value="fiction_scripts">Fiction (Scripts)</option>
                                        <option value="artwork">Artwork</option>
                                        <option value="photography">Photography</option>
                                    </select>
                                </div>
                                <div class="px-2">
                                    <label for="tags" class="block text-lg font-medium">Hash tags</label>
                                    <input type="text" id="tags" name="tags"
                                        class="w-full p-2 border border-gray-300 rounded-lg" required>
                                </div>
                                <div class="px-2">
                                    <label for="head_shot" class="block text-lg font-medium">Upload Headshot</label>
                                    <input type="file" id="head_shot" name="head_shot"
                                        class="w-full p-2 border border-gray-300 rounded-lg" required>
                                </div>
                                <div class="px-2">
                                    <label for="bio" class="block text-lg font-medium">Bio</label>
                                    <textarea id="bio" name="bio" rows="2" class="w-full p-2 border border-gray-300 rounded-lg"
                                        required></textarea>
                                </div>
                                <div class="px-2">
                                    <label for="file" class="block text-lg font-medium">Upload File</label>
                                    <input type="file" id="file" name="file"
                                        class="w-full p-2 border border-gray-300 rounded-lg" required>
                                </div>
                                <div class="px-2">
                                    <label for="description" class="block text-lg font-medium">Brief description of your
                                        work</label>
                                    <textarea id="description" name="description" rows="4"
                                        class="w-full p-2 border border-gray-300 rounded-lg" required></textarea>
                                </div>
                                <button
            class="bg-gradient-to-r from-amber-300 to-amber-500  uppercase w-full text-gray-600 font-bold py-3 px-4 rounded hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            Submit
          </button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        <!--Footer-->
      <div class="">
          <Footer />
      </div>
    </body>
    
</template>
<script>
import NavBar from "../components/icons/Navigation.vue";
import Footer from "../components/icons/Footer.vue";
import Header from "../components/icons/Header.vue";
export default {
    components: {
	NavBar,
    Footer,
    Header
	},
    data() {
        return {
           
        }
    },
    methods: {
        
    }
    
    
}
</script>
<style scoped>

    
</style>