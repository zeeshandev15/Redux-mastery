import {
  createCustomer,
  deleteCustomer,
  getCustomerById,
  getcustomers,
  updateCustomer,
} from "../controllers/customerController.js";
import upload from "../middlewares/upload.js";
import express from "express";

const router = express.Router();

router.post("/", upload.single("image"), createCustomer);
router.get("/", getcustomers);
router.get("/:id", getCustomerById);
router.put("/:id", upload.single("image"), updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
