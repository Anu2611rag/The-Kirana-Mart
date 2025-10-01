import { Card } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Headphones,
  MapPin,
  IndianRupee
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "20,000+ Products",
      description: "Wide range of home and kitchen goods from 1200+ national and international brands"
    },
    {
      icon: MapPin,
      title: "Pan India Presence",
      description: "400+ outlets across 14+ states with continuous expansion nationwide"
    },
    {
      icon: IndianRupee,
      title: "High Profitability",
      description: "Proven business model with strong ROI and multiple revenue streams"
    },
    {
      icon: Shield,
      title: "Brand Trust",
      description: "Established reputation with 10+ years of excellence in retail industry"
    },
    {
      icon: Headphones,
      title: "Complete Support",
      description: "End-to-end assistance from setup to operations and marketing"
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "150% growth rate in the booming Indian retail franchise sector"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">The Kirana Mart</span> Franchise?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join India's most trusted and profitable supermarket franchise network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 group animate-fade-in border-0 bg-gradient-to-br from-background to-muted/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;