import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip periodically
    if (isVisible) {
      const tooltipTimer = setInterval(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 4000);
      }, 15000);

      return () => clearInterval(tooltipTimer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site e gostaria de saber mais sobre os planos de saúde disponíveis.";
    window.open(`https://wa.me/5585988851762?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-bounce-in">
          <button
            onClick={handleCloseTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="pr-6">
            <p className="text-sm font-semibold text-gray-800 mb-1">
              💬 Precisa de ajuda?
            </p>
            <p className="text-xs text-gray-600">
              Fale com nossos especialistas e encontre o plano ideal para você!
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float group relative"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        
        {/* Hover Text */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Falar no WhatsApp
          <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;