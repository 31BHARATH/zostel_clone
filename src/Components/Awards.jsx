import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

const categories = [
    {
      id : 1,
      name: "Winner - Best Hostel in India (2023)",
      desc:"AWARD",
      img: "https://img.cdn.zostel.com/branding/awards/202303/hoty-zostel-manali.png",
      desc1:"At the 'Outlook Traveller Awards' 2023. Winner - Zostel Manali (Old Manali) "
    },
    {
        id : 2,
        name: "Winner - Best Hostel in India - 2022",
        desc:"AWARD",
        img: "https://img.cdn.zostel.com/branding/awards/202303/favourite-homestays.png",
        desc1:"At 'India's Favourite Homestays Awards' co-organized by MakeMyTrip and Times of India. Winner  - Zostel Chitkul"
      },
      {
        id : 3,
        name: "Winner - Customer Experience in the Crisis - Travel & Hospitality Services",
        desc:"AWARD",
        img: "https://img.cdn.zostel.com/branding/awards/202303/quantic.png",
        desc1:"At the 'Customer Experience Excellence Awards' 2022. Winner - Zostel - Chain"
      },
      {
        id : 4,
        name: "BEST HOSTEL IN INDIA - 2017",
        desc:"AWARD",
        img: "https://img.cdn.zostel.com/cache/_3eb08c6992bfe8436b7b5834bf99ad30/C3fgJ6OWIAAWLBM.jpg-large_140x140.jpg",
        desc1:"Hostelworld award for Best Hostel in India"
      },
      {
        id : 5,
        name: "BEST HOSTEL IN NEPAL - 2019",
        desc:"AWARD",
        img: "https://img.cdn.zostel.com/cache/_a071cbb4dbfe7b8d11d2951f5e1f572c/Best_Hostel_in_Nepal_140x140.jpg",
        desc1:"Hostelworld award for Best Hostel in Nepal"
      },
      {
        id : 6,
        name: "ZOSTEL - IDEAL STAY FOR SOLO FEMALES",
        desc:"MEDIA",
        img: "https://img.cdn.zostel.com/cache/_f96f13896332b283beb86509d653bea2/175x175bb_140x140.jpg",
        desc1:"Safe, fun stay option for female solo travelers"
      },
      {
        id : 7,
        name: "BEST HOSTEL IN NEPAL - 2020",
        desc:"AWARD",
        img: "https://img.cdn.zostel.com/cache/_93f8d46a358ec59ae925f603ca34b3bc/Hoscar_Badges_2020_223_140x140.jpg",
        desc1:"Hostelworld award for Best Hostel in Nepal"
      },
      {
        id : 8,
        name: "ZOSTEL - INDIA'S FIRST HOSTEL CHAIN",
        desc:"MEDIA",
        img: "https://img.cdn.zostel.com/cache/_2f669d9bb4aad5fff6c0345bc19e5496/IE_Square_Logo_140x140.jpg",
        desc1:"Zostel makes traveling India affordable"
      },
      {
        id : 9,
        name: "CERTIFICATE OF EXCELLENCE",
        desc:"AWARD",
        img: "https://img.cdn.zostel.com/cache/_84fa6c15c7c951ca462e52249af390f4/TRIP_advisor_200-2_140x140.jpg",
        desc1:"Zostel was awarded with this certifcation"
      },
]
 
export default function Awards() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={true}
      rewind = {false}
      className=" my-10 h-[230px]"
    >
      {categories.map((item)=>(
       <div className="h-[100px] w-full">
         <SwiperSlide key={item.id}>
          <div className="h-[230px] w-[410px] shadow-3xl flex justify-center overflow-hidden rounded-lg  transform transition-transform duration-300 ease-in-out hover:scale-110 z-10 border-[1px] relative bg-white hover:cursor-pointer">
            <div className="flex mt-12 h-[128px] w-[400px] ml-8">
                
            <div className="h-32 w-36 bg-cover relative" style={{backgroundImage:`url(${item.img})`}}> </div>
            <div className="pl-7 flex flex-col  h-[300px] w-[200px]">
            <p className="line-clamp-2 text-sm text-gray-600 ">{item.desc}</p>
            <h2 className="my-2 text-sm font-medium text-dark">{item.name}</h2>
            <p className="line-clamp-4 text-black/70 text-xs leading-[19px]">{item.desc1}</p>
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