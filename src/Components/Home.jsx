import React from "react";
// =
export default function Home()
{
    return(
        <>

  <section class="max-w-7xl mx-auto px-6 py-6">
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
          accusantium doloremque laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quam atque maiores!
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
        </>
    )
}