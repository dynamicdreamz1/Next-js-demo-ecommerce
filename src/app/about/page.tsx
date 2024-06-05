import React from "react";
import AboutText from "../component/about/AboutText";
import ImageComponent from "../component/about/ImageComponent";
import OurVision from "../component/about/OurVision";
import Subscribe from "../component/home/Subscribe";
import FollowUs from "../component/home/FollowUs";
import Service from "../component/home/Service";
import { getHomeInformation,getAboutPageData } from "../../service/index";

const page = async() => {
  const homeData = await getHomeInformation();
  const aboutTextData = await getAboutPageData();

  return (
    <div className="container mx-auto flex flex-col ">
      <AboutText
        showAboutus={true}
        showDownArrow={false}
        aboutUs={aboutTextData}
        contactUs={false}
      />
      <ImageComponent aboutUs={aboutTextData} />
      <AboutText
        showAboutus={false}
        showDownArrow={true}
        aboutUs={aboutTextData}
        contactUs={false}
      />
      <OurVision aboutUs={aboutTextData} /> 
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </div>
  );
};

export default page;
