import Fanta from "./LogoPhoto/Fanta_logo_(2009).png";
import Shopee from "./LogoPhoto/Shopee.png";
import TTB from "./LogoPhoto/TTB_Logo.png";
import Deepal from "./LogoPhoto/Deepal_global_logo.png";
export default function Sponsor() {
    return(
        <div className="flex justify-center gap-x-14 py-16">
            <img src= {Fanta} className="h-11"></img>
            <img src= {Shopee} className="h-11"></img>
            <img src= {TTB} className="h-11"></img>
            <img src= {Deepal} className="h-11"></img>
        </div>
        
    )
    

}