// src/router/dashboardRoutes.js

// Lazy-loaded dashboard pages
const DashboardHome = () => import('@/views/UserDashboard/index.vue')
const OrderHistory = () => import('@/views/UserDashboard/OrderHistory.vue')
const Wishlist = () => import('@/views/UserDashboard/Wishlist.vue')
const ShoppingCart = () => import('@/views/UserDashboard/ShoppingCart.vue')
const Messages = () => import('@/views/UserDashboard/Messages.vue')
const Inspection = () => import('@/views/UserDashboard/Inspection.vue')
const Consultation = () => import('@/views/UserDashboard/Consultation.vue')
const RecentlyViewed = () => import('@/views/UserDashboard/RecentlyViewed.vue')
const HelpCenter = () => import('@/views/UserDashboard/HelpCenter.vue')
const Settings = () => import('@/views/UserDashboard/Settings.vue')

export default [
  {
    path: '',
    name: 'user-dashboard',
    component: DashboardHome,
    meta: { requiresAuth: true },
  },
  {
    path: 'orders',
    name: 'user-orders',
    component: OrderHistory,
    meta: { requiresAuth: true },
  },
  {
    path: 'wishlist',
    name: 'user-wishlist',
    component: Wishlist,
    meta: { requiresAuth: true },
  },
  {
    path: 'cart',
    name: 'user-cart',
    component: ShoppingCart,
    meta: { requiresAuth: true },
  },
  {
    path: 'messages',
    name: 'user-messages',
    component: Messages,
    meta: { requiresAuth: true },
  },
  {
    path: 'inspection',
    name: 'user-inspection',
    component: Inspection,
    meta: { requiresAuth: true },
  },
  {
    path: 'consultation',
    name: 'user-consultation',
    component: Consultation,
    meta: { requiresAuth: true },
  },
  {
    path: 'recently-viewed',
    name: 'user-recently-viewed',
    component: RecentlyViewed,
    meta: { requiresAuth: true },
  },
  {
    path: 'help',
    name: 'user-help',
    component: HelpCenter,
    meta: { requiresAuth: true },
  },
  {
    path: 'settings',
    name: 'user-settings',
    component: Settings,
    meta: { requiresAuth: true },
  },
]
