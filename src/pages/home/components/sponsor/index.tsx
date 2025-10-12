import coke from "../../../../assets/pictures/sponsors/coke_logo.png"
import mastercard from "../../../../assets/pictures/sponsors/Mastercard_logo.png"
import ttb from "../../../../assets/pictures/sponsors/TTB_logo.png"
import byd from "../../../../assets/pictures/sponsors/BYD_logo.png"

export default function Sponsor() {
    return(
        <div className="flex justify-center gap-x-16 py-24">
            {[coke, mastercard, ttb, byd].map((logo, idx) => (
                <img key={idx} src={logo} className="h-11" />
            ))}
        </div>
    )
}
