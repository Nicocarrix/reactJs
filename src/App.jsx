import ProductsList from "./components/pages/productsList/ProductsList";
import Navbar from "./components/layout/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [name, setName] = useState("pepe");
  const [isDark, setIsDark] = useState(false);

  let edad = 22;

  return (
    <div>
      <Navbar />
      <ProductsList name={name} edad={edad} />
      <button onClick={() => setName("Carlos")}>Cambiar nombre</button>
      <button onClick={() => setIsDark(!isDark)}>
        cambiar a {isDark ? "cambiar a claro" : "cambiar a oscuro"}
      </button>
    </div>
  );
}

export default App;
