import { AccountCircle, Search } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";

import {
  Link,
  Typography,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";

const Navbar = () => {
  return (
    <Grid container sx={{ placeContent: "center" }}>
      <Grid
        container
        sx={{
          backgroundColor: "#025464",
          paddingTop: "12px",
          placeContent: "center",
        }}
      >
        <Grid container sx={{ placeContent: "center" }}>
          <Grid item lg={2}>
            <Typography variant="h6" component="div" sx={{ color: "#fff" }}>
              N&M COMMERCE
            </Typography>
          </Grid>
          <Grid item sx={{}} lg={6}>
            <TextField
              sx={{
                width: "60%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "2px",
                  backgroundColor: "white",
                },
              }}
              id="outlined-helperText"
              placeholder="Buscar"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 1.3,
            placeContent: "center",
            marginTop: "12px",
          }}
        >
          <Grid item lg={3} sx={{}}></Grid>
          <Grid
            item
            lg={4}
            sx={{
              gap: 5,
              display: "flex",
            }}
          >
            <CategoryList />
          </Grid>
          <Grid item lg={3} sx={{ display: "flex" }}>
            <Grid
              item
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              <Grid item sx={{ display: "flex" }}>
                <AccountCircle sx={{ color: "#fff" }} />
                <Link
                  underline="none"
                  variant="h6"
                  href="#"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    paddingLeft: "6px",
                    fontSize: "12px",
                    fontWeight: 100,
                    color: "#fff",
                    lineHeight: 2,
                  }}
                >
                  Nombre
                </Link>
              </Grid>
              <Link
                underline="none"
                variant="h6"
                href="#"
                sx={{
                  display: { xs: "none", sm: "block" },
                  paddingLeft: "6px",
                  fontSize: "12px",
                  fontWeight: 100,
                  color: "#fff",
                  lineHeight: 2,
                }}
              >
                Mis Compras
              </Link>
              <Link
                underline="none"
                variant="h6"
                href="#"
                sx={{
                  display: { xs: "none", sm: "block" },
                  paddingLeft: "6px",
                  fontSize: "12px",
                  fontWeight: 100,
                  color: "#fff",
                  lineHeight: 2,
                }}
              >
                Favoritos
              </Link>
              <NotificationsIcon sx={{ color: "#fff" }} />
            </Grid>
            <CartWidget />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
