import React from "react"
import  img1 from '../assets/img1.webp'
import  img2 from '../assets/img2.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FaCalendarCheck, FaUtensils, FaTruckFast } from "react-icons/fa6";
import { Diamond, Utensils, Hand } from "lucide-react";
export default function Home()
{
    return(
        <>

  <section className="w-full mx-auto  px-6 py-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

   
      <div className="p-4">
       
        <p className="text-sm tracking-widest text-orange-500 font-semibold">
          <span className="h-1 w-10 bg-blue-500 inline-block"></span> BBQ & GRILL RESTAURANT
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Eat BBQ With On <span className="text-orange-500 italic">Nice</span><br/>
          <span className="text-orange-500 italic">Place</span> With Our Restaurant
        </h1>

        <p className="text-gray-500 mb-6 text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit volupt
          accusantium doloremque laudantium. <br />Lorem ipsum dolor
           sit, amet consectetur adipisicing elit. Consequatur quam atque maiores!
        </p>

 
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <p className="italic text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet consectetur.consectetur adipiscing elit.
          </p>
          <p className="text-orange-500 font-semibold mt-2">JOHN DOE</p>
        </div>

    
<ul className="space-y-3 mb-8">
  <li className="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" 
    viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-600">Lorem ipsum dolor sit amet</span>
  </li>

  <li className="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5
     text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-600">Sed do eiusmod tempor</span>
  </li>

  <li className="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5
     text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-600">Ut enim ad minim veniam</span>
  </li>
</ul>


    
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-md px-4 py-3 w-full sm:w-64 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md 
          font-semibold hover:bg-blue-700 transition">
            GET VOUCHER
          </button>
        </div>
      </div>

   
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="nature"
          className=" w-full `lg:h-[560px]` object-cover `md:h-[400px]` h-400px "
        />

       
        <div className=" bottom-0 left-0 right-0 bg-[#4b8ea0] p-6 rounded-b-xl">
          <h3 className="text-yellow-400 text-3xl font-bold mb-2">G</h3>
          <p className="text-white font-semibold text-lg">4.8 Google Reviews</p>
          <p className="text-white/80 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section>
 <div className="relative flex items-center justify-center py-6">

  {/* CENTER TITLE */}
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-black">
    Our Services
  </h2>

  {/* RIGHT LOGO */}
  <div className="absolute right-2 sm:right-8 md:right-16">
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
      {/* ORANGE */}
      <div className="absolute top-0 left-2 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 
      md:w-7 md:h-7 bg-orange-400 rounded-xl rotate-12"></div>

      {/* BLUE */}
      <div className="absolute top-2 sm:top-3 left-0 w-5 h-5 sm:w-6 sm:h-6
       md:w-7 md:h-7 bg-teal-600 rounded-xl"></div>
    </div>
  </div>

</div>
  </section>
  <div className="px-8">
    <p className="flex text-center  justify-center ">Lorem ipsum dolor sit amet 
      consectetur adipisicing elit.</p>
  </div>

  <section className="px-4 py-14 bg-white gap-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="bg-[#fafafa] rounded-2xl shadow-md p-8 text-center relative mb-5">

      {/* IMAGE */}
      <div className="flex justify-center -mt-16 mb-6">
        <img
          src={img1}
          alt="reservation"
          className="w-32 h-32 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* CONTENT */}
      <h3 className="font-serif font-bold text-lg mb-3">
        Family BBQ Reservation
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-6 py-3
       rounded-lg   font-semibold transition">
        LEARN MORE
      </button>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#fafafa] rounded-2xl shadow-md p-8 text-center relative">
      <div className="flex justify-center -mt-16 mb-6">
        <img
          src={img1}
          alt="delivery"
          className="w-32 h-32 object-cover rounded-xl shadow-lg"
        />
      </div>

      <h3 className="font-serif font-bold text-lg mb-3">
        BBQ Delivery Package
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-6 
      py-3 rounded-lg font-semibold transition">
        LEARN MORE
      </button>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#fafafa] rounded-2xl shadow-md p-8 text-center relative">
      <div className="flex justify-center -mt-16 mb-6">
        <img
          src={img1}
          alt="private"
          className="w-32 h-32 object-cover rounded-xl shadow-lg"
        />
      </div>

      <h3 className="font-serif font-bold text-lg mb-3">
        Eat BBQ Private Table
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-6 py-3 
      rounded-lg font-semibold transition">
        LEARN MORE
      </button>
    </div>

  </div>
</section>
<section className="p-6 w-full">
    <img src={img1} alt="" className="w-full sm:h-[200px] md:h-[300px]" />
</section>
 <section className="px-12 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 ">
            <div >
               <img src={img2} alt="" className="w-full sm:h-[400px] md:h-[450px] md:wd-full "  />
            </div>
            <div >
                <span className="h-1  bg-blue-500 w-25 inline-block ">
                </span>
                <span className="p-2 text-orange-400">ABOUT US</span>
                <div>
                    <h1 className="text-4xl font-bold mt-2 p-3 ">The Future BBQ <br />
                    Resturdent Solution</h1>
                    <div className="text-justify mt-3 text-slate-500">
                      Lorem ipsum dolor sit amet,  consectetur adipisicing elit
                      . Enim ratione   dolorem provident! 
                      Quibusdam minima voluptatum aperiam corporis vitae aut quo illum.</div>
                    <div className="grid grid-cols-2 text-slate-500 mt-5">
                        <div className="space-y-3 mt-5">
                            <div className="flex items-center gap-3">
                              <FontAwesomeIcon icon={faCheck} className="text-orange-400 text-sm" />
                              <span className="text-sm sm:text-base">Family Place BBQ</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <FontAwesomeIcon icon={faCheck} className="text-orange-400 text-sm" />
                              <span className="text-sm sm:text-base">BBQ Delivery Grill</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <FontAwesomeIcon icon={faCheck} className="text-orange-400 text-sm" />
                              <span className="text-sm sm:text-base">Private Table Restaurant</span>
                            </div>
                          </div>
                          <div className="space-y-3 mt-5">
                            <div className="flex items-center gap-3">
                              <FontAwesomeIcon icon={faCheck} className="text-orange-400 text-sm" />
                              <span className="text-sm sm:text-base">Family Place BBQ</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <FontAwesomeIcon icon={faCheck} className="text-orange-400 text-sm" />
                              <span className="text-sm sm:text-base">BBQ Delivery Grill</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <FontAwesomeIcon icon={faCheck} className="text-orange-400 text-sm" />
                              <span className="text-sm sm:text-base">Private Table Restaurant</span>
                            </div>
                          </div>
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 gap-2 mt-7">
                        <div>
                            <div className="font-bold text-sm lg:text-[30px]
                             text-orange-400">25<sup className="text-slate-500">+</sup>K</div>
                            <div className="font-bold">Branch Place</div>
                            <div>Lorem, ipsum.</div>
                        </div>
                        <div>
                            <div className="font-bold text-sm lg:text-[30px]
                             text-orange-400">136<sup className="text-slate-500">+</sup>K</div>
                            <div className="font-bold">Grill Tools</div>
                            <div>Lorem, ipsum.</div>
                        </div>
                        <div>
                            <div className="font-bold text-sm lg:text-[30px] text-orange-400">
                              25<sup className="text-slate-500">+</sup>K</div>
                            <div className="font-bold">Daily Customer</div>
                            <div>Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
 
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 gap-6">
      
      {/* LEFT CONTENT */}
      <div>
        <div className="p-10">
          
          <div>
            
            <span className="mb-1 h-0.5 bg-blue-500 w-24 inline-block"></span>
          <span className="p-2 text-orange-400 ">
            DELIVERY GRILL SERVICES
          </span>
          </div>

          <h1 className="text-lg md:text-2xl lg:text-2xl font-bold mt-2">
            Keep Stay We Deliver <br /> The Grill BBQ Tools
          </h1>

          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ut eos! Quaerat ullam et numquam architecto voluptatibus.
          </p>

          {/* ITEM 1 */}
          <div className="grid grid-cols-[60px_1fr] gap-4 shadow p-4 mb-3 rounded-lg mt-5">
            <div className="flex items-center justify-center">
              <span className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <FaCalendarCheck className="text-white text-xl" />
              </span>
            </div>

            <div>
              <h1 className="text-lg font-semibold font-serif">
                Make a Reservation
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-[60px_1fr] gap-4 shadow p-4 mb-3 rounded-lg">
            <div className="flex items-center justify-center">
              <span className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <FaUtensils className="text-white text-xl" />
              </span>
            </div>

            <div>
              <h1 className="text-lg font-semibold font-serif">
                Fresh BBQ Foods
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-[60px_1fr] gap-4 shadow p-4 mb-3 rounded-lg">
            <div className="flex items-center justify-center">
              <span className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <FaTruckFast className="text-white text-xl" />
              </span>
            </div>

            <div>
              <h1 className="text-lg font-semibold font-serif">
                Fast Home Delivery
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <button className="bg-orange-400 text-white p-2 shadow rounded">
              Reservation
            </button>
            <span className="bg-white text-orange-400 p-2 shadow text-center rounded">
              123456789
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT VIDEO */}
      <div className="flex items-center justify-center">
       <iframe
  className="rounded-lg shadow w-full  mt-4 h-[500px]"
  src="https://www.youtube.com/embed/0yDHioCtbN8"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

      </div>
    </section>
<hr />
    <section >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-6 gap-6">
  
  {/* CARD 1 */}
  <div
    className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1544025162-d76694265947')",
    }}
  >
   


    <div className=" p-4 text-white flex flex-col justify-end h-full">
      <span className="text-2xl font-bold text-black">WEST CALIFORNIA BRANCH</span>
      <p className="text-sm mb-2">
        Fresh & Hot BBQ
      </p>
      <button className="bg-orange-400 text-white px-4 py-2 rounded w-fit">
        Order Now
      </button>
    </div>
  </div>

  {/* CARD 2 */}
  <div
    className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1')",
    }}
  >
   

    <div className=" p-4 text-white flex flex-col justify-end h-full">
      <span className="text-2xl font-bold text-black">WEST CALIFORNIA BRANCH</span>
      <p className="text-sm mb-2">
        Fresh & Hot BBQ
      </p>
      <button className="bg-orange-400 text-white px-4 py-2 rounded w-fit">
        Order Now
      </button>
    </div>
  </div>

  {/* CARD 3 */}
  <div
    className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1544025162-d76694265947')",
    }}
  >
    

  <div className=" p-4 text-white flex flex-col justify-end h-full">
      <span className="text-2xl font-bold text-black">WEST CALIFORNIA BRANCH</span>
      <p className="text-sm mb-2">
        Fresh & Hot BBQ
      </p>
      <button className="bg-orange-400 text-white px-4 py-2 rounded w-fit">
        Order Now
      </button>
    </div>
  </div>

