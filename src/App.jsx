import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForms";
import ProductList from "./components/ProductList";
import { ProductPrivider } from "./context/ProductProvider";
import { ProductSummary } from "./components/ProductSummary";
// import { ClaseUseEffect } from "./components/ClaseUseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductPrivider>
        <h1>Inventario de productos</h1>
        <ProductSummary />
        <ProductForm />
        <ProductList isEdit={true} />
        <h3>count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>======Lista de productos para el usuario=====</h2>
        <ProductList isEdit={false} />
      </ProductPrivider>
    </>
  );
}

export default App;
