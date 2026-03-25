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


=======================================

# E-commerce Atividade 🛒

Projeto desenvolvido para as atividades práticas de Vue.js + TypeScript.

## 🚀 Atividade 3: UI Evolution (Entregue em 19/03)

Nesta fase, a interface foi migrada de CSS puro para uma stack profissional utilizando **PrimeVue** e **Tailwind CSS**.

### ✅ Implementações:
- **PrimeVue v4**: Uso de componentes ricos como `Card`, `Button` e `InputNumber`.
- **Tailwind CSS**: Layout responsivo via Grid e estilização utilitária.
- **Model Rica**: A lógica de negócio no `Cart.ts` continua gerenciando o estado do carrinho.

---

## 🛠️ Guia de Compatibilidade (Crucial para novos Clones)

Devido a conflitos de "Native Bindings" observados em ambientes Windows com Node v18, este projeto utiliza as seguintes versões específicas para garantir estabilidade:

| Tecnologia | Versão Compatível | Motivo |
| :--- | :--- | :--- |
| **Node.js** | `v18.12.0` | Versão instalada no ambiente de desenvolvimento. |
| **Tailwind CSS** | `v3.4.17` | Versão estável que evita erros do motor Oxide (v4) no Windows. |
| **PrimeVue** | `v4.x` | Última versão estável para componentes UI. |
| **@primeuix/themes**| `v4.x` | Novo padrão de temas do PrimeVue. |
| **TypeScript** | `moduleResolution: "bundler"` | Necessário no `tsconfig.json` para resolver imports do PrimeVue. |

### Como Rodar em Outro Computador:
1. Clone o repositório.
2. Certifique-se de estar usando o Node v18 ou superior.
3. **Limpeza preventiva**:
   ```powershell
   Remove-Item -Recurse -Force node_modules, package-lock.json

==============================================

## 🚀 Atividade 5: Arquitetura de Rotas e Segurança
- Implementação de **Vue Router** com layouts aninhados.
- **Layouts Distintos**: Interface Consumidor (Aura/Light) vs Admin (Slate/Dark).
- **Navigation Guards**: Proteção de rotas para Checkout e área Administrativa.
- **DataTable**: Gestão de dados avançada na área administrativa.
