import { pool } from "../db.js";

export const getDevices = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM devices");
    res.json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

export const getDevice = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM devices WHERE id = $1", [
      id,
    ]);
    if (result.rows.length <= 0)
      return res.status(404).json({
        message: "Device Not Found",
      });

    res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

export const createDevice = async (req, res) => {
  const {
    name,
    brand,
    processor,
    ram,
    storage,
    screen,
    os,
    price,
    stack,
    discount,
    discount_percentage,
    image,
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO devices (name, brand, processor, ram, storage, screen, os, price, stack, discount, discount_percentage, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        name,
        brand,
        processor,
        ram,
        storage,
        screen,
        os,
        price,
        stack,
        discount,
        discount_percentage,
        image,
      ]
    );
    res
      .status(201)
      .json({ message: "Device created successfully", device: result.rows[0] });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

export const updateDevice = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    brand,
    processor,
    ram,
    storage,
    screen,
    os,
    price,
    stack,
    discount,
    discount_percentage,
    image,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE devices SET name = COALESCE($1, name), brand = COALESCE($2, brand), processor = COALESCE($3, processor), ram = COALESCE($4, ram), storage = COALESCE($5, storage), screen = COALESCE($6, screen), os = COALESCE($7, os), price = COALESCE($8, price), stack = COALESCE($9, stack), discount = COALESCE($10, discount), discount_percentage = COALESCE($11, discount_percentage), image = COALESCE($12, image) WHERE id = $13 RETURNING *",
      [
        name,
        brand,
        processor,
        ram,
        storage,
        screen,
        os,
        price,
        stack,
        discount,
        discount_percentage,
        image,
        id,
      ]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.json({
      message: "Device updated successfully",
      device: result.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

export const deleteDevice = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM devices WHERE id = $1;", [id]);
    if (result.rowCount <= 0)
      return res.status(404).json({
        message: "Device Not Found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong...",
    });
  }
};
