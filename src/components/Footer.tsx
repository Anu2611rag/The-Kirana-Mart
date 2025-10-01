// import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

// const Footer = () => {
//   const quickLinks = [
//     { name: "About Us", href: "#about" },
//     { name: "Franchise", href: "#franchise" },
//     { name: "Contact", href: "#contact" },
//     { name: "Store Locator", href: "#stores" },
//   ];

//   const services = [
//     { name: "Franchise Opportunities", href: "#franchise" },
//     { name: "Business Support", href: "#support" },
//     { name: "Training Programs", href: "#training" },
//     { name: "Marketing Support", href: "#marketing" },
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Youtube, href: "#", label: "YouTube" },
//   ];

//   return (
//     <footer className="bg-foreground text-background">
//       <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div className="text-3xl font-bold">
//               7<span className="text-primary">HEVEN</span>
//             </div>
//             <p className="text-background/80 leading-relaxed">
//               India's most trusted and profitable supermarket franchise network. 
//               Join us in revolutionizing retail across the nation.
//             </p>
            
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold text-primary">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-background/80 hover:text-primary transition-colors duration-200"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold text-primary">Our Services</h3>
//             <ul className="space-y-2">
//               {services.map((service, index) => (
//                 <li key={index}>
//                   <a
//                     href={service.href}
//                     className="text-background/80 hover:text-primary transition-colors duration-200"
//                   >
//                     {service.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold text-primary">Contact Info</h3>
//             <div className="space-y-3 text-background/80">
//               <div>
//                 <p className="font-semibold">Phone:</p>
//                 <a 
//                   href="tel:+919625704468"
//                   className="hover:text-primary transition-colors duration-200"
//                 >
//                   +91 96257 04468
//                 </a>
//               </div>
              
//               <div>
//                 <p className="font-semibold">Email:</p>
//                 <a 
//                   href="mailto:franchise@The Kirana Mart.com"
//                   className="hover:text-primary transition-colors duration-200"
//                 >
//                   franchise@The Kirana Mart.com
//                 </a>
//               </div>
              
//               <div>
//                 <p className="font-semibold">Address:</p>
//                 <p className="text-sm">
//                   Head Office<br />
//                   New Delhi, India
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-background/20 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-background/60 text-sm">
//               © 2024 The Kirana Mart Supermarket Franchise. All rights reserved.
//             </div>
            
//             <div className="flex space-x-6 text-sm">
//               <a href="#privacy" className="text-background/60 hover:text-primary transition-colors duration-200">
//                 Privacy Policy
//               </a>
//               <a href="#terms" className="text-background/60 hover:text-primary transition-colors duration-200">
//                 Terms & Conditions
//               </a>
//               <a href="#support" className="text-background/60 hover:text-primary transition-colors duration-200">
//                 Support
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Franchise", href: "#franchise" },
    { name: "Contact", href: "#contact" },
    { name: "Store Locator", href: "#stores" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand + Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             <img src="/logo.jpeg" alt="Logo" className="h-12 w-50" />
            </div>
            <p className="text-background/80 leading-relaxed">
              India's most trusted and profitable supermarket franchise network. 
              Join us in revolutionizing retail across the nation.
            </p>

            <div className="space-y-2 text-background/80">
              <div>
                <p className="font-semibold">Phone:</p>
                <a href="tel:+919871769900" className="hover:text-primary transition-colors duration-200">
                  +91 98 7176 9900
                </a>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <a href="mailto:info@thekiranamart.com" className="hover:text-primary transition-colors duration-200">
                  info@thekiranamart.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-sm">D-9, Sector-3, Noida</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get a Free Quote Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Get a Free Quote</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 rounded border border-background/20 bg-background/10 text-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 rounded border border-background/20 bg-background/10 text-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded border border-background/20 bg-background/10 text-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                className="w-full px-3 py-2 rounded border border-background/20 bg-background/10 text-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-background py-2 rounded hover:bg-accent transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 The Kirana Mart Supermarket Franchise. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/60 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/60 hover:text-primary transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#support" className="text-background/60 hover:text-primary transition-colors duration-200">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
