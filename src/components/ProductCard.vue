<template>
  <Card class="shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow">
    <template #title>
      <h3 class="text-xl font-bold text-gray-800">{{ product.name }}</h3>
    </template>
    
    <template #subtitle>
      <span class="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
        {{ product.category.title }}
      </span>
    </template>

    <template #content>
      <div class="my-4">
        <p class="text-sm text-gray-500 italic mb-1">Preço unitário</p>
        <p class="text-3xl font-black text-emerald-600">
          R$ {{ product.price.toFixed(2) }}
        </p>
      </div>
    </template>

    <template #footer>
      <Button 
        label="Adicionar ao Carrinho" 
        icon="pi pi-shopping-cart" 
        class="w-full p-button-success" 
        @click="$emit('add', product)" 
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../models/Product';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineComponent({
  name: 'ProductCard',
  components: { Card, Button },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  }
});
</script>
