<template>
  <div>
    <button @click="handleAuthClick">Authenticate and Upload</button>
    <input
      type="file"
      @change="handleFileSelect"
      accept="image/*"
      v-if="fileInputVisible"
    />
    <button @click="uploadFile" :disabled="!file">Upload Image</button>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
  </div>
</template>

<script>
export default {
  name: "GoogleDriveUploader",
  data() {
    return {
      file: null,
      uploadStatus: "",
      fileInputVisible: false,
      accessToken: "",
      clienId:
        "356074979133-fsktc1d6jn7o1vkad83jp567lmnl0lh5.apps.googleusercontent.com",
    };
  },
  methods: {
    handleAuthClick() {
      // This method is directly triggered by user action
      this.authenticate();
    },
    authenticate() {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: this.clientId, // Replace with your Client ID
        scope: "https://www.googleapis.com/auth/drive.file",
        callback: (response) => {
          if (response.error) {
            console.error("Authentication failed", response.error);
            this.uploadStatus = "Authentication failed: " + response.error;
          } else {
            this.accessToken = response.access_token;
            this.fileInputVisible = true; // Show file input after successful authentication
            this.uploadStatus =
              "Authentication successful. Please select a file.";
          }
        },
      });
      tokenClient.requestAccessToken({ prompt: "consent" });
    },
    handleFileSelect(event) {
      this.file = event.target.files[0];
      if (this.file) {
        this.uploadStatus =
          "File selected: " + this.file.name + ". Click upload to proceed.";
      }
    },
    async uploadFile() {
      if (!this.file) {
        this.uploadStatus = "Please select a file first.";
        return;
      }

      const formData = new FormData();
      formData.append(
        "metadata",
        new Blob(
          [
            JSON.stringify({
              name: this.file.name,
              mimeType: this.file.type,
              parents: ["1McXenBj_Naz28o-Q3Ij21LQNWhLGjCRK"], // Replace with your actual folder ID
            }),
          ],
          { type: "application/json" }
        )
      );
      formData.append("file", this.file);

      const response = await fetch(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
        {
          method: "POST",
          headers: new Headers({ Authorization: "Bearer " + this.accessToken }),
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        this.uploadStatus = "Upload successful! File ID: " + result.id;
        console.log(result);
      } else {
        this.uploadStatus = "Failed to upload file.";
        console.error("Upload failed:", await response.text());
      }
    },
  },
};
</script>
