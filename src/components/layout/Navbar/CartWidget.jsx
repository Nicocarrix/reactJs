import { Link, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `${theme.palette.background.paper}`,
      padding: "0 1px",
    },
  }));
  return (
    <Link
      href="#"
      sx={{
        display: { xs: "none", sm: "block" },
        color: "#fff",
      }}
    >
      <StyledBadge badgeContent={4} color="warning">
        <ShoppingCartIcon />
      </StyledBadge>
    </Link>
  );
};

export default CartWidget;
