
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, j'aimerais en savoir plus sur vos services de location de mobilier événementiel.");
    window.open(`https://wa.me/33123456789?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        size="sm"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg shadow-lg whitespace-nowrap animate-entrance-fade">
          Contactez-nous sur WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;
