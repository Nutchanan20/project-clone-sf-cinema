import emprive from "../../../../assets/pictures/bands-list/emprive.png";
import sfw from "../../../../assets/pictures/bands-list/sfw.png";
import sfx from "../../../../assets/pictures/bands-list/sfx.png";
import sfc from "../../../../assets/pictures/bands-list/sfc.png";
export default function Footer() {
    const logos = [emprive, sfw, sfx, sfc];
  return (
    <div className="w-[1905px] h-[318.531px]">
      <div>
        <div className="flex justify-center gap-x-16 py-[45px]">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} className="h-11" />
          ))}
        </div>
      </div>
    </div>
  );
}
