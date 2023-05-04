import { createRouter, createWebHistory } from 'vue-router';
import ShapeInput from '../components/ShapeInput.vue';
import RectangleInput from '../components/RectangleInput.vue';
import TriangleInput from '../components/TriangleInput.vue';
import CircleInput from '../components/CircleInput.vue';
import CalculatedData from '../components/CalculatedData.vue'

const routes = [
  {
    path: '/a',
    name: 'ShapeInput',
    component: ShapeInput,
  },
  {
    path: '/rectangle',
    name: 'RectangleInput',
    component: RectangleInput,
  },
  {
    path: '/circle',
    name: 'CircleInput',
    component: CircleInput
  },
  {
    path: '/triangle',
    name: 'Triangleinput',
    component: TriangleInput
    
  },
  {
    path: '/calculated',
    name: 'CalculatedData',
    component: CalculatedData
    
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
