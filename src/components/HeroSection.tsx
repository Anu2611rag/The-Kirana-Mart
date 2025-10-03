import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import supermarketHero from "./assets/supermarket-hero.jpg";
import AboutSection from "./AboutSection";
import img from "./assets/process.jpg";
import InfiniteBrandSlider from "./InfiniteBrandSlider";

import oneImage from "../components/assets/brandImages/1.png";
import twoImage from "../components/assets/brandImages/2.png";
import threeImage from "../components/assets/brandImages/3.png";
import fourImage from "../components/assets/brandImages/4.png";
import fiveImage from "../components/assets/brandImages/5.png";
// import sixImage from "../components/assets/assets/brandImages/6.png";
import sevenImage from "../components/assets/brandImages/7.png";
import eightImage from "../components/assets/brandImages/8.png";
import nineImage from "../components/assets/brandImages/9.png";
import tenImage from "../components/assets/brandImages/10.png";
import elevenImage from "../components/assets/brandImages/11.png";
import twelveImage from "../components/assets/brandImages/12.png";
import thirteenImage from "../components/assets/brandImages/13.png";
import fourteenImage from "../components/assets/brandImages/14.png";
import fifteenImage from "../components/assets/brandImages/15.png";
import sixteenImage from "../components/assets/brandImages/16.png";
import seventeenImage from "../components/assets/brandImages/17.png";
import eighteenImage from "../components/assets/brandImages/18.png";
import nineteenImage from "../components/assets/brandImages/19.png";
import twentyImage from "../components/assets/brandImages/20.png";
import twentyOneImage from "../components/assets/brandImages/21.png";
import twentyTwoImage from "../components/assets/brandImages/22.png";
import twentyThreeImage from "../components/assets/brandImages/23.png";
import twentyFourImage from "../components/assets/brandImages/24.png";
import twentyFiveImage from "../components/assets/brandImages/25.png";
import twentySixImage from "../components/assets/brandImages/26.png";
import twentySevenImage from "../components/assets/brandImages/27.png";
import twentyEightImage from "../components/assets/brandImages/28.png";
import twentyNineImage from "../components/assets/brandImages/29.png";
import thirtyImage from "../components/assets/brandImages/30.png";
import zeeNewsLogo from "../components/assets/mediaPartnerImages/media-partner-1.png";
import aajTakLogo from "../components/assets/mediaPartnerImages/media-partner-2.png";
import dainikJagranLogo from "../components/assets/mediaPartnerImages/media-partner-3.png";
import hindustanTimesLogo from "../components/assets/mediaPartnerImages/media-partner-4.png";
import hindustanLogo from "../components/assets/mediaPartnerImages/media-partner-5.png";
import news18IndiaLogo from "../components/assets/mediaPartnerImages/media-partner-6.png";

