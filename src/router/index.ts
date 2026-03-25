import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('../views/Home.vue') },
      { path: 'product/:id', component: () => import('../views/ProductDetails.vue'), props: true },
      { 
        path: 'cart', 
        component: () => import('../views/Cart.vue'),
        meta: { requiresAuth: true } // Guard de Checkout
      },
    ]
  },
  {
    path: '/admin',
    component: () => import('../layouts/AdminLayout.vue'),
    meta: { requiresAdmin: true }, // Guard de Role
    children: [
      { path: '', component: () => import('../views/AdminDashboard.vue') },
      { path: 'products', component: () => import('../views/AdminProducts.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Implementação dos Guards (Segurança)
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user_token'); // Simulação
  const userRole = localStorage.getItem('user_role'); // 'ADMIN' ou 'USER'

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert('Acesso negado! Por favor, faça login para acessar o carrinho.');
    next('/');
  } else if (to.meta.requiresAdmin && userRole !== 'ADMIN') {
    alert('Área restrita a administradores.');
    next('/');
  } else {
    next();
  }
});

export default router;

