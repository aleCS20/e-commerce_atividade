# E-commerce Irede - Fase 1: Front-end

Este repositório contém o desenvolvimento do projeto de e-commerce do curso Web Full-stack Irede. O foco inicial é a aplicação de Programação Orientada a Objetos (POO) e Tipagem Avançada utilizando TypeScript.

## 🚀 Atividade 1: Lógica de Sistema e Tipagem

O objetivo desta entrega é estruturar as classes base do sistema e implementar uma lógica de carrinho de compras robusta.

### Requisitos Implementados:
- **Modelagem de Dados**: Uso de interfaces para `Category`, `Product` e `CartItem`.
- **Gestão de Roles**: Implementação de `UserRole` utilizando Enums para restringir permissões apenas a `ADMIN` e `CUSTOMER`.
- **Lógica de Carrinho**:
  - Acúmulo de quantidades para produtos repetidos (sem duplicar entradas).
  - Cálculo de total de itens e preço final.
- **High-Order Functions (HOF)**:
  - `.some()` para verificação de existência de itens.
  - `.reduce()` para cálculos agregados de preço e quantidade.

### 🛠️ Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

### 📝 Como executar
1. Clone o repositório:
   ```bash
   git clone [git@github.com:aleCS20/e-commerce_atividade.git]
   (https://github.com/aleCS20/ecommerce_atividade.git)

   ```
   
<<<<<<< HEAD
   --------------------------------------------------------------------------------------

## 🚀 Atividade 2: Interface com Vue.js (Options API)

Nesta etapa, a lógica de negócio desenvolvida na Fase 1 foi integrada a uma interface reativa utilizando o framework Vue.js. O projeto evoluiu de uma aplicação de console para uma aplicação Web completa.

### Requisitos Implementados:
- **Integração de Models**: Utilização direta das classes `Product` e `Cart` dentro do ecossistema Vue.
- **Componentização**: Criação do componente `ProductCard.vue` para encapsular a exibição e lógica visual de cada produto.
- **Comunicação entre Componentes**: Uso de `props` para passar dados aos filhos e `$emit` para notificar o componente pai sobre ações (Add to Cart).
- **Options API**: Gerenciamento de estado (`data`) e comportamentos (`methods`) seguindo o padrão oficial do Vue.
- **Model Rica (Desafio)**: A lógica de cálculo de totais e acúmulo de itens permanece encapsulada na classe `Cart`, garantindo que o componente visual foque apenas na renderização.

### 🛠️ Novas Tecnologias e Ferramentas
- [Vue.js 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/) (Build tool de alta performance)
- **Node.js**: Ajustado para compatibilidade com ambiente de desenvolvimento moderno.

### 📝 Como executar a Versão Web
1. Certifique-se de estar na raiz do projeto.
2. Instale as dependências (caso não tenha feito):
   ```bash
   npm install
=======
>>>>>>> 507ad40311bc9f1815cdabdff99fb6e968ebcbfe
