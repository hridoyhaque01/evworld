import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoWhite } from "../../../utils/getImages";
import "./navbar.css";

function Navbar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleDropdown = (menu) => {
    setIsSubmenuOpen((prev) => ({
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="py-8 px-6 text-pureWhite font-medium uppercase">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex items-center justify-between md:hidden">
          <div className="flex-1 text-center">
            <NavLink to="/" className="">
              <img src={logoWhite} alt="" />
            </NavLink>
          </div>
          <div>
            <button type="button" onClick={() => setToggleMenu(true)}>
              <span className="material-symbols-outlined select-none">
                menu
              </span>
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between  fixed right-0 top-0 bottom-0 gap-6 md:gap-0 md:relative bg-navySemi md:bg-transparent overflow-auto md:overflow-visible  duration-300 z-50 ${
            toggleMenu ? "w-72 md:w-full " : "w-0 md:w-full "
          }`}
        >
          <div className="block text-right text-primaryColor md:hidden px-8 mt-8">
            <button type="button" onClick={() => setToggleMenu(false)}>
              <span className="material-symbols-outlined select-none">
                close
              </span>
            </button>
          </div>
          <div className="px-8 md:p-0">
            <ul className="flex flex-col md:flex-row md:items-center gap-6">
              {/* home pages  */}
              <li className="relative group">
                <p
                  className={
                    "flex items-center hover:bg-navyDark md:hover:bg-transparent px-6 py-2 md:p-0 rounded-md hover:text-primaryColor cursor-pointer group"
                  }
                  onClick={() => handleDropdown("home")}
                >
                  <span>home</span>
                  <span
                    className={`material-symbols-outlined select-none md:group-hover:rotate-180 duration-300 ${
                      isSubmenuOpen["home"] && "rotate-180 md:rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </p>
                <ul
                  className={`md:bg-navySemi rounded-lg static md:absolute z-20 md:invisible md:opacity-0 md:translate-y-4 md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300 overflow-hidden ${
                    !isSubmenuOpen["home"] && "max-h-0 md:max-h-max"
                  }`}
                  ref={(ref) => (submenuRef.current["home"] = ref)}
                  style={{
                    maxHeight:
                      isSubmenuOpen["home"] &&
                      `${submenuRef.current["home"]?.scrollHeight}px`,
                  }}
                >
                  <li>
                    <NavLink
                      to="/"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      Home page 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/homepage-two"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      Home page 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/homepage-three"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      Home page 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/homepage-four"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      Home page 4
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/homepage-five"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      Home page 5
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* other pages  */}

              <li className="relative group">
                <p
                  className="flex items-center px-6 py-2 md:p-0 rounded-md hover:text-primaryColor hover:bg-navyDark md:hover:bg-transparent cursor-pointer group"
                  onClick={() => handleDropdown("pages")}
                >
                  <span>Pages</span>
                  <span
                    className={`material-symbols-outlined select-none md:group-hover:rotate-180 duration-300 ${
                      isSubmenuOpen["pages"] && "rotate-180 md:rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </p>
                <ul
                  className={`md:bg-navySemi rounded-lg static md:absolute z-20 md:invisible md:opacity-0 md:translate-y-4 md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300 overflow-hidden ${
                    !isSubmenuOpen["pages"] && "max-h-0 md:max-h-max"
                  }`}
                  ref={(ref) => (submenuRef.current["pages"] = ref)}
                  style={{
                    maxHeight:
                      isSubmenuOpen["pages"] &&
                      `${submenuRef.current["pages"]?.scrollHeight}px`,
                  }}
                >
                  <li>
                    <NavLink
                      to="/about-us"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      aboutUs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service-details/1"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      service details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      gallery
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* station  */}
              <li>
                <NavLink
                  to="/station"
                  className="px-6 py-2 md:p-0 flex rounded-md hover:text-primaryColor hover:bg-navyDark md:hover:bg-transparent"
                >
                  satation
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <Link to="/">
              <img src={logoWhite} alt="" />
            </Link>
          </div>

          <div className="px-8 md:p-0">
            <ul className="flex flex-col md:flex-row md:items-center gap-6">
              {/* blog page  */}

              <li>
                <NavLink
                  to="/blog"
                  className="px-6 py-2 md:p-0 flex rounded-md hover:text-primaryColor hover:bg-navyDark md:hover:bg-transparent"
                >
                  blog
                </NavLink>
              </li>

              {/* other pages  */}

              <li className="relative group">
                <p
                  className="flex items-center hover:text-primaryColor cursor-pointer group px-6 py-2 md:p-0 rounded-md hover:bg-navyDark md:hover:bg-transparent"
                  onClick={() => handleDropdown("shop")}
                >
                  <span>shop</span>
                  <span
                    className={`material-symbols-outlined select-none md:group-hover:rotate-180 duration-300 ${
                      isSubmenuOpen["shop"] && "rotate-180 md:rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </p>
                <ul
                  className={`md:bg-navySemi rounded-lg static md:absolute z-20 md:invisible md:opacity-0 md:translate-y-4 md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300 overflow-hidden ${
                    !isSubmenuOpen["shop"] && "max-h-0 md:max-h-max"
                  }`}
                  ref={(ref) => (submenuRef.current["shop"] = ref)}
                  style={{
                    maxHeight:
                      isSubmenuOpen["shop"] &&
                      `${submenuRef.current["shop"]?.scrollHeight}px`,
                  }}
                >
                  <li>
                    <NavLink
                      to="/shop"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor "
                    >
                      shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop-details/1"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      shop details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/cart"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      carts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/checkout"
                      className="whitespace-nowrap pl-6 pr-16 py-2 flex hover:text-primaryColor"
                    >
                      checkout
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* station  */}
              <li>
                <NavLink
                  to="/contact-us"
                  className="px-6 py-2 md:p-0 flex rounded-md hover:text-primaryColor hover:bg-navyDark md:hover:bg-transparent"
                >
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
