import { Category } from "./models/Category";
import { Product } from "./models/Product";
import { User } from "./models/User";
import { UserRole } from "./types/UserRole";
import { Cart } from "./services/Cart";

// 1. Criando massa de dados para teste
const eletronicos: Category = { id: 1, name: "Eletrônicos" };
const perifericos: Category = { id: 2, name: "Periféricos" };

const smartphone: Product = {
  id: 501,
  name: "iPhone 15",
  price: 5000.00,
  category: eletronicos
};

const mouse: Product = {
  id: 101,
name: "Logitech MX Master",
  price: 450.00,
  category: perifericos
};

// 2. Instanciando o Usuário (Validando a Role)
const me = new User(1, "pesquisador_dev", "eduardo@research.com", UserRole.ADMIN);

// 3. Inicializando o Carrinho
const cart = new Cart();

console.log(`--- Iniciando Teste de E-commerce: ${me.username} ---`);

// 4. Testando Lógica de Adição e Acúmulo (HOF .some)
cart.addItem(smartphone, 1);
cart.addItem(mouse, 1);
cart.addItem(mouse, 1);

// 5. Exibindo Resultados (Validando HOF .reduce)
console.log("Itens no Carrinho:");
cart.listItems().forEach(item => {
  console.log(`- ${item.product.name} | Qtd: ${item.quantity} | Subtotal: R$ ${item.product.price * item.quantity}`);
});

console.log("-----------------------------------------");
console.log(`Total de Unidades (TotalItems): ${cart.getTotalItems()}`);
console.log(`Valor Final da Compra (FinalPrice): R$ ${cart.getFinalPrice().toFixed(2)}`);
console.log("-----------------------------------------");

// Verificação de Segurança (Role Check)
if (me.role === UserRole.ADMIN) {
  console.log("Acesso concedido: Painel de Administração liberado.");
}

