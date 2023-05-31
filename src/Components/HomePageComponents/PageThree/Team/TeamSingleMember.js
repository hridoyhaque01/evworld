import React from "react";
import { Link } from "react-router-dom";

function TeamSingleMember({ details }) {
  const { name, position, image } = details || {};
  return (
    <div className=" duration-200 shadow-md rounded-2xl">
      <div className="relative">
        <div>
          <img src={image} alt="team" className="w-full duration-300" />
        </div>
        <div className="text-center absolute left-3 xl:left-6 right-3 xl:right-6  -bottom-10 bg-primaryColor py-4 px-2 rounded-2xl">
          <h2 className="text-base lg:text-2xl font-bold text-blackFadeDark">
            {name}
          </h2>
          <p className="text-xs text-blackMid mt-2">{position}</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-16 pb-6 gap-6">
        <Link to="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87707C0.00693251 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM24.2358 11.7895C24.2358 11.9705 24.2505 12.1516 24.2505 12.3389C24.2505 17.9537 19.9747 24.4316 12.1537 24.4316C9.8395 24.4408 7.57237 23.7782 5.62738 22.5242C5.96464 22.5664 6.30434 22.5861 6.64422 22.5832C8.55174 22.5833 10.4045 21.9452 11.9074 20.7705C11.0218 20.7444 10.1659 20.4448 9.4573 19.913C8.74867 19.3811 8.22198 18.6431 7.94948 17.8C8.21493 17.8526 8.48524 17.8766 8.7558 17.8716C9.13154 17.8748 9.50605 17.8281 9.86948 17.7326C8.90844 17.5337 8.04525 17.0098 7.42523 16.2491C6.80521 15.4883 6.4662 14.5372 6.46527 13.5558V13.5095C7.05393 13.8357 7.71248 14.0155 8.38527 14.0337C7.48389 13.4314 6.84656 12.5075 6.60357 11.451C6.36057 10.3945 6.53024 9.28507 7.0779 8.34947C8.14298 9.66544 9.47375 10.7419 10.9832 11.5084C12.4927 12.2749 14.147 12.7143 15.8379 12.7979C15.7692 12.4798 15.736 12.155 15.739 11.8295C15.7382 10.9768 15.9941 10.1436 16.4733 9.43826C16.9525 8.73295 17.6329 8.18816 18.4259 7.87477C19.219 7.56137 20.088 7.49386 20.9199 7.68103C21.7518 7.86819 22.5081 8.30137 23.0905 8.92421C24.0409 8.73731 24.9523 8.38913 25.7853 7.89474C25.4709 8.88045 24.8057 9.71649 23.9158 10.2442C24.76 10.1393 25.5846 9.91311 26.3642 9.57263C25.7961 10.4354 25.0747 11.1868 24.2358 11.7895Z"
              className="fill-blackHigh group-hover:fill-primaryColor duration-200"
            />
          </svg>
        </Link>
        <Link to="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M16 19.2812C17.8122 19.2812 19.2812 17.8122 19.2812 16C19.2812 14.1878 17.8122 12.7188 16 12.7188C14.1878 12.7188 12.7188 14.1878 12.7188 16C12.7188 17.8122 14.1878 19.2812 16 19.2812Z"
              className="fill-blackHigh group-hover:fill-primaryColor duration-200"
            />
            <path
              d="M16 0.375C7.37056 0.375 0.375 7.37056 0.375 16C0.375 24.6294 7.37056 31.625 16 31.625C24.6294 31.625 31.625 24.6294 31.625 16C31.625 7.37056 24.6294 0.375 16 0.375ZM25.6536 19.9713C25.5786 21.4568 25.1612 22.9216 24.0786 23.9927C22.9856 25.0739 21.5137 25.4768 20.0139 25.5511H11.9861C10.4861 25.4768 9.0145 25.0742 7.92144 23.9927C6.83881 22.9216 6.42144 21.4568 6.34644 19.9713V12.0288C6.42144 10.5433 6.83887 9.07837 7.92144 8.00725C9.0145 6.926 10.4863 6.52312 11.9861 6.44894H20.0139C21.5139 6.52312 22.9855 6.92581 24.0786 8.00725C25.1612 9.07837 25.5786 10.5433 25.6536 12.0288L25.6536 19.9713Z"
              className="fill-blackHigh group-hover:fill-primaryColor duration-200"
            />
            <path
              d="M19.9127 8.25897C17.9573 8.20534 14.0435 8.20534 12.0882 8.25897C11.0706 8.28691 9.91703 8.54022 9.19203 9.31459C8.43866 10.1195 8.15397 11.092 8.12509 12.18C8.07434 14.0895 8.12509 19.8207 8.12509 19.8207C8.15816 20.9085 8.43866 21.8812 9.19203 22.6861C9.91703 23.4607 11.0706 23.7138 12.0882 23.7417C14.0435 23.7953 17.9573 23.7953 19.9127 23.7417C20.9302 23.7138 22.0838 23.4605 22.8088 22.6861C23.5622 21.8812 23.8468 20.9087 23.8757 19.8207V12.18C23.8468 11.092 23.5622 10.1195 22.8088 9.31459C22.0835 8.53997 20.93 8.28691 19.9127 8.25897ZM16.0002 21.0863C14.9943 21.0863 14.0109 20.788 13.1746 20.2291C12.3382 19.6703 11.6863 18.876 11.3014 17.9466C10.9164 17.0173 10.8157 15.9947 11.0119 15.0081C11.2082 14.0216 11.6926 13.1153 12.4039 12.404C13.1151 11.6928 14.0214 11.2084 15.0079 11.0121C15.9945 10.8159 17.0171 10.9166 17.9465 11.3016C18.8758 11.6865 19.6701 12.3384 20.229 13.1747C20.7878 14.0111 21.0861 14.9944 21.0861 16.0003C21.0861 17.3492 20.5503 18.6428 19.5965 19.5966C18.6427 20.5504 17.349 21.0863 16.0002 21.0863ZM21.1077 11.9642C20.9066 11.9642 20.7099 11.9045 20.5427 11.7927C20.3754 11.6809 20.2451 11.522 20.1681 11.3361C20.0912 11.1502 20.0711 10.9457 20.1104 10.7484C20.1496 10.5511 20.2465 10.3699 20.3888 10.2277C20.5311 10.0855 20.7123 9.9886 20.9096 9.94937C21.1069 9.91014 21.3114 9.9303 21.4973 10.0073C21.6831 10.0843 21.842 10.2147 21.9537 10.3819C22.0655 10.5492 22.1252 10.7459 22.1252 10.947C22.1252 11.0806 22.0988 11.2129 22.0477 11.3364C21.9966 11.4598 21.9216 11.5719 21.8271 11.6664C21.7327 11.7608 21.6205 11.8358 21.4971 11.8869C21.3736 11.938 21.2413 11.9643 21.1077 11.9642Z"
              className="fill-blackHigh group-hover:fill-primaryColor duration-200"
            />
          </svg>
        </Link>
        <Link to="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87707C0.00693251 12.8007 -0.309921 16.0178 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5514 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM20.5516 10.4126C20.5516 10.7137 20.4253 10.8337 20.1305 10.8337C19.5642 10.8337 18.9979 10.8337 18.4337 10.8568C17.8695 10.88 17.5621 11.1368 17.5621 11.7263C17.5495 12.3579 17.5621 12.9768 17.5621 13.6211H19.9853C20.3305 13.6211 20.4484 13.7389 20.4484 14.0863C20.4484 14.9284 20.4484 15.7747 20.4484 16.6253C20.4484 16.9684 20.339 17.0758 19.9916 17.0779H17.5411V23.9284C17.5411 24.2947 17.4274 24.4105 17.0653 24.4105H14.4295C14.1116 24.4105 13.9874 24.2863 13.9874 23.9684V17.0884H11.8947C11.5663 17.0884 11.4484 16.9684 11.4484 16.6379C11.4484 15.786 11.4484 14.9347 11.4484 14.0842C11.4484 13.7558 11.5726 13.6316 11.8968 13.6316H13.9874V11.7895C13.9626 10.962 14.1611 10.1432 14.5621 9.41895C14.979 8.68781 15.647 8.13276 16.4421 7.85684C16.9581 7.66909 17.5035 7.57498 18.0526 7.57895H20.1221C20.419 7.57895 20.5432 7.70947 20.5432 8C20.5537 8.81053 20.5537 9.61263 20.5516 10.4126Z"
              className="fill-blackHigh group-hover:fill-primaryColor duration-200"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default TeamSingleMember;
