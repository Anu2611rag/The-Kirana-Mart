import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Store Locator", href: "/stores" },
    { name: "Franchise", href: "/franchise" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
             <Link to="/" aria-label="Home">
             <img src="/logo.jpeg" alt="Logo" className="h-12 w-50" />
             </Link> 
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
         <div className="hidden lg:flex items-center">
  <a href="/brochure.pdf" download>
    <Button
      variant="default"
      className="text-background bg-gradient-to-r from-primary to-accent hover:shadow-elegant transition-all duration-300"
    >
      Download Brochure
    </Button>
  </a>
</div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default"
                className="text-white-500 hover:shadow-elegant transition-all duration-300 mt-4 w-fit "
              >
                Download Brochure
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;