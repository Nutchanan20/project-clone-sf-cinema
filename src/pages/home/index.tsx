import Advertisements from "./components/advertisements";
import Movie from "./components/movie";
import Search from "./components/search";
import React, { useState } from "react";
import NewsletterPopup from "../../components/newsletter";

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
      <div className="flex items-end justify-end">
        {/* Not clicked: popup hidden */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          คลิกเพื่อดูรายละเอียด
        </button>
        {/* Clicked: popup shown */}
        {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
        {/* ...rest of your page... */}
      </div>
    </div>
  );
}
