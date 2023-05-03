<template>
  <div>
    <h2>Parametri trikotnika:</h2>
    <form @submit.prevent="calculateTriangleData">
      <label>
        Višina (h):
        <input type="number" v-model.number="height" min="0" max="200" :class="{'is-invalid': !validateHeight}" required>
        <div class="invalid-feedback" v-if="!validateHeight">Višina mora biti med 0 in 200.</div>
      </label>
      <br>
      <label>
        Stranica (a):
        <input type="number" v-model.number="a" min="0" max="200" :class="{'is-invalid': !validateLengthA}" required>
        <div class="invalid-feedback" v-if="!validateLengthA">Dolžina stranice mora biti med 0 in 200.</div>
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
  name: 'TriangleInput',
  components: {
    CalculatedData
  },
  props: ['shapeType'],
  data() {
    return {
      height: null,
      a: null,
    };
  },
  methods: {
    calculateTriangleData() {
      const o = parseFloat(this.a) * 3; //Obseg osnovne ploskve
      const O = (Math.pow(parseFloat(this.a), 2) * Math.sqrt(3)) / 4; //Površina osnovne ploskve
      const V = O * (this.height); //Volumen
      const shapeData = {
        type: this.shapeType,
        height: parseFloat(this.height),
        a: parseFloat(this.a),
        obseg: o,
        povrsina: O,
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
      return  this.height >=0 && this.height <= 200 && this.a >= 0 && this.a <= 200 ;
    },
    validateHeight() {
      return this.height >=0 && this.height <= 200;
    },
    validateLengthA() {
      return this.a >= 0 && this.a <= 200;
    }
  }
};
</script>
