import React from "react"
import  img1 from '../assets/img1.webp'
import  img2 from '../assets/img2.webp'
export default function Home()
{
    return(
        <>

  <section class="w-full mx-auto  px-6 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

   
      <div className="p-4">
       
        <p class="text-sm tracking-widest text-orange-500 font-semibold">
          <span className="h-1 w-10 bg-blue-500 inline-block"></span> BBQ & GRILL RESTAURANT
        </p>

        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Eat BBQ With On <span class="text-orange-500 italic">Nice</span><br/>
          <span class="text-orange-500 italic">Place</span> With Our Restaurant
        </h1>

        <p class="text-gray-500 mb-6 text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit volupt
          accusantium doloremque laudantium. <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quam atque maiores!
        </p>

 
        <div class="border-l-4 border-orange-500 pl-4 mb-6">
          <p class="italic text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet consectetur.consectetur adipiscing elit.
          </p>
          <p class="text-orange-500 font-semibold mt-2">JOHN DOE</p>
        </div>

    
<ul class="space-y-3 mb-8">
  <li class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>
    <span class="text-gray-600">Lorem ipsum dolor sit amet</span>
  </li>

  <li class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>
    <span class="text-gray-600">Sed do eiusmod tempor</span>
  </li>

  <li class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>
    <span class="text-gray-600">Ut enim ad minim veniam</span>
  </li>
</ul>


    
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            class="border rounded-md px-4 py-3 w-full sm:w-64 focus:outline-none"
          />
          <button class="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            GET VOUCHER
          </button>
        </div>
      </div>

   
      <div class="">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="nature"
          class=" w-full lg:h-[560px] object-cover md:h-[400px] h-400px "
        />

       
        <div class=" bottom-0 left-0 right-0 bg-[#4b8ea0] p-6 rounded-b-xl">
          <h3 class="text-yellow-400 text-3xl font-bold mb-2">G</h3>
          <p class="text-white font-semibold text-lg">4.8 Google Reviews</p>
          <p class="text-white/80 text-sm">
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
      <div className="absolute top-0 left-2 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-orange-400 rounded-xl rotate-12"></div>

      {/* BLUE */}
      <div className="absolute top-2 sm:top-3 left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-teal-600 rounded-xl"></div>
    </div>
  </div>

</div>
  </section>
  <div className="px-8">
    <p className="flex text-center  justify-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-6 py-3 rounded-lg font-semibold transition">
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

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-6 py-3 rounded-lg font-semibold transition">
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

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-6 py-3 rounded-lg font-semibold transition">
        LEARN MORE
      </button>
    </div>

  </div>
</section>
<section className="p-6 w-full">
    <img src={img1} alt="" />
</section>
 <section className="px-12 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 ">
            <div >
                <img src={img2} alt="" className="w-full sm:h-[400px] md:h-[550px]"  />
            </div>
            <div >
                <span className="h-1  bg-blue-500 w-25 inline-block ">
                </span>
                <span className="p-2 text-orange-400">ABOUT US</span>
                <div>
                    <h1 className="text-4xl font-bold mt-2 p-3 ">The Future BBQ <br />Resturdent Solution</h1>
                    <div className="text-justify mt-3 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ratione in dolorem provident! Quibusdam minima voluptatum aperiam corporis vitae aut quo illum.</div>
                    <div className="grid grid-cols-2 text-slate-500 mt-5">
                        <div>
                            <div>Family Place BBQ</div>
                            <div>BBQ Delivery Grill</div>
                            <div>Private Table Resturdent</div>
                        </div>
                            <div>
                                <div>Family Place BBQ</div>
                            <div>BBQ Delivery Grill</div>
                            <div>Private Table Resturdent</div>
                            </div>
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 gap-2 mt-7">
                        <div>
                            <div className="font-bold text-[40px] text-orange-400">25</div>
                            <div className="font-bold">Branch Place</div>
                            <div>Lorem, ipsum.</div>
                        </div>
                        <div>
                            <div className="font-bold text-[40px] text-orange-400">136</div>
                            <div className="font-bold">Grill Tools</div>
                            <div>Lorem, ipsum.</div>
                        </div>
                        <div>
                            <div className="font-bold text-[40px] text-orange-400">25K</div>
                            <div className="font-bold">Daily Customer</div>
                            <div>Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        </>
    )
}