import Advertisements from "./components/advertisements";
import Movie from "./components/movie";
import Search from "./components/search";
import React, { useState } from "react";
import NewsletterPopup from "../../components/newsletter";
import IconSend from "../../assets/pictures/ic_send.svg";
import Sponsor from "./components/sponsor";
import Promotion from "./components/promotion";


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <div>
        <Advertisements></Advertisements>
      </div>
      <div className="mt-11">
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
      <div className="fixed bottom-0 right-0 flex items-end justify-end">
        <button
          onClick={() => setShowPopup(true)}
          className="px-5 py-3 w-[340px] flex justify-center items-center rounded-lg  bg-white"
        >
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2">
              <span>
                <img src={IconSend} alt="icon-send" className="w-5 h-5" />
              </span>
              <span className="text-[#2d64cf] font-bold">
                คลิกเพื่อรับข่าวสารจาก SF
              </span>
            </div>
          </div>
          <div className="text-[#9B9B9B] text-2xl ml-4">×</div>
        </button>
        {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
