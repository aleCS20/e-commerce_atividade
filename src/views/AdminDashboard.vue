<template>
  <div class="p-6 space-y-8">
    <h1 class="text-3xl font-black text-white mb-6">Painel Administrativo</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
        <p class="text-slate-400 text-sm font-bold uppercase tracking-wider">Vendas Totais</p>
        <p class="text-4xl font-black text-emerald-400 mt-2">R$ 12.450,00</p>
      </div>
      
      <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
        <p class="text-slate-400 text-sm font-bold uppercase tracking-wider">Produtos Ativos</p>
        <p class="text-4xl font-black text-blue-400 mt-2">48</p>
      </div>

      <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
        <p class="text-slate-400 text-sm font-bold uppercase tracking-wider">Novos Clientes</p>
        <p class="text-4xl font-black text-purple-400 mt-2">12</p>
      </div>
    </div>

    <div class="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl h-64 flex items-center justify-center italic text-slate-500">
      [ Espaço reservado para gráfico de performance ]
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminDashboard'
});
</script>
