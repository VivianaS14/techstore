import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Modal,
  Typography,
} from "@mui/material";
import { DeviceType } from "../../types/device.types";
import { useState } from "react";

type Props = DeviceType;

export const Product: React.FC<Props> = ({
  name,
  brand,
  os,
  processor,
  ram,
  screen,
  storage,
  image,
  price,
  discount,
  discount_percentage,
}) => {
  const [open, setOpen] = useState(false);

  const priceWithDiscount =
    Number(price) - (Number(price) * discount_percentage) / 100;

  return (
    <>
      <Card sx={{ maxWidth: 250 }} onClick={() => setOpen(true)}>
        <CardMedia sx={{ height: 300 }} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {brand}
          </Typography>
          <Typography
            sx={{
              textDecoration: discount ? "line-through" : "none",
              color: discount ? "#b0afae" : "inherit",
            }}
          >
            $ {Number(price).toFixed(0)}
          </Typography>
          {discount && (
            <Box display="flex" alignItems="center" gap={2}>
              <Chip label={`% ${discount_percentage}`} color="warning" />
              <Typography>$ {priceWithDiscount.toFixed(0)}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <img src={image} alt={name} height={400} />
            </Box>
            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ marginBottom: 2 }}
              >
                {brand} {name}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "700" }}>
                  Almacenamiento:
                </Typography>
                <Typography>{storage}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "700" }}>RAM:</Typography>
                <Typography>{ram}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "700" }}>
                  Sistema Operativo:
                </Typography>
                <Typography>{os}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "700" }}>Pantalla:</Typography>
                <Typography>{screen}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "700" }}>Procesador:</Typography>
                <Typography>{processor}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
