<template>
    <div>
      <label for="base-input">Base:</label>
      <label for="area-output">Area:</label>
      <span id="area-output">{{ area }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TriangleInput',
    mounted() {
    console.log(this.$route.path); // Access the path property of the route object
  },
    props: {
      base: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      area: {
        type: Number,
        required: true,
      },
    }
  };
  </script>
  