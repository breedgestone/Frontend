import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded Layouts
const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')
const AuthLayout = () => import('@/layouts/AuthLayout.vue')
const DashboardLayout = () => import('@/layouts/DashboardLayout.vue')
const AdminLayout = () => import('@/layouts/AdminLayout.vue')

// Lazy-loaded Pages
const Home = () => import('@/views/Breedgestone/HomeView.vue')
const About = () => import('@/views/Breedgestone/AboutView.vue')
const Contact = () => import('@/views/Breedgestone/ContactUs.vue')
const PropertiesRentHouse = () => import('@/views/Breedgestone/Properties/RentHouse.vue')
const PropertiesBuyHouse = () => import('@/views/Breedgestone/Properties/BuyHouse.vue')
const PropertiesShortLet = () => import('@/views/Breedgestone/Properties/Shortlet.vue')
const Properties = () => import('@/views/Breedgestone/Properties/Index.vue')
const Consultations = () => import('@/views/Breedgestone/Consultation.vue')
const Products = () => import('@/views/Breedgestone/Products.vue')
const InteriorDesign = () => import('@/views/Breedgestone/InteriorDesign.vue')
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
      { path: 'contact', name: 'contact', component: Contact },
      { path: 'properties', name: 'properties', component: Properties },
      { path: 'properties/rent', name: 'properties-rent', component: PropertiesRentHouse },
      { path: 'properties/buy', name: 'properties-buy', component: PropertiesBuyHouse },
      { path: 'properties/shortlet', name: 'properties-shortlet', component: PropertiesShortLet },
      { path: 'consultations', name: 'consultations', component: Consultations },
      { path: 'products', name: 'products', component: Products },
      { path: 'interior-design', name: 'interior design', component: InteriorDesign },
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
