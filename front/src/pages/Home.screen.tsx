import { Grid2 } from "@mui/material";
import { Filters } from "../components/Filters/Filters.component";
import { Products } from "../components/Products/Products.component";
import { useEffect, useState } from "react";
import { DeviceType } from "../types/device.types";
import { getDevices } from "../actions/device.actions";
import mockupData from "../mockup/data.json";

export const Home = () => {
  const [data, setData] = useState<DeviceType[]>([]);
  const [filteredData, setFilteredData] = useState<DeviceType[]>([]);

  const getData = async () => {
    const devices = await getDevices();
    const combinedData = [...devices, ...mockupData];
    setData(combinedData);
    setFilteredData(combinedData);
  };

  const handleFilter = (query: string) => {
    if (query === "") {
      setFilteredData(data); // Restablece la lista original si el filtro está vacío
      return;
    }

    const filtered = data.filter(
      (dev) =>
        dev.brand.toLowerCase().includes(query) ||
        dev.name.toLowerCase().includes(query) ||
        dev.os.toLowerCase().includes(query) ||
        dev.ram.toLowerCase().includes(query) ||
        dev.storage.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid2 container spacing={2} sx={{ padding: 5 }}>
        <Grid2 size={3}>
          <Filters products={data} onSearch={handleFilter} />
        </Grid2>
        <Grid2 size={9}>
          <Products products={filteredData} />
        </Grid2>
      </Grid2>
    </>
  );
};
