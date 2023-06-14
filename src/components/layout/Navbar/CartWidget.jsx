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
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white hover:bg-slate-300  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Link to="/cart" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  2
                </span>
              </Link>
            </Menu.Button>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default CartWidget;
