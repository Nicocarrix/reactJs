import ProductCard from '../../common/productCards/ProductCard';
import FilterItems from '../../common/FilterItems';

const ItemsList = ({ items }) => {
  return (
    <section className="grid grid-flow-col w-auto mt-14 justify-center">
      <div className='max-md:flex max-md:flex-col flex gap-4'>

      <FilterItems />
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 h-96">
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
          ))}
      </div>
          </div>
    </section>
  );
};

export default ItemsList;
