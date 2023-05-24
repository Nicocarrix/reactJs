import { Box, Grid, Paper } from "@mui/material";

const ItemListContainer = (props) => {
  return (
    <Grid container sx={{ placeContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 200,
            color: "#022",
          },
        }}
      >
        {[0, 1, 2, 3].map((elevation) => (
          <Paper key={elevation} elevation={24}>
            {props.item}
          </Paper>
        ))}
      </Box>
    </Grid>
  );
};

export default ItemListContainer;
