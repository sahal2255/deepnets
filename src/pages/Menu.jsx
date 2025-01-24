import React from "react";
import MenuSection from "../Components/MenuSection";
import MenuListing from "../Components/MenuListing";

const Menu = () => {
  return (
    <div className="w-full">
      <div>
        <MenuSection />
      </div>
      <div>
        <MenuListing />
      </div>
    </div>
  );
};

export default Menu;
