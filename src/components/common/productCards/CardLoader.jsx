const CardLoauder = () => {
  let array = [1, 2, 3, 4];

  return (
    <>
        <div className="grid grid-cols-4 gap-4">
      {array.map(item => (

        <div className="w-60" key={item}>
          <div
            role="status"
            className="  rounded-sm shadow-lg animate-pulse flex flex-col  justify-evenly items-center  w-60 h-96"
            >
            <div className="border flex justify-center rounded-sm  items-center w-56 flex-col h-56  dark:bg-gray-500"></div>
            <div className="h-6 bg-gray-200  dark:bg-gray-400 w-36"></div>
            <div className="h-3 bg-gray-200  dark:bg-gray-400 w-36 "></div>
            <div className="h-3 bg-gray-200  dark:bg-gray-400 w-36 "></div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default CardLoauder;
