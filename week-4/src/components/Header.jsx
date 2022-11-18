import React, { useRef } from "react";
import { useEffect } from "react";

function Header() {
  const headerRef = useRef(null);

  const handler = () => {
    if (headerRef.current) {
      if (window.scrollY > 40) {
        headerRef.current.style.backgroundColor = "rgba(255,255,255,0.6)";
      } else {
        headerRef.current.style = "";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header ref={headerRef} id="header">
      <div id="logo">MOMENTUM</div>
      <nav id="gnb" className="container">
        <div className="nav-item">NEW</div>
        <div className="nav-item">COLLECTION</div>
        <div className="nav-item">SEASONAL</div>
        <div className="flex-1"></div>
        <div className="nav-item">PIERCING</div>
        <div className="nav-item">RING</div>
        <div className="nav-item">NECKLESS</div>
      </nav>
    </header>
  );
}

export default Header;
