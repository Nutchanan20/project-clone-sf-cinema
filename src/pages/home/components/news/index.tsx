import news1 from "../../../../assets/pictures/news/news1.jpg";
import news2 from "../../../../assets/pictures/news/news2.jpg";
import news3 from "../../../../assets/pictures/news/news3.jpg";
import news4 from "../../../../assets/pictures/news/news4.jpg";

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
          <div className="w-[255px] h-[547px] px-[20px] bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
}
