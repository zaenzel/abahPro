import React from "react";

const ImageProfile = ({src, border}) => {
  return (
    <div className="relative">
      <img src={border} alt="" as="svg" className="absolute w-full -z-10" />
      <div className="h-auto max-w-lg">
        <img
          src={src}
          alt="profile-image"
          className="max-w-full h-auto p-3 sm:p-5 rounded-tl-[100px] rounded-br-[100px]"
        />
      </div>
    </div>
  );
};

export default ImageProfile;
