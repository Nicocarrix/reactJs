import { useEffect, useState } from 'react';
import ItemsList from './ItemsList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import FilterItems from '../../common/FilterItems';
import CardLoauder from '../../common/productCards/CardLoader';

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    let itemsColecction = collection(db, 'products');

    let consulta;

    if (category) {
      consulta = query(itemsColecction, where('category', '==', category));
    } else {
      consulta = itemsColecction;
    }

    getDocs(consulta)
      .then(res => {
        let products = res.docs.map(element => {
          return {
            id: element.id,
            ...element.data(),
          };
        });
        setItems(products);
      })
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemsList items={items} />
      ) : (
        <section className="grid grid-flow-col w-auto mt-14 justify-center gap-1">
          <FilterItems />

          <CardLoauder />
        </section>
      )}
    </div>
  );
};

export default ItemsListContainer;
