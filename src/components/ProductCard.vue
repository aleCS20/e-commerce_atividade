<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p><strong>Preço:</strong> R$ {{ product.price.toFixed(2) }}</p>
    <p><small>Categoria: {{ product.category.title }}</small></p>
    <button @click="addToCart">Adicionar ao Carrinho</button>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { Product } from '../models/Product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  methods: {
    addToCart() {
      // Emite um evento para o componente pai
      this.$emit('add', this.product);
    }
  }
});
</script>

<style scoped>
    .product-card {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    }
    button { background: #42b983; color: white; border: none; padding: 10px; cursor: pointer; }
</style>
