import React, { useState } from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-0">

      <div className="bg-blue-400 text-white shadow-md">
        <div className="h-2 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
      </div>
    
    </footer>
  );
};

export default Footer;
