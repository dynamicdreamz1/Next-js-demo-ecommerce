import Banner from "../component/common/Banner";
import TrendingEssentials from "../component/home/TrendingEssentials";
import Subscribe from "../component/home/Subscribe";
import UnderEye from "../component/home/UnderEye";
import TopTrending from "../component/home/TopTrending";
import QueriesCovered from "../component/home/QueriesCovered";
import TrendingProducts from "../component/home/TrendingProducts";
import Feedback from "../component/home/Feedback";
import PerspectivesCorner from "../component/home/PerspectivesCorner";
import FollowUs from "../component/home/FollowUs";
import Service from "../component/home/Service";
import { getHomeInformation ,getProducts} from "../../service/index";

export default async function Page() {
  const homeData = await getHomeInformation();
  const ProductsData = await getProducts();

  return (
    <>
      <Banner sliderData={homeData.slider} />
      <TrendingEssentials homePageText={homeData.topTrendingOn} ProductsData={ProductsData}/>
      <UnderEye homePageText={homeData.UnderEye} />
      <TopTrending homePageText={homeData.topTrending} ProductsData={ProductsData}/>
      <QueriesCovered homePageText={homeData.QueriesCovered} />
      <TrendingProducts homePageText={homeData.TrendingProducts} ProductsData={ProductsData}/>
      <Feedback homePageText={homeData.Feedback} />
      <PerspectivesCorner homePageText={homeData.PerspectivesCorner} />
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </>
  );
}
