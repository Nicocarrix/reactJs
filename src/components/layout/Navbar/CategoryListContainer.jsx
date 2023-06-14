import CategoryList from "./CategoryList";

const CategoryListContainer = () => {
  const navigation = {
    categories: [
      {
        id: "ropa",
        name: "Ropa",
        category: [
          {
            name: "Remeras",
          },
        ],

        gender: [
          {
            name: "Remeras Hombre",
            category: "hombre",
          },
          {
            name: "Remeras Mujer",
            category: "mujer",
          },
        ],
      },
      {
        id: "zapatillas",
        name: "Zapatillas",
        category: [
          {
            name: "Zapatillas",
          },
        ],

        gender: [
          {
            name: "Ver todo",
            category: "zapatillas",
          },
        ],
      },
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
