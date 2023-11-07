import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const categories = [
  {
    id: 1,
    name: 'Alleppey',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/0fW6dUyPQ8mol0GHF841KA/alleppey-20230223105140.png?h=400"
  },
  {
    id: 2,
    name: 'Aurangabad',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/JvRwM3NRTYSzsz5R1Y1eKg/aurangabad-20230223105304.png?h=400"
  },
  {
    id: 3,
    name: 'Bangalore',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/VFvd-Qq7Q92zkhbjE2ufYA/karnatakas-metropolitan-city-with-its-grand_3lJVBIb.jpg?h=400"
  },
  {
    id: 4,
    name: 'Banikhet',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/FkicgycmQUSiCUU2ZjQnFw/banikhet-20230223105721.png?h=400"
  },
  {
    id: 5,
    name: 'Barot',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/0h7EG5blRO60ptcETfeOxw/a-trekking-destination-for-adventure-lovers_bpY4sqa.jpg?h=400"
  },
  {
    id: 6,
    name: 'Bhor',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/VW2zC-HwQbKiyaqFdr7SYw/bhor-20230223105851.png?h=400"
  },
  {
    id: 7,
    name: 'Bir',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/Au2EbwKgSbm7VRBzFhzwIg/taste-adventure-in-the-himalayas-of-bir-202_H7vz0yf.jpg?h=400"
  },
  {
    id: 8,
    name: 'Bundi',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/cQK9NR_tTE-DhTUr4oLv8A/bundi-20230118133109.jpg?h=400"
  },
  {
    id: 9,
    name: 'Burwa',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/Nt3RUyD2RLOY5644BBhbcw/burwa-20230223110038.png?h=400"
  },
  {
    id: 10,
    name: 'Chamba',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/UckUVWBuRO26Pzrm9kNB8A/chamba-20220602201924.jpg?h=400"
  },

  {
    id: 11,
    name: 'Chamera',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/yWTp6A-2QumdgAMRwEwhjg/chamera-20230223110128.png?h=400"
  },
  {
    id: 12,
    name: 'Cheog',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/XKIjO23yQGiZ5JUD3lYbbQ/cheog-20230223110216.png?h=400"
  },
  {
    id: 13,
    name: 'Chitkul',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/0wlj3wscTd-7gpMeKkSinA/a-pure-hidden-gem-of-the-himalayas-20201112102045.jpg?h=400"
  },
  {
    id: 14,
    name: 'Coorg',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/nFSCCFyoT1On6QD2gG3SHQ/greenery-is-found-at-its-best-in-coorg-2020_o86HXBS.jpg?h=400"
  },
  {
    id: 15,
    name: 'Dalhousie',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/lIJKYWeJTHeGQuLr-W-H5Q/dalhousie-20230223110356.png?h=400"
  },
  {
    id: 16,
    name: 'Delhi',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/2qNpdv4mTy-OyDx-VFpTOg/explore-history-modernism-in-the-capital-of_2l8lKSl.jpg?h=400"
  },
  {
    id: 17,
    name: 'Dharamkot',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/Rp7QpX-JS42R933SRiONNw/dharamkot-20220807174126.jpg?h=400"
  },
  {
    id: 18,
    name: 'Dharamshala',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/J6PrS4pARLyk0Yr4_hOzRA/dharamshala-20230223114554.png?h=400"
  },
  {
    id: 19,
    name: 'Dobhi',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/BVnn4xgjStqnXN3VLgRh5Q/dobhi-20230223110631.png?h=400"
  },
  {
    id: 20,
    name: 'Ernakulam',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/MrtLFfKdQ8e1scaQ2r1o7Q/ernakulam-20230801071209.jpeg?h=400"
  },
  {
    id: 21,
    name: 'Fagu',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/Um739YDBSuSRUSTyNUQzJQ/fagu-20220129085617.jpeg?h=400"
  },
  {
    id: 22,
    name: 'Gangtok',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/ZP7PLUJqTUOAqLSTCvgd4A/gangtok-20230223114448.png?h=400"
  },
  {
    id: 23,
    name: 'Goa',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/9CYBxW_DQouGWfRFLL50Kw/goa-20230213101022.jpg?h=400"
  },
  {
    id: 24,
    name: 'Gokarna',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/_an1bHWaQnKXGbfqJit26Q/gokarna-20230223110705.png?h=400"
  },
  {
    id: 25,
    name: 'Hampi',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/7KEHcAvUQ1e-lXSBpqRlew/hampi-20230925085503.jpg?h=400"
  },
  {
    id: 26,
    name: 'Harabhag',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/h53v7Qw4Q5uzvmUyHX1SGQ/harabhag-20220812144602.jpg?h=400"
  },
  {
    id: 27,
    name: 'Hyderabad',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/cTHdge5sSRC8ezqHjVrO7Q/hyderabad-20221226163404.jpg?h=400"
  },
  {
    id: 28,
    name: 'Jaipur',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/Du8SGQOGTf2fv801B28URw/the-pink-city-swarms-with-exceptional-monum_cvNBOwX.jpg?h=400"
  },
  {
    id: 29,
    name: 'Jaisalmer',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/P9yiHb2tQhCkRgJivi-fDw/jaisalmer-20230223110819.png?h=400"
  },
  {
    id: 30,
    name: 'Jibhi',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/pQIxYHZwR7KnzRwkVE6-yA/jibhi-20230223110940.png?h=400"
  },
  {
    id: 31,
    name: 'Jodhpur',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/kgEw5wMFRlKoyE2kyHW83A/jodhpur-20230223111049.png?h=400"
  },
  {
    id: 32,
    name: 'Kolimpong',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/ZKR6SwhVRW-Q8AO3NFaYeA/kalimpong-20230426100330.jpeg?h=400"
  },
  {
    id: 33,
    name: 'Kareri',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/Kjfv0jr7TqCSXis9GMd6PA/kareri-20230223111123.png?h=400"
  },

  {
    id: 34,
    name: 'Kasol',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/FGxjHsbiSTuronabA0vI5Q/kasol-20230509102450.jpg?h=400"
  },
  {
    id: 35,
    name: 'Kibber',
    img: "https://img.cdn.zostel.com/zostel/gallery/images/ycrLKCSzTLynEcEMWhfhbQ/kibber-village-20220518114707.jpg?h=400"
  },


]

export default function Action() {
  return (
    <>
      
      <h1 className="text-3xl px-[520px] py-6 font-bold">Explore <span className="text-red-500 ">Destinations</span> </h1>
      <h2 className="px-6 mb-8">Home - Destinations</h2>

      <div className=" w-full h-full grid grid-cols-4  gap-1 mb-6">{categories.map((item) => (
        <div key={item.id}>

          <div className="h-80 w-75 shadow-2xl flex  relative mx-6 mb-2 rounded-lg overflow-hidden">
            <div className="bg-black/[15%] h-full w-full absolute"></div>
            <img src={item.img} alt="" className="h-full w-full" />
            <h2 className="text-[20px] font-bold pt-[120px] absolute bottom-4 left-3 text-white">{item.name}</h2>
          </div>
        </div>

      )
      )}</div>
      <Footer />



    </>
  )
}