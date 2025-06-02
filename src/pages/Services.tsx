
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Palette, Settings, Clock, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Truck,
    title: 'Livraison et installation',
    description: 'Service de livraison professionnel avec installation soignée de votre mobilier.',
    features: ['Livraison sécurisée', 'Installation professionnelle', 'Remontage sur site']
  },
  {
    icon: Palette,
    title: 'Conseil en styling',
    description: 'Notre équipe de stylistes vous accompagne dans la création d\'ambiances uniques.',
    features: ['Consultation personnalisée', 'Planches d\'ambiance', 'Suivi projet']
  },
  {
    icon: Settings,
    title: 'Solutions techniques',
    description: 'Gestion complète des aspects techniques : éclairage, sonorisation, aménagement.',
    features: ['Éclairage d\'ambiance', 'Solutions audio', 'Aménagement sur mesure']
  }
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Échange autour de votre projet, vos besoins et votre vision.'
  },
  {
    step: '02',
    title: 'Proposition',
    description: 'Sélection personnalisée et devis détaillé sous 48h.'
  },
  {
    step: '03',
    title: 'Préparation',
    description: 'Préparation minutieuse du mobilier et coordination logistique.'
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Livraison, installation et mise en scène de votre événement.'
  },
  {
    step: '05',
    title: 'Récupération',
    description: 'Démontage et récupération du matériel en fin d\'événement.'
  }
];

const guarantees = [
  {
    icon: Clock,
    title: 'Ponctualité garantie',
    description: 'Respect strict des horaires convenus pour vos événements.'
  },
  {
    icon: Shield,
    title: 'Assurance complète',
    description: 'Tous nos mobiliers sont assurés contre les dommages.'
  },
  {
    icon: HeartHandshake,
    title: 'Service personnalisé',
    description: 'Un interlocuteur dédié pour chaque projet.'
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 entrance-fade">
              Nos services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed entrance-fade-delayed">
              Un accompagnement complet pour transformer vos événements en expériences inoubliables. 
              De la conception à la réalisation, nous mettons notre expertise à votre service.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 px-6 lg:px-8 bg-accent/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-16 entrance-fade">
              Notre expertise à votre service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 entrance-fade"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="mr-2 mb-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-16 entrance-fade">
              Notre processus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div 
                  key={step.step} 
                  className="text-center entrance-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent"></div>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-12 entrance-fade">
              Nos engagements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <div 
                  key={guarantee.title} 
                  className="text-center entrance-fade"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{guarantee.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6 entrance-fade">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-lg mb-8 opacity-90 entrance-fade-delayed">
              Contactez notre équipe pour une consultation personnalisée et découvrez comment nous 
              pouvons transformer votre vision en réalité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center entrance-fade-delayed">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Demander un devis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/catalog">Voir le catalogue</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
