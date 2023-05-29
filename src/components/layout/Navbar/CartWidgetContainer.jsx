import CartWidget from "./CartWidget";

const CartWidgetContainer = () => {
  function DeleteInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#14C1FF"
          stroke="#0097F5"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#0097F5" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#0097F5" strokeWidth="2" />
      </svg>
    );
  }

  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#0097F5"
          stroke="#004BA3"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#004BA3" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#004BA3" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <>
      <CartWidget
        DeleteActiveIcon={DeleteActiveIcon}
        DeleteInactiveIcon={DeleteInactiveIcon}
      />
    </>
  );
};

export default CartWidgetContainer;
