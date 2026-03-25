<template>
  <div class="card bg-slate-800 border-none shadow-2xl p-6">
    <h1 class="text-3xl font-bold mb-6 text-white">Gestão de Inventário</h1>
    <DataTable :value="products" stripedRows responsiveLayout="stack" class="p-datatable-sm">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Produto"></Column>
      <Column field="price" header="Preço">
        <template #body="slotProps"> R$ {{ slotProps.data.price.toFixed(2) }} </template>
      </Column>
      <Column header="Ações">
        <template #body>
            <Button icon="pi pi-pencil" severity="info" rounded text />
            <Button icon="pi pi-trash" severity="danger" rounded text />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
  components: { DataTable, Column, Button },
  data() {
    return {
      products: [
        { id: 1, name: 'Mouse Gamer', price: 155.50 },
        { id: 2, name: 'Monitor 4K', price: 1899.90 },
      ]
    }
  }
}
</script>

