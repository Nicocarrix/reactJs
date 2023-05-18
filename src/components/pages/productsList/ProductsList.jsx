import Counter from "../../common/counter/Counter";

const ProductsList = ({ name, edad }) => {
  // const { nombre, edad } = props;
  return (
    <>
      <h1>PRODUCTOS</h1>
      <h3>Hola {name}</h3>
      <h3>mi edad es: {edad}</h3>
      <Counter />
    </>
  );
};

export default ProductsList;
