import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUtensils, faStore, faChartLine } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import map from '../assets/map.jpg'


import video from '../assets/video.mp4'
export default function About()
{
    return(
        <>
       <div className="flex flex-col md:flex-row justify-around items-center px-6 py-8 gap-0">
  {/* Text Section */}
  <div className="max-w-xl space-y-4">
    <div className="text-sm text-slate-500">Home / AboutUs</div>
    <h2 className="text-3xl font-serif font-bold text-black">
      ABOUT <span className="text-orange-400">US</span>
    </h2>
    <p className="text-lg text-slate-600 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit numquam totam cumque iste voluptate perspiciatis in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex justify-center">
    <img src={img2} alt="About Us" className="w-92 h-92 object-cover rounded-lg shadow-md" />
  </div>
</div>

        <hr />
        <section className="px-12 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 ">
            <div>
                <img src={img1} alt="" />
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
        <hr />
        <section className="px-12 py-8  grid grid-cols-1 md:grid-cols-2">
            
              <div className="px-6 md:px-16 py-10 space-y-6">
  {/* Header Section */}
  <div>
    <div className="flex items-center gap-2">
      <span className="h-1 w-10 bg-blue-500 inline-block"></span>
      <span className="text-orange-400 font-semibold tracking-widest">OUR HISTORY</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
      Once Upon a Time <br /> We Have The Idea
    </h2>
    <p className="text-gray-600 max-w-2xl mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
  </div>

  {/* Timeline Items */}
  <div className="space-y-4">
    {[
      {
        title: "Founder Has Certification",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: faGraduationCap,
      },
      {
        title: "Test The Perfect Food",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: faUtensils,
      },
      {
        title: "Found First Restaurant",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: faStore,
      },
      {
        title: "Scale More Restaurant",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: faChartLine,
      },
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-4 shadow p-4 rounded-lg bg-white">
        <div className="bg-orange-400 text-white text-xl w-12 h-12 rounded flex items-center justify-center">
              <FontAwesomeIcon icon={item.icon} />
            </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            <div>
                <h1 className="text-slate-600 font-serif text-[20px] text-justify"><span className="text-3xl text-slate-700">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem repellat hic aliquid quam assumenda animi iusto at expedita beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur delectus architecto maiores voluptates perferendis facilis numquam odit obcaecati doloribus! Eos, magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam earum facere nesciunt. Recusandae nam optio ipsam dolore dolor odio at! Corporis.</h1>
                <h1 className="text-slate-600 font-serif text-[20px] text-justify mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, soluta maiores. Quo saepe ducimus distinctio ipsa cumque libero veritatis cupiditate totam sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus recusandae sit qui eveniet quia sequi, impedit nemo itaque harum, praesentium nisi?</h1>

                <div className="flex flex-row gap-3 mt-4">
                    <span className="w-5 h-24 bg-orange-400 block"></span>
                    <div className="font-semibold">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, perspiciatis exercitationem quo cumque aperiam alias ipsa natus aspernatur saepe quis ratione nobis similique? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, possimus natus!<br />
                        <span className="text-orange-500">JOHN DEO</span>
                    </div>
                </div>
               <div className="flex flex-col md:flex-row gap-6 mt-6 items-center">
  {/* Left Image */}
  <img
    src={img2}
    alt="decor"
    className="w-64 h-64 object-cover rounded-lg shadow-md"
  />

  
  <div className="space-y-4 w-full max-w-md">
    
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

    {/* TREND FOOD */}
    <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
      <div className="absolute  h-full w-[90%] bg-orange-400 text-white text-sm flex items-center justify-between px-4 rounded-full">
        <span>TREND FOOD</span>
        <span>95%</span>
      </div>
    </div>

  </div>
</div>
 </div>         </section>
 <hr />
 <section className="p-8">
  <video
    controls
    autoPlay
    muted
    loop
    className="w-full h-auto max-h-[400px] rounded-lg shadow-lg"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
  {[img1, img2, img1].map((img, i) => (
    <div key={i} className="h-96 rounded-lg overflow-hidden shadow-md bg-white">
      {/* Top Half - Image */}
      <div
        className="h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Bottom Half - Text */}
      <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Lorem, ipsum dolor.</h1>
          <p className="text-sm text-gray-600 mt-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus.
          </p>
        </div>
        <button className="mt-4 p-2 bg-orange-500 text-white rounded w-fit">Get Direction</button>
      </div>
    </div>
  ))}
</section>
<section className="min-h-[300px] flex flex-col items-center justify-center text-center px-4">
  
  <h1 className="text-4xl font-bold text-black mb-4">
    Available Many Places
  </h1>

  <div className="text-gray-600 max-w-xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed vero eaque.
  </div>
<div className="w-full flex justify-center py-12 bg-white">
  <img
    src={map}
    alt="World Map"
    className="max-w-6xl w-full object-contain"
  />
</div>

</section>


<section className="w-full border shadow">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8 items-center">
    
    {/* LEFT TEXT */}
    <div className="text-black font-serif font-bold text-3xl md:text-4xl">
      Get Voucher Discount
    </div>

    {/* RIGHT FORM */}
    <div className="flex gap-3 justify-start md:justify-end">
      <input
        type="email"
        placeholder="Email Address"
        className="border-2 border-slate-400 w-64 h-14 px-4 rounded focus:outline-none focus:border-amber-500"
      />
      <button className="h-14 px-6 rounded bg-amber-500 hover:bg-amber-600 text-white font-semibold transition">
        GET VOUCHER
      </button>
    </div>

  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    
    <div
      className="relative h-[320px] rounded-xl overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544025162-d76694265947')" 
          // replace with your image
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4">
          Follow Us On Instagram
        </h2>

        <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          @BIPANGRESTO
        </button>
      </div>

    </div>

  </div>
</section>


        </>
    )
}