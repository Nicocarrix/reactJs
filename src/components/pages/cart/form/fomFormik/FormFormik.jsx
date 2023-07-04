const FormFormik = ({ handleSubmit, handleChange, errors }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full mt-14">
      <div className="grid gap-6 mb-6 md:grid-cols-1 justify-items-center">
        <div className="w-72">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Nombre
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className={
              errors.name
                ? "bg-gray-50 border  text-gray-900 text-sm rounded-lg ring-red-500 border-red-500 block w-full p-2.5"
                : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            }
            placeholder="Ingrese nombre"
          />
          <h3 className="text-red-500 pt-1 ml-2 text-xs">{errors.name}</h3>
        </div>
        <div className="w-72">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            className={
              errors.email
                ? "bg-gray-50 border  text-gray-900 text-sm rounded-lg ring-red-500 border-red-500 block w-full p-2.5"
                : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            }
            placeholder="Ingrese email"
          />
          <h3 className="text-red-500 pt-1 ml-2 text-xs">{errors.email}</h3>
        </div>
        <div className="w-72">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Telefono
          </label>
          <input
            onChange={handleChange}
            name="phone"
            type="text"
            className={
              errors.phone
                ? "bg-gray-50 border  text-gray-900 text-sm rounded-lg ring-red-500 border-red-500 block w-full p-2.5"
                : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            }
            placeholder="Ingrese numero de telefono"
          />
          <h3 className="text-red-500 pt-1 ml-2 text-xs">{errors.phone}</h3>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-600 else transition-all p-2 rounded-sm text-white w-40"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
};

export default FormFormik;
