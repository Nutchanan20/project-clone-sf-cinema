import news1 from "../../../../assets/pictures/news/news1.jpg";
import news2 from "../../../../assets/pictures/news/news2.jpg";
import news3 from "../../../../assets/pictures/news/news3.jpg";
import news4 from "../../../../assets/pictures/news/news4.jpg";

export default function News() {
  const listNews = [
    {
      photo: news1,
      title:
        "โปรพิเศษสุดคุ้ม แลกซื้อ Corn Stix ในราคาพิเศษ 30 บาท เมื่อซื้อ Combo Set ชุดใดก็ได้",
      description: "",
    },
    {
      photo: news2,
      title:
        "โปรพิเศษสุดคุ้ม แลกซื้อ Corn Stix ในราคาพิเศษ 30 บาท เมื่อซื้อ Combo Set ชุดใดก็ได้",
      description: "",
    },
  ];

  return (
    <div className="h-[1330px] pt-[50px] pb-[120px] w-full flex justify-center">
      <div className="h-[1160px] w-[1170px] px-[15px]">
        <div className=" text-[#2d64cf] text-[26px] font-extrabold mt-[10px] mb-[15px]">
          ข่าวและกิจกรรม
        </div>
        <div className="flex justify-center mx-[-20px] w-[1180px] h-[546.8px]">
          <div className="grid grid-cols-2 px-[20px] mx-[-15px]">
            {listNews.map((news, index) => (
              <div className="w-[437.5px] h-[482px] px-[15px] bg-red-500">
                <img src={news.photo} className="" />
              </div>
            ))}
          </div>
          <div className="w-[255px] h-[547px] px-[20px] bg-blue-600"></div>

        </div>
      </div>
    </div>
  );
}
