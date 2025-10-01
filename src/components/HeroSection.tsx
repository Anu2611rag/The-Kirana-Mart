import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import supermarketHero from "@/assets/supermarket-hero.jpg";

const HeroSection = () => {
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
    </>
  );
};

export default HeroSection;