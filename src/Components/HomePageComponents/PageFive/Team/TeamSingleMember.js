import React from "react";

function TeamSingleMember({ details }) {
  const { name, position, image } = details || {};
  return (
    <div className=" duration-200 bg-navySemi shadow-md py-10 px-4  mx-auto">
      <div>
        <img src={image} alt="team" className=" duration-300 mx-auto" />
      </div>
      <div className="text-center mt-12">
        <h2 className="text-base md:text-xl lg:text-2xl font-bold text-pureWhite">
          {name}
        </h2>
        <p className="text-xs text-whiteSemi mt-2">{position}</p>
      </div>
    </div>
  );
}

export default TeamSingleMember;
