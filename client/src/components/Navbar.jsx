// import { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { AlignRight, Search } from "lucide-react";
// const Navbar = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Hotels", path: "/rooms" },
//     { name: "Experience", path: "/" },
//     { name: "About", path: "/" },
//   ];

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () =>
//       window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-indigo-500 px-4 transition-all duration-500 md:px-16 lg:px-24 xl:px-32 ${isScrolled ? "bg-white/80 py-3 text-gray-700 shadow-md backdrop-blur-lg md:py-4" : "py-4 md:py-6"}`}
//     >
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2">
//         <img
//           src={assets.logo || ""}
//           alt="logo"
//           className={`h-9 ${isScrolled && "opacity-80 invert"}`}
//         />
//       </Link>

//       {/* Desktop Nav */}
//       <div className="hidden items-center gap-4 md:flex lg:gap-8">
//         {navLinks.map((link, i) => (
//           <a
//             key={i}
//             href={link.path}
//             className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
//           >
//             {link.name}
//             <div
//               className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 transition-all duration-300 group-hover:w-full`}
//             />
//           </a>
//         ))}
//         <button
//           className={`cursor-pointer rounded-full border px-4 py-1 text-sm font-light ${isScrolled ? "text-black" : "text-white"} transition-all`}
//         >
//           Dashboard
//         </button>
//       </div>

//       {/* Desktop Right */}
//       <div className="hidden items-center gap-4 md:flex">
//         <Search
//           size={18}
//           className={`${isScrolled && "invert-0"} h-7 invert transition-all duration-500`}
//         />
//         <button className="ml-4 rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500">
//           Login
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="flex items-center gap-3 md:hidden">
//         <AlignRight
//           className={`${isScrolled && "invert-0"} cursor-pointer invert`}
//         />
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-6 bg-white text-base font-medium text-gray-800 transition-all duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//           <img src={assets.closeIcon} alt="" className="h-6" />
//         </button>

//         {navLinks.map((link, i) => (
//           <a
//             key={i}
//             href={link.path}
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {link.name}
//           </a>
//         ))}

//         <button className="cursor-pointer rounded-full border px-4 py-1 text-sm font-light transition-all">
//           New Launch
//         </button>

//         <button className="rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  AlignCenter,
  AlignJustify,
  Search,
  X,
} from "lucide-react";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-4 transition-all duration-500 md:px-16 lg:px-24 xl:px-32 ${isScrolled ? "bg-white/80 py-3 text-gray-700 shadow-md backdrop-blur-lg md:py-4" : "py-4 md:py-6"}`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${isScrolled && "opacity-80 invert"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-4 md:flex lg:gap-8">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            {link.name}
            <div
              className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 transition-all duration-300 group-hover:w-full`}
            />
          </NavLink>
        ))}
        <button
          className={`cursor-pointer rounded-full border px-4 py-1 text-sm font-light ${isScrolled ? "text-black" : "text-white"} transition-all`}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden items-center gap-4 md:flex">
        <Search
          className={`${isScrolled ? "invert-0" : "invert"}`}
        />
        <button className="ml-4 rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <AlignJustify
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert-0" : "invert"}`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-6 bg-white text-base font-medium text-gray-800 transition-all duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="cursor-pointer duration-100 hover:scale-110" />
        </button>

        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <button className="cursor-pointer rounded-full border px-4 py-1 text-sm font-light transition-all">
          Dashboard
        </button>

        <button className="rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
