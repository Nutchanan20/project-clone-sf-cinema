import HP1Poster from "../../../../assets/pictures/movies/harry 1.jpg"
import HP2Poster from "../../../../assets/pictures/movies/harry 2.jpg"
import HP3Poster from "../../../../assets/pictures/movies/harry 3.jpg"
import HP4Poster from "../../../../assets/pictures/movies/harry 4.jpg"
import HP5Poster from "../../../../assets/pictures/movies/harry 5.jpg"
import HP6Poster from "../../../../assets/pictures/movies/harry 6.jpg"
import HP7Poster from "../../../../assets/pictures/movies/harry 7.0.jpg"
import HP75Poster from "../../../../assets/pictures/movies/harry 7.5.jpg"
import Mufasa from "../../../../assets/pictures/movies/mufasa poster.jpg"
export default function Movie() {
    const categories = ["กำลังฉาย","โปรแกรมหน้า", "กิจกรรมพิเศษ"]
    const movies = [
        {
          poster: HP1Poster, 
          date: "01-01-2024",
          title: "HarryPotter 1"
        },
        {
          poster: HP2Poster, 
          date: "02-02-2024",
          title: "HarryPotter 2"
        },
        {
          poster: HP3Poster, 
          date: "03-03-2024",
          title: "HarryPotter 3"
        },
        {
          poster: HP4Poster, 
          date: "04-04-2024",
          title: "HarryPotter 4"
        },
        {
          poster: HP5Poster, 
          date: "05-05-2024",
          title: "HarryPotter 5"
        },
        {
          poster: HP6Poster, 
          date: "06-06-2024",
          title: "HarryPotter 6"
        },
        {
          poster: HP7Poster, 
          date: "07-07-2024",
          title: "HarryPotter 7"
        },
        {
          poster: HP75Poster, 
          date: "08-08-2024",
          title: "HarryPotter 7.5"
        },
        {
          poster: Mufasa, 
          date: "09-09-2024",
          title: "Mufasa"
        }
      ]
    return <div>
        <h1 className="text-center font-bold text-2xl text-[#2d64cf]">ภาพยนตร์</h1>
        <div className="flex justify-center mt-10">
            {categories.map((category,index) => (
                <button className="text-[#989898] focus:text-black group relative inline-block pb-1 font-bold mx-10">{category}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                </button>
            ))}
        </div>
        
        
        <hr className="mx-4 bg-[#c6c7c7]"></hr>

        <div className="mt-8 flex justify-center">
            <div className="w-2/3">
                <div className="grid grid-cols-3 justify-items-center">
                    {movies.map((movie,index) => (
                    <div key={index} className='cursor-pointer px-4 pt-3 hover:shadow-lg shadow-md bg-white mr-4 mb-7 relative mt-[85px]'>
                        <img className='h-[200px] w-[180px] object-cover mt-[-85px]' src={movie.poster}></img>
                        <div className="bg-gradient-to-r from-[#790000] to-[#a22428] text-white text-xs text-center">ADVANCE TICKET</div>
                        <div className='text-blue-900 text-xs my-2 text-center'>วันที่เข้าฉาย: {movie.date}</div>
                        <div className='font-semibold text-sm text-gray-950 text-center mb-2'>{movie.title}</div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="w-1/3">
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h2 className="font-bold text-lg mb-4 text-[#2d64cf]">โฆษณา</h2>
                    {/* ตัวอย่างโฆษณา */}
             
                </div>
            </div>
        </div>

    </div>
        
}
