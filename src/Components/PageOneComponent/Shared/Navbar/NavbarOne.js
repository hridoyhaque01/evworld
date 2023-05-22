import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logoWhite } from "../../../../Assets/getImages";

function NavbarOne() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleDropdown = (menu) => {
    console.log(menu);
    setIsSubmenuOpen((prev) => ({
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="px-6 lg:px-28 2xl:px-32 py-6 relative z-50 bg-navyDark">
      <div className="flex items-center justify-between md:hidden relative ">
        {/* logo  */}
        <div className="flex-1">
          <Link to="/">
            <img src={logoWhite} alt="logo" className="mx-auto" />
          </Link>
        </div>
        <button type="button" onClick={() => setToggleMenu(true)}>
          <span className="material-symbols-outlined text-primaryColor">
            menu
          </span>
        </button>
        {/* toggle menu  */}
      </div>

      {/* navbar manus  */}

      {toggleMenu && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-navyDark md:hidden"
          onClick={() => setToggleMenu(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 md:relative h-full bg-navySemi ${
          toggleMenu ? "w-80" : "w-0 md:w-full"
        } md:bg-transparent md:overflow-visible overflow-hidden `}
      >
        <div
          className={`flex flex-col justify-start md:flex-row md:justify-between md:items-center gap-6 md:gap-4 lg:gap-6  p-8 md:p-0`}
        >
          {/* close menu button  */}

          <div className="text-right md:hidden">
            <button type="button" onClick={() => setToggleMenu(false)}>
              <span className="material-symbols-outlined text-primaryColor">
                close
              </span>
            </button>
          </div>

          {/* first menu  */}

          <ul className="flex flex-col md:items-center justify-start md:flex-row gap-6 md:gap-4 lg:gap-6">
            <li className="">
              <Link
                to="/"
                className="flex text-whiteHigh hover:text-primaryColor py-2 pl-4 hover:bg-navyDark md:py-0 md:pl-0 md:hover:bg-transparent uppercase font-medium rounded-md duration-100"
              >
                Home
              </Link>
            </li>
            <li className="group relative">
              <p
                className="group flex items-center text-whiteHigh hover:text-primaryColor py-2 pl-4 hover:bg-navyDark md:py-0 md:pl-0 md:hover:bg-transparent uppercase font-medium rounded-md duration-100 cursor-pointer "
                onClick={() => handleDropdown("pages")}
              >
                <span>Pages</span>
                <span
                  className={`material-symbols-outlined duration-300 ${
                    isSubmenuOpen["pages"]
                      ? "rotate-180 md:rotate-0 md:group-hover:rotate-180"
                      : "md:group-hover:rotate-180"
                  }`}
                >
                  expand_more
                </span>
              </p>
              <ul
                className={`static md:absolute bg-navySemi rounded-lg md:translate-y-6 md:opacity-0 md:invisible duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:visible ml-4 md:ml-0 overflow-hidden ${
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
                  <Link
                    to="/"
                    className="text-whiteHigh hover:text-primaryColor uppercase whitespace-nowrap font-medium flex py-3 pl-4 pr-24"
                  >
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pageTwo"
                    className="text-whiteHigh hover:text-primaryColor uppercase whitespace-nowrap font-medium flex py-3 pl-4 pr-24"
                  >
                    Page 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link
                to="/"
                className="flex text-whiteHigh hover:text-primaryColor py-2 pl-4 hover:bg-navyDark md:py-0 md:pl-0 md:hover:bg-transparent uppercase font-medium rounded-md duration-100"
              >
                Station
              </Link>
            </li>
          </ul>

          {/* logo  */}

          <div className="hidden md:block shrink-0">
            <Link to="/">
              <img src={logoWhite} alt="logo" />
            </Link>
          </div>

          {/* second menu  */}

          <ul className="flex flex-col md:items-center justify-start md:flex-row gap-6 md:gap-4 lg:gap-6">
            <li className="">
              <Link
                to="/"
                className="flex text-whiteHigh hover:text-primaryColor py-2 pl-4 hover:bg-navyDark md:py-0 md:pl-0 md:hover:bg-transparent uppercase font-medium rounded-md duration-100"
              >
                Home
              </Link>
            </li>
            <li className="group relative">
              <p
                className="group flex items-center text-whiteHigh hover:text-primaryColor py-2 pl-4 hover:bg-navyDark md:py-0 md:pl-0 md:hover:bg-transparent uppercase font-medium rounded-md duration-100 cursor-pointer "
                onClick={() => handleDropdown("shop")}
              >
                <span>shop</span>
                <span
                  className={`material-symbols-outlined duration-300 ${
                    isSubmenuOpen["shop"]
                      ? "rotate-180 md:rotate-0 md:group-hover:rotate-180"
                      : "md:group-hover:rotate-180"
                  }`}
                >
                  expand_more
                </span>
              </p>
              <ul
                className={`static md:absolute bg-navySemi rounded-lg md:translate-y-6 md:invisible md:opacity-0 duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:visible ml-4 md:ml-0 overflow-hidden ${
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
                  <Link
                    to=""
                    className="text-whiteHigh hover:text-primaryColor uppercase whitespace-nowrap font-medium flex py-3 pl-4 pr-24"
                  >
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="text-whiteHigh hover:text-primaryColor uppercase whitespace-nowrap font-medium flex py-3 pl-4 pr-24"
                  >
                    Page 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link
                to="/"
                className="flex text-whiteHigh hover:text-primaryColor py-2 pl-4 hover:bg-navyDark md:py-0 md:pl-0 md:hover:bg-transparent uppercase font-medium rounded-md duration-100"
              >
                Station
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarOne;
