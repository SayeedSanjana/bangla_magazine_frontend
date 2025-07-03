<template>
  <div class="pdf-wrapper">
    <iframe
      :src="pdfPath"
      width="100%"
      height="1000px"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["filename"],
  computed: {
    pdfPath() {
      return `/pdfs/${this.filename}`;
    },
  },
};
</script>
