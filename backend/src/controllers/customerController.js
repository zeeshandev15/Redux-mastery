import { Customer } from "../models/customerModel.js";

// ✅ create Customer
export const createCustomer = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : null;

    const customer = await Customer.create({
      ...req.body,
      image,
    });

    if (!customer) {
      return res
        .status(401)
        .json({ success: false, message: "Error creating Customer" });
    }
    res.status(201).json({
      success: true,
      customer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Get All Customers
export const getCustomers = async (_req, res) => {
  try {
    const customers = await Customer.find();
    if (!customers) {
      return res
        .status(404)
        .json({ success: false, message: "Customer Not Found" });
    }

    res.status(200).json({ success: true, customers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Single Customer
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }

    res.status(200).json({ success: true, customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Customers

export const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const image = req.file ? req.file.filename : null;

    const updateCustomer = await Customer.findByIdAndUpdate(
      customerId,
      {
        ...req.body,
        image,
      },
      {
        new: true,
      }
    );

    if (!updateCustomer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not Found" });
    }

    return res.status(200).json({ success: true, updateCustomer });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Customer
export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not Found" });
    }

    if (customer.image) {
      const filePath = path.join("app", "uploads", customer.image);
      fs.unlink(filePath, (err) => {
        if (err) console.error("Failed to delete image:", err);
      });
    }

    res.json({ success: true, message: "Customer deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
