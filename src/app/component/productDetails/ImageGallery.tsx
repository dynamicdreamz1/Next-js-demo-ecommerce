"use client";
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ productImages }: any) => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="flex flex-col gap-2 md:flex-row items-start  md:space-x-4">
      <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-y-auto">
        {productImages.map((image: any, index: number) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width={85}
            height={85}
            className={`cursor-pointer border-2 ${
              selectedImage === image ? "border-[#FB7800]" : "border-transparent"
            } hover:border-[#FB7800] rounded-md`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="relative rounded-md w-full md:w-[612px] h-[320px] md:h-[550px] border border-[#FB7800]">
        <Image
          src={selectedImage}
          alt="Selected"
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
