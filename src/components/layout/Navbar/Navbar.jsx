// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CartWidget from "./CartWidget";
import CategoryListContainer from "./CategoryListContainer";

const Navbar = () => {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Envio gratis en compras de mas de $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* MENU BUTTON */}

              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Abrir Menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}

              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">N&M</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* MENUS */}
              <CategoryListContainer />

              <div className="ml-auto flex items-center">
                {/* LOG IN */}

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Iniciar Sesion
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Crear Cuenta
                  </a>
                </div>

                {/* SEARCH */}

                <form className="flex lg:ml-8 items-center">
                  <MagnifyingGlassIcon
                    className="text-gray-400 hover:text-gray-500 h-6 w-6 cursor-pointer"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    className="ml-3 p-2 border-2 focus:outline-none focus:border-blue-700"
                  />
                </form>

                {/* CART */}

                <div className="ml-4 flow-root lg:ml-6">
                  <CartWidget />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
