import ShapeInput from '../components/ShapeInput.vue';
import RectangleInput from '../components/RectangleInput.vue';
import TriangleInput from '../components/TriangleInput.vue';
import CircleInput from '../components/CircleInput.vue';
import CalculatedData from '../components/CalculatedData.vue';
const routes = [
{
    path: "/",
    component: () => import("client/layouts/MainLayout.vue"),
    children: [
      {
        path: '',
        name: 'ShapeInput',
        component: ShapeInput
      }, 
      {
        path: '/rectangle',
        name: 'RectangleInput',
        component: RectangleInput
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
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("components/ErrorNotFound.vue"),
  },
];

export default routes;