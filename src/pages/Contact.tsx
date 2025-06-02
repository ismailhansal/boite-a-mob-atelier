
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 entrance-fade">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto entrance-fade-delayed">
              Vous avez un projet ? Une question ? Notre équipe est là pour vous accompagner 
              dans la création de votre événement d'exception.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="entrance-fade">
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Parlez-nous de votre projet</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01 23 45 67 89"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez-nous votre projet, vos besoins, la date de votre événement..."
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="entrance-fade-delayed">
              <div className="space-y-8">
                <Card className="shadow-lg border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-2">Notre showroom</h3>
                        <p className="text-muted-foreground">
                          123 Avenue des Champs-Élysées<br />
                          75008 Paris, France
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-2">Contactez-nous</h3>
                        <p className="text-muted-foreground mb-2">
                          Téléphone : +33 1 23 45 67 89<br />
                          Email : contact@boiteamob.fr
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Du lundi au vendredi : 9h - 18h<br />
                          Samedi : 10h - 16h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-muted/30 p-8 rounded-lg">
                  <h3 className="font-display text-xl font-semibold mb-4 text-primary">
                    Besoin d'un devis personnalisé ?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Notre équipe se déplace gratuitement dans un rayon de 50km autour de Paris 
                    pour étudier votre projet et vous proposer des solutions sur mesure.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="tel:+33123456789">Appelez-nous maintenant</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
