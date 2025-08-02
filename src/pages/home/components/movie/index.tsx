import HP1Poster from "../../../../assets/pictures/movies/harry 1.jpg";
import HP2Poster from "../../../../assets/pictures/movies/harry 2.jpg";
import HP3Poster from "../../../../assets/pictures/movies/harry 3.jpg";
import HP4Poster from "../../../../assets/pictures/movies/harry 4.jpg";
import HP5Poster from "../../../../assets/pictures/movies/harry 5.jpg";
import HP6Poster from "../../../../assets/pictures/movies/harry 6.jpg";
import HP7Poster from "../../../../assets/pictures/movies/harry 7.0.jpg";
import HP75Poster from "../../../../assets/pictures/movies/harry 7.5.jpg";
import Mufasa from "../../../../assets/pictures/movies/mufasa poster.jpg";
import F1 from "../../../../assets/pictures/movies/F1.jpg";
import Dragon from "../../../../assets/pictures/movies/httyd.jpg";
import Guardian from "../../../../assets/pictures/movies/guardian.jpg";
import Horse from "../../../../assets/pictures/movies/spirit.jpg";
import Ferdinand from "../../../../assets/pictures/movies/ferdinand.jpg";
import Madagascar from "../../../../assets/pictures/movies/madagascar.jpg";
export default function Movie() {
  const categories = ["กำลังฉาย", "โปรแกรมหน้า", "กิจกรรมพิเศษ"];
  const movies = [
    {
      poster: HP1Poster,
      date: "01-01-2024",
      title: "HarryPotter 1",
    },
    {
      poster: HP2Poster,
      date: "02-02-2024",
      title: "HarryPotter 2",
    },
    {
      poster: HP3Poster,
      date: "03-03-2024",
      title: "HarryPotter 3",
    },
    {
      poster: HP4Poster,
      date: "04-04-2024",
      title: "HarryPotter 4",
    },
    {
      poster: HP5Poster,
      date: "05-05-2024",
      title: "HarryPotter 5",
    },
    {
      poster: HP6Poster,
      date: "06-06-2024",
      title: "HarryPotter 6",
    },
    {
      poster: HP7Poster,
      date: "07-07-2024",
      title: "HarryPotter 7",
    },
    {
      poster: HP75Poster,
      date: "08-08-2024",
      title: "HarryPotter 7.5",
    },
    {
      poster: Mufasa,
      date: "09-09-2024",
      title: "Mufasa",
    },
  ];
  const boxOffice = [
    {
      poster: Dragon,
      name: "How To Train Your Dragon",
    },
    {
      poster: Guardian,
      name: "Rise Of The Guardians",
    },
    {
      poster: Horse,
      name: "Spirit",
    },
    {
      poster: Ferdinand,
      name: "Ferdinand",
    },
    {
      poster: Madagascar,
      name: "Madagascar",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-[#2d64cf]">
        ภาพยนตร์
      </h1>
      <div className="flex justify-center mt-10">
        {categories.map((category, index) => (
          <button className="text-[#989898] focus:text-black group relative inline-block pb-1 font-bold mx-10">
            {category}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
          </button>
        ))}
      </div>

      <hr className="mx-4 bg-[#c6c7c7]"></hr>

      <div className="mt-8 flex justify-center">
        <div>
          <div className="grid grid-cols-3 justify-items-center">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="cursor-pointer px-4 pt-3 hover:shadow-lg shadow-md bg-white mr-6 mb-7 relative mt-[85px]"
              >
                <img
                  className="h-[250px] w-[200px] object-cover mt-[-85px]"
                  src={movie.poster}
                ></img>
                <div className="bg-gradient-to-r from-[#790000] to-[#a22428] text-white text-xs text-center">
                  ADVANCE TICKET
                </div>
                <div className="text-blue-900 text-xs my-2 text-center">
                  วันที่เข้าฉาย: {movie.date}
                </div>
                <div className="font-semibold text-sm text-gray-950 text-center mb-2">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img className="w-60 h-max mt-3" src={F1}></img>
          <hr className="bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] mt-9 h-[4.5px]"></hr>
          <h1 className="mt-4 text-2xl text-center font-black text-[#333333]">
            Box Office
          </h1>

          <div className="relative flex justify-center bg-[#F7F9FC] mx-3">
            <button className="text-[#939494] hover:text-[#2d64cf] focus:text-[#2d64cf] text-sm">
              SF Box Office
            </button>
            <h2 className="text-[#939494] mx-1">|</h2>
            <button className="text-[#939494] hover:text-[#2d64cf] focus:text-[#2d64cf] text-sm">
              US Box Office
            </button>
          </div>
          <div className="border border-[#c6c7c7] mt-[-12px]">
            {boxOffice.map((boxOffice, index) => (
              <div className="flex items-center justify-center my-8">
                <div>
                  <div className="absolute bg-[#2d64cf] w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold text-[#fff] mt-[-10px] ml-[-10px]">
                    {index+1}
                  </div>
                  <img src={boxOffice.poster} className="h-[132px] w-[96px] object-cover"></img>
                </div>
                <div className="text-[#1e1f24] text-sm font-bold break-words w-[90px] ml-4">
                  {boxOffice.name}
                </div>
              </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
