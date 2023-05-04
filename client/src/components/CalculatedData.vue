<template>
  <div>
    <h2>Izračunani podatki:</h2>
    <p>Oblika: {{ shapeData.type }}</p>
    <p>Višina: {{ shapeData.height }}</p>
    <p>Dolžina stranice: {{ shapeData.a }}</p>
    <p>Obseg osnove: {{ shapeData.obseg }}</p>
    <p>Ploščina osnove: {{ shapeData.povrsina }}</p>
    <p>Volumen: {{ shapeData.volumen }}</p>
  </div>
</template>

<script>
export default {
  name: 'CalculatedData',
  props: ['shapeData']
};
</script>
