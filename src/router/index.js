import { createRouter, createWebHistory } from 'vue-router'
import userDashboardRoutes from './userDashboardRoutes.js'
// Lazy-loaded Layouts
const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')
const AuthLayout = () => import('@/layouts/AuthLayout.vue')
const DashboardLayout = () => import('@/layouts/DashboardLayout.vue')
const AdminLayout = () => import('@/layouts/AdminLayout.vue')

// Lazy-loaded Pages
const Home = () => import('@/views/Breedgestone/HomeView.vue')
const About = () => import('@/views/Breedgestone/AboutView.vue')
const Contact = () => import('@/views/Breedgestone/ContactUs.vue')
const Properties = () => import('@/views/Breedgestone/Properties/Index.vue')
const singleProperties = () => import('@/views/Breedgestone/Properties/singleProperties.vue')
const Consultations = () => import('@/views/Breedgestone/Consultation.vue')
const Products = () => import('@/views/Breedgestone/Products/Index.vue')
const ProductDetails = () => import('@/views/Breedgestone/Products/_Id.vue')
const InteriorDesign = () => import('@/views/Breedgestone/InteriorDesign.vue')
const Login = () => import('@/views/Auth/Login.vue')
const Register = () => import('@/views/Auth/Register.vue')
const UserDashboardHome = () => import('@/views/UserDashboard/index.vue')
const AdminHome = () => import('@/views/Admin/index.vue')

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'about', name: 'about', component: About },
      { path: 'contact', name: 'contact', component: Contact },
      {
        path: 'properties/single/:id',
        name: 'property-single',
        component: singleProperties,
        props: true,
      },
      { path: 'properties/rent', name: 'properties-rent', component: Properties },
      { path: 'properties/buy', name: 'properties-buy', component: Properties },
      { path: 'properties/shortlet', name: 'properties-shortlet', component: Properties },
      { path: 'consultations', name: 'consultations', component: Consultations },
      { path: 'interior-design', name: 'interior design', component: InteriorDesign },
      { path: 'products', name: 'products', component: Products },
      { path: 'products/:id', name: 'productDetails', component: ProductDetails },
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
    children: userDashboardRoutes,
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [{ path: '', name: 'admin-dashboard', component: AdminHome }],
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/signup',
    component: Register,
    name: 'Register',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export default router
