import React from "react";
import { logoWhite } from "../../../../Assets/getImages";

import { Link } from "react-router-dom";

function FooterTwo() {
  return (
    <footer className="px-6 lg:px-28 2xl:px-32 py-10 bg-navySemi text-whiteHigh">
      <div className="gap-10 grid grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col gap-4 md:col-span-2">
          <div>
            <img src={logoWhite} alt="" />
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-4">
            <Link to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_523_4250)">
                  <path
                    d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56824 3.03617 8.69181 1.52242 12.3463C0.00866564 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM30.2947 14.7368C30.2947 14.9632 30.3132 15.1895 30.3132 15.4237C30.3132 22.4421 24.9684 30.5395 15.1921 30.5395C12.2994 30.551 9.46546 29.7228 7.03422 28.1553C7.4558 28.2079 7.88042 28.2326 8.30527 28.2289C10.6897 28.2292 13.0056 27.4315 14.8842 25.9632C13.7772 25.9305 12.7074 25.556 11.8216 24.8912C10.9358 24.2264 10.2775 23.3038 9.93685 22.25C10.2687 22.3157 10.6066 22.3457 10.9447 22.3395C11.4144 22.3436 11.8826 22.2851 12.3369 22.1658C11.1355 21.9172 10.0566 21.2623 9.28154 20.3113C8.50651 19.3604 8.08275 18.1715 8.08159 16.9447V16.8868C8.81742 17.2947 9.6406 17.5194 10.4816 17.5421C9.35486 16.7892 8.55821 15.6344 8.25446 14.3138C7.95071 12.9931 8.1628 11.6063 8.84738 10.4368C10.1787 12.0818 11.8422 13.4273 13.7291 14.3855C15.6159 15.3437 17.6837 15.8929 19.7974 15.9974C19.7114 15.5997 19.67 15.1937 19.6737 14.7868C19.6728 13.721 19.9926 12.6795 20.5917 11.7978C21.1907 10.9162 22.0412 10.2352 23.0324 9.84346C24.0237 9.45171 25.11 9.36733 26.1499 9.60128C27.1897 9.83524 28.1352 10.3767 28.8632 11.1553C30.0512 10.9216 31.1904 10.4864 32.2316 9.86842C31.8387 11.1006 31.0071 12.1456 29.8947 12.8053C30.95 12.6741 31.9808 12.3914 32.9553 11.9658C32.2452 13.0443 31.3434 13.9834 30.2947 14.7368Z"
                    fill="#C1EF00"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_523_4250">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_523_4254)">
                  <path
                    d="M20 24.1016C22.2652 24.1016 24.1016 22.2652 24.1016 20C24.1016 17.7348 22.2652 15.8984 20 15.8984C17.7348 15.8984 15.8984 17.7348 15.8984 20C15.8984 22.2652 17.7348 24.1016 20 24.1016Z"
                    fill="#C1EF00"
                  />
                  <path
                    d="M20 0.46875C9.2132 0.46875 0.46875 9.2132 0.46875 20C0.46875 30.7868 9.2132 39.5312 20 39.5312C30.7868 39.5312 39.5312 30.7868 39.5312 20C39.5312 9.2132 30.7868 0.46875 20 0.46875ZM32.067 24.9641C31.9733 26.8209 31.4515 28.652 30.0983 29.9909C28.732 31.3424 26.8922 31.846 25.0174 31.9388H14.9827C13.1077 31.846 11.2681 31.3427 9.9018 29.9909C8.54852 28.652 8.0268 26.8209 7.93305 24.9641V15.0359C8.0268 13.1791 8.54859 11.348 9.9018 10.0091C11.2681 8.6575 13.1079 8.15391 14.9827 8.06117H25.0173C26.8923 8.15391 28.7319 8.65727 30.0982 10.0091C31.4515 11.348 31.9732 13.1791 32.067 15.0359L32.067 24.9641Z"
                    fill="#C1EF00"
                  />
                  <path
                    d="M24.8896 10.3237C22.4454 10.2567 17.5532 10.2567 15.109 10.3237C13.837 10.3586 12.3951 10.6753 11.4888 11.6432C10.5471 12.6494 10.1912 13.865 10.1551 15.225C10.0917 17.6118 10.1551 24.7759 10.1551 24.7759C10.1965 26.1357 10.5471 27.3514 11.4888 28.3576C12.3951 29.3259 13.837 29.6422 15.109 29.6771C17.5532 29.7442 22.4454 29.7442 24.8896 29.6771C26.1616 29.6422 27.6035 29.3256 28.5098 28.3576C29.4515 27.3514 29.8073 26.1358 29.8434 24.7759V15.225C29.8073 13.865 29.4515 12.6494 28.5098 11.6432C27.6032 10.675 26.1612 10.3586 24.8896 10.3237ZM19.999 26.3579C18.7416 26.3579 17.5125 25.985 16.467 25.2864C15.4215 24.5879 14.6067 23.595 14.1255 22.4333C13.6443 21.2716 13.5184 19.9934 13.7637 18.7602C14.009 17.5269 14.6145 16.3942 15.5036 15.5051C16.3927 14.616 17.5255 14.0105 18.7587 13.7652C19.9919 13.5199 21.2702 13.6458 22.4319 14.1269C23.5935 14.6081 24.5864 15.423 25.285 16.4684C25.9835 17.5139 26.3564 18.7431 26.3564 20.0004C26.3564 21.6865 25.6866 23.3036 24.4944 24.4958C23.3021 25.6881 21.6851 26.3579 19.999 26.3579ZM26.3834 14.9553C26.132 14.9552 25.8862 14.8806 25.6771 14.7408C25.4681 14.6011 25.3051 14.4025 25.209 14.1701C25.1128 13.9378 25.0876 13.6822 25.1367 13.4355C25.1858 13.1889 25.3069 12.9624 25.4848 12.7846C25.6626 12.6068 25.8892 12.4857 26.1358 12.4367C26.3824 12.3877 26.6381 12.4129 26.8704 12.5091C27.1027 12.6054 27.3013 12.7683 27.441 12.9774C27.5807 13.1865 27.6552 13.4323 27.6552 13.6838C27.6552 13.8508 27.6223 14.0162 27.5584 14.1704C27.4945 14.3247 27.4008 14.4649 27.2827 14.583C27.1646 14.701 27.0244 14.7947 26.8701 14.8586C26.7158 14.9225 26.5504 14.9553 26.3834 14.9553Z"
                    fill="#C1EF00"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_523_4254">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56824 3.03617 8.69181 1.52242 12.3463C0.00866564 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM25.6895 13.0158C25.6895 13.3921 25.5316 13.5421 25.1632 13.5421C24.4553 13.5421 23.7474 13.5421 23.0421 13.5711C22.3369 13.6 21.9526 13.9211 21.9526 14.6579C21.9368 15.4474 21.9526 16.2211 21.9526 17.0263H24.9816C25.4132 17.0263 25.5605 17.1737 25.5605 17.6079C25.5605 18.6605 25.5605 19.7184 25.5605 20.7816C25.5605 21.2105 25.4237 21.3447 24.9895 21.3474H21.9263V29.9105C21.9263 30.3684 21.7842 30.5132 21.3316 30.5132H18.0369C17.6395 30.5132 17.4842 30.3579 17.4842 29.9605V21.3605H14.8684C14.4579 21.3605 14.3105 21.2105 14.3105 20.7974C14.3105 19.7325 14.3105 18.6684 14.3105 17.6053C14.3105 17.1947 14.4658 17.0395 14.8711 17.0395H17.4842V14.7368C17.4532 13.7025 17.7014 12.679 18.2026 11.7737C18.7237 10.8598 19.5587 10.1659 20.5526 9.82105C21.1977 9.58636 21.8794 9.46872 22.5658 9.47368H25.1526C25.5237 9.47368 25.679 9.63684 25.679 10C25.6921 11.0132 25.6921 12.0158 25.6895 13.0158Z"
                  fill="#C1EF00"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl sm:text-sm lg:text-base uppercase font-clashBold text-primaryColor mb-4">
              Navigation
            </h2>
            <ul className="flex flex-col gap-4 text-sm lg:text-base">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl sm:text-sm lg:text-base uppercase font-clashBold text-primaryColor mb-4">
              Infomation
            </h2>
            <ul className="flex flex-col gap-4 text-sm lg:text-base">
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <Link to="/">Find a Station</Link>
              </li>
              <li>
                <Link to="/">Shop Location</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <h2 className="text-2xl sm:text-sm lg:text-base uppercase font-clashBold text-primaryColor">
              Find Us
            </h2>
            <p className="">Greenwich Village & Soho, 10012 New York, USA</p>
            <p>
              <Link to="/" className="">
                800 123-456
              </Link>
            </p>
            <p className="">
              <Link to="/" className="">
                Logoipsum @example.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-6 xl:mt-10">
        <hr className="text-navyLow" />
        <p className="text-sm xl:text-base text-center text-whiteMid mt-10">
          © 2023 <span className="text-primaryColor">EVWorld.</span> All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterTwo;

// <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
// <div>

// </div>
