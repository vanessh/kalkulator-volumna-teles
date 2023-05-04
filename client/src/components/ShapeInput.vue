<template>
  <div>
    <h1>Izberite lik</h1>
    <label>
      Vrste likov
      <select v-model="shapeType">
        <option value="triangle">Trikotnik</option>
        <option value="circle">Krog</option>
        <option value="rectangle">Pravokotnik</option>
      </select>
    </label>
    <br>
    <label>
      Ime seta:
      <input type="text" v-model="set_name" required>
    </label>
    <br>
    <component :is="currentShapeComponent" :shapeType="shapeType"></component>
    <CalculatedData v-if="calculatedShapeData"></CalculatedData>
    <button class="btn btn-success" @click="saveParameters">Save parameters</button>
  </div>
</template>

<script>
import TriangleInput from './TriangleInput.vue';
import CircleInput from './CircleInput.vue';
import RectangleInput from './RectangleInput.vue';
import CalculatedData from './CalculatedData.vue';

import axios from 'axios';

export default {
  name: 'ShapeInput',
  data() {
    return {
      shapeType: '',
      calculatedShapeData: null,
      parameters: {
        set_name: '',
        type: '',
        height: null,
        a: null,
        b: null,
        radius: null
      }
    };
  },
  methods: {
    handleShapeCalculated(data){
      this.calculatedShapeData = data;
    },
    saveParameters() {
      this.parameters.set_name = this.set_name;
      this.parameters.type = this.shapeType;
      this.parameters.height = parseInt(this.height);
      this.parameters.a = parseInt(this.a);
      this.parameters.b = parseInt(this.b);
      this.parameters.radius = parseFloat(this.radius);

      axios.post('/api/parameters', this.parameters)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  computed: {
    isValid(){
      return this.parameters.height >=0 && this.parameters.height <= 200 && this.parameters.a >= 0 && this.parameters.a <= 200 ;
    },
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
    CalculatedData
  },
};
</script>
