import { useEffect, useState } from "react";
import ItemsList from "./itemsList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    let productsFilter = products.filter((e) => e.category === category);
    console.log(productsFilter);

    const promise = new Promise((resolve) => {
      resolve(category ? productsFilter : products);
    });

    promise.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [category]);

  return <ItemsList items={items} />;
};

export default ItemsListContainer;
