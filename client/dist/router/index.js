import { createRouter, createWebHashHistory } from 'vue-router/dist/vue-router.esm-bundler.js';
import ShapeInput from '../components/ShapeInput.vue';
import RectangleInput from '../components/RectangleInput.vue';
import TriangleInput from '../components/TriangleInput.vue';
import CircleInput from '../components/CircleInput.vue';
const routes = [{
  path: '/',
  name: 'ShapeInput',
  component: ShapeInput
}, {
  path: '/rectangle',
  name: 'RectangleInput',
  component: RectangleInput
}, {
  path: '/circle',
  name: 'CircleInput',
  component: CircleInput
}, {
  path: '/triangle',
  name: 'Triangleinput',
  component: TriangleInput
}];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;