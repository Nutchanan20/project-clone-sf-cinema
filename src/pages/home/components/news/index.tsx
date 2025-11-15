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
      photo: AnongPromotion,
      title:
        "NEW MOVIES หนังใหม่สัปดาห์นี้ # 6 พฤศจิกายน 2568 พร้อมได้รับ Popcorn Anong",
      description: "",
    },
  ];
  return (
    <div className="h-[1330px] flex justify-center pt-[50px] pb-[120px]">
      <div className="h-[1160px] w-[1170px]">
        <div className="text-[#2d64cf] font-extrabold text-[26px]">
          ข่าวและกิจกรรม
        </div>
        <div className="flex">
          <div className="grid grid-cols-2 justify-center">
            <div className="bg-slate-600 w-[875px] h-[522.275px] grid grid-cols-2">
              {promotion1.map((news, index) => (
                <div>
                  <img className="w-[400px] h-[300px]" src={news.photo}></img>
                  <div className="bg-white w-[400px] h-[170px]">
                    <div className="px-[15px]">
                      <div className="text-[#2d64cf] text-center text-[14px] font-bold pt-[20px] pb-[15px]">
                        Movies News
                      </div>
                      <div className="text-[14px] pb-[20px]">{news.title}</div>
                      <div className="text-[#989898] text-[12px] text-center ">
                        {news.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-[20px]">
            <div className="h-[275px] w-[230px] border border-[#989898]">
              <div className="p-[20px]">
                <h1 className="break-words text-[#333] text-center font-bold text-[14px]">
                  BE THE FIRST TO GET UPDATES
                </h1>
                <input placeholder="อีเมล" className="rounded-sm w-full h-10 px-2 focus:outline-none py[6px]"></input>
                <button className="bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] flex justify-center rounded-sm w-full mt-[20px] text-white font-semibold">SUBSCRIBE</button>
              </div>
            </div>
            <div className="pt-[30px]">
              <img className="w-[225px] h-[225px]" src={PredatorPopcorn}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
