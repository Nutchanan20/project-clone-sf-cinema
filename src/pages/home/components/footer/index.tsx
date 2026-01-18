import Emprive from "./photo/emprive.png";
import SfO from "./photo/sfO.png";
import SfW from "./photo/sfW.png";
import SfX from "./photo/sfX.png";

export default function Footer() {
    const brandList = [Emprive, SfW, SfX, SfO]
    return(
        <div className="w-full h-[318.35px]">
            <div className="flex justify-center gap-x-14 py-[45px]">
                {brandList.map ((brand,index) => (
                    <img src={brand} className="h-11"></img>
                ))}
            </div>
        </div>
    )
}