import React from "react";
import AboutText from "../component/about/AboutText";
import ContactForm from "../component/contact/ContactForm";
import Subscribe from "../component/home/Subscribe";
import FollowUs from "../component/home/FollowUs";
import Service from "../component/home/Service";
import { getHomeInformation,getContactPageData } from "../../service/index";

const page = async () => {
  const homeData = await getHomeInformation();
  const contactTextData = await getContactPageData();

  return (
    <div className="container mx-auto ">
      <AboutText
        showAboutus={false}
        showDownArrow={true}
        aboutUs={contactTextData}
        contactUs={true}
      />
      <ContactForm
       ContactFormText={contactTextData}
      />
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </div>
  );
};

export default page;
