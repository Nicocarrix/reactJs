import ProductCard from '../../common/productCards/ProductCard';
import FilterItems from '../../common/FilterItems';

const ItemsList = ({ items }) => {
  return (
    <section className="grid grid-flow-col w-auto mt-14 justify-center gap-4">
      <FilterItems />
      <div className="grid grid-cols-4 gap-3 h-96">
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ItemsList;
