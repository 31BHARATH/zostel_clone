import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

const categories = [
    {
      id : 1,
      name: 'Jim Corbett',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/py0oYxywSu62A85znjXi1g/jim-corbett-20230623090425.jpg?h=400"
    },
    {
      id : 2,
      name: 'Spiti',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/6E9hY5Y2TUmqpfgkJhEmmA/spiti-20230215131549.png?h=400"
    },
    {
      id : 3,
      name: 'Srinagar',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/Vvewff4-Ty6r2n42ug5FYQ/srinagar-20230223112934.png?h=400"
    },
    {
      id:4,
      name:'Shimla',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/ShXfSgWcTLW0N-i9pVxssA/enchanting-with-its-buildings-sunsets-snow-_BnwMZ62.jpg?h=400"
    },
    {
      id:5,
      name:'Mysore',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/2sebkMshRAGGtfIlFRMpgA/the-city-of-glory-great-food-and-yoga-20201_4LDGqHE.jpg?h=400"
    },
    {
      id:6,
      name:'Leh',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/UiamLkpCQ1yYg6waAwOBcw/leh-20230223111855.png?h=400"
    },
    {
      id:7,
      name:'Rishikesh',
      img:"https://img.cdn.zostel.com/zostel/gallery/images/pV8Zu4TVQbeSL59nrusJeA/get-spiritual-adventurous-in-this-city-by-t_xbL6gM3.jpg?h=400"
    },
    {
      id:8,
      name:'Wayanad',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/gzl52CwDTOapZZx1su1P4A/a-scenic-hill-station-in-the-truest-sense-2_Do05hrG.jpg?h=400"
    },
    {
      id:9,
      name:'Bir',
      img: "https://img.cdn.zostel.com/zostel/gallery/images/Au2EbwKgSbm7VRBzFhzwIg/taste-adventure-in-the-himalayas-of-bir-202_H7vz0yf.jpg?h=400"
    },
    {
        id:10,
        name:'Hampi',
        img: "https://img.cdn.zostel.com/zostel/gallery/images/7KEHcAvUQ1e-lXSBpqRlew/hampi-20230925085503.jpg?h=400"
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
  export default function Retreat() {
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