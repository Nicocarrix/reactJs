import CartContainer from "../components/pages/cart/CartContainer";
import Form from "../components/pages/cart/form/Form";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ItemsListContainer from "../components/pages/productsList/ItemsListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemsListContainer,
  },
  {
    id: "itemDetail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "category",
    path: "/category/:category",
    Element: ItemsListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
];
