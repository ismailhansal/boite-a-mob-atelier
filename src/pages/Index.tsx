
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
      
      {/* Brand Promise Section */}
      <section className="py-24 px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 entrance-fade">
            Une approche sur mesure
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 entrance-fade-delayed">
            Chaque événement est unique. C'est pourquoi nous vous accompagnons de la conception à la réalisation, 
            en vous proposant des solutions personnalisées qui reflètent votre vision et subliment vos espaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="entrance-fade">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-display text-xl font-semibold mb-3">Design d'exception</h3>
              <p className="text-muted-foreground text-sm">
                Mobilier sélectionné pour son caractère unique et sa qualité remarquable
              </p>
            </div>
            <div className="entrance-fade-delayed">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-display text-xl font-semibold mb-3">Service complet</h3>
              <p className="text-muted-foreground text-sm">
                Livraison, installation et styling pour une expérience sans stress
              </p>
            </div>
            <div className="entrance-fade-slow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-display text-xl font-semibold mb-3">Événements mémorables</h3>
              <p className="text-muted-foreground text-sm">
                Des moments d'exception qui marquent les esprits de vos invités
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="px-8 py-3">
            <Link to="/about">Découvrir notre histoire</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
