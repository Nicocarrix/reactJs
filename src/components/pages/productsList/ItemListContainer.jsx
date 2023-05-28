const ItemListContainer = () => {
  const section = {
    cards: [
      {
        id: 1,
        text: "producto 1",
      },
      {
        id: 2,
        text: "producto 2",
      },
      {
        id: 3,
        text: "producto 3",
      },
      {
        id: 4,
        text: "producto 4",
      },
      {
        id: 5,
        text: "producto 5",
      },
    ],
  };

  return (
    <section className="mx-9">
      <div className="grid grid-cols-5 mt-9 h-60 gap-9 ">
        {section.cards.map((item) => (
          <div
            key={item.id}
            className="flex shadow-2xl items-center justify-center "
          >
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
