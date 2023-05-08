import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage";
import Booking from "../components/Booking";
import SelectedSlots from "../components/SelectedSlots";

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/book",
    name: "book",
    component: Booking
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path:"/slots",
    name:'slot',
    component:SelectedSlots
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
