import React from 'react';

export const Header = () => {
  return (
    <header className="bg-headerViolet py-2 px-4 w-full flex justify-between items-center">
        <p>حارثة العوفي</p>
      <div className="w-[100px]">
        <img src="/logo.png" alt="logo" className="w-full h-auto rounded-full" />
      </div>
    </header>
  );
};
