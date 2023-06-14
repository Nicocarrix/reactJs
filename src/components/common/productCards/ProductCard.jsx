import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="flex hover:shadow-2xl transition-all duration-300 border  rounded-sm  items-center flex-col bg-white h-96 w-60">
      <Link
        to={`/productDetail/${item.id}`}
        className="flex flex-col h-full text-center justify-evenly"
      >
        <div className="w-56">
          <img src={item.img} className="" />
        </div>
        <h1 className="text-sm ">{item.title}</h1>
        <h1 className="text-sm">{item.marca}</h1>
        <h1 className="text-xl">$ {item.price}</h1>
      </Link>
    </div>
  );
};

export default ProductCard;
