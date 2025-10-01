import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import image from "./assets/supermarket-hero.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const StoreSection = () => {
 
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1>Coming Soon</h1>
      </div>
    </section>
  
    </>
  );
};

export default StoreSection;