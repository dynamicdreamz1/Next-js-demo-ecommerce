// components/SectionWithAccordion.js
import Accordion from "../common/Accordion";
import Image from "next/image";

const QueriesCovered = ({ homePageText }:any) => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#FFF2EF] lg:w-[88%] relative lg:h-[600px] h-fit p-8 flex flex-col md:flex-row items-center">
        <div className="flex flex-col gap-5 lg:w-[70%] w-full">
          <div className="flex flex-col justify-center">
            <div className="mb-6 playfair-font font-[500] text-3xl lg:text-5xl text-[#363636]">
              {homePageText.title}
              <span className="text-[#FB7800]">
                {homePageText.highliteTitle}
              </span>
              {homePageText.middleText}
              <span className="text-[#FB7800]">
                {" "}
                {homePageText.highliteTitle2}
              </span>
              {homePageText.endText}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {homePageText?.items?.map((item: any, index: any) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                isLast={index === homePageText?.items?.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-[392px] lg:h-[500px] w-[300px] h-[300px] p-5 lg:absolute lg:top-[8%] right-[-15%]">
          <Image
            src={homePageText?.queryImage}
            width={392}
            height={300}
            alt="Descriptive"
            className="w-full lg:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default QueriesCovered;
