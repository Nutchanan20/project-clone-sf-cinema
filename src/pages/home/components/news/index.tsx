import predator from "./photo/predator.jpg";
import anong from "./photo/anong.jpg";
import AnongPromotion from "./photo/anong_promotion.jpg";
import tiger from "./photo/tiger.jpg";
import TigerNews from "./photo/tiger_news.jpg";
import PredatorPopcorn from "./photo/predator_popcorn.jpg";

export default function News() {
  const promotion1 = [
    {
      photo: predator,
      title:
        "ผจญภัยสุดคุ้ม! ในแดนอันตราย กับรวมโปรหนัง “Predator : Badlands” ที่ โรงภาพยนตร์ เอส เอฟ",
      description: "ภาพยนตร์เข้าฉายตั้งแต่วันที่ 6 พฤศจิกายน 2568 เป็นต้นไป",
    },
    {
      photo: PredatorPopcorn,
      title:
        "NEW MOVIES หนังใหม่สัปดาห์นี้ # 6 พฤศจิกายน 2568 พร้อมได้รับ Popcorn Predator",
      description: "",
    },
  ];
  return (
    <div className="h-[1330px] flex justify-center pt-[50px] pb-[120px]">
      <div className="h-[1160px] w-[1170px]">
        <div className="text-[#2d64cf] font-extrabold text-[26px]">
          ข่าวและกิจกรรม
        </div>
        <div className="grid grid-cols-2 justify-center">
          <div className="bg-slate-600 w-[875px] h-[522px] grid grid-cols-2">
            {promotion1.map((news, index) => (
              <div className="bg-slate-600"></div>
              
            ))}
          </div>
          <div className="bg-red-400 h-[547px] w-[255px] p-[20px]"></div>
        </div>
      </div>
    </div>
  );
}
