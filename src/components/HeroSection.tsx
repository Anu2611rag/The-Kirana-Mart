import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import supermarketHero from "./assets/supermarket-hero.jpg";
import AboutSection from "./AboutSection";
import img from "./assets/process.jpg"
import ani from "./assets/ani-news.png"
import busi from "./assets/business-standard.png"
import jhar from "./assets/jharkhandtimes.png"
import lok from "./assets/lokmat-times.png"
import ne from "./assets/northeast-times.png"
import topper from "./assets/topper.webp"
import zee from "./assets/zee5.png"

const HeroSection = () => {
  const logos = [
    { src: ani, alt: "The Print" },
    { src: busi, alt: "LatestLY" },
    { src: lok, alt: "Lokmat Times" },
    { src: ne, alt: "NorthEast Times" },
    { src: ani, alt: "ANI" },
    { src: zee, alt: "Zee5" },
    { src: jhar, alt: "Jharkhand" },
    { src: topper, alt: "Business Standard" },
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
      description: "We'll contact you within 24 hours with your free consultation.",
      duration: 5000,
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
    <section 
      className="relative py-12 sm:py-16 lg:min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${supermarketHero})`
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
        <span className="text-primary-glow">Supermarket Franchise</span>
        <span className="block">Chain In India</span>
      </h1>
    </div>

    <div className="flex flex-wrap gap-4 pt-6">
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
        <span className="text-sm font-medium">400+ Outlets Nationwide</span>
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

   {/* process to open store */}
   <section className="bg-white py-12 md:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-start justify-between gap-10">
    
    {/* Left side: Image */}
    <div className="flex-1 rounded-lg shadow overflow-hidden">
      <img
        src={img}
        alt="Process"
        className="rounded-lg shadow-lg w-full h-full object-cover"
      />
    </div>

    {/* Right side: Steps */}
    <div className="flex-1 flex flex-col gap-6 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">
        Get The Best Grocery And Supermarket Franchise In Just 6 Simple Steps
      </h2>

      {/* Step 1 */}
      <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">1. Appointment</h3>
        <p>
          You can get appointed as a franchisee of 7heven by proceeding through a proper process. It is easier but you need to be professional.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">2. Your Site Survey</h3>
        <p>
          Grocery items are the daily needs of all. But still, before giving you a franchise, we need to survey your site, the demand of your customers and based upon it, 7heven will decide.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">3. Appointment Franchise Verification</h3>
        <p>
          We need to verify so many things regarding the franchise business.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">4. Area Code Activation</h3>
        <p>
          We have different codes based on areas where we have our franchise business. So before you start your franchise, we will assure you of an activated area code.
        </p>
      </div>

      {/* Step 5 */}
      <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">5. Handling Over Welcome Kit</h3>
        <p>
          After all these steps, we will love to hand over you the welcome kit for your new franchise business.
        </p>
      </div>

      {/* Step 6 */}
      <div className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">6. Opening of the Franchise</h3>
        <p>
          With these few steps, you are done. 7heven welcomes you to its family. You can open your grocery shop as a franchisee of 7heven in your area.
        </p>
      </div>
    </div>
  </div>
</section>

<section>

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

      <div className="overflow-x-auto">
        <div className="flex justify-center sm:justify-center gap-8 items-center w-max sm:w-full mx-auto px-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 sm:h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-start justify-between gap-10">
    
    {/* Left side: Image */}
    <div className="flex-1 rounded-lg shadow overflow-hidden">
      <img
        src={topper}
        alt="Achievement"
        className="rounded-lg shadow-lg w-full h-full object-cover"
      />
    </div>

    {/* Right side: Steps */}
    <div className="flex-1 flex flex-col gap-6 bg-white  rounded-lg  p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">
        Best Start-Up Of The Year In (FMCG)
      </h2>
      <p className="rounded-lg  w-full h-auto object-cover">
        Recently on 16th December 2022, a mega event was organized by some of the leading members in the industry; the India Startup Summit. in this Summit, one of the events was that the most successful startups in every industry were to be given a Startup Achiever Awards.

Praising the hard work of our team we proudly share that The Kirana Mart has been awarded as the Best Startup of the Year in FMCG category. Here is a picture of a 7 heven team memeber receiving the Best Startup of the Year Award at the Indian Startup Summit. This award was given to the 7 heven because of the fast and vast success growth that we as a startup have achieved only in the last 3 years.
      </p>

     

      

      


      
    </div>
  </div>
    </section>
     </>
  );
};

export default HeroSection;