import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChangeEvent, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { DeviceType } from "../../types/device.types";

type Props = {
  products: DeviceType[];
  onSearch: (query: string) => void;
};

export const Filters: React.FC<Props> = ({ products, onSearch }) => {
  const uniqueBrands = [
    ...new Set(products.map((item) => item.brand.toLowerCase())),
  ];
  const uniqueRam = [...new Set(products.map((item) => item.ram))];
  const uniqueGB = [...new Set(products.map((item) => item.storage))];

  const [query, setQuery] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleChangeBrand = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value.toLowerCase());
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Filtros</Typography>

      <TextField
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        value={query}
        onChange={handleChangeSearch}
        InputProps={{
          endAdornment: query && (
            <InputAdornment position="end">
              <IconButton onClick={clearSearch} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Accordion sx={{ borderRadius: 2, bgcolor: "#6481f738" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Marca</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
          <RadioGroup onChange={handleChangeBrand}>
            <FormControlLabel
              value=""
              control={<Radio color="secondary" />}
              label="Todos"
            />
            {uniqueBrands.map((item, i) => (
              <FormControlLabel
                key={`MARCA-${item}-${i}`}
                value={item}
                label={item}
                control={<Radio color="secondary" />}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ borderRadius: 2, bgcolor: "#6481f738" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>RAM</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
          <RadioGroup onChange={handleChangeBrand}>
            <FormControlLabel
              value=""
              control={<Radio color="secondary" />}
              label="Todos"
            />
            {uniqueRam.map((item, i) => (
              <FormControlLabel
                key={`RAM-${item}-${i}`}
                value={item}
                label={item}
                control={<Radio color="secondary" />}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ borderRadius: 2, bgcolor: "#6481f738" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Almacenamiento</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
          <RadioGroup onChange={handleChangeBrand}>
            <FormControlLabel
              value=""
              control={<Radio color="secondary" />}
              label="Todos"
            />
            {uniqueGB.map((item, i) => (
              <FormControlLabel
                key={`RAM-${item}-${i}`}
                value={item}
                label={item}
                control={<Radio color="secondary" />}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
