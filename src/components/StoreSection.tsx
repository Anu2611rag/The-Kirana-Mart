import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import image from "./assets/supermarket-hero.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const StoreSection = () => {
   const placeholders = [1, 2, 3]; 
 
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
           Our Stores
         </h1>
       </div>
        <section className="w-full bg-gray-50 py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
    {placeholders.map((item, index) => (
      <div
        key={index}
        className="w-full h-64 md:h-96 bg-gray-200 border border-green-500 rounded-xl shadow-lg flex items-center justify-center"
      >
        <span className="text-gray-600 font-semibold text-2xl md:text-3xl">
          Coming Soon
        </span>
      </div>
    ))}
  </div>
</section>

  
    </>
  );
};

export default StoreSection;