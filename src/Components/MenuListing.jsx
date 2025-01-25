import React, { useEffect, useState } from "react";
import MenuBackgroundImg from "../assets/productListbackground.png";
import Modal from "./Modal";
import MenuForm from "./MenuForm";
import { menuListGet, selectedMenuItems } from "../services/ProductGet";
import SelectedMenuItems from "./SelectedMenuItems";

const MenuListing = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [menus, setMenus] = useState([]);

  // Fetch menu list from API
  const menuList = async () => {
    try {
      const response = await menuListGet();
      console.log("Menu list response:", response);
      if (response && response.menuLists && response.menuLists.length > 0) {
        setMenus(response.menuLists);
        const defaultMenu = response.menuLists[0];
        selectMenu(defaultMenu._id);
      } else {
        console.log("No menus found or invalid response:", response);
      }
    } catch (error) {
      console.log("Error in fetching menu list:", error);
    }
  };

  // Fetch details of the selected menu
  const selectMenu = async (itemId) => {
    console.log("Selected menu ID:", itemId);
    try {
      const response = await selectedMenuItems(itemId);
      console.log("Selected menu response:", response);
      if (response) {
        setSelectedMenu(response);
      } else {
        console.log("No data found for the selected menu item.");
        setSelectedMenu(null);
      }
    } catch (error) {
      console.log("Error selecting menu item:", error);
    }
  };

  useEffect(() => {
    menuList();
  }, []);

  const createMenu = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-20"
        style={{
          backgroundImage:` url(${MenuBackgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white text-center py-12 px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {menus.map((menu) => (
              <button
                key={menu._id}
                className={`px-3 py-2 rounded-md text-sm md:text-base font-semibold transition-all ${
                  selectedMenu && selectedMenu._id === menu._id
                    ? "bg-white text-black shadow-lg"
                    : "bg-black hover:bg-gray-800 text-gray-300"
                }`}
                onClick={() => selectMenu(menu._id)}
              >
                {menu.name}
              </button>
            ))}
            <button
              className="bg-black hover:bg-gray-600 text-white px-5 py-2 rounded-md text-sm md:text-base font-semibold shadow-md transition-all"
              onClick={createMenu}
            >
              Create New +
            </button>
          </div>
        </div>
        <Modal isOpen={openModal} onClose={closeModal}>
          <MenuForm menuList={menuList} closeModal={closeModal} />
        </Modal>
      </div>
      <div>
        {selectedMenu ? (
          <SelectedMenuItems selectedMenu={selectedMenu} />
        ) : (
          <p className="text-center text-gray-500 py-4">
            No menu selected. Please select a menu.
          </p>
        )}
      </div>
    </>
  );
};

export default MenuListing;