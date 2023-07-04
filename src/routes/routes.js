import CartContainer from "../components/pages/cart/CartContainer";
import Form from "../components/pages/cart/form/Form";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ItemsListContainer from "../components/pages/productsList/ItemsListContainer";
import FormFormikContainer from "../components/pages/cart/form/fomFormik/FormFormikContainer";

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
  {
    id: "form",
    path: "/formik",
    Element: FormFormikContainer,
  },
];
