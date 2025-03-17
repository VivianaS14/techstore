import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../../mockup/data.json";

export const Filters = () => {
  const uniqueBrands = [...new Set(data.map((item) => item.brand))];
  const uniqueRam = [...new Set(data.map((item) => item.ram))];
  const uniqueGB = [...new Set(data.map((item) => item.storage))];

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Filtros</Typography>

      <TextField id="outlined-basic" label="Buscar" variant="outlined" />

      <Box>
        <Typography>Categoría</Typography>
        <RadioGroup>
          <FormControlLabel
            value="Celulares"
            label="Celulares"
            // onChange={}
            control={<Radio />}
          />
        </RadioGroup>
      </Box>

      <Accordion sx={{ borderRadius: 2, bgcolor: "#6481f738" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Marca</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
          <RadioGroup>
            <FormControlLabel
              // onChange={}
              value="Todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            {uniqueBrands.map((item, i) => (
              <FormControlLabel
                key={`MARCA-${item}-${i}`}
                //   onChange={}
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
          <RadioGroup>
            <FormControlLabel
              // onChange={}
              value="Todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            {uniqueRam.map((item, i) => (
              <FormControlLabel
                key={`RAM-${item}-${i}`}
                //   onChange={}
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
          <RadioGroup>
            <FormControlLabel
              // onChange={}
              value="Todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            {uniqueGB.map((item, i) => (
              <FormControlLabel
                key={`RAM-${item}-${i}`}
                //   onChange={}
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
