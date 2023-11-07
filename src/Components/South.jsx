import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import { south } from "../data";

export default function South() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={5}
      navigation={true}
      rewind = {true}
      className=" my-10 h-[470px]"
      
    >
      {south.map((item)=>(
       <div className="h-56 w-full">
         <SwiperSlide key={item.id}>
          <div className="h-[440px] w-58 shadow-2xl overflow-hidden flex flex-col  rounded-lg items-center transform transition-transform duration-300 ease-in-out hover:scale-110 z-10 bg-gray-300/20 relative ">
            <div className="h-56 w-full bg-cover" style={{backgroundImage:`url(${item.img})`}}> </div>
            <div className="p-4 flex flex-col justify-evenly h-[226px]">
            <span className="absolute top-2 p-1 rounded-md text-center bg-white/75  text-xl right-2">{item.type} </span>
            <h2 className="text-xl font-bold text-black line-clamp-2">{item.name}</h2>
            <p className="line-clamp-3 text-sm text-gray-600 mb-[10px]">{item.desc}</p>
            <div class="mr-2 text-sm">{item.cost}
               </div>
            <div class="text-sm flex items-center"><i class="material-icons text-sm"><i class="fi fi-tr-clock-five"></i></i><span class="ml-2 text-sm pb-1">7 Days</span></div>
            <button className="h-10 w-full bg-orange-500 hover:bg-transparent hover:text-orange-500 text-white rounded-lg text-xl"> {item.button} </button>
            </div>
          </div>
        </SwiperSlide>
       </div>
      )
      )}
    </Swiper>
  );
  }