</div>

    </section>
    <section>
      <div className="relative flex items-center justify-center py-6">

  {/* CENTER TITLE */}
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-black">
    OUR POPULAR MENU
  </h2>
 
   <div className="absolute right-2 sm:right-8 md:right-16">
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
      {/* ORANGE */}
      <div className="absolute top-0 left-2 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 
      md:w-7 md:h-7 bg-orange-400 rounded-xl rotate-12"></div>

      {/* BLUE */}
      <div className="absolute top-2 sm:top-3 left-0 w-5 h-5 sm:w-6 sm:h-6
       md:w-7 md:h-7 bg-teal-600 rounded-xl"></div>
    </div>
  </div>
   </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 bg-gray-50">

  {/* CARD 1 */}
  <div className="bg-white rounded-xl shadow-md p-8 text-center">
    <span className="text-orange-400 text-xs tracking-widest font-semibold">
      BBQ GRILL
    </span>

    <h1 className="text-xl font-bold mt-3">
      Shrimping Package
    </h1>

    <p className="text-gray-500 text-sm mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
    </p>

    {/* numbers */}
    <div className="grid grid-cols-4 gap-3 mt-6">
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">30</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">23</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">58</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">59</span>
    </div>

    {/* price */}
    <div className="mt-6">
      <span className="line-through text-gray-400 mr-2">$98</span>
      <span className="text-3xl font-bold text-sky-600">$67</span>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-xl shadow-md p-8 text-center">
    <span className="text-orange-400 text-xs tracking-widest font-semibold">
      BBQ GRILL
    </span>

    <h1 className="text-xl font-bold mt-3">
      All Can Eat Menu Package
    </h1>

    <p className="text-gray-500 text-sm mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
    </p>

    <div className="grid grid-cols-4 gap-3 mt-6">
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">30</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">23</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">58</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">59</span>
    </div>

    <div className="mt-6">
      <span className="line-through text-gray-400 mr-2">$98</span>
      <span className="text-3xl font-bold text-sky-600">$67</span>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-xl shadow-md p-8 text-center">
    <span className="text-orange-400 text-xs tracking-widest font-semibold">
      BBQ GRILL
    </span>

    <h1 className="text-xl font-bold mt-3">
      Grill BBQ By Own Private
    </h1>

    <p className="text-gray-500 text-sm mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
    </p>

    <div className="grid grid-cols-4 gap-3 mt-6">
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">30</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">23</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">58</span>
      <span className="bg-sky-600 text-white py-2 rounded-md text-sm">59</span>
    </div>

    <div className="mt-6">
      <span className="line-through text-gray-400 mr-2">$98</span>
      <span className="text-3xl font-bold text-sky-600">$67</span>
    </div>
  </div>

