import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import { geographies } from "../data";


  export default function Geographics() {
    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={true}
        rewind = {true}
        className=" h-52 my-8 text-white"
        
      >
        {geographies.map((item)=>(
         <div className=" w-full">
           <SwiperSlide key={item.id}>
           <a href=""> <div className="h-48 w-60 shadow-2xl flex flex-col relative  rounded-lg overflow-hidden">
                <div className="bg-black/[25%] h-full w-full absolute"></div>
               <img src={item.img} alt="" className="h-full w-full" /> 
            <h2 className="text-[19px] line-clamp-1 font-bold pt-[120px] absolute bottom-4 left-3 ">{item.name}</h2>
            </div> </a>
          </SwiperSlide>
         </div>
        )
        )}
      </Swiper>
    );
    }