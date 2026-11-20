import "./App.css";
import ProductForm from "./components/ProductForms";
import ProductList from "./components/ProductList";
import { ProductPrivider } from "./context/ProductProvider";
// import { ClaseUseEffect } from "./components/ClaseUseEffect";

function App() {
  return (
    <>
      <ProductPrivider>
        <h1>Inventario de productos</h1>
        <ProductForm />
        <ProductList isEdit={true} />
        <h2>======Lista de productos para el usuario=====</h2>
        <ProductList isEdit={false} />
      </ProductPrivider>
    </>
  );
}

export default App;
