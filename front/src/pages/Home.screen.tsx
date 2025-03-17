import { Grid2 } from "@mui/material";
import { Filters } from "../components/Filters/Filters.component";
import { Products } from "../components/Products/Products.component";

export const Home = () => {
  return (
    <>
      <Grid2 container spacing={2} sx={{ padding: 5 }}>
        <Grid2 size={3}>
          <Filters />
        </Grid2>
        <Grid2 size={9}>
          <Products />
        </Grid2>
      </Grid2>
    </>
  );
};
