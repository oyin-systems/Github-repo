import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/components/NotFound.vue";
import ReposList from "@/components/ReposList.vue";
import RepoDetails from "@/components/RepoDetails.vue";
import HomePage from "@/components/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/repositories",
    component: ReposList,
  },
  {
    path: "/repositories/:repoName",
    name: "repo-details",
    component: RepoDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
