import Advertisements from "./components/advertisements";
import Movie from "./components/movie";
import Search from "./components/search";
import Newsletter from "../../components/newsletter";
import Plane from "../../components/newsletter/PaperPlane.svg";
import { useState } from "react";
import Sponsor from "./components/sponsor";
import Promotion from "./components/promotion";
import News from "./components/news";
import Footer from "./components/footer";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  console.log(showPopUp);
  return (
    <div>
      <div>
        <Advertisements></Advertisements>
      </div>
      <div className="mt-11 ">
        <Search></Search>
      </div>
      <div className="mt-11 w-[65%] mx-auto">
        <Movie></Movie>
      </div>
      <div>
        <Sponsor></Sponsor>
      </div>
      <div>
        <Promotion></Promotion>
      </div>
      <div>
        <News></News>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <div className="fixed bottom-0 right-0 w-[336px] shadow-md">
        <button
          onClick={() => setShowPopUp(true)}
          className="bg-[#FFFFFF] flex justify-between items-center p-3 w-full"
        >
          <div className="flex-1 flex justify-center">
            <img src={Plane} className="w-5 h-5 mr-2"></img>
            <div className="text-[#2D64CF] font-bold">
              คลิกเพื่อรับข่าวสารจาก SF
            </div>
          </div>
          <div className="text-[#939494] text-lg">x</div>
        </button>
        {showPopUp && <Newsletter onClose={() => setShowPopUp(false)} />}
      </div>
    </div>
  );
}
