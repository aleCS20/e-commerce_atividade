<template>
  <div class="flex min-h-screen bg-slate-900 text-white">
    <aside class="w-64 bg-slate-800 p-6 border-r border-slate-700">
      <h2 class="text-xl font-bold mb-8 text-emerald-400">ADMIN PANEL</h2>
      <nav class="space-y-4 text-slate-300">
        <router-link to="/admin" class="block hover:text-white flex items-center gap-2">
          <i class="pi pi-chart-bar"></i> Dashboard
        </router-link>
        <router-link to="/admin/products" class="block hover:text-white flex items-center gap-2">
          <i class="pi pi-box"></i> Produtos
        </router-link>
        <button @click="logout" class="mt-10 text-red-400 flex items-center gap-2">
          <i class="pi pi-power-off"></i> Sair
        </button>
      </nav>
    </aside>
    <main class="flex-1 p-10 bg-slate-900">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    logout() {
      localStorage.removeItem('user_role');
      this.$router.push('/');
    }
  }
}
</script>

