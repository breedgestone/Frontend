<template>
  <div class="dashboard-layout">
    <aside class="sidebar">Sidebar nav</aside>
    <main class="content">
      <header>Dashboard Header</header>
      <router-view />
    </main>
  </div>
</template>

<!-- <style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 250px;
  background: #f2f2f2;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style> -->
