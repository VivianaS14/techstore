import { Grid2, Pagination } from "@mui/material";
import { Product } from "../Product/Product.component";
import { DeviceType } from "../../types/device.types";
import { useEffect, useState } from "react";

type Props = {
  products: DeviceType[];
};

const itemsPerPage = 6;

export const Products: React.FC<Props> = ({ products }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = products.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [products]);

  return (
    <>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {paginatedData.map((item) => (
          <Grid2
            key={`${item.created_at}+${item.id}`}
            size={{ xs: 2, sm: 4, md: 4 }}
          >
            <Product {...item} />
          </Grid2>
        ))}
      </Grid2>
      <Pagination
        count={Math.max(1, Math.ceil(products.length / itemsPerPage))}
        page={page}
        onChange={handlePageChange}
        color="secondary"
        variant="outlined"
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </>
  );
};
