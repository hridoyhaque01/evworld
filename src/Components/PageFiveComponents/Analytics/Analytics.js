import React from "react";
import {
  carRoad2,
  customer2,
  plant2,
  station2,
} from "../../../Assets/getImages";
import AnalyticsSingleItem from "./AnalyticsSingleItem";

function Analytics() {
  return (
    <section className="px-6  pt-10 sm:pt-20">
      <div className="max-w-[1180px] mx-auto">
      <div className="grid grid-cols-4 gap-x-4 sm:gap-x-6">
        <AnalyticsSingleItem
          suffix="k"
          count="40"
          title="Charging Stations"
        >
            <svg className="w-6 sm:w-14 xl:w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4992 7.2L16.2992 4C15.9992 3.7 15.4992 3.7 15.1992 4C14.8992 4.3 14.8992 4.8 15.1992 5.1L16.7992 6.7C15.7992 7.1 14.9992 8.2 15.1992 9.4C15.3992 10.5 16.2992 11.4 17.3992 11.5C17.8992 11.6 18.2992 11.5 18.6992 11.3V18.5C18.6992 19 18.1992 19.5 17.6992 19.5C17.1992 19.5 16.6992 19 16.6992 18.5V14C16.6992 12.9 15.7992 12 14.6992 12H13.6992V5C13.6992 3.9 12.7992 3 11.6992 3H5.69922C4.59922 3 3.69922 3.9 3.69922 5V20C3.69922 20.5 4.09922 21 4.69922 21H12.6992C13.2992 21 13.6992 20.5 13.6992 20V13.5H15.1992V18.4C15.1992 19.7 16.0992 20.9 17.3992 21C18.8992 21.1 20.1992 20 20.1992 18.5V9C20.2992 8.3 19.9992 7.7 19.4992 7.2ZM17.7992 10C17.2992 10 16.7992 9.6 16.7992 9C16.7992 8.4 17.2992 8 17.7992 8C18.2992 8 18.7992 8.4 18.7992 9C18.7992 9.6 18.2992 10 17.7992 10ZM7.79922 16.1V13.5H6.59922C6.19922 13.5 5.99922 13.1 6.19922 12.8L8.89922 7.8C8.99922 7.3 9.69922 7.5 9.69922 8V11H10.7992C11.1992 11 11.3992 11.4 11.1992 11.8L8.59922 16.4C8.39922 16.8 7.69922 16.6 7.79922 16.1Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            </svg>

        </AnalyticsSingleItem>
        <AnalyticsSingleItem
          suffix="M"
          count="1600"
          title="Business Customers"
        >
          <svg className="w-6 sm:w-14 xl:w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_8901)">
            <path d="M12.5 9.68604C14.7523 9.68604 16.5781 7.8602 16.5781 5.60791C16.5781 3.35562 14.7523 1.52979 12.5 1.52979C10.2477 1.52979 8.42188 3.35562 8.42188 5.60791C8.42188 7.8602 10.2477 9.68604 12.5 9.68604Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            <path d="M20.75 9.68604C22.1739 9.68604 23.3281 8.53177 23.3281 7.10791C23.3281 5.68405 22.1739 4.52979 20.75 4.52979C19.3261 4.52979 18.1719 5.68405 18.1719 7.10791C18.1719 8.53177 19.3261 9.68604 20.75 9.68604Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            <path d="M4.25 9.68604C5.67386 9.68604 6.82812 8.53177 6.82812 7.10791C6.82812 5.68405 5.67386 4.52979 4.25 4.52979C2.82614 4.52979 1.67188 5.68405 1.67188 7.10791C1.67188 8.53177 2.82614 9.68604 4.25 9.68604Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            <path d="M6.79016 12.0011C5.77531 11.1697 4.85623 11.2797 3.68281 11.2797C1.92781 11.2797 0.5 12.6991 0.5 14.4433V19.5625C0.5 20.32 1.11828 20.936 1.87859 20.936C5.16106 20.936 4.76562 20.9954 4.76562 20.7944C4.76562 17.1669 4.33597 14.5067 6.79016 12.0011Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            <path d="M13.6153 11.2985C11.5657 11.1275 9.78421 11.3004 8.2476 12.5688C5.67618 14.6285 6.17104 17.4017 6.17104 20.7944C6.17104 21.692 6.90135 22.436 7.8126 22.436C17.7071 22.436 18.1009 22.7551 18.6876 21.4558C18.88 21.0164 18.8273 21.1561 18.8273 16.9525C18.8273 13.6138 15.9364 11.2985 13.6153 11.2985Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            <path d="M21.3183 11.2801C20.1384 11.2801 19.2244 11.1712 18.2109 12.0015C20.6468 14.4885 20.2355 16.9672 20.2355 20.7948C20.2355 20.997 19.9072 20.9363 23.0733 20.9363C23.8608 20.9363 24.5011 20.2984 24.5011 19.5142V14.4437C24.5011 12.6995 23.0733 11.2801 21.3183 11.2801Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            </g>
            <defs>
            <clipPath id="clip0_730_8901">
            <rect width="24" height="24" className="fill-pureWhite group-hover:fill-navyDark duration-300" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg>

        </AnalyticsSingleItem>
        <AnalyticsSingleItem
          suffix="k"
          count="300"
          title="Trees Planted"
        >
         <svg className="w-6 sm:w-14 xl:w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6947 16.2826C17.5288 20.1858 17.3905 20.6368 16.1558 21.0041C14.6764 21.4408 13.2379 21.6271 12.6925 21.6271C11.8512 21.6271 11.0271 21.3696 10.3379 20.8864C9.20664 20.1334 9.05252 19.8852 8.54003 19.7876C8.4857 19.5883 8.54237 19.7575 6.21484 14.9067L7.45591 14.1365C8.92511 13.2266 10.8824 13.6018 11.9076 14.9925C12.0867 15.2329 12.3687 15.3752 12.6704 15.358L15.7339 15.228C16.5318 15.2038 17.1298 15.7773 17.2423 16.447L19.6975 14.6075C20.6146 13.913 21.8611 13.9734 22.7095 14.6541C23.2251 15.0685 23.2324 15.865 22.6947 16.2826Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
          <path d="M7.40355 20.9621L4.36422 22.4075C3.95669 22.6036 3.46727 22.4323 3.2711 22.0247L0.985519 17.2764C0.789348 16.8689 0.960723 16.3795 1.36825 16.1833L4.40758 14.738C4.81511 14.5418 5.30454 14.7131 5.50071 15.1207L7.78624 19.869C7.98241 20.2765 7.81108 20.7659 7.40355 20.9621Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
          <path d="M15.1942 11.4384C15.7706 11.7107 17.7156 12.6942 19.1602 14.0898L17.5169 15.3211C16.7679 14.3849 15.7448 14.5018 15.7019 14.4921L12.6213 14.6245C12.5771 14.6245 12.5305 14.5975 12.4987 14.5559C12.1725 14.1144 11.7604 13.7465 11.2943 13.4767C12.5134 12.4858 13.8673 11.7769 14.4461 11.4949C14.555 10.6239 14.5293 9.72587 14.2842 8.86801C9.67439 8.96148 7.404 6.54058 7.39453 2.16226C7.39453 1.80414 7.67658 1.51722 8.0347 1.51229C12.4823 1.4544 14.8313 3.75869 14.841 8.21561C15.0527 5.32642 16.667 3.77317 19.874 3.76389C20.1438 3.76145 20.3621 3.97726 20.3645 4.24464C20.402 7.50306 18.776 9.36334 15.3168 9.37328C15.2702 9.47382 15.2285 9.57929 15.1917 9.68476C15.258 10.2145 15.2629 10.7983 15.1942 11.4384Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
          </svg>

        </AnalyticsSingleItem>
        <AnalyticsSingleItem
          suffix="M+"
          count="3"
          title="Cars On Road"
        >
          <svg className="w-6 sm:w-14 xl:w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_8917)">
            <path d="M24.3625 8.76328C24.2451 8.62009 24.0699 8.53651 23.8862 8.53651H21.5504C20.974 7.01616 20.2231 5.52653 19.3695 4.96423C16.4167 3.02169 8.5847 3.02169 5.63195 4.96423C4.77777 5.52714 4.0299 7.01862 3.45041 8.53651H1.11462C0.929039 8.53651 0.754516 8.62009 0.638372 8.76328C0.521614 8.90585 0.47491 9.09451 0.51301 9.2758L0.858984 10.9522C0.917978 11.238 1.16993 11.442 1.4606 11.442H2.15254C1.48456 12.2127 1.16071 13.183 1.15641 14.154C1.15211 15.3535 1.60747 16.4376 2.44014 17.2045C2.44936 17.2125 2.45857 17.218 2.46718 17.226V19.5717C2.46718 20.0799 2.88013 20.4935 3.38895 20.4935H5.54345C6.05228 20.4935 6.46523 20.0799 6.46523 19.5717V18.629H18.535V19.5717C18.535 20.0799 18.9479 20.4935 19.4568 20.4935H21.6113C22.1189 20.4935 22.533 20.0799 22.533 19.5717V17.2721C23.4167 16.4628 23.8389 15.3492 23.8444 14.2375C23.8481 13.2334 23.5095 12.2274 22.8022 11.4408H23.5402C23.8321 11.4408 24.0841 11.2368 24.1418 10.9504L24.4884 9.27457C24.5241 9.09451 24.4792 8.90708 24.3625 8.76328ZM6.64406 6.50364C8.99766 4.9544 16.0026 4.9544 18.3549 6.50364C18.8121 6.80353 19.4002 8.016 19.9392 9.50072H5.06106C5.59876 8.01662 6.18686 6.80476 6.64406 6.50364ZM3.88733 14.385C3.88733 13.3833 4.69972 12.5722 5.70077 12.5722C6.70305 12.5722 7.51421 13.3833 7.51421 14.385C7.51421 15.3867 6.70305 16.1985 5.70077 16.1985C4.69972 16.1985 3.88733 15.3867 3.88733 14.385ZM19.3234 16.1985C18.3224 16.1985 17.51 15.3867 17.51 14.385C17.51 13.3833 18.3224 12.5722 19.3234 12.5722C20.3257 12.5722 21.1369 13.3833 21.1369 14.385C21.1369 15.3867 20.3245 16.1985 19.3234 16.1985Z" className="fill-pureWhite group-hover:fill-navyDark duration-300"/>
            </g>
            <defs>
            <clipPath id="clip0_730_8917">
            <rect width="24" height="24" className="fill-pureWhite group-hover:fill-navyDark duration-300" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg>

        </AnalyticsSingleItem>
      </div>
      </div>
    </section>
  );
}

export default Analytics;
