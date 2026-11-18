import "./App.css";
import ProductForm from "./components/ProductForms";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./context/ProductContext";
// import { ClaseUseEffect } from "./components/ClaseUseEffect";

function App() {
  return (
    <ProductProvider>
      <h1>Inventario de productos</h1>
      <ProductForm />
      <ProductList />
      {/* <ClaseUseEffect /> */}
    </ProductProvider>
  );
}

export default App;
