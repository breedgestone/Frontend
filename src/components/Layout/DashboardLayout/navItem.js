// ✅ Import all icons at the top
import home from '@/assets/svg/userDashboard/home.svg'
import activeHome from '@/assets/svg/userDashboard/activeHome.svg'

import orderHistory from '@/assets/svg/userDashboard/orderHistory.svg'
import activeOrderHistory from '@/assets/svg/userDashboard/activeOrderHistory.svg'

import wishlist from '@/assets/svg/ash-heart-light.svg'
import activeWishlist from '@/assets/svg/userDashboard/activeWishlist.svg'

import shoppingCart from '@/assets/svg/userDashboard/cart.svg'
import activeShoppingCart from '@/assets/svg/userDashboard/activeShoppingCart.svg'

import messages from '@/assets/svg/userDashboard/messages.svg'
import activeMessages from '@/assets/svg/userDashboard/activeMessages.svg'

import inspection from '@/assets/svg/userDashboard/inspection.svg'
import activeInspection from '@/assets/svg/userDashboard/activeInspection.svg'

import consultation from '@/assets/svg/userDashboard/consultation.svg'
import activeConsultation from '@/assets/svg/userDashboard/activeConsultation.svg'

import recentlyViewed from '@/assets/svg/userDashboard/recentlyViewed.svg'
import activeRecentlyViewed from '@/assets/svg/userDashboard/activeRecentlyViewed.svg'

import helpCenter from '@/assets/svg/userDashboard/helpCenter.svg'
import activeHelpCenter from '@/assets/svg/userDashboard/activeHelpCenter.svg'

import setting from '@/assets/svg/userDashboard/setting.svg'
import activeSetting from '@/assets/svg/userDashboard/activeSetting.svg'

// ✅ Now use the imported variables
const navItems = [
  {
    label: 'Overview',
    to: '/user/dashboard',
    icon: home,
    activeIcon: activeHome,
  },
  {
    label: 'Order History',
    to: '/user/dashboard/orders',
    icon: orderHistory,
    activeIcon: activeOrderHistory,
  },
  {
    label: 'Wishlist',
    to: '/user/dashboard/wishlist',
    badge: 8,
    icon: wishlist,
    activeIcon: activeWishlist,
  },
  {
    label: 'Shopping Cart',
    to: '/user/dashboard/cart',
    badge: 4,
    icon: shoppingCart,
    activeIcon: activeShoppingCart,
  },
  {
    label: 'Messages',
    to: '/user/dashboard/messages',
    badge: 10,
    icon: messages,
    activeIcon: activeMessages,
  },
  {
    label: 'Inspection',
    to: '/user/dashboard/inspection',
    icon: inspection,
    activeIcon: activeInspection,
  },
  {
    label: 'Consultation',
    to: '/user/dashboard/consultation',
    icon: consultation,
    activeIcon: activeConsultation,
  },
  {
    label: 'Recently Viewed',
    to: '/user/dashboard/recently-viewed',
    icon: recentlyViewed,
    activeIcon: activeRecentlyViewed,
  },
  {
    label: 'Help Center',
    to: '/user/dashboard/help',
    icon: helpCenter,
    activeIcon: activeHelpCenter,
  },
  {
    label: 'Settings',
    to: '/user/dashboard/settings',
    icon: setting,
    activeIcon: activeSetting,
  },
]

export default navItems
