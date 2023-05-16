import styles from "./Home.module.css";

const Home = () => {
  let mascota = {
    nombre: "jack",
    raza: "no tiene",
    color: "negro",
  };

  return (
    <div className={styles.container}>
      <h1>{mascota.nombre}</h1>
    </div>
  );
};

export default Home;
