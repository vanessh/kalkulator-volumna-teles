<template>
  <div>
    <h2>Parametri kroga:</h2>
    <form @submit.prevent="calculateCircleData">
      <label>
        Višina (h):
        <input type="number" v-model.number="height" min="0" max="200" :class="{'is-invalid': !validateHeight}" required>
        <div class="invalid-feedback" v-if="!validateHeight">Višina mora biti med 0 in 200.</div>
      </label>
      <br>
      <label>
        Polmer (r):
        <input type="number" v-model.number="a" min="0" max="200" :class="{'is-invalid': !validateRadius}" required>
        <div class="invalid-feedback" v-if="!validateRadius">Polmer mora biti med 0 in 200.</div>
      </label>
      <br>
      <button class="btn btn-primary" type="submit" :disabled="!isValid">Izračunaj</button>
    </form>
    <CalculatedData v-if="shapeData"></CalculatedData>
  </div>
</template>

<script>
import CalculatedData from './CalculatedData.vue';
export default {
  name: 'CircleInput',
  components: {
    CalculatedData
  },
  props: ['shapeType', 'set_name'],
  data() {
    return {
      height: null,
      radius: null,
    };
  },
  methods: {
    calculateCircleData() {
      const o = parseFloat(this.radius) * 3.14 * 2; //Obseg osnovne ploskve o = 2 * pi * r
      const p = (Math.pow(parseFloat(this.radius), 2)) * 3.14 * 4; //Površina osnovne ploskve p = 4 * pi * r^2
      const V = (4 * 3.14 * Math.pow(parseFloat(this.radius), 3) / 3); //Volumen V = 4 * pi * r^3 / 3
      const shapeData = {
        set_name: this.set_name,
        type: this.shapeType,
        height: parseFloat(this.height),
        radius: parseFloat(this.radius),
        obseg: o,
        povrsina: p,
        volumen: V
      };
      this.$emit('shape-calculated', shapeData)
      /*this.result = (this.height * this.a) / 2;
      const shapeData = {
        type: this.shapeType,
        height: this.height,
        a: this.a,
      };*/
      console.log(shapeData);
    },
  },
  computed: {
    isValid(){
      return  this.height >=0 && this.height <= 200 && this.radius >= 0 && this.radius <= 200 ;
    },
    validateHeight() {
      return this.height >=0 && this.height <= 200;
    },
    validateRadius() {
      return this.radius >= 0 && this.radius <= 200;
    }
  }
};
</script>
