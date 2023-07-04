import { Link } from "react-router-dom"


const FilterItems = () => {
  return (
    <div className="flex justify-center border  rounded-sm bg-white h-screen w-60">
        <Link
          to="/"
          className="relative inline-block px-4 py-2 font-medium group h-max mt-8"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Limpiar Filtro
          </span>
        </Link>
      </div>
  )
}

export default FilterItems