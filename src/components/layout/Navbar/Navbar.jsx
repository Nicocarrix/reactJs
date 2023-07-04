// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CategoryListContainer from "./CategoryListContainer";
import CartWidgetContainer from "./CartWidgetContainer";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="bg-main">
        <header className="relative bg-main">
          <p className="flex h-10 items-center justify-center bg-primary-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Envio gratis en compras de mas de $100
          </p>

          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-primary-800">
              <div className="flex h-16 items-center">
                {/* MENU BUTTON */}

                <button
                  type="button"
                  className="rounded-md bg-main-50 p-2 text-primary-800 lg:hidden"
                >
                  <span className="sr-only">Abrir Menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* LOGO */}

                <div className="ml-4 flex lg:ml-0">
                  <Link to="/">
                    <span className="sr-only">N&M</span>
                    <img
                      className="h-8 w-auto"
                      src="https://res.cloudinary.com/djdh6vajl/image/upload/v1685388533/Resources/online-store_dg5j01.png"
                      alt=""
                    />
                  </Link>
                </div>

                {/* MENUS */}
                <CategoryListContainer />

                <div className="ml-auto flex items-center">
                  {/* LOG IN */}

                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                    <a
                      href="#"
                      className="text-sm font-ligth text-white hover:text-primary-700"
                    >
                      Iniciar Sesion
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a
                      href="#"
                      className="text-sm font-ligth text-white hover:text-primary-700"
                    >
                      Crear Cuenta
                    </a>
                  </div>

                  {/* SEARCH */}

                  <form className="flex lg:ml-8 items-center">
                    <MagnifyingGlassIcon
                      className="text-white hover:text-primary-400 h-6 w-6 cursor-pointer"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      className="ml-3 p-2 text-white focus:outline-none focus:border-main-50 bg-main-50"
                    />
                  </form>

                  {/* CART */}

                  <div className="ml-4 flow-root lg:ml-6">
                    <CartWidgetContainer />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
