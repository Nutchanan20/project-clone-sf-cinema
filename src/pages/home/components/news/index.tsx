import predator from "./photo/predator.jpg";
import anong from "./photo/anong.jpg";
import AnongPromotion from "./photo/anong_promotion.jpg";
import tiger from "./photo/tiger.jpg";
import TigerNews from "./photo/tiger_news.jpg";
import PredatorPopcorn from "./photo/predator_popcorn.jpg";

export default function News() {
  const promotion = [
    {
      photo: predator,
      title:
        "โปรพิเศษสุดคุ้ม แลกซื้อ Corn Stix ในราคาพิเศษ 30 บาท เมื่อซื้อ Combo Set ชุดใดก็ได้",
      description: "",
    },
];
    return(
        <div className="bg-red-600">
            <div>
                <h1>ข่าวและกิจกรรม</h1>
            </div>
        </div>
    )

}