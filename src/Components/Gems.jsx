import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

const categories = [
    {
      id : 1,
      name: 'Rashil',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/9qA5tJuOQ-KuMTDuQaawNA/rashil-20220520101141.jpg?h=400"
    },
    {
      id : 2,
      name: 'Cheog',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/XKIjO23yQGiZ5JUD3lYbbQ/cheog-20230223110216.png?h=400"
    },
    {
      id : 3,
      name: 'Barot',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/0h7EG5blRO60ptcETfeOxw/a-trekking-destination-for-adventure-lovers_bpY4sqa.jpg?h=400"
    },
    {
      id:4,
      name:'Kalimpong',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/ZKR6SwhVRW-Q8AO3NFaYeA/kalimpong-20230426100330.jpeg?h=400"
    },
    {
      id:5,
      name:'Rakchham',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/udG8lKf8Q86q4jzNgTzX6w/rakchham-20220129083247.jpeg?h=400"
    },
    {
      id:6,
      name:'Vagamon',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/d9HAAgIgTbOwLh-ykkl0AA/vagamon-20230223113203.png?h=400"
    },
    {
      id:7,
      name:'Kibber',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/ycrLKCSzTLynEcEMWhfhbQ/kibber-village-20220518114707.jpg?h=400"
    },
    {
      id:8,
      name:'Shangrah',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/EG5ypwdDS5qOTvUD1wHlAg/shangarh-20220520104026.jpg?h=400"
    },
    // {
    //   id:9,
    //   name:'J&K and Ladakh',
    //   img: "https://img.cdn.zostel.com/zostel/gallery/images/pUMEQ7F_R7OJVdO-lUncPw/jk-and-ladakh-20230421085559.jpg?h=400"
    // },
    
    // {
    //   id:13,
    //   name:'Religion & Beliefs',
    //   img: religion
    // },
    // {
    //   id:14,
    //   name:'Sports & Recreation',
    //   img: sport
    // },
    // {
    //   id:15,
    //   name:'Technology',
    //   img: tech
    // },
    // {
    //   id:16,
    //   name:'& More!',
    //   img: more
    // },
    
  ]
  export default function Gems() {
    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={true}
        rewind = {true}
        className=" h-52 my-8 text-white"
        
      >
        {categories.map((item)=>(
         <div className=" w-full">
           <SwiperSlide key={item.id}>
           <a href=""><div className="h-48 w-60 shadow-2xl flex flex-col relative  rounded-lg overflow-hidden">
                <div className="bg-black/[25%] h-full w-full absolute"></div>
               <img src={item.img} alt="" className="h-full w-full" /> 
            <h2 className="text-[19px] line-clamp-1 font-bold pt-[120px] absolute bottom-4 left-3 ">{item.name}</h2>
            </div></a>
          </SwiperSlide>
         </div>
        )
        )}
      </Swiper>
    );
    }