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
    <main className="app-shell">
      <ProductPrivider>
        <header className="app__header">
          <h1>Inventario de productos</h1>
        </header>

        <div className="app__grid">
          <aside>
            <ProductSummary />
            <ProductForm />
          </aside>

          <div className="app__main">
            <section>
              <ProductList isEdit={true} />
            </section>

            <div className="app__demo">
              <h3 className="app__count">count: {count}</h3>
              <button
                className="btn btn--secundario"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
            </div>

            <section>
              <h2 className="app__section-title">
                ======Lista de productos para el usuario=====
              </h2>
              <ProductList isEdit={false} />
            </section>
          </div>
        </div>
      </ProductPrivider>
    </main>
  );
}

export default App;
