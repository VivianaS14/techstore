import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { login } from "../../actions/auth.actions";
import { userStore } from "../../store/user.store";

export const Login = () => {
  const loginUser = userStore((state) => state.updateUser);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const data = await login({ email, password });
    if (data) {
      loginUser(data);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: "5rem",
      }}
    >
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          padding: "1.6rem",
        }}
      >
        <div style={{ margin: "2rem 0" }}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Iniciar sesión
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "gray" }}
          >
            Ingresa tus credenciales para acceder
          </Typography>
        </div>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="0.5rem"
        >
          <TextField
            id="email"
            label="Correo Electrónico"
            variant="outlined"
            sx={{ m: 1, width: "30ch" }}
            value={email}
            onChange={handleChangeEmail}
          />
          <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={handleChangePassword}
            />
          </FormControl>
          <Button
            onClick={handleLogin}
            variant="contained"
            sx={{ m: 1, width: "39ch", background: "black" }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </div>
  );
};
