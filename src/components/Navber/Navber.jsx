import { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";
import "../Navber/style.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        activeClass="active"
        className="text-gray-600 cursor-pointer  transition-colors duration-300"
        spy={true}
        offset={-70} // Adjusted for navbar height
        exact={true} // Ensures "HOME" is active only when the section is in view
      >
        HOME
      </Link>

      <Link
        to="download"
        smooth={true}
        duration={500}
        activeClass="active"
        className="text-gray-600 cursor-pointer  transition-colors duration-300"
        spy={true}
        offset={-70}
      >
        DOWNLOAD
      </Link>

      <Link
        to="review"
        smooth={true}
        duration={500}
        activeClass="active"
        className="text-gray-600 cursor-pointer  transition-colors duration-300"
        spy={true}
        offset={-70}
      >
        REVIEW
      </Link>

      <Link
        to="ourTeam"
        smooth={true}
        duration={500}
        activeClass="active"
        className="text-gray-600 cursor-pointer  transition-colors duration-300"
        spy={true}
        offset={-70}
      >
        OUR TEAM
      </Link>
    </>
  );

  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-100 py-2 shadow shadow-blue-300 sticky-navbar">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <a className="text-2xl font-bold">CODE NEXUS</a>
          </div>

          <div className="navbar-end">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                {isMenuOpen ? (
                  <RiCloseLine className="text-3xl" />
                ) : (
                  <RiMenu3Fill />
                )}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={`lg:hidden absolute top-16 right-4 bg-[#D1D1E9] shadow-md shadow-gray-600 p-10 rounded-box  z-50 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="menu p-2 w-52 space-y-5">{links}</ul>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-medium space-x-5">
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Padding for content below the fixed navbar */}
      <main className="pt-16">
        {/* Your main content goes here */}
      </main>
    </>
  );
}

export default Navbar;