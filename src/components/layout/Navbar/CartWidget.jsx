import { Menu } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <div className=" ">
        <Menu as="div" className="relative inline-block text-left">
          {/* BUTTON */}
          <div>
            <Link
              to="/cart"
              className="group flex items-center place-content-center"
            >
              <ShoppingBagIcon
                className="h-6 w-full flex-shrink-0 text-white "
                aria-hidden="true"
              />
              <span className=" text-sm font-light text-white ">2</span>
            </Link>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default CartWidget;
