import VueRouter from 'vue-router'

const routes = [
  {
    path:'/',
    component: require("./components/Show.vue")
  },
  {
    path:'/FileUpload',
    component: require("./components/FileUpload.vue")
  }
];

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
