import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import image from "@/assets/supermarket-hero.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98 7176 9900",
      action: "tel: +919871769900"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@thekiranamart.com",
      action: "mailto:info@thekiranamart.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "D-9, Sector-3, Noida, Uttar Pradesh",
      action: "#"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Chat with us",
      action: "https://wa.me/+919871769900"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API or email)
    console.log("Form submitted:", formData);
  };

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
           Contact Us
         </h1>
       </div>
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to <span className="text-primary">Start</span> Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our franchise experts and take the first step towards your successful business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 group cursor-pointer animate-fade-in border-0 bg-gradient-to-br from-background to-muted/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a href={method.action} className="block space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {method.details}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>

      {/* <section className="bg-foreground text-background py-12 lg:py-16"> */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-12 gap-12 items-center">
             
          {/* Right: Form */}
          <div className="col-span-12 lg:col-span-6">
            <Card className="p-6 lg:p-4 bg-white/95 backdrop-blur-sm shadow-elegant">
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
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[100px] resize-none focus:ring-primary"
                  rows={4}
                  required
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
            </Card>
          </div>

           {/* Left: Text */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-glow">
              Connect to Our Experts
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold">
              The Kirana Mart
            </h3>
            <p className="text-background/80 leading-relaxed">
              Please fill the form for further query, we will get in touch very soon.
            </p>
          </div>

        </div>
      </div>
   
      </div>
    </section>
  
    </>
  );
};

export default ContactSection;