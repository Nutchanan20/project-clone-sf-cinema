import { useState } from "react";
import news1 from "../../../../assets/pictures/news/news1.jpg";
import news2 from "../../../../assets/pictures/news/news2.jpg";
import news3 from "../../../../assets/pictures/news/news3.jpg";
import news4 from "../../../../assets/pictures/news/news4.jpg";
import news5 from "../../../../assets/pictures/news/news5.jpg";
import newsSlide from "../../../../assets/pictures/news/news-slide.jpg";

export default function News() {
  const listNews = [
    {
      photo: news1,
      title:
        "ผจญภัยในดินแดนออซ! พร้อมรับโปรหนังสุดคุ้ม “Wicked : For Good” ที่โรงภาพยนตร์ เอส เอฟ ",
      description: "ภาพยนตร์เข้าฉายตั้งแต่วันที่ 20 พฤศจิกายน 2568 เป็นต้นไป",
    },
    {
      photo: news2,
      title: "NEW MOVIES หนังใหม่สัปดาห์นี้ # 13 พฤศจิกายน 2568",
      description: "",
    },
  ];

  const listNews2 = [
    {
      photo: news3,
      title:
        "NEW MOVIES หนังใหม่สัปดาห์นี้ #10 ธันวาคม 2568",
      description: "",
    },
    {
      photo: news4,
      title: "คุ้มมากแม่! ยืนหนึ่งความปัง รวมโปรหนัง “ดีว่า..ราวี” ที่ โรงภาพยนตร์ เอส เอฟ",
      description: "ภาพยนตร์เข้าฉายตั้งแต่วันที่ 10 ธันวาคม 2568 เป็นต้นไป",
    },
    {
      photo: news5,
      title: "รวมทุกเรื่องให้ ARMY มาแฮปปี้ส่งท้ายปีกับพี่จิน \"RUNSEOKJIN_EP.TOUR THE MOVIE\" ที่ โรงภาพยนตร์ เอส เอฟ",
      description: "เปิดจำหน่ายบัตร วันที่ 5 ธันวาคม 2568 เวลา 21.00 น. เป็นต้นไป",
    },
  ];

  const [email, setEmail] = useState("");
  return (
    <div className="h-[1330px] pt-[50px] pb-[120px] w-full flex justify-center">
      <div className="h-[1160px] w-[1170px] px-[15px]">
        <div className=" text-[#2d64cf] text-[26px] font-extrabold mt-[10px] mb-[15px]">
          ข่าวและกิจกรรม
        </div>
        <div className="flex mx-[-20px] w-[1180px] h-[546.8px]">
          <div className="px-[20px] w-[885px] h-[522.25px]">
            <div className="grid grid-cols-2 mx-[-15px] w-[875px] h-[522.25px]">
              {listNews.map((news, index) => (
                <div className="w-[437.5px] px-[15px] h-[482px]">
                  <img src={news.photo} className="w-[407.5px] h-[305.625px]" />
                  <div className="bg-white pl-[15px] pt-[20px] pr-[15px] pb-[40px] h-[169.781px]">
                    <div className=" text-[#2d64cf] text-[16px] font-semibold text-center mb-[15px]">
                      Movie News
                    </div>
                    <div className=" text-[##1e1f24] text-[14px] font-normal text-left mb-[15px]">
                      {news.title}
                    </div>
                    <div className=" text-[#989898] text-[12px] font-normal text-center">
                      {news.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[255px] h-[547px] px-[20px]">
            <div className="w-[255px] h-[4px] bg-gradient-to-r from-[#2f66cd] to-[#5ab6de]"></div>
            <div className="w-[255px] h-[225px] border border-[#c6c7c7]">
              <p className=" text-[#333] text-[18px] font-semibold text-center mb-[5px] mt-[15px] leading-tight">
                BE THE FIRST <br></br>TO GET UPDATES
              </p>
              <div className="flex justify-center items-center mb-[20px]">
                <input
                  type="email"
                  placeholder="อีเมล"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[213px] h-[50px] px-[12px] py-[6px] text-[#444] text-[14px] focus:outline-none"
                />
              </div>
              <div className="flex justify-center items-center">
                <button className="w-[213px] h-[50px] rounded bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] text-white font-semibold text-sm">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="mt-[20px] w-[255px] h-[255px]">
              <img className="w-[255px] h-[255px]" src={newsSlide} />
            </div>
          </div>
        </div>

        <div className="flex mx-[-20px] w-[1180px] h-[486.5px] px-[20px] ">
          <div className="">
            <div className="grid grid-cols-3 mx-[-15px] w-[1180px] h-[486.5px]">
              {listNews2.map((news, index) => (
                <div className="w-[390px] px-[15px] h-[446.5px]">
                  <img src={news.photo} className="w-[407.5px] h-[305.625px]" />
                  <div className="bg-white pl-[15px] pt-[20px] pr-[15px] pb-[40px] h-[169.781px]">
                    <div className=" text-[#2d64cf] text-[16px] font-semibold text-center mb-[15px]">
                      Movie News
                    </div>
                    <div className=" text-[##1e1f24] text-[14px] font-normal text-left mb-[15px]">
                      {news.title}
                    </div>
                    <div className=" text-[#989898] text-[12px] font-normal text-center">
                      {news.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
