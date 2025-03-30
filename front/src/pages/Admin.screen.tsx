import {
  Box,
  Button,
  Grid2,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Login } from "../components/Login/Login.component";
import { userStore } from "../store/user.store";
import { useEffect, useState } from "react";
import {
  createDevice,
  deleteDevice,
  getDevices,
  updateDevice,
} from "../actions/device.actions";
import { DeviceType } from "../types/device.types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Admin = () => {
  const user = userStore((state) => state.user);
  const [rows, setRows] = useState<DeviceType[]>([]);
  const [newDevice, setNewDevice] = useState(false);
  const [editDevice, setEditDevice] = useState(0);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [screen, setScreen] = useState("");
  const [os, setOs] = useState("");
  const [price, setPrice] = useState("");
  const [stack, setStack] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [image, setImage] = useState("");

  const getData = async () => {
    const data = await getDevices();
    setRows(data);
  };

  const handleCreate = async () => {
    const params = {
      name,
      brand,
      processor,
      ram,
      storage,
      screen,
      os,
      price,
      stack,
      discount: discountPercentage > 0,
      discount_percentage: discountPercentage,
      image,
    };

    let data;
    if (editDevice !== 0) {
      data = await updateDevice(editDevice, params, user!.token);
    } else {
      data = await createDevice(params, user!.token);
    }
    if (data) {
      setNewDevice(false);
      getData();
    }

    setName("");
    setBrand("");
    setProcessor("");
    setRam("");
    setStorage("");
    setScreen("");
    setOs("");
    setPrice("");
    setStack(0);
    setDiscountPercentage(0);
    setImage("");
  };

  const handleDelete = async (id: number) => {
    const response = await deleteDevice(id, user!.token);
    if (response?.status === 204) {
      getData();
    }
  };

  useEffect(() => {
    const device = rows.find((dev) => dev.id === editDevice);
    if (device) {
      setName(device.name);
      setBrand(device.brand);
      setProcessor(device.processor);
      setRam(device.ram);
      setStorage(device.storage);
      setScreen(device.screen);
      setOs(device.os);
      setPrice(device.price);
      setStack(device.stack);
      setDiscountPercentage(device.discount_percentage);
      setImage(device.image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editDevice]);

  useEffect(() => {
    getData();
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div style={{ padding: "1rem" }}>
      {newDevice ? (
        <Box sx={{ m: 1, display: "grid", placeItems: "center" }}>
          <Typography variant="h5">
            {editDevice ? "Editar Celular" : "Nuevo Celular"}
          </Typography>
          <Grid2
            container
            spacing={2}
            sx={{ padding: 5, justifyContent: "center" }}
          >
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Nombre"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Marca"
              value={brand}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBrand(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Procesador"
              value={processor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProcessor(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="RAM"
              value={ram}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRam(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Almacenamiento"
              value={storage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStorage(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Pantalla"
              value={screen}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setScreen(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Sistema Operativo"
              value={os}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOs(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Precio"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Cantidad"
              type="number"
              value={stack}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStack(Number(e.target.value))
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="Imagen"
              value={image}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.value)
              }
            />
            <TextField
              sx={{ m: 1, width: "30ch" }}
              label="% de Descuento?"
              type="number"
              value={discountPercentage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDiscountPercentage(Number(e.target.value))
              }
            />
          </Grid2>
          <Button
            onClick={handleCreate}
            variant="contained"
            sx={{ m: 1, width: "30ch", background: "black" }}
          >
            {editDevice ? "Editar Celular" : "Crear Celular"}
          </Button>
        </Box>
      ) : (
        <>
          <Button
            onClick={() => setNewDevice(true)}
            variant="contained"
            style={{ background: "black", margin: 10 }}
          >
            Crear Celular
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dispositivo</TableCell>
                  <TableCell align="right">Marca</TableCell>
                  <TableCell align="right">Procesador</TableCell>
                  <TableCell align="right">RAM</TableCell>
                  <TableCell align="right">Storage</TableCell>
                  <TableCell align="right">OS</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cant</TableCell>
                  <TableCell align="right">Descuento</TableCell>
                  <TableCell align="right">Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length > 0 &&
                  rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.brand}</TableCell>
                      <TableCell align="right">{row.processor}</TableCell>
                      <TableCell align="right">{row.ram}</TableCell>
                      <TableCell align="right">{row.storage}</TableCell>
                      <TableCell align="right">{row.os}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.stack}</TableCell>
                      <TableCell align="right">
                        {row.discount ? row.discount_percentage : "NO"}
                      </TableCell>
                      <TableCell align="right">
                        {row.image ? "SI" : "NO"}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setNewDevice(true);
                            setEditDevice(row.id);
                          }}
                          aria-label="delete"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDelete(row.id)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};
