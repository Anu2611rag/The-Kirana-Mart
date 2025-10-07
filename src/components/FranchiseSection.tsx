import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import image from "./assets/supermarket-hero.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import istock from"./assets/istock.jpg"
import analysis from "./assets/analysis.png"
import growth from "./assets/growth.png"
import supermarket from "./assets/supermarket-chain.jpg"
import franchise from "./assets/supermarket-franchise.jpg"
import support from "./assets/support.png"
import verify from "./assets/verify.png"
import fofo from "./assets/foco-model.jpg"

const FranchiseSection = () => {
  const cards = [
    { id: 1, title: "Coming Soon" },
    { id: 2, title: "Coming Soon" },
    { id: 3, title: "Coming Soon" },
    { id: 4, title: "Coming Soon" },
  ];
  const stores = [
  { id: 1, name: "Kirana Mart In (Rajasthan)" },
  { id: 2, name: "Kirana Mart In (Uttarakhand)" },
  { id: 3, name: "Kirana Mart In (UP)" },
  { id: 4, name: "Kirana Mart In (Punjab)" },
  { id: 5, name: "Kirana Mart In (Delhi)" },
  { id: 6, name: "Kirana Mart In (Odhisa)" },
];
 
  return (
    <>
    
    <div
         className="w-full h-64 lg:h-76 flex items-center justify-center p-0"
         style={{
           backgroundImage: `linear-gradient(rgba(24, 226, 142, 0.5), rgba(16, 185, 129, 0.3)), url(${image})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
         }}
       >
         <h1 className="text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">
           Our Franchise
         </h1>
       </div>
   <section className="bg-white py-12 md:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-start justify-between gap-10">
    {/* Image */}
    <div className="flex-1 bg-white-50 rounded-lg shadow">
      <img
        src={istock}
        alt="Supermarket"
        className="rounded-lg shadow-lg h-full w-full object-cover"
      />
    </div>

    {/* Form */}
    <div className="flex-1 bg-gray-50 rounded-lg shadow p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-500 mb-6 leading-tight md:leading-snug">
        Get a Franchise
      </h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="text" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="text" placeholder="The area in which you want to open the outlet?" className="w-full px-4 py-3 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="text" placeholder="Address" className="w-full px-4 py-3 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <textarea placeholder="Message" rows="3" className="w-full px-4 py-3 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-all">Send</button>
      </form>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-12 px-4 md:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
   {/* Left Column: Intro Section */}
<div className="flex-1 grid grid-rows-[auto_1fr] gap-6">
  {/* Top: Header + Paragraph + Images */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-green-500">
      Why Choose Kirana Mart as Your Franchise Partner?
    </h2>

    <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
      Ready to join a franchise partner that’s expanding across India at a rapid pace? <strong>Kirana Mart</strong> provides a fantastic opportunity that’s packed with lots of profits and potential. With more than <strong>400+ outlets</strong> across <strong>14+ states</strong> of India, our franchise model provides a true testament of affordability, full support, and strong partnerships, thus making it super simple for you to go into our FMCG franchise model that’s growing at a fast pace. So, what are you waiting for? Become part of the Kirana Mart family and move on a pathway to success.
    </p>

    {/* Images */}
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <img
        src={supermarket}
        alt="Family Shopping"
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
      <img
        src={franchise}
        alt="Man Shopping"
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
    </div>
  </div>

 {/* Video Section */}
<div className="w-full mt-8">
  <h3 className="text-xl font-semibold text-green-500 mb-4">Watch Our Franchise Story</h3>
  <div className="w-full h-[400px] md:h-[500px] border border-gray-200 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 text-xl font-semibold mb-6">
    Coming Soon
  </div>
</div>

</div>

    {/* Right Column: Cards Grid */}
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <img src={verify} alt="Verify" className="w-full rounded-lg object-cover mb-4" />
        <div className="text-3xl text-green-500 mb-2"></div>
        <h3 className="text-xl font-semibold text-green-500 mb-2">
          Trusted and Profitable Brand
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Trusted by 400+ franchise owners, along with having more than 400+ outlets spanning across 14+ states of India, our franchise model is totally low-risk along with high reward opportunities in the fastest-growing FMCG sector.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <img src={support} alt="Support" className="w-full rounded-lg object-cover mb-4" />
        <div className="text-3xl text-green-500 mb-2"></div>
        <h3 className="text-xl font-semibold text-green-500 mb-2">
          Affordable Investment & Strong Brand Partnerships
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          With our investment plans, you can easily start a franchise business without needing massive investments. With partnerships with around 1200+ brands (both national and international), that offers 20,000+ quality products, making Kirana Mart the best for customers that need value and quality.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <img src={analysis} alt="Analysis" className="w-full rounded-lg object-cover mb-4" />
        <div className="text-3xl text-green-500 mb-2"></div>
        <h3 className="text-xl font-semibold text-green-500 mb-2">
         Proven Business Model with Minimal Effort
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Our trusted and proven business model ensures that owners of our franchise generate revenue with deeper support from our skilled team. From the start to doing everyday operations, we take care of all the details, helping you fully focus on the business. </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <img src={growth} alt="Growth" className="w-full rounded-lg object-cover mb-4" />
        <div className="text-3xl text-green-500 mb-2"></div>
        <h3 className="text-xl font-semibold text-green-500 mb-2">
          Fast and award-winning growth
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
         Recognized as the “Best Startup of the Year in FMCG” at the startup summit. The growth of Kirana Mart is exponential and thus offers a quick and efficient process for starting your franchise business in no time.</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-green-500 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Own a Franchise with the FOFO Model
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">What is the FOFO Model ?</h3>
            <p className="text-md leading-relaxed">
              The Franchise-Owned, Franchise-Operated (FOFO) model is a business system in
              which the franchisee both owns and operates the franchise. In this model,
              you manage everything from staffing to inventory, giving you full control
              over how your supermarket franchise business runs. It’s ideal for those who
              want to be hands-on and directly involved in their business’s success.
              <br />
              <br />
              At Kirana Mart, our FOFO franchise model allows franchise owners to benefit from
              our well-established brand while maintaining full control of daily
              operations, ensuring the freedom to grow their businesses their way.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={fofo}// <- replace with actual image path
              alt="FOFO Model"
              className="max-w-[250px] md:max-w-[300px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Choose the FOFO Model ?</h3>
            <p className="text-sm leading-relaxed">
              The FOFO model allows you to manage your supermarket with complete
              independence. As the franchise owner, you make all the important decisions,
              from staffing to operations, while benefiting from Kirana Mart trusted brand.
              <br />
              <br />
              This model provides the flexibility to operate your Kirana Mart franchise
              confidently while receiving ongoing business support. It’s the perfect
              balance of independence and expert guidance, designed for those seeking a
              profitable supermarket franchise in India.
              <br />
              <br />
              At Kirana Mart, our FOFO franchise model allows franchise owners to benefit from
              our well-established brand while maintaining full control of daily
              operations, ensuring the freedom to grow their businesses their way.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-gray-50 py-12">
  <div className="max-w-8xl mx-auto px-4">
    {/* Heading */}
    <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-green-600">
      Kirana Mart Stores Across India
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stores.map((store) => (
        <div
          key={store.id}
          className="rounded-xl overflow-hidden shadow-md border border-green-300 hover:shadow-xl transition duration-300 bg-white"
        >
          {/* Placeholder for image */}
          <div className="w-full h-56 flex items-center justify-center bg-gray-200 text-gray-500 font-semibold">
            Coming Soon
          </div>

          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-grey-800">
              {store.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-green-600">
          Our Happy Franchise Owners
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
  {cards.map((card) => (
    <div
      key={card.id}
      className="min-w-[300px] sm:min-w-[350px] flex items-center justify-center border-2 border-green-400 rounded-xl p-6 h-72 bg-gray-100 shadow-md hover:shadow-xl transition duration-300"
    >
      <span className="text-xl font-semibold text-gray-600">
        {card.title}
      </span>
    </div>
  ))}
</div>

      </div>
    </section>
     <section className="bg-white flex items-center justify-center p-4 py-12 md:py-20">
  <div className="bg-white rounded-2xl shadow-xl w-full overflow-hidden flex flex-col md:flex-row min-h-[400px] md:h-[600px]">
    
    {/* Left Part: Header / Text */}
    <div className="md:w-3/5 p-6 flex flex-col justify-center bg-white text-black">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
        Pay now and start your Kirana Mart supermarket franchise journey today!
      </h1>
      <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
    </div>
    
    {/* Right Part: QR Code / Coming Soon */}
    <div className="md:w-2/5 p-6 flex items-center justify-center bg-gray-50">
      <div className="w-40 sm:w-48 md:w-56 h-48 sm:h-56 md:h-80 bg-gray-200 rounded-xl flex items-center justify-center flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-gray-500 font-semibold text-base sm:text-lg">Coming Soon</span>
      </div>
    </div>

  </div>
</section>
    </>
  );
};

export default FranchiseSection;