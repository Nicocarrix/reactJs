import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CategoryList = ({ navigation, classNames }) => {
  return (
    <>
      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8 ">
          {navigation.categories.map((category) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex ">
                    <Popover.Button
                      className={classNames(
                        open
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-gray-700 hover:text-gray-800",
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
                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 max-w-md">
                      <div
                        className="absolute inset-0 top-0 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div className="relative bg-white ">
                        <div className="mx-2 max-w-xl px-8">
                          <div className="grid grid-cols-1 py-9">
                            <div className="row-start-1 grid grid-cols-2 gap-x-2 gap-y-10 text-sm">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${section.name}-heading`}
                                    className="font-medium text-gray-900"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
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
          {navigation.pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              {page.name}
            </a>
          ))}
        </div>
      </Popover.Group>
    </>
  );
};

export default CategoryList;
