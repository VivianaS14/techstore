import { config } from "dotenv";

config();

export const {
  HOST,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  SALT_ROUNDS,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = process.env;
