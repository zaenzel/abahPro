import React from "react";
import ImageProfile from "../../image-profile/ImageProfile";
import imageProfile from "/images/foto.jpg";
import border from "/border.svg";

const Intro = () => {
  return (
    <div className="p-5">
      <div className="flex flex-wrap items-center space-y-5 sm:space-y-0">
        {/* layout gambar opsi 1 */}
        <div className="w-full flex justify-center">
          <ImageProfile src={imageProfile} border={border} />
        </div>

        {/* layout gambar opsi 2 */}
        {/* <div className="w-full  bg-blue-300">
            <img
              src={imageProfile}
              alt="profile-image"
              className="w-full max-h-[300px] object-contain"
            />
          </div> */}

        <div className="w-full space-y-3">
          <h1 className="text-2xl font-bold">
            Hai, Saya <br /> <span className="text-4xl">Nashir Alam</span>
          </h1>
          <p className="text-xl">
            Saya seorang marketer perumahan dengan pengalaman lebih dari 10
            tahun. Saya telah bekerja di berbagai proyek perumahan, mulai dari
            rumah tapak, rumah susun, hingga kompleks perumahan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
