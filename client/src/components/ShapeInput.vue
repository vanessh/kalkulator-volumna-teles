<!-- Komponenta za izbiro telesa.-->
<template>
  <div>
    <h1>Insert Shape</h1>
    <label>
      Shape Type:
      <select v-model="shapeType">
        <option value="triangle">Triangle</option>
        <option value="circle">Circle</option>
        <option value="rectangle">Rectangle</option>
      </select>
    </label>
    <br>
    <component :is="currentShapeComponent"></component>
  </div>
</template>

<script>
import TriangleInput from './TriangleInput.vue';
import CircleInput from './CircleInput.vue';
import RectangleInput from './RectangleInput.vue';

export default {
  name: 'ShapeInput',
  created() {
    console.log("test created")
  },
  mounted() {
    console.log("path",this.$route.path); // Access the path property of the route object
    console.log("TEST");
  },

  data() {
    return {
      shapeType: '',
    };
  },
  computed: {
    currentShapeComponent() {
      switch (this.shapeType) {
        case 'triangle':
          return 'TriangleInput';
        case 'circle':
          return 'CircleInput';
        case 'rectangle':
          return 'RectangleInput';
        default:
          return null;
      }
    },
  },
  components: {
    TriangleInput,
    CircleInput,
    RectangleInput,
  },
};
</script>