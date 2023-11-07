import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

const categories = [
    {
      id : 1,
      name: "Exploring Hampi: Top Things to Do and Places to Visit in Hampi",
      desc:"Know more about the highlights of Hampi tourism across the Hampi ruins to make the best of your Hampi tour.",
      type:"11 min read",
      img: "https://img.cdn.zostel.com/blog_photo/20231024175139-219_AroundZostel_14_1.jpg",
      disc1:"Shruti Singh, Kajal Semwal"
    },
    {
      id : 2,
      name: 'Discover Poombarai Village: A Nature Retreat Like No Other in Tamil Nadu',
      desc:"Poombarai Village is a charming hamlet amidst forested Palani hills near Kodaikanal.",
      type:"9 min read",
    //   img: car
    img: "https://img.cdn.zostel.com/blog_photo/20230910192921-Poombarai-Village.jpg",
    disc1:"Shruti Singh"
    },
    {
      id : 3,
      name: 'Groove Your Heart Out at these Music Festivals in India',
      desc:"Head to these music festivals in India for an experience of a lifetime.",
      type:"6 min read",
      img: "https://img.cdn.zostel.com/blog_photo/20230904075552-music_festival_cover.jpg",
      disc1:"Shruti Singh"
    },
    {
      id:4,
      name: 'Enchanting Ernakulam : Kochi’s Urban Downtown',
      desc:"Your ultimate guide to explore Ernakulam, Kochi's urban downtown like a local",
      type:"10 min read",
      img: "https://img.cdn.zostel.com/blog_photo/20230827062642-Ernakulam-City.jpeg",
      disc1:"Shruti Singh"
    },
    {
      id:5,
      name: '10 Years of Zostel: Celebrating The Journey Of Making India TravelGo overSEAs with Zostel’s Vietnam trip!',
      desc:"As part of Zostel’s 10-year celebrations, here’s a behind-the-screen look into Zostel’s escapade in becoming the world’s larg",
      type:"8 min read",
      img: "https://img.cdn.zostel.com/blog_photo/20230818105318-MIT-ARTICLE-BANNER_1.png",
      disc1:"Kajal Semwal, Pranavi Chhikiniwala"
    },
   
    
    
  ]
  export default function Reads() {
    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={true}
        rewind = {true}
        className=" my-10 h-[470px]"
        
      >
        {categories.map((item)=>(
         <div className="h-56 w-full">
           <SwiperSlide key={item.id}>
            <div className="h-[440px] w-56 shadow-2xl overflow-hidden flex flex-col rounded-lg items-center transform transition-transform duration-300 ease-in-out hover:scale-110 z-10 bg-gray-300/20 relative ">
              <div className="h-64 w-full bg-cover" style={{backgroundImage:`url(${item.img})`}}> </div>
              <div className="p-4 flex flex-col justify-evenly h-[226px]">
              <span className="absolute top-2 p-1 rounded-md text-center bg-white text-sm right-2">{item.type} </span>
              <h2 className="text-xl font-bold text-black line-clamp-2">{item.name}</h2>
              <p className="line-clamp-2 text-lg text-black/50 ">{item.desc}</p>
              <div className="flex space-x-5 items-center pl-1">
              <i class="fi fi-bs-user-robot text-lg text-orange-500"></i>
              <p className=" text-[14px] line-clamp-1 text-gray-600 font-semibold">{item.disc1}</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
         </div>
        )
        )}
      </Swiper>
    );
    }