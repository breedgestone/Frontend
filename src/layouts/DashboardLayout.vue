<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Layout/DashboardLayout/Sidebar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <Sidebar :class="['sidebar', { 'sidebar-open': isSidebarOpen }]" />

    <!-- Main Content -->
    <main class="content">
      <header class="header">
        <!-- Mobile menu button -->
        <button class="menu-btn md:hidden" @click="toggleSidebar">
          <img src="" alt="menu" class="w-6 h-6" />
        </button>
        <h1>Dashboard Header</h1>
      </header>

      <router-view />
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
  width: 250px;
  background: #f2f2f2;
  transition: transform 0.3s ease;
}

/* By default, hide sidebar on mobile */
@media (max-width: 768px) {
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
