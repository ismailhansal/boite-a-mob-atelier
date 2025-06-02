
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 entrance-fade">
              Notre histoire
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed entrance-fade-delayed">
              Depuis plus de 10 ans, Boite à Mob révolutionne l'art de recevoir en proposant 
              du mobilier événementiel d'exception pour vos moments les plus précieux.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6 lg:px-8 bg-accent/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="entrance-fade">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop"
                  alt="Notre showroom"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="entrance-fade-delayed">
                <h2 className="font-display text-3xl font-bold text-primary mb-6">
                  Une passion pour l'excellence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Née de la rencontre entre design et fonctionnalité, Boite à Mob s'est imposée 
                  comme la référence en matière de location de mobilier événementiel haut de gamme. 
                  Notre équipe de passionnés sélectionne avec soin chaque pièce de notre collection.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  De l'intimité d'un dîner privé à l'ampleur d'un gala corporate, nous créons 
                  des atmosphères uniques qui transcendent l'ordinaire et révèlent l'extraordinaire.
                </p>
                <Button asChild>
                  <Link to="/catalog">Découvrir nos créations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-16 entrance-fade">
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center entrance-fade">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous ne transigeons jamais sur la qualité. Chaque pièce est choisie pour sa beauté, 
                  sa fonctionnalité et son caractère exceptionnel.
                </p>
              </div>
              <div className="text-center entrance-fade-delayed">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Personnalisation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque événement est unique. Nous créons des solutions sur mesure qui reflètent 
                  votre vision et dépassent vos attentes.
                </p>
              </div>
              <div className="text-center entrance-fade-slow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Toujours à l'avant-garde des tendances, nous renouvelons constamment notre collection 
                  pour vous offrir le meilleur du design contemporain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6 entrance-fade">
              Prêt à créer l'événement de vos rêves ?
            </h2>
            <p className="text-lg mb-8 opacity-90 entrance-fade-delayed">
              Contactez notre équipe pour discuter de votre projet et découvrir comment nous pouvons 
              transformer votre vision en réalité.
            </p>
            <Button 
              asChild 
              variant="secondary" 
              size="lg"
              className="entrance-fade-delayed"
            >
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
