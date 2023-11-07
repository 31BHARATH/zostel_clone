import React from 'react'
import { Link } from 'react-router-dom';
// import 'flowbite/dist/flowbite.css';
export default function Navbar() {
  return (
    <>
    
    <nav className="bg-white border dark:bg-gray-900 dark:border-gray-700 h-20">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-6 p-4">
    <Link to="#" className="flex items-center">
        <img src="https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.jpg" className="h-12 mr-3" alt="Flowbite Logo" />
        <span className="self-center ml-2  text-2xl tracking-[16px] font-extrabold whitespace-nowrap dark:text-white font-[CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif]">ZOSTEL</span>
    </Link>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className='pt-[10px]'>
    <div className="flex flex-col w-full md:block md:w-[900px]" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={'/destinations'} className="relative block  font-semibold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-[CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif] ">Destinations</Link>
        </li>
        <li>
            <button id="dropdownNavbarLink"  data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:relative ">Zostel <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            
  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-gray-800  divide-y divide-gray-100 rounded-lg shadow w-62 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-[17px] text-gray-100 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Alleppey</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Aurangabad</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Bangalore</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Banikhet (Dalhousie)</Link>
                  </li>
                </ul>
            </div>
        </li>
        
        <li>
            <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2" className="flex items-center justify-between font-semibold w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:relative font-[CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif] ">Zostel Homes<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            
  <div id="dropdownNavbar2" className="z-10 hidden font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-62 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-[17px] text-gray-100 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Homes Bhor</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Homes Cheog</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Homes Kasar Devi</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Homes Laida</Link>
                  </li>
                </ul>
                
            </div>
        </li>

        <li>
        <button id="dropdownNavbarLink3" data-dropdown-toggle="dropdownNavbar3" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:relative font-[CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif] ">Zostel Plus<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            
  <div id="dropdownNavbar3" className="z-10 hidden font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-62 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-[17px] text-gray-100 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Plus Bir</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Plus Kareri</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Plus Lonavala</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Plus Wayanad</Link>
                  </li>
                </ul>
                
            </div>
        </li>

        <li>
          <Link to={'/franchise'} className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:relative font-[CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif] ">Franchise</Link>
        </li>

        <li>
            <button id="dropdownNavbarLink4" data-dropdown-toggle="dropdownNavbar4" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:relative ">Join us <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            
  <div id="dropdownNavbar4" className="z-10 hidden font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-62 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-[17px] text-gray-100 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Careers</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Zostel Internship Program</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">Artist Collaboration Program</Link>
                  </li>
                </ul>
            </div>
        </li>
        
        <li>
          <Link to='#' className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:relative font-[CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif]">Blog</Link>
        </li>
        <button>
        <div className='h-[40px] w-[120px] border-[1px] border-orange-500 rounded-lg absolute right-[5%] top-[4.5%] flex p-[5px] justify-center'>
Merchandise</div></button>
       
      </ul>
    </div>
    </div>
  </div>
</nav>


    </>
  )
}
