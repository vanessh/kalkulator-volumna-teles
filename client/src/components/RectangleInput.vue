<template>
  <div>
    <h2>Parametri pravokotnika:</h2>
    <form @submit.prevent="calculateRectangleData">
      <label>
        Višina (h):
        <input type="number" v-model.number="height" min="0" max="200" :class="{'is-invalid': !validateHeight}" required>
        <div class="invalid-feedback" v-if="!validateHeight">Višina mora biti med 0 in 200.</div>
      </label>
      <br>
      <label>
        Stranica (a):
        <input type="number" v-model.number="a" min="0" max="200" :class="{'is-invalid': !validateLengthA}" required>
        <div class="invalid-feedback" v-if="!validateLengthA">Dolžina stranice a mora biti med 0 in 200.</div>
      </label>
      <br>
      <label>
        Stranica (b):
        <input type="number" v-model.number="b" min="0" max="200" :class="{'is-invalid': !validateLengthB}" required>
        <div class="invalid-feedback" v-if="!validateLengthB">Dolžina stranice b mora biti med 0 in 200.</div>
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
  name: 'RectangleInput',
  components: {
    CalculatedData
  },
  props: ['shapeType', 'set_name'],
  data() {
    return {
      height: null,
      a: null,
      b: null
    };
  },
  methods: {
    calculateRectangleData() {
      const o = parseFloat(this.a + this.b) * 2; // Obseg osnovne ploskve o = (a + b) * 2
      const p = parseFloat(this.a * this.b); // Površina osnovne ploskve p = a * b
      const V = p * (this.height); // Volumen: V = a * b * h

      const shapeData = {
        set_name: this.set_name,
        type: this.shapeType,
        height: parseFloat(this.height),
        a: parseFloat(this.a),
        b: parseFloat(this.b),
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
      return  this.height >=0 && this.height <= 200 && this.a >= 0 && this.a <= 200 && this.b >= 0 && this.b <= 200;
    },
    validateHeight() {
      return this.height >=0 && this.height <= 200;
    },
    validateLengthA() {
      return this.a >= 0 && this.a <= 200;
    },
    validateLengthB() {
      return this.b >= 0 && this.b <= 200;
    }
  }
};
</script>
