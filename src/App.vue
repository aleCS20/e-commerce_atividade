<template>
  <div id="app" class="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
    
    <header class="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
      <h1 class="text-4xl font-black text-gray-900 tracking-tight">
        IREDE <span class="text-emerald-500">STORE</span>
      </h1>
      <p class="text-gray-500 font-medium italic">Atividade Prática 03 - UI Evolution</p>
    </header>

    <main class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <section class="lg:col-span-3">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductCard 
            v-for="p in availableProducts" 
            :key="p.id" 
            :product="p" 
            @add="handleAddToCart"
          />
        </div>
      </section>

      <aside class="lg:col-span-1">
        <div class="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 sticky top-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i class="pi pi-shopping-bag text-emerald-500 text-xl"></i>
            Carrinho
          </h2>

          <div v-if="cart.listItems().length === 0" class="text-center py-10">
            <i class="pi pi-inbox text-5xl text-gray-200 mb-4 block"></i>
            <p class="text-gray-400">Seu carrinho está vazio</p>
          </div>

          <div v-else class="space-y-4 mb-8 max-h-[50vh] overflow-y-auto pr-2">
            <div v-for="item in cart.listItems()" :key="item.product.id" 
                 class="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
              <div class="flex justify-between items-start">
                <span class="font-bold text-gray-700 leading-tight">{{ item.product.name }}</span>
                <span class="text-emerald-600 font-bold">R${{ (item.product.price * item.quantity).toFixed(2) }}</span>
              </div>
              
              <div class="flex items-center justify-between pt-2">
                <span class="text-xs text-gray-400 uppercase tracking-widest">Qtd</span>
                <InputNumber 
                  v-model="item.quantity" 
                  showButtons 
                  buttonLayout="horizontal" 
                  :min="1" 
                  class="w-24 h-8"
                  inputClass="w-8 text-center"
                  @input="forceUpdate"
                >
                  <template #incrementbuttonicon><i class="pi pi-plus text-xs" /></template>
                  <template #decrementbuttonicon><i class="pi pi-minus text-xs" /></template>
                </InputNumber>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-100 pt-6 space-y-4">
            <div class="flex justify-between text-gray-500 italic">
              <span>Total de itens:</span>
              <span>{{ cart.getTotalItems() }}</span>
            </div>
            <div class="flex justify-between text-2xl font-black text-gray-900 border-b border-dashed border-gray-200 pb-4">
              <span>Total:</span>
              <span class="text-emerald-600">R$ {{ cart.getFinalPrice().toFixed(2) }}</span>
            </div>
            <Button label="Fechar Pedido" icon="pi pi-check" class="w-full p-button-lg shadow-lg shadow-emerald-100" :disabled="cart.listItems().length === 0" />
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { Product } from './models/Product';
import { Cart } from './services/Cart';
import ProductCard from './components/ProductCard.vue';

export default defineComponent({
  name: 'App',
  components: { ProductCard, InputNumber, Button },
  data() {
    return {
      cart: new Cart(),
      availableProducts: [
        { id: 1, name: 'Mouse Gamer RGB', price: 155.50, category: { id: 10, title: 'Periféricos' } },
        { id: 2, name: 'Monitor 4K 27"', price: 1899.90, category: { id: 10, title: 'Displays' } },
        { id: 3, name: 'Headset 7.1 Wireless', price: 450.00, category: { id: 11, title: 'Áudio' } },
        { id: 4, name: 'Teclado Mecânico PRO', price: 620.00, category: { id: 10, title: 'Periféricos' } },
      ] as Product[]
    };
  },
  methods: {
    handleAddToCart(product: Product) {
      this.cart.addItem(product, 1);
      this.forceUpdate();
    },
    forceUpdate() {
      // Técnica para forçar a reatividade em Models ricas na Options API
      this.cart = Object.assign(Object.create(Object.getPrototypeOf(this.cart)), this.cart);
    }
  }
});
</script>
