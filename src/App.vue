<template>
  <div id="app">
    <h1>Loja Irede - Atividade 2</h1>
    <div class="container">
      <section class="products">
        <h2>Produtos</h2>
        <div class="grid">
          <ProductCard 
            v-for="p in availableProducts" 
            :key="p.id" 
            :product="p" 
            @add="addItemToCart"
          />
        </div>
      </section>

      <aside class="cart">
        <h2>🛒 Carrinho</h2>
        <div v-if="cart.listItems().length === 0">Vazio</div>
        <ul v-else>
          <li v-for="item in cart.listItems()" :key="item.product.id">
            {{ item.product.name }} x {{ item.quantity }} 
            - R$ {{ (item.product.price * item.quantity).toFixed(2) }}
          </li>
        </ul>
        <hr>
        <p><strong>Total Itens:</strong> {{ cart.getTotalItems() }}</p>
        <p><strong>Preço Final:</strong> R$ {{ cart.getFinalPrice().toFixed(2) }}</p>
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from './models/Product';
import { Cart } from './services/Cart';
import ProductCard from './components/ProductCard.vue';

export default defineComponent({
  components: { ProductCard },
  data() {
    return {
      // Instanciando a lógica rica da Atividade 1
      cart: new Cart(),
      availableProducts: [
        { id: 1, name: 'Mouse', price: 100, category: { id: 10, title: 'TI' } },
        { id: 2, name: 'Monitor', price: 900, category: { id: 10, title: 'TI' } },
        { id: 3, name: 'Fone', price: 200, category: { id: 11, title: 'Áudio' } },
      ] as Product[]
    };
  },
  methods: {
    addItemToCart(product: Product) {
      this.cart.addItem(product, 1);
      this.cart = Object.assign(Object.create(Object.getPrototypeOf(this.cart)), this.cart);
    }
  }
});
</script>