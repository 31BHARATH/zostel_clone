import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

const categories = [
    {
      id : 1,
      name: 'Zostel Dobhi',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/7p4ghi5kS4y5VHAZ2gGRHw/zostel-dobhi-20211221163012.JPG?h=400"
    },
    {
      id : 2,
      name: 'Zostel Bundi',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/3HtJsQ-BQGmQBg3Xms_oVQ/zostel-bundi-20230728055413.jpg?h=400"
    },
    {
      id : 3,
      name: 'Zostel Manali (Vashisht)',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/ZDU-MRgTSVKNbJr7irX3WA/zostel-manali-vashisht-20221111133755.jpg?h=400"
    },
    {
      id:4,
      name:'Zostel Jaipur',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/zvxuEcerT5q2zBHmUzeWxQ/jaipur-20201112104947.jpg?h=400"
    },
    {
      id:5,
      name:'Zostel Aurangabad',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/7x147f3PQmOuOrb_o1ez1A/zostel-aurangabad-20201105103524.jpg?h=400"
    },
    {
      id:6,
      name:'Zostel Mukteshwar',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/_WOMCAAcQTegDmWU_KuCRA/zostel-mukteshwar-20201105110646.jpg?h=400"
    },
    {
      id:7,
      name:'Zostel Alleppey',
      img:"https://img.cdn.zostel.com/zostel/gallery/images/SAReimRtRpeYxcwZL8vFqw/zostel-alleppey-20221008133041.jpg?h=400"
    },
   
    
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
  export default function Budget() {
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
            <div className="h-48 w-60 shadow-2xl flex flex-col relative  rounded-lg overflow-hidden hover:cursor-pointer">
                <div className="bg-black/[25%] h-full w-full absolute"></div>
               <img src={item.img} alt="" className="h-full w-full" /> 
            <h2 className="text-[19px] line-clamp-1 font-bold pt-[120px] absolute bottom-4 left-3 ">{item.name}</h2>
            </div>
          </SwiperSlide>
         </div>
        )
        )}
      </Swiper>
    );
    }