import React, { useEffect, useState } from "react";
import MenuBackgroundImg from "../assets/productListbackground.png";
import Modal from "./Modal"; 
import MenuForm from "./MenuForm";
import { menuListGet, selectedMenuItems } from "../services/ProductGet";

const MenuListing = () => {
  const [selectedMenu, setSelectedMenu] = useState("Food");
  const [openModal, setOpenModal] = useState(false);
  const [menus,setMenus]=useState([])

//   const menus = {
//     Food: [
//       { name: "Pasta", description: "Delicious Italian pasta.", price: "$12" },
//     ],
//     Drinks: [
//       { name: "LYCHEETINI", description: "Lychee-based Martini", price: "$10" },
//     ],
//     Brunch: [
//       { name: "Avocado Toast", description: "Avocado on toast.", price: "$8" },
//     ],
    
//   };
  const menuList=async()=>{
    try {
        const response=await menuListGet()
        setMenus(response.menuLists)
    } catch (error) {
        console.log('error in menulist component',error)
    }
  }
  useEffect(()=>{
    menuList()
  },[])

  const createMenu = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const selectMenu=async(itemId)=>{
    console.log('id',itemId)
    try {
        const response=selectedMenuItems(itemId)
    } catch (error) {
        console.log('selected menu items error in the component',error)
    }
  }

  return (
    <>
    <div
      className="relative bg-cover bg-center min-h-20"
      style={{
        backgroundImage: `url(${MenuBackgroundImg})`,
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
                selectedMenu === menu._id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-black hover:bg-gray-800 text-gray-300"
              }`}
              onClick={() => selectMenu(menu._id)}
            >
              {menu.name}
            </button>
          ))}
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm md:text-base font-semibold shadow-md transition-all"
            onClick={createMenu}
          >
            +
          </button>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <MenuForm menuList={menuList} closeModal={closeModal}/>
      </Modal>
    </div>

    </>

  );
};

export default MenuListing;
