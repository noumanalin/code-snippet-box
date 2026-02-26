import "./Ws.css";
import { MessageCircle } from "lucide-react";

const WhatsAppIcon = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);



const WhatsAppLogo = () => {
  const phoneNumber = "+9299999999";
  const message = "Hello, I have a question!";

  const generateWhatsAppLink = () => {
    return `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
  };

  return (
    <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
      <div className="whatsapp-container">
        <WhatsAppIcon size={36} className="whatsapp-icon" /> 
        <span className="notification-badge">1</span>
      </div>
    </a>
  );
};

export default WhatsAppLogo;