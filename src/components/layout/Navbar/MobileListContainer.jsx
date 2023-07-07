
import MobileList from './MobileList'

const MobileListContainer = () => {
    const navigation = {
        categories: [
          {
            id: "productos",
            name: "Productos",
            category: [
              {
                name: "Productos",
              },
            ],
    
            gender: [
              {
                name: "Remeras Hombre",
                category: "hombre",
              },
              {
                name: "Remeras Mujer",
                category: "mujer",
              },
              {
                name: "Zapatillas",
                category: "zapatillas"
              }
            ],
          },
        ],
      };
    
      function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
      }

  return (
    <><MobileList navigation={navigation} classNames={classNames} /></>
  )
}

export default MobileListContainer