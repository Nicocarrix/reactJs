import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ navigation, classNames }) => {
  return (
    <>
      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
        <div className="flex h-full space-x-8 ">
          {navigation.categories.map((category) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex ">
                    <Popover.Button
                      className={classNames(
                        open
                          ? "border-primary-700 text-primary-700"
                          : "border-transparent text-white hover:text-primary-700",
                        "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                      )}
                    >
                      {category.name}
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-00"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute top-full text-sm text-main-50 max-w-md">
                      <div
                        className="absolute inset-0 top-0 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div className="relative bg-white">
                        <div className="mx-2 max-w-xl px-8">
                          <div className="grid grid-cols-1 py-9">
                            <div className="row-start-1 grid grid-cols-2 gap-x-2 gap-y-10 text-sm">
                              {category.category.map((item) => (
                                <div key={item.name}>
                                  <p
                                    id={`${item.name}-heading`}
                                    className="font-medium text-main"
                                  >
                                    {item.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${item.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {category.gender.map((item) => (
                                      <li key={item.category} className="flex">
                                        <Link
                                          to={`/category/${item.category}`}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}
        </div>
      </Popover.Group>
    </>
  );
};

export default CategoryList;
