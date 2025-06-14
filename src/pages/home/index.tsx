import Advertisements from "./components/advertisements";
import Movie from "./components/movie";
import Search from "./components/search";

export default function Home() {
    return(
        <div>
          <div>
            <Advertisements></Advertisements>
          </div>
          <div className="mt-11">
            <Search></Search>
          </div>
          <div className="mt-11 w-[65%] mx-auto">
          <Movie></Movie>
          </div>
        </div>
    )
}