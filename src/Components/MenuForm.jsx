import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ItemFields from "./ItemFields";
import { AddMenuItems } from "../services/ProductGet";

const MenuForm = ({menuList,closeModal}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [showItemFields, setShowItemFields] = useState(false);
  const [items, setItems] = useState([]);

  const handleAddItems = (newItems) => {
    setItems(newItems);
    if (newItems.length > 0) {
      clearErrors("items");
    }
  };

  const onSubmit = async(data) => {
    if (items.length === 0) {
      setError("items", { type: "manual", message: "At least one item is required." });
      return;
    }
    console.log("Menu Form Data:", { ...data, items });
    try {
      const menuData = { ...data, items };
      const response=await AddMenuItems(menuData)
      closeModal()
      menuList()
    } catch (error) {
      console.log('menu item adding error,',error)
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Menu Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">Menu Name</label>
        <input
          type="text"
          {...register("name", { required: "Menu Name is required" })}
          className={`w-full mt-1 p-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter menu name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Menu Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">Menu Description</label>
        <textarea
          {...register("description", { required: "Menu Description is required" })}
          className={`w-full mt-1 p-2 border rounded-md ${errors.description ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter menu description"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      {/* Add Items Button */}
      {!showItemFields && (
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          onClick={() => setShowItemFields(true)}
        >
          Add Items
        </button>
      )}

      {showItemFields && <ItemFields onAddItems={handleAddItems} />}

      {errors.items && <p className="text-red-500 text-sm mt-1">{errors.items.message}</p>}

      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default MenuForm;
