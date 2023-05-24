import Navbar from "./components/layout/Navbar/Navbar";
import ItemListContainer from "./components/pages/productsList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer item="PRODUCTOS" />
    </div>
  );
}

export default App;
