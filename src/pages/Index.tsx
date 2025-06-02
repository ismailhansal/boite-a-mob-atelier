
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCategories />
      
      <section className="py-32 px-6 lg:px-8 bg-[#f7f5f2]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-900 mb-10 tracking-tight entrance-fade">
      Une approche sur mesure
    </h2>
    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-16 entrance-fade-delayed">
      Chaque événement est unique. Nous vous accompagnons de la conception à la réalisation,
      en vous proposant des solutions personnalisées qui reflètent votre vision.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      {/* Card 1 */}
      <div className="entrance-fade group">
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-800 group-hover:text-primary transition" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.91.94 6.91L12 17.77 6.06 21.1 7 14.19 2 9.27l6.91-1L12 2z" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-medium text-neutral-900 mb-3">
          Design d'exception
        </h3>
        <p className="text-sm text-neutral-600 max-w-xs mx-auto">
          Du mobilier au caractère unique, sélectionné pour son élégance et sa qualité remarquable.
        </p>
      </div>

      {/* Card 2 */}
      <div className="entrance-fade-delayed group">
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-800 group-hover:text-primary transition" viewBox="0 0 24 24">
            <path d="M3 13h2l1 2h13V7H6l-1 2H3v4z" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-medium text-neutral-900 mb-3">
          Service complet
        </h3>
        <p className="text-sm text-neutral-600 max-w-xs mx-auto">
          Livraison, installation et mise en scène pour une expérience sans compromis.
        </p>
      </div>

      {/* Card 3 */}
      <div className="entrance-fade-slow group">
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-800 group-hover:text-primary transition" viewBox="0 0 24 24">
            <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.414l1.414 1.414M17.95 17.95l1.414 1.414" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-medium text-neutral-900 mb-3">
          Événements mémorables
        </h3>
        <p className="text-sm text-neutral-600 max-w-xs mx-auto">
          Des ambiances sur-mesure qui laissent une impression inoubliable.
        </p>
      </div>
    </div>

    <button className="px-10 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-200">
      <a href="/about">Découvrir notre histoire</a>
    </button>
  </div>
</section>

    </Layout>
  );
};

export default Index;
