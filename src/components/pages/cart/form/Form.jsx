import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      userName: userData.name,
      userLastname: userData.lastName,
    };

    console.log(data);
  };

  const handleChanges = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Este es el fomrulario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Nombre"
          name="name"
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="Ingrese Apellido"
          name="lastName"
          onChange={handleChanges}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
