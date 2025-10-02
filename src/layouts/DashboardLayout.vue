<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from '@/components/Layout/DashboardLayout/Sidebar.vue'
import UserDashboardNavbar from '@/components/Layout/DashboardLayout/UserDashboardNavbar.vue';

const isSidebarOpen = ref(true);

const handleResize = () => {
  if (window.innerWidth < 900) {
    isSidebarOpen.value = false;
  } else {
    isSidebarOpen.value = true;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <Sidebar v-if="isSidebarOpen" @close="toggleSidebar" :class="['sidebar', { 'sidebar-open': isSidebarOpen }]" />

    <!-- Main Content -->
    <main class="content">
      <UserDashboardNavbar :showLogo="isSidebarOpen ? false : true" />
      <div class="sm:p-8 p-4">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  background: #F8FAFC;
  transition: transform 0.3s ease;
}

/* By default, hide sidebar on mobile */
@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    z-index: 20;
  }

  .sidebar-open {
    transform: translateX(0);
  }
}

/* Main content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
}

/* Menu button */
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
