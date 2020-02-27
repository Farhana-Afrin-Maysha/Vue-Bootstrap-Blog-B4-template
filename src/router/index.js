import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Post from "../views/Post.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  },
  {
    path: "/detail/:teamid",
    name: "Detail",
    component: Detail
  },
];

const router = new VueRouter({
  routes
});

export default router;
