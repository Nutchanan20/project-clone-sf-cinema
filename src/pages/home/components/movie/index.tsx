import HP1Poster from "../../../../assets/pictures/movies/harry 1.jpg";
import HP2Poster from "../../../../assets/pictures/movies/harry 2.jpg";
import HP3Poster from "../../../../assets/pictures/movies/harry 3.jpg";
import HP4Poster from "../../../../assets/pictures/movies/harry 4.jpg";
import HP5Poster from "../../../../assets/pictures/movies/harry 5.jpg";
import HP6Poster from "../../../../assets/pictures/movies/harry 6.jpg";
import HP7Poster from "../../../../assets/pictures/movies/harry 7.0.jpg";
import HP75Poster from "../../../../assets/pictures/movies/harry 7.5.jpg";
import Mufasa from "../../../../assets/pictures/movies/mufasa poster.jpg";
import F1 from "../../../../assets/pictures/movies/f1.jpg";
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
  const boxOfficeMovies = [
    {
      poster: Mufasa,
      title: "จูราสสิค เวิลด์",
    },
    {
      poster: F1,
      title: "F1 เดอะ มูฟวี่",
    },
    {
      poster: HP3Poster,
      title: "อภินิหารไวกิ้งพิชิตมังกร",
    },
    {
      poster: HP4Poster,
      title: "28 ปีหลัง เชื้อเขมือบคน",
    },
    {
      poster: HP75Poster,
      title: "แมแกน 2.0",
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

      <hr className="mx-32 bg-[#c6c7c7]"></hr>

      <div className="mt-9 flex justify-center justify-items-center">
        <div>
          <div className="grid grid-cols-3 justify-items-center gap-y-8">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="bg-white shadow-md flex flex-col items-center px-4 pt-3 pb-6 relative mr-5 hover:shadow-lg transition  mt-[85px]"
              >
                <img
                  className="h-[318px] w-[215px] object-cover mt-[-85px]"
                  src={movie.poster}
                  alt={movie.title}
                />
                <div className=" left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-[#790000] to-[#a22428] text-white text-sm font-medium w-[215px] h-6 flex items-center justify-center">
                    ADVANCE TICKET
                  </span>
                </div>
                <div className="text-blue-900 text-xs mt-4 mb-1">
                  วันที่เข้าฉาย: {movie.date}
                </div>
                <div className="font-bold text-base text-center text-black">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img className="w-[255px] mt-3" src={F1} />
          <hr className="bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] mt-5 h-1"></hr>
          <h1 className="text-center font-black text-2xl text-[#333333] mt-5">
            {" "}
            Box Office
          </h1>
          <div className="flex justify-center mt-5 space-x-4">
            <button className="text-[#989898] focus:text-[#2d64cf] hover:text-[#2d64cf] font-bold text-sm">
              SF Box Office
            </button>
            <div className="text-[#989898]">|</div>
            <button className="text-[#989898] focus:text-[#2d64cf] hover:text-[#2d64cf] font-bold text-sm">
              US Box Office
            </button>
          </div>
          {boxOfficeMovies.map((movie, idx) => (
            <div key={idx} className="flex items-center mb-6">
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-[90px] h-[126px] object-cover rounded bg-white border border-gray-200"
                />
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#2f66cd] flex items-center justify-center text-white font-bold shadow text-lg">
                  {idx + 1}
                </div>
              </div>
              <div className="text-sm font-semibold text-[#333333] ml-4 leading-5">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
