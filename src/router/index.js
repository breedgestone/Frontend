import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded Layouts
const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')
const AuthLayout = () => import('@/layouts/AuthLayout.vue')
const DashboardLayout = () => import('@/layouts/DashboardLayout.vue')
const AdminLayout = () => import('@/layouts/AdminLayout.vue')

// Lazy-loaded Pages
const Home = () => import('@/views/Breedgestone/HomeView.vue')
const About = () => import('@/views/Breedgestone/AboutView.vue')
// const Login = () => import('@/views/Auth/Login.vue')
// const Register = () => import('@/views/Auth/Register.vue')
const UserDashboardHome = () => import('@/views/UserDashboard/index.vue')
const AdminHome = () => import('@/views/Admin/index.vue')

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'about', name: 'about', component: About },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      // { path: 'login', name: 'login', component: Login },
      // { path: 'register', name: 'register', component: Register }
    ],
  },
  {
    path: '/user/dashboard',
    component: DashboardLayout,
    children: [{ path: '', name: 'user-dashboard', component: UserDashboardHome }],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [{ path: '', name: 'admin-dashboard', component: AdminHome }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
