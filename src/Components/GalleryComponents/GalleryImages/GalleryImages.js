import React, { useEffect, useState } from "react";
import getData from "../../../utils/getData.json";

function GalleryImages() {
  const { gallery } = getData || {};

  const [currentRow, setCurrentRow] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [isDisabled, setIsDisabled] = useState(false);

  const nextRow = currentRow * rowsPerPage;
  const currentRows = gallery?.slice(1, nextRow);

  const handleLoadImage = () => {
    setCurrentRow((prev) => prev + 1);
  };

  useEffect(() => {
    if (gallery?.length <= nextRow) {
      setIsDisabled(true);
    }
  }, [nextRow, gallery?.length]);

  return (
    <section className="px-6 py-10 md:pt-20 md:pb-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="columns-1 md:columns-3 gap-6">
          {currentRows?.map((item) => (
            <div key={item?.id} className="">
              <img src={item?.image} alt="" className="w-full" />
            </div>
          ))}
        </div>
        <div className="text-center mt-20 mb-10">
          <button
            type="button"
            className={`${
              isDisabled ? " text-whiteFade" : "text-primaryColor"
            }`}
            onClick={handleLoadImage}
            disabled={isDisabled}
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryImages;
