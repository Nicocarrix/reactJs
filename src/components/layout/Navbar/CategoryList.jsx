import { Button, Link } from "@mui/material";

const CategoryList = () => {
  return (
    <>
      <Link underline="none" variant="h6" href="#">
        <Button
          sx={{
            color: "#fff",
            fontWeight: 100,
            fontSize: "12px",
            lineHeight: 2,
          }}
        >
          Electrodomesticos
        </Button>
      </Link>

      <Link underline="none" variant="h6" href="#">
        <Button
          sx={{
            color: "#fff",
            fontWeight: 100,
            fontSize: "12px",
            lineHeight: 2,
          }}
        >
          Deportes
        </Button>
      </Link>

      <Link underline="none" variant="h6" href="#">
        <Button
          sx={{
            color: "#fff",
            fontWeight: 100,
            fontSize: "12px",
            lineHeight: 2,
          }}
        >
          Ropa
        </Button>
      </Link>

      <Link underline="none" variant="h6" href="#">
        <Button
          sx={{
            color: "#fff",
            fontWeight: 100,
            fontSize: "12px",
            lineHeight: 2,
          }}
        >
          Muebles
        </Button>
      </Link>
    </>
  );
};

export default CategoryList;
