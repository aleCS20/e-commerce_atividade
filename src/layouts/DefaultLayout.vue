<template>
  <div class="min-h-screen bg-gray-50">
    <Menubar :model="items" class="rounded-none border-b border-gray-200 px-10">
      <template #start>
        <span class="text-xl font-black text-emerald-600 mr-4 tracking-tighter cursor-pointer" @click="$router.push('/')">IREDE STORE</span>
      </template>
    </Menubar>
    <main class="max-w-7xl mx-auto p-6">
      <router-view /> </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menubar from 'primevue/menubar';

export default defineComponent({
  components: { Menubar },
  data() {
    return {
      items: [
        { label: 'Início', icon: 'pi pi-home', command: () => this.$router.push('/') },
        { label: 'Carrinho', icon: 'pi pi-shopping-cart', command: () => this.$router.push('/cart') }
      ]
    }
  }
});
</script>

