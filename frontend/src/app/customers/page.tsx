"use client";
import {
  createCustomer,
  deleteCustomer,
  fetchCustomer,
  updateCustomers,
} from "@/lib/api/customerApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";

const Customer = () => {
  const dispatch = useAppDispatch();
  const { customers, loading, error } = useAppSelector(
    (state) => state.customers
  );

  useEffect(() => {
    const fetchData = async () => {
      if (customers.length === 0) {
        await dispatch(fetchCustomer());
      }
    };
    fetchData();
  }, [dispatch, customers.length]);

  useEffect(() => {
    console.log("🚀 ~ Customer ~ customers:", customers);
  }, [customers]);

  const handleCreate = async () => {
    const newCustomer = {
      name: "Shafan",
      location: "Lahore",
      joinedDate: "2025-07-30",
      email: "shafan@example.com",
      phone: "03001234567",
    };
    try {
      const resultAction = await dispatch(
        createCustomer({ data: newCustomer })
      );

      if (createCustomer.fulfilled.match(resultAction)) {
        alert("create customer successfully");
      } else {
        throw new Error("create Failed");
      }
    } catch (error: any) {
      console.error("create Error:", error.message);
      alert("An error occured while  creating  the Customer");
    }
  };

  const handleUpdate = async () => {
    const Id = "6889eb0408d0c70c905f46ed";

    const Data = {
      name: "Shafan",
      location: "Lahore",
      joinedDate: "2025-07-30",
      email: "shafan@example.com",
      phone: "03001234567",
    };

    try {
      const resultAction = await dispatch(
        updateCustomers({ id: Id, data: Data })
      );
      if (updateCustomers.fulfilled.match(resultAction)) {
        alert("Customer Update scucessfully");
      } else {
        throw new Error("Update failed.");
      }
    } catch (error: any) {
      console.error("Update error:", error.message);
      alert("An error occured while updating the customer");
    }
  };

  const handleDelete = async () => {
    const Id = "6889eb0408d0c70c905f46ed";
    try {
      const resultAction = await dispatch(deleteCustomer({ id: Id }));
      if (deleteCustomer.fulfilled.match(resultAction)) {
        alert("customer delete Successfully");
        await dispatch(fetchCustomer());
      } else {
        throw new Error("delete failed");
      }
    } catch (error: any) {
      console.error("delete customer error:", error.message);
      alert("an error accured while deleting the customer ");
    }
  };

  if (loading) return <p>loading...</p>;
  return (
    <div>
      This is our customers
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleCreate}
      >
        create
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Customer;
