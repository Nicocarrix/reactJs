import { useCount } from '../hooks/useCount';

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <span>Cantidad:</span>
          <div className="flex gap-3">
            <button
              onClick={decrement}
              className="inline-flex items-center justify-center h-5 px-2 font-ligth tracking-wide border border-black text-black transition duration-200 bg-withe  hover:bg-gray-900 hover:text-white focus:shadow-outline focus:outline-none"
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={increment}
              className="inline-flex items-center justify-center h-5 px-2 font-ligth tracking-wide border border-black text-black transition duration-200 bg-withe  hover:bg-gray-900 hover:text-white focus:shadow-outline focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => onAdd(count)}
          className="
        w-max"
        >
          <a className="relative inline-block px-4 py-2 font-medium group">
            <span className=" absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="  absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="  relative text-black group-hover:text-white">
              Agregar al Carrito
            </span>
          </a>
        </button>
      </div>
    </>
  );
};