</div>

   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
    <div
    className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1544025162-d76694265947')",
    }}
  ></div>
  <div
    className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1544025162-d76694265947')",
    }}
  ></div>
  <div
    className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1544025162-d76694265947')",
    }}
  ></div>
   </div>
    </section>
     <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 py-16 bg-white">

      {/* LEFT DESIGN BLOCK */}
      <div className=" h-64 lg:h-[500px] rounded-lg overflow-hidden bg-cover bg-center " 
      style={{backgroundImage: `url(${img1})`}}>
      </div>
      {/* RIGHT CONTENT */}
      <div>
        <span className="text-orange-500 font-semibold tracking-widest">
          WHY CHOOSE US
        </span>

        <h2 className="text-4xl font-serif font-bold mt-4">
          The Great Choosing BBQ Restaurant
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* FEATURES */}
        <div className="space-y-6 mt-8">

          <div className="flex gap-4">
            <div className="bg-orange-400 p-3 rounded-lg text-white">
              <Diamond />
            </div>
            <div>
              <h4 className="font-semibold">Premium Restaurant Service</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-orange-400 p-3 rounded-lg text-white">
              <Utensils />
            </div>
            <div>
              <h4 className="font-semibold">Great Food Materials</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-orange-400 p-3 rounded-lg text-white">
              <Hand />
            </div>
            <div>
              <h4 className="font-semibold">Clean Food & Sterils</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* PROGRESS BARS */}
         <div className="space-y-4 w-full max-w-md mt-4">
    
    {/* FRESH FOOD */}
    <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
      <div className="absolute  h-full w-[99%] bg-orange-400 text-white text-sm flex items-center justify-between px-4 rounded-full">
        <span>FRESH FOOD</span>
        <span>99%</span>
      </div>
    </div>

    {/* CLEAN FOOD */}
    <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
      <div className="absolute  h-full w-[97%] bg-orange-400 text-white text-sm flex items-center justify-between px-4 rounded-full">
        <span>CLEAN FOOD</span>
        <span>98%</span>
      </div>
    </div>
        </div>
      </div>
    </section>
         <section className=" px-6 lg:px-20 bg-white">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-blue-600"></span>
            <p className="uppercase tracking-widest text-sm text-orange-500">
              Testimonials
            </p>
          </div>

          <h2 className="text-4xl font-serif font-bold leading-snug mb-4">
            Our Customers <br /> Feedback
          </h2>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* TESTIMONIAL CARD 1 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full"  style={{backgroundImage: `url(${img1})`}} ></div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-orange-500 text-sm uppercase">CEO</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARD 2 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex items-center gap-4">
           <div className="w-12 h-12 rounded-full"  style={{backgroundImage: `url(${img1})`}} ></div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-orange-500 text-sm uppercase">CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-10">
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-blue-600"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
    <section className="px-6 lg:px-20 py-20 bg-white">
      
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-12 h-[2px] bg-blue-600"></span>
            <p className="text-orange-500 uppercase tracking-widest text-sm">
              Our Blog
            </p>
          </div>
          <h2 className="text-4xl font-serif font-bold">Read Our Blog</h2>
        </div>

        <div className="max-w-md">
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded">
            SEE ALL BLOG
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-3 gap-10">

        {/* LEFT BLOG CARDS */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          
          {/* CARD 1 */}
          <div>
            <div
              className="h-64 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>

            <h3 className="text-xl font-serif font-bold mt-5">
              The Happy Family BBQ
            </h3>

            <p className="text-gray-400 text-sm my-2">
              March 7, 2022 · 0 Comments
            </p>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </p>

            <a className="text-orange-500 mt-3 inline-block">READ MORE →</a>
          </div>

          {/* CARD 2 */}
          <div>
            <div
              className="h-64 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>

            <h3 className="text-xl font-serif font-bold mt-5">
              The Right Grill BBQ
            </h3>

            <p className="text-gray-400 text-sm my-2">
              March 7, 2022 · 0 Comments
            </p>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </p>

            <a className="text-orange-500 mt-3 inline-block">READ MORE →</a>
          </div>
        </div>

        {/* RIGHT SIDE LIST */}
        <div className="space-y-8">
          
          {[img1, img2, img1].map((img, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div
                className="w-20 h-20 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>

              <div>
                <h4 className="font-serif font-bold">
                  {i === 0
                    ? "Last Years Big Sale"
                    : i === 1
                    ? "Get The Best Place"
                    : "Best BBQ & Grill Menu"}
                </h4>

                <p className="text-gray-400 text-sm">March 7, 2022</p>
                <a className="text-orange-500 text-sm">READ MORE →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    )
}