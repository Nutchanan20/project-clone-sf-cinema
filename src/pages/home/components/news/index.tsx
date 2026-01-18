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

  const promotion2 = [
    {
      photo: anong,
      title: "NEW MOVIES หนังใหม่สัปดาห์นี้ #10 ธันวาคม 2568",
      description: "",
    },
    {
      photo: TigerNews,
      title:
        "คุ้มมากแม่! ยืนหนึ่งความปัง รวมโปรหนัง “ดีว่า..ราวี” ที่ โรงภาพยนตร์ เอส เอฟ",
      description: "ภาพยนตร์เข้าฉายตั้งแต่วันที่ 10 ธันวาคม 2568 เป็นต้นไป",
    },
    {
      photo: tiger,
      title:
        'รวมทุกเรื่องให้ ARMY มาแฮปปี้ส่งท้ายปีกับพี่จิน "RUNSEOKJIN_EP.TOUR THE MOVIE" ที่ โรงภาพยนตร์ เอส เอฟ',
      description:
        "เปิดจำหน่ายบัตร วันที่ 5 ธันวาคม 2568 เวลา 21.00 น. เป็นต้นไป",
    },
  ];
  return (
    <div>
      <div className="h-[1330px] flex justify-center pt-[50px] pb-[120px]">
        <div className="h-[1160px] w-[1170px] px-[15px]">
          <div className="text-[#2d64cf] font-extrabold text-[26px]">
            ข่าวและกิจกรรม
          </div>
          <div className="flex">
            <div className="grid grid-cols-2 justify-center">
              <div className="w-[875px] h-[546.65px] grid grid-cols-2">
                {promotion1.map((news, index) => (
                  <div>
                    <img className="w-[400px] h-[300px]" src={news.photo}></img>
                    <div className="bg-white w-[400px] h-[170px]">
                      <div className="px-[15px]">
                        <div className="text-[#2d64cf] text-center text-[14px] font-bold pt-[20px] pb-[15px]">
                          Movies News
                        </div>
                        <div className="text-[14px] pb-[20px]">
                          {news.title}
                        </div>
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
              <div className="w-[255px] h-[4px] bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] absolute"></div>
              <div className="h-[225px] w-[255px] border border-[#989898]">
                <div className="p-[20px]">
                  <p className="text-[#333] text-center font-bold text-[20px] leading-tight">
                    BE THE FIRST<br></br>TO GET UPDATES
                  </p>
                  <input
                    placeholder="อีเมล"
                    className="rounded-sm w-[213.4px] h-[50px] px-2 focus:outline-none py[6px] text-[#555]"
                  ></input>
                  <button className="bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] flex justify-center items-center rounded-sm w-[213.4px] h-[50px] mt-[20px] text-white font-semibold">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <div className="pt-[30px]">
                <img
                  className="w-[255px] h-[255px]"
                  src={PredatorPopcorn}
                ></img>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[1182px] h-[486.64px] grid grid-cols-3">
              {promotion2.map((news, index) => (
                <div className="w-[390px] h-[446.64px]">
                  <img
                    className="w-[359.99px] h-[269.99px]"
                    src={news.photo}
                  ></img>
                  <div className="bg-white w-[359.99px] h-[170px]">
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
          <div className="flex justify-center">
            <button className="border border-[#1e1f24] border-opacity-40 w-[1140px] h-[58px] hover:text-[#23527c] font-semibold rounded-md">
              ข่าวและกิจกรรมทั้งหมด
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[1140px] bg-[#c6c7c7]"></hr>
      </div>
    </div>
  );
}
