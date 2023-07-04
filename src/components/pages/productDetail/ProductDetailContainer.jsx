import { useContext, useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { collection, getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ProductDetailContainer = () => {
  const notify = () =>
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
    });

  const [productSelected, setProductSelect] = useState({});

  const { agregarCarrito } = useContext(CartContext);

  const { id } = useParams();

  const onAdd = cantidad => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarCarrito(data);

    notify();
  };

  useEffect(() => {
    let itemscollection = collection(db, 'products');

    let refDoc = doc(itemscollection, id);

    getDoc(refDoc)
      .then(res => {
        setProductSelect({ id: res.id, ...res.data() });
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  // console.log(productSelected);

  return (
    <>
      <ProductDetail productSelected={productSelected} onAdd={onAdd} />
    </>
  );
};

export default ProductDetailContainer;
