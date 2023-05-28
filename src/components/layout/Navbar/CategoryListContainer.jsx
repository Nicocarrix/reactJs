import CategoryList from "./CategoryList";

const CategoryListContainer = () => {
  const navigation = {
    categories: [
      {
        id: "mujer",
        name: "Mujer",

        sections: [
          {
            id: "ropa",
            name: "Ropa",
            items: [
              { name: "Tops", href: "#" },
              { name: "Vestidos", href: "#" },
              { name: "Pantalones", href: "#" },
              { name: "Sueters", href: "#" },
              { name: "Remeras", href: "#" },
              { name: "Buscar Todo", href: "#" },
            ],
          },
          {
            id: "accesorios",
            name: "Accesorios",
            items: [
              { name: "Relojes", href: "#" },
              { name: "Billeteras", href: "#" },
              { name: "Mochilas", href: "#" },
            ],
          },
        ],
      },
      {
        id: "hombre",
        name: "Hombre",

        sections: [
          {
            id: "ropa",
            name: "Ropa",
            items: [
              { name: "Pantalones", href: "#" },
              { name: "Sueters", href: "#" },
              { name: "Remeras", href: "#" },
              { name: "Buscar Todo", href: "#" },
            ],
          },
          {
            id: "accesorios",
            name: "Accesorios",
            items: [
              { name: "Relojes", href: "#" },
              { name: "Billeteras", href: "#" },
              { name: "Mochilas", href: "#" },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: "Compania", href: "#" },
      { name: "Tiendas", href: "#" },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <CategoryList navigation={navigation} classNames={classNames} />
    </>
  );
};

export default CategoryListContainer;
