import { Grid2, Pagination } from "@mui/material";
import mockupData from "../../mockup/data.json";
import { Product } from "../Product/Product.component";
import { getDevices } from "../../actions/device.actions";
import { useEffect, useState } from "react";
import { DeviceType } from "../../types/device.types";

export const Products = () => {
  const [data, setData] = useState<DeviceType[]>([]);

  const getData = async () => {
    const data = await getDevices();
    setData([...data, ...mockupData]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item) => (
          <Grid2 key={item.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <Product {...item} />
          </Grid2>
        ))}
      </Grid2>
      <Pagination count={3} />
    </>
  );
};
