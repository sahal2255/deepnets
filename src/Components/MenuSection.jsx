import React from 'react';
import MenuBackgroundImg from '../assets/MenuBackground.jpeg';

const MenuSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-72 md:h-80"
      style={{ backgroundImage: `url(${MenuBackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center p-8">
        <h1 className="text-7xl font-bold">MENU</h1>
        <p className="mt-10 md:px-40 text-lg">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the 'Order Online' button located
          below the menu.
        </p>
      </div>
    </div>
  );
};

export default MenuSection;
