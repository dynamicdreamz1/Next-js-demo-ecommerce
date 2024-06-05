"use client";
// components/ImageComponent.js
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ src, index }:any) => {
  const isEven = index % 2 === 0;
  const initialY = isEven ? 100 : -50;
  const finalY = isEven ? 50 : 0;
  const slightOffset = isEven ? 10 : 0; // Slight offset for even images

  const variants = {
    initial: { y: initialY },
    animate: { y: finalY },
  };

  const customDelay = index * 0.1;

  return (
    <motion.div
      className="relative overflow-hidden w-auto lg:max-content"
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 0.2, delay: customDelay }}
      style={{
        y: `calc(var(--y) + ${slightOffset}px)`,
        position: "relative",
        top: slightOffset,
      }}
    >
       <Image width="330" height="480" src={src} alt={`Image ${index}`} className="object-fill" />
    </motion.div>
  );
};

const ImageComponent = ({ aboutUs }: any) => {
  return (
    <div className="lg:mt-20 mt-5 p-5 flex lg:gap-6 md:gap-6 gap-2 mx-auto">
      {aboutUs.images.map((src: any, index: number) => (
        <Card key={index} src={src} index={index} />
      ))}
    </div>
  );
};

export default ImageComponent;
