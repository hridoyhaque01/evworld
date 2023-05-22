import React from "react";

function TeamSingleMember({ details }) {
  const { name, position, image } = details || {};
  return (
    <div className="flex flex-col gap-3 py-10 px-4 group duration-200 shadow-md">
      <div>
        <img
          src={image}
          alt="team"
          className="w-32 xl:w-40 mx-auto saturate-0 group-hover:saturate-100 duration-300"
        />
      </div>
      <div className="text-center mt-6">
        <h2 className="text-base lg:text-sm xl:text-base font-bold text-navyDark">
          {name}
        </h2>
        <p className="text-xs text-blackMid mt-2">{position}</p>
      </div>
    </div>
  );
}

export default TeamSingleMember;
