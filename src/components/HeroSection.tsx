
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://plus.unsplash.com/premium_photo-1661774784582-6bda780600bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 entrance-fade">
          L'expert du mobilier
          <br />
          <span className="text-accent">événementiel</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed entrance-fade-delayed">
          Créez des événements d'exception avec notre collection de mobilier haut de gamme. 
          De la conception à la réalisation, nous donnons vie à vos projets les plus ambitieux.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center entrance-fade-delayed">
          <Button 
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-accent transition-all duration-300 px-8 py-3 text-lg font-medium"
          >
            <Link to="/catalog">Découvrir le catalogue</Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white text-emerald-950 transition-all duration-300 px-8 py-3 text-lg font-medium"
          >
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
