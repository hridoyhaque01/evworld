import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logoWhite } from "../../../Assets/getImages";

function TopNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-10/12 mx-auto py-8 bg-navyDark text-pureWhite uppercase font-dmSans font-medium relative z-50">
      <div className="flex justify-between">
        <div className="max-w-max block lg:hidden">
          <Link
            className="hover:text-primaryColor active:bg-transparent"
            to="/"
          >
            <img src={logoWhite} alt="logo" />
          </Link>
        </div>
        <div
          className={`min-h-screen flex flex-col justify-start gap-y-6 lg:items-center lg:w-full lg:flex-row lg:justify-between fixed top-0 right-0 lg:min-h-min lg:relative bg-navySemi lg:bg-transparent overflow-hidden duration-200 lg:px-0 ${
            showMenu ? "w-80 px-8" : "w-0 px-0"
          }`}
        >
          <div className="block lg:hidden mt-8 text-right">
            <button type="button" onClick={() => setShowMenu(false)}>
              <span class="material-symbols-outlined text-primaryColor">
                close
              </span>
            </button>
          </div>

          <ul className="flex gap-x-6 flex-col lg:flex-row gap-y-6">
            <li>
              <Link
                className="gap-1 flex items-center hover:text-primaryColor active:bg-transparent px-6 py-2 hover:bg-navyDark lg:p-0 lg:hover:bg-transparent lg:max-w-max rounded-md"
                to=""
              >
                Home
              </Link>
            </li>
            <li className="relative dropdown dropdown-hover">
              <Link
                className="gap-1 flex items-center hover:text-primaryColor active:bg-transparent px-6 py-2 hover:bg-navyDark lg:p-0 lg:hover:bg-transparent lg:max-w-max rounded-md"
                to=""
              >
                <span>Pages</span>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className=" bg-navySemi w-36 rounded-lg dropdown-content menu ">
                <li>
                  <Link
                    to="/"
                    className="pl-4 block py-2 hover:text-primaryColor"
                  >
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="pl-4 block py-2 hover:text-primaryColor"
                  >
                    Page 1
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="gap-1 flex items-center hover:text-primaryColor active:bg-transparent px-6 py-2 hover:bg-navyDark lg:p-0 lg:hover:bg-transparent lg:max-w-max rounded-md"
                to=""
              >
                Station
              </Link>
            </li>
          </ul>

          {/* logo  */}

          <div className="max-w-max hidden lg:block">
            <Link
              className="hover:text-primaryColor active:bg-transparent"
              to="/"
            >
              <img src={logoWhite} alt="logo" />
            </Link>
          </div>

          {/* right side menu  */}
          <ul className="flex gap-x-6 flex-col lg:flex-row gap-y-6">
            <li>
              <Link
                className="gap-1 flex items-center hover:text-primaryColor active:bg-transparent px-6 py-2 hover:bg-navyDark lg:p-0 lg:hover:bg-transparent lg:max-w-max rounded-md"
                to=""
              >
                blog
              </Link>
            </li>

            <li className="relative dropdown dropdown-hover">
              <Link
                className="gap-1 flex items-center hover:text-primaryColor active:bg-transparent px-6 py-2 hover:bg-navyDark lg:p-0 lg:hover:bg-transparent lg:max-w-max rounded-md"
                to=""
              >
                <span>Shop</span>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className=" bg-navySemi w-36 rounded-lg dropdown-content menu ">
                <li>
                  <Link
                    to="/"
                    className="pl-4 block py-2 hover:text-primaryColor"
                  >
                    Shop 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="pl-4 block py-2 hover:text-primaryColor"
                  >
                    Shop 1
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                className="gap-1 flex items-center hover:text-primaryColor active:bg-transparent px-6 py-2 hover:bg-navyDark lg:p-0 lg:hover:bg-transparent lg:max-w-max rounded-md"
                to=""
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button type="button" onClick={() => setShowMenu(true)}>
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
