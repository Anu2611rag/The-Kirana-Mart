import { Card } from "@/components/ui/card";
import aboutUsImg from "./assets/KIRANA-MART.jpg";
import image from "./assets/supermarket-hero.jpg";
import { Users, Store, Award, TrendingUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const AboutSection = () => {
const location = useLocation();


  const stats = [
    { icon: Store, label: "Franchise Outlets", value: "400+" },
    { icon: Users, label: "Happy Customers", value: "2M+" },
    { icon: Award, label: "Years of Excellence", value: "10+" },
    { icon: TrendingUp, label: "Growth Rate", value: "150%" },
  ];

  return (
    <>
    {
      (location.pathname === "/about") ? (
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
        About Us
      </h1>
    </div>
      ):null
    }
    
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">

         
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  About <span className="text-primary">Kirana Mart</span>
                </h2>

                <div className="prose prose-lg text-black">
                  <p >
                    THE KIRANA MART is India's leading company committed to
                    provide all grocery needs to the consumers of India at the
                    best price. Along with this, we will give all support to
                    those who want to start own business of grocery mart.
                  </p>
                  <br/>
                  <p>
                    The Founder of "The Kirana Mart" is Er. ABHISHEK KUMAR JHA.
                    The company has its headquarter in Noida. THE KIRANA MART
                    today has a well established presence in all over India with
                    our mission to be the lowest price provider in the regions
                    we operate.
                  </p>
 <br/>
                  <p>
                    THE KIRANA MART is a one-stop supermarket chain that aims to
                    offer customers a wide range of basic home and personal
                    products under one roof. Each mart store stocks home utility
                    products - including grocery, food, toiletries, beauty
                    products, stationery, kitchenware, crockery, toys, home care
                    and more available at competitive prices.
                  </p>
 <br/>
                  <p>
                    THE KIRANA MART pursue highest standards of objectivity,
                    honesty and transparency. They create a trusting environment
                    where everyone speaks up their mind resulting in everyone
                    committing to the best idea. They always do the right thing
                    even when no one is looking. We display curiosity, encourage
                    experimentation and exemplify innovative thinking in
                    creating better and disruptive customer solutions that are
                    sustainable.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="p-4 text-center hover:shadow-soft transition-all duration-300 group"
                  >
                    <stat.icon className="w-8 h-8 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>

              {/* <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-elegant transition-all duration-300"
                >
                  Start Your Franchise
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </div> */}
            </div>

 <div>
   <img src={aboutUsImg} alt="Logo" className="h-full w-50" />
 </div>
            {/* Video Section */}
            {/* <div className="animate-slide-in">
              <Card className="relative overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20"></div>

                
                  <div className="relative z-10 text-center text-white space-y-4">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                     
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        Watch Our Success Story
                      </h3>
                      <p className="text-sm opacity-90">
                        See how The Kirana Mart transforms lives
                      </p>
                    </div>
                  </div>

                  
                  <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CONTACT +91 96257 04468
                  </div>
                </div>
              </Card>
            </div> */}
          </div>
        </div>
      </section>
   
    </>
  );
};

export default AboutSection;
