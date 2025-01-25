import React, { useState, useEffect } from 'react';
import ItemBackgroundImg from '../assets/itemsBackground.png';

const SelectedMenuItems = ({ selectedMenu }) => {
  console.log('selected menus', selectedMenu?.items);

  const [menuItems, setMenuItems] = useState(selectedMenu?.items || []);

  useEffect(() => {
    if (selectedMenu?.items) {
      setMenuItems(selectedMenu.items);
    }
  }, [selectedMenu]);

  return (
    <div
      className="relative bg-cover bg-center min-h-[70vh] text-white"
      style={{
        backgroundImage: `url(${ItemBackgroundImg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex justify-center items-center min-h-[70vh]">
        <div className="border-4 border-white  p-8 rounded-lg bg-black bg-opacity-80 shadow-lg max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">{selectedMenu.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Array.isArray(menuItems) &&
              menuItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-75 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-lg font-medium text-red-500 mb-1">${item.price}</p>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMenuItems;
