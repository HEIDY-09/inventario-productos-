import "./App.css";
import ProductForm from "./components/ProductForms";
import ProductList from "./components/ProductList";

const LISTA_DE_PRODUCTOS = [
  { id: 1, nombre: "Producto 1", precio: 10, cantidad: 5 },
  { id: 2, nombre: "Producto 2", precio: 20, cantidad: 3 },
  { id: 3, nombre: "Producto 3", precio: 15, cantidad: 8 },
];

function App() {
  return (
    <>
      <h1>Inventario de productos</h1>
      <ProductForm />
      <ProductList products={LISTA_DE_PRODUCTOS} />
    </>
  );
}

export default App;
