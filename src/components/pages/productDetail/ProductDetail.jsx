import { ToastContainer } from 'react-toastify';
import { ItemCount } from '../../common/ItemCount';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({ productSelected, onAdd }) => {
  return (
    <>
      <div className="flex justify-center mt-8 w-full h-full max-sm:flex-col ">
        <div className="flex w-2/4 h-3/4 max-w-screen-sm max-sm:flex-col max-sm:w-full max-sm:mt-10">
          <div className="flex flex-col gap-2 max-sm:hidden">
            <img
              src={productSelected.img}
              className="border border-slate-950 w-52"
            />

            <img
              src={productSelected.img}
              className="border border-slate-950 w-52 "
            />
            <img
              src={productSelected.img}
              className="border border-slate-950 w-52 "
            />
          </div>
          <div className="w-full">
            <img src={productSelected.img} className="" />
          </div>
        </div>
        <div className="flex w-1/4 max-sm:w-full">
          <div className="flex flex-col justify-center gap-4 w-full max-sm:items-center max-sm:mt-8">
            <span>{productSelected.marca}</span>
            <span>{productSelected.title}</span>
            <span className="w-full h-px bg-slate-300"></span>
            <span className="font-bold text-3xl">${productSelected.price}</span>

            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductDetail;
