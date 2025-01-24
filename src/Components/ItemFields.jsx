import React, { useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const ItemFields = ({ onAddItems }) => {
  const { control, register, watch, formState: { errors } } = useForm({
    defaultValues: {
      items: [{ name: "", description: "", price: "" }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "items",
  });

  // Watch items for changes
  const items = watch("items");
  const previousItems = useRef(items);

  useEffect(() => {
    if (onAddItems && JSON.stringify(items) !== JSON.stringify(previousItems.current)) {
      onAddItems(items);
    }
    previousItems.current = items;
  }, [items, onAddItems]);

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-700">Items</p>
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-2 border-b border-gray-200 pb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Item Name</label>
            <input
              type="text"
              {...register(`items.${index}.name`, { required: "Item Name is required" })}
              className={`w-full mt-1 p-2 border rounded-md ${errors.items?.[index]?.name ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter item name"
            />
            {errors.items?.[index]?.name && (
              <p className="text-red-500 text-sm mt-1">{errors.items[index].name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Item Description</label>
            <textarea
              {...register(`items.${index}.description`, { required: "Item Description is required" })}
              className={`w-full mt-1 p-2 border rounded-md ${errors.items?.[index]?.description ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter item description"
            />
            {errors.items?.[index]?.description && (
              <p className="text-red-500 text-sm mt-1">{errors.items[index].description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Item Price</label>
            <input
              type="number"
              {...register(`items.${index}.price`, {
                required: "Item Price is required",
                valueAsNumber: true,
                min: { value: 0, message: "Price must be a positive number" },
              })}
              className={`w-full mt-1 p-2 border rounded-md ${errors.items?.[index]?.price ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter item price"
            />
            {errors.items?.[index]?.price && (
              <p className="text-red-500 text-sm mt-1">{errors.items[index].price.message}</p>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
        onClick={() => append({ name: "", description: "", price: "" })}
      >
        Add More
      </button>
    </div>
  );
};

export default ItemFields;
