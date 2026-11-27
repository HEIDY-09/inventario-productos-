import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForms";
import ProductList from "./components/ProductList";
<<<<<<< HEAD
import { ProductPrivider } from "./context/ProductProvider";
import { ProductSummary } from "./components/ProductSummary";
=======
import { ProductProvider } from "./context/ProductContext";
>>>>>>> 8bbf30f16f778c2b0562727e803e5e6b27bce1f9
// import { ClaseUseEffect } from "./components/ClaseUseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
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
=======
    <ProductProvider>
      <h1>Inventario de productos</h1>
      <ProductForm />
      <ProductList />
      {/* <ClaseUseEffect /> */}
    </ProductProvider>
>>>>>>> 8bbf30f16f778c2b0562727e803e5e6b27bce1f9
  );
}

export default App;
