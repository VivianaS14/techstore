import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Comment } from "@mui/icons-material";
import { DeviceType } from "../../types/device.types";

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
}) => {
  return (
    <Card sx={{ maxWidth: 250, height: "42rem" }}>
      <CardMedia sx={{ height: 300 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {brand}
        </Typography>
        <Typography>$ {price}</Typography>
      </CardContent>
      <CardContent>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ fontWeight: "700" }}>Almacenamiento:</Typography>
          <Typography>{storage}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ fontWeight: "700" }}>RAM:</Typography>
          <Typography>{ram}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ fontWeight: "700" }}>Sistema Operativo:</Typography>
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
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <Comment />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
