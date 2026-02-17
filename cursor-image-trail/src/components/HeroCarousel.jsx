import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight, Star, Shield, Zap, Battery, Cpu, Wifi } from 'lucide-react';


const slides = [
  {
    id: "surveillance-01",
    tagline: "AI-Powered Security",
    title: "Intelligent Surveillance Systems",
    description: "Enterprise-grade protection with 4K resolution, facial recognition, and real-time threat detection. Secure your business with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=1200",
    primaryCta: "View Collection",
    secondaryCta: "Book Demo",
    badge: "Best Seller",
    rating: 4.8,
    features: [
      { icon: Shield, text: "Military-Grade Encryption" },
      { icon: Zap, text: "Real-Time AI Analytics" },
      { icon: Battery, text: "24/7 Backup Power" }
    ],
    price: "From $299",
    discount: "Save 20%"
  },
  {
    id: "computing-02",
    tagline: "Elite Performance",
    title: "Professional Workstations",
    description: "Engineered for creators and developers. Featuring the latest processors, dedicated graphics, and all-day battery life for ultimate productivity.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
    primaryCta: "Shop Now",
    secondaryCta: "Customize",
    badge: "New Arrival",
    rating: 4.9,
    features: [
      { icon: Cpu, text: "Intel Core i9 Processor" },
      { icon: Battery, text: "18-Hour Battery Life" },
      { icon: Wifi, text: "WiFi 6E & 5G Ready" }
    ],
    price: "From $1,299",
    discount: "Free 2-Year Warranty"
  },
  {
    id: "smart-home-03",
    tagline: "Connected Living",
    title: "Smart Home Ecosystem",
    description: "Transform your living space with seamless automation. Voice-controlled lighting, security, and entertainment systems that work together.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
    primaryCta: "Explore Ecosystem",
    secondaryCta: "Installation Guide",
    badge: "Smart Bundle",
    rating: 4.7,
    features: [
      { icon: Wifi, text: "Whole-Home Coverage" },
      { icon: Shield, text: "Privacy Protected" },
      { icon: Zap, text: "Energy Efficient" }
    ],
    price: "From $499",
    discount: "Bundle & Save 30%"
  }
];


const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef(null);

  const navigate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === 'next') {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    // Animate slide change
    if (slideRef.current) {
      gsap.to(slideRef.current, {
        opacity: 0.8,
        scale: 1.02,
        duration: 0.3,
        onComplete: () => {
          gsap.to(slideRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            onComplete: () => setIsAnimating(false)
          });
        }
      });
    }
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        navigate('next');
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-auto md:h-full">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={slideRef}
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.05)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-auto md:h-full  pt-20 lg:pt-32 pb-32">
        <div className="sectionlayout w-full space-y-1 md:space-y-4">
          {/* Badge & Rating */}
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="p-2 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg w-fit">
              {slide.badge}
            </span>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={`star-${i}-${slide.id}`} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm flex gap-2">
                {slide.rating} <Star size={16} className="fill-yellow-400 text-yellow-400" /> • 2.4K+ Reviews
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-xs md:text-sm">
              {slide.tagline}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-purple-100 bg-clip-text text-transparent">
              {slide.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-3xl leading-relaxed">
            {slide.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 max-w-3xl">
            {slide.features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={`feature-${slide.id}-${idx}`}
                  className="flex items-center gap-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <span className="text-white text-sm md:text-base font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* Pricing & CTA */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 pt-4 md:pt-8">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-white">{slide.price}</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30 w-fit">
                  {slide.discount}
                </span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Free shipping • 30-day returns</p>
            </div>

            <div className="flex  gap-2 md:gap-4 w-full lg:w-auto">
              <button className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg md:rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02]">
                <ShoppingBag size={18} className="md:size-5" />
                <span className="text-sm md:text-base">{slide.primaryCta}</span>
                <ArrowRight size={16} className="md:size-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white font-medium rounded-lg md:rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                <span className="text-sm md:text-base">{slide.secondaryCta}</span>
                <ArrowRight size={16} className="md:size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-40">
        {slides.map((_, idx) => (
          <button
            key={`indicator-105-${idx}`}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 md:h-1 rounded-full transition-all duration-300 ${
              idx === current 
                ? 'w-8 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500' 
                : 'w-4 md:w-4 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-4 md:right-6 bottom-15 md:bottom-10 flex gap-2 md:gap-3 z-40">
        <button
          onClick={() => navigate('prev')}
          disabled={isAnimating}
          className="group p-3 md:p-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="md:size-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => navigate('next')}
          disabled={isAnimating}
          className="group p-3 md:p-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="md:size-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Floating Trust Badges */}
      <div className="absolute right-4 md:right-16 top-24 md:top-25 hidden lg:flex flex-col gap-3 md:gap-4 z-40">
        <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <Shield className="text-green-400" size={16} />
          <span className="text-white text-xs md:text-sm">Trusted by 10K+ Businesses</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <Zap className="text-yellow-400" size={16} />
          <span className="text-white text-xs md:text-sm">24/7 Technical Support</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear"
          style={{ 
            width: `${((current + 1) / slides.length) * 100}%`,
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;

