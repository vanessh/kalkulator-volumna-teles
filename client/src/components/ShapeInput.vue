<template>
  <div>
    <h1>Izberi lik</h1>
    <label>
      Vrste likov
      <select v-model="shapeType">
        <option value="triangle">Trikotnik</option>
        <option value="circle">Krog</option>
        <option value="rectangle">Pravokotnik</option>
      </select>
    </label>
    <br>
    <component :is="currentShapeComponent" :shapeType="shapeType"></component>
  </div>
</template>

<script>
import TriangleInput from './TriangleInput.vue';
import CircleInput from './CircleInput.vue';
import RectangleInput from './RectangleInput.vue';

export default {
  name: 'ShapeInput',
  data() {
    return {
      shapeType: '',
    };
  },
  computed: {
    currentShapeComponent() {
      switch (this.shapeType) {
        case 'triangle':
          console.log("Triangle");
          return 'TriangleInput';
        case 'circle':
        console.log("Circle");
          return 'CircleInput';
        case 'rectangle':
        console.log("Rectangle");
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
