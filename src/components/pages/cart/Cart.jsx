import { Link } from 'react-router-dom';

const Cart = ({ cart, clearCart, eliminateProduct }) => {
  return (
    <div className="w-full h-full">
      {!cart.length ? (
        <div className="text-4xl justify-center mt-40 flex flex-col w-full  items-center">
          <h1>Carrito vacio...</h1>
          <Link
            to="/"
            className="relative inline-block px-4 py-2 font-medium group h-max mt-8"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              BACK
            </span>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="font-extrabold">Carrito de Compras</h1>
          <div className="flex gap-10 justify-center max-sm:flex-col max-sm:gap-1 max-sm:mx-7">
            <div className="w-2/3 max-sm:w-full">
              <div className="w-full flex pl-3 pr-3">
                <div className="w-16"></div>
                <div className="flex text-xs font-bold mt-10 pl-6 pr-6 w-full justify-between max-sm:hidden">
                  <h1 className="w-52 text-center">NOMBRE</h1>
                  <h1 className="w-28 text-center">PRECIO</h1>
                  <h1 className="mr-4 text-center">CANTIDAD</h1>
                  <h1 className="w-20 text-center">SUBTOTAL</h1>
                </div>
              </div>
              {cart.map(product => {
                return (
                  <div className="" key={product.id}>
                    <div
                      key={product.id}
                      className="flex h-full text-center items-center mt-4 border rounded pl-3 pr-3 max-sm:flex-col"
                    >
                      <img
                        src={product.img}
                        className="w-16 border max-sm:w-48 max-sm:border-none max-sm:mt-3 
                        "
                      />
                      <div className="w-full p-3 flex flex-col">
                        <div className="flex p-6 max-sm:p-1 max-sm:flex-col justify-between max-sm:items-center">
                          <h1 className="w-44 text-xs">{product.title}</h1>
                          <h1 className="font-bold">$ {product.price}</h1>
                          <h1 className="font-extralight">
                            {product.quantity}
                          </h1>
                          <h1 className="font-bold max-sm:hidden">
                            $ {product.price * product.quantity}
                          </h1>
                          <button onClick={() => eliminateProduct(product.id)}>
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-1/4 items-center mt-16 border rounded max-sm:mt-4 max-sm:w-full gap-3 flex-col">
              <h1 className="mt-2">RESUMEN DE COMPRA</h1>
              <div className="flex flex-col w-full items-center">
                <h1 className="w-64 max-lg:w-40">Subtotal</h1>
                <span className="w-64 h-px max-lg:w-40 bg-gray-200"></span>
                <button onClick={clearCart}>LIMPIAR CARRO</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
