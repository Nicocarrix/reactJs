import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <ul>
        <li>Inicio</li>
        <li>Carrito</li>
        <li>Contacto</li>
      </ul>
      <BsCart color="blue" size="40px" />
    </div>
  );
};

export default Navbar;
