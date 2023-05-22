import React from "react";
import { Link } from "react-router-dom";

function TeamSingleMember({ details }) {
  const { name, position, instaLink, linkedinLink, image } = details || {};
  return (
    <div className="flex flex-col gap-3 px-3 pb-3 pt-8 bg-navySemi rounded-2xl border-2 border-transparent group hover:border-primaryColor duration-200 ">
      <div>
        <img
          src={image}
          alt="team"
          className="w-32 xl:w-40 mx-auto saturate-0 group-hover:saturate-100 duration-300"
        />
      </div>
      <div className="text-center md:text-left bg-whiteHigh group-hover:bg-primaryColor rounded-lg px-2 sm:px-4 py-6 ">
        <div className="flex flex-col md:flex-row gap-y-2 items-center justify-between">
          <h2 className="text-base lg:text-sm xl:text-base  font-bold text-blackFadeDark">
            {name}
          </h2>
          <div className="flex items-center gap-2">
            <Link to={instaLink}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.734375"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#212035"
                />
                <path
                  d="M15.1786 8.875C14.7866 8.875 14.4785 9.18987 14.4785 9.58171C14.4785 9.97354 14.7936 10.2884 15.1786 10.2884C15.5707 10.2884 15.8857 9.97354 15.8857 9.58171C15.8787 9.18987 15.5637 8.875 15.1786 8.875Z"
                  fill="#BCDF2B"
                />
                <path
                  d="M12.0492 9.77734C10.4179 9.77734 9.09473 11.0998 9.09473 12.7301C9.09473 14.3604 10.4179 15.6829 12.0492 15.6829C13.6805 15.6829 15.0037 14.3604 15.0037 12.7301C15.0037 11.1068 13.6805 9.77734 12.0492 9.77734ZM12.0492 14.6263C11.006 14.6263 10.1589 13.7797 10.1589 12.7371C10.1589 11.6945 11.006 10.8479 12.0492 10.8479C13.0924 10.8479 13.9395 11.6945 13.9395 12.7371C13.9395 13.7797 13.0924 14.6263 12.0492 14.6263Z"
                  fill="#BCDF2B"
                />
                <path
                  d="M14.3944 18.7344H9.6056C7.61727 18.7344 6 17.118 6 15.1309V10.3379C6 8.3507 7.61727 6.73438 9.6056 6.73438H14.3944C16.3827 6.73438 18 8.3507 18 10.3379V15.1239C18 17.118 16.3827 18.7344 14.3944 18.7344ZM9.6056 7.8679C8.24037 7.8679 7.12719 8.98044 7.12719 10.3449V15.1309C7.12719 16.4953 8.24037 17.6078 9.6056 17.6078H14.3944C15.7596 17.6078 16.8728 16.4953 16.8728 15.1309V10.3379C16.8728 8.97344 15.7596 7.86091 14.3944 7.86091H9.6056V7.8679Z"
                  fill="#BCDF2B"
                />
              </svg>
            </Link>
            <Link to={linkedinLink}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.734375"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#212035"
                />
                <path
                  d="M6.2022 10.7168H8.69011V18.7344H6.2022V10.7168ZM7.44176 6.73438C8.24176 6.73438 8.88352 7.37755 8.88352 8.17931C8.88352 8.97226 8.24176 9.62424 7.44176 9.62424C6.64176 9.62424 6 8.97226 6 8.17931C6 7.37755 6.65055 6.73438 7.44176 6.73438Z"
                  fill="#BCDF2B"
                />
                <path
                  d="M9.89258 10.7163H12.275V11.8088H12.3102C12.6442 11.1745 13.453 10.5137 14.6662 10.5137C17.1805 10.5137 17.6464 12.1701 17.6464 14.3286V18.7251H15.1585V14.8309C15.1585 13.8969 15.1409 12.7075 13.8662 12.7075C12.5739 12.7075 12.3717 13.7207 12.3717 14.7692V18.7339H9.88379V10.7163H9.89258Z"
                  fill="#BCDF2B"
                />
              </svg>
            </Link>
          </div>
        </div>
        <p className="text-xs text-blackMid mt-2">{position}</p>
      </div>
    </div>
  );
}

export default TeamSingleMember;
