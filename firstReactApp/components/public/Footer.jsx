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

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#111827",
    padding: "40px 20px",
    marginTop: "50px",
  },

  bottom: {
    // marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #444",
    // paddingTop: "15px",
  },
};

export default Footer;
