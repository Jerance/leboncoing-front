import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductViewVue from "../views/ProductView.vue";
import ProductListViewVue from "../views/ProductListView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductViewVue,
  },
  {
    path: "/productlist",
    name: "productlist",
    component: ProductListViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