const HeroSection = () => {
  const logos = [
    // Images 1 - 10
    { src: oneImage, alt: "Brand 1" },
    { src: twoImage, alt: "Brand 2" },
    { src: threeImage, alt: "Brand 3" },
    { src: fourImage, alt: "Brand 4" },
    { src: fiveImage, alt: "Brand 5" },
    // { src: sixImage, alt: "Brand 6" },
    { src: sevenImage, alt: "Brand 7" },
    { src: eightImage, alt: "Brand 8" },
    { src: nineImage, alt: "Brand 9" },
    { src: tenImage, alt: "Brand 10" },
    // Images 11 - 20
    { src: elevenImage, alt: "Brand 11" },
    { src: twelveImage, alt: "Brand 12" },
    { src: thirteenImage, alt: "Brand 13" },
    { src: fourteenImage, alt: "Brand 14" },
    { src: fifteenImage, alt: "Brand 15" },
    { src: sixteenImage, alt: "Brand 16" },
    { src: seventeenImage, alt: "Brand 17" },
    { src: eighteenImage, alt: "Brand 18" },
    { src: nineteenImage, alt: "Brand 19" },
    { src: twentyImage, alt: "Brand 20" },
    // Images 21 - 30
    { src: twentyOneImage, alt: "Brand 21" },
    { src: twentyTwoImage, alt: "Brand 22" },
    { src: twentyThreeImage, alt: "Brand 23" },
    { src: twentyFourImage, alt: "Brand 24" },
    { src: twentyFiveImage, alt: "Brand 25" },
    { src: twentySixImage, alt: "Brand 26" },
    { src: twentySevenImage, alt: "Brand 27" },
    { src: twentyEightImage, alt: "Brand 28" },
    { src: twentyNineImage, alt: "Brand 29" },
    { src: thirtyImage, alt: "Brand 30" },
  ];

  const mediaPartners = [
    { src: zeeNewsLogo, alt: "Zee News Logo" },
    { src: aajTakLogo, alt: "Aaj Tak Logo" },
    { src: dainikJagranLogo, alt: "Dainik Jagran Logo" },
    { src: hindustanTimesLogo, alt: "Hindustan Times Logo" },
    { src: hindustanLogo, alt: "Hindustan Logo" },
    { src: news18IndiaLogo, alt: "News 18 India Logo" },
  ];

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const videos = [
    "https://www.youtube.com/embed/VSAhNjP-Dgg",
    "https://www.youtube.com/embed/07laPwDndm8",
    "https://www.youtube.com/embed/XG4fs-a5qmo",
    "https://www.youtube.com/embed/_W5i8yIFl9A",
    "https://www.youtube.com/embed/KEaGKS7YeaQ",
    "https://www.youtube.com/embed/lX6hbR1LNF2in4wu", // Fixed last link
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description:
        "We'll contact you within 24 hours with your free consultation.",
      duration: 5000,
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section
        className="relative py-12 sm:py-16 lg:min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${supermarketHero})`,
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Hero Content - 8 columns */}
            <div className="col-span-12 lg:col-span-8 text-white space-y-8 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-lg lg:text-xl font-semibold text-primary-glow">
                  Launch Your Own Business
                </h2>
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight">
                  <span className="italic">J</span>oin The Most Profitable,
                  <span className="block">Trusted & Supportive</span>
                  <span className="text-primary-glow">
                    Supermarket Franchise
                  </span>
                  <span className="block">Chain In India</span>
                </h1>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                  <span className="text-sm font-medium">
                    400+ Outlets Nationwide
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                  <span className="text-sm font-medium">20,000+ Products</span>
                </div>
              </div>
            </div>

            {/* Quote Form - 4 columns */}
            <div className="col-span-12 lg:col-span-4 animate-slide-in">
              <Card className="p-6 lg:p-4 bg-white/95 backdrop-blur-sm shadow-elegant">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      Get a Free Quote
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Start your franchise journey today
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 focus:ring-primary"
                      required
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 focus:ring-primary"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 focus:ring-primary"
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[100px] resize-none focus:ring-primary"
                      rows={4}
                    />
                    <div className="text-xs text-muted-foreground text-center py-2">
                      Protected by reCAPTCHA - Privacy & Terms
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:shadow-elegant transition-all duration-300 text-lg font-semibold"
                    >
                      Send
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-black relative inline-block text-center w-full">
            Our
            <span className="text-green-500"> Services</span>
            {/* Green accent line */}
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* LEFT COLUMN: Image - This will need to be replaced with your actual image component or URL */}
            <div className="lg:w-1/2 flex justify-center items-start lg:block">
              <img
                src={"shoppingCart.png"}
                alt="Grocery cart in an aisle"
                className="w-full h-auto max-h-[400px] lg:max-h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* RIGHT COLUMN: Services Content */}
            <div className="lg:w-1/2">
              {/* Title: Matches the content style (black/white text with a green accent for theme) */}

              {/* Services List - Content is pulled directly from the uploaded image */}
              <div className="space-y-8">
                {/* Service 1: MARKETING & PROMOTION */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-black-500 uppercase tracking-wider">
                    MARKETING & PROMOTION
                  </h3>
                  <p className="text-black-300 leading-relaxed">
                    Marketing is most important for running any business & our
                    team helps you in all types of marketing and promotion for
                    the growth of your business.
                  </p>
                </div>

                {/* Service 2: MOST ADVANCE SOFTWARE */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-black-500 uppercase tracking-wider">
                    MOST ADVANCE SOFTWARE
                  </h3>
                  <p className="text-black-300 leading-relaxed">
                    We have a team of best IT professionals in the market who
                    design software for your business so that your business can
                    be in autopilot.
                  </p>
                </div>

                {/* Service 3: WORLD CLASS INTERIOR */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-black-500 uppercase tracking-wider">
                    WORLD CLASS INTERIOR
                  </h3>
                  <p className="text-black-300 leading-relaxed">
                    Our Company provide you the best interior work of your
                    grocery mart at the lowest rate in the market. We focus on
                    quality of products using in interior work.
                  </p>
                </div>

                {/* Service 4: PURCHASING & RE-FILLING */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-black-500 uppercase tracking-wider">
                    PURCHASING & RE-FILLING
                  </h3>
                  <p className="text-black-300 leading-relaxed">
                    We deal in manly fast moving and high demanding products
                    which are in demand. We provide product at best margin and
                    deal in 100% original products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* process to open store */}
<section className="bg-white py-12 md:py-20">
  {/* Main Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 mb-10 text-black">
    Ready to Launch Your Store? Just Follow These Simple Steps!
  </h2>

  <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-start justify-between gap-10">
    
    {/* Left side: Image */}
    <div className="flex-1 rounded-lg shadow  overflow-hidden">
      <img
        src={img}
        alt="Process"
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
    </div>

    {/* Right side: Steps */}
    <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-500 text-center">
        Get The Best Grocery And Supermarket Franchise In Just 6 Simple Steps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Step 1 */}
        <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">1. Appointment</h3>
          <p>
            You can get appointed as a franchisee of The kirana mart by
            proceeding through a proper process. It is easier but you need
            to be professional.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">2. Your Site Survey</h3>
          <p>
            Grocery items are the daily needs of all. But still, before
            giving you a franchise, we need to survey your site, the demand
            of your customers and based upon it, The kirana mart will
            decide.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            3. Appointment Franchise Verification
          </h3>
          <p>
            We need to verify so many things regarding the franchise
            business.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">4. Area Code Activation</h3>
          <p>
            We have different codes based on areas where we have our
            franchise business. So before you start your franchise, we will
            assure you of an activated area code.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            5. Handing Over Welcome Kit
          </h3>
          <p>
            After all these steps, we will love to hand over you the welcome
            kit for your new franchise business.
          </p>
        </div>

        {/* Step 6 */}
        <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            6. Opening of the Franchise
          </h3>
          <p>
            With these few steps, you are done. The kirana mart welcomes you
            to its family. You can open your grocery shop as a franchisee of
            The kirana mart in your area.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center m-8 text-primary-glow">
            Our Established Supermarket Franchises
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="aspect-w-16 aspect-h-12">
                <iframe
                  className="w-full h-full rounded-lg shadow-md aspect-video"
                  src={video}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Featured In
        </h2>
        <InfiniteBrandSlider logos={logos} />
        {/*  */}
      </section>

      <section className="bg-white py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
            Our Media Partner
          </h2>

          {/* Logos Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
            {mediaPartners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  // Tailwind classes for image sizing and hover effect
                  className="h-16 sm:h-20 w-auto object-contain transition duration-300 transform hover:scale-105 filter"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

// {<section>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-start justify-between gap-10">
//         {/* Left side: Image */}
//         <div className="flex-1 rounded-lg shadow overflow-hidden">
//           <img
//             src={topper}
//             alt="Achievement cooming soon..."
//             className="rounded-lg shadow-lg w-full h-full object-cover"
//           />
//         </div>

//         {/* Right side: Steps */}
//         <div className="flex-1 flex flex-col gap-6 bg-white  rounded-lg  p-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">
//             Best Start-Up Of The Year In (FMCG)
//           </h2>
//           <p className="rounded-lg  w-full h-auto object-cover">
//             Recently on 16th December 2022, a mega event was organized by some
//             of the leading members in the industry; the India Startup Summit.
//             in this Summit, one of the events was that the most successful
//             startups in every industry were to be given a Startup Achiever
//             Awards. Praising the hard work of our team we proudly share that
//             The Kirana Mart has been awarded as the Best Startup of the Year
//             in FMCG category. Here is a picture of a The kirana mart team memeber
//             receiving the Best Startup of the Year Award at the Indian Startup
//             Summit. This award was given to the The kirana mart because of the fast
//             and vast success growth that we as a startup have achieved only in
//             the last 3 years.
//           </p>
//         </div>
//       </div>
//     </section>}
