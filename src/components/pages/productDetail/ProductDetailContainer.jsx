import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { id } = useParams();

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected);

  return <ProductDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ProductDetailContainer;
