import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/components/BaiHoc/Day14/ListView.vue";
import CreateView from "@/components/BaiHoc/Day14/CreateView.vue";
import UpdateView from "@/components/BaiHoc/Day14/UpdateView.vue";
import DetailView from "@/components/BaiHoc/Day14/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: ListView, name: "list"},
    { path: "/create", component: CreateView, name: "create"},
    { path: "/detail/:id", component: DetailView, name: "detail"},
    { path: "/update/:id", component: UpdateView, name: "update"},
  ]
});

export default router;
