
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Package, Image, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: 'Fauteuil Bergère Velours',
    category: 'seating',
    price: 150,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Table Ronde Marbre',
    category: 'tables',
    price: 200,
    status: 'rented',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400&auto=format&fit=crop'
  }
];

const mockGalleryItems = [
  {
    id: 1,
    title: 'Mariage Château de Versailles',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Lancement produit luxe',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop'
  }
];

const Admin = () => {
  const [products, setProducts] = useState(mockProducts);
  const [galleryItems, setGalleryItems] = useState(mockGalleryItems);
  const [activeTab, setActiveTab] = useState('products');
  const { toast } = useToast();

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'seating',
    price: '',
    description: '',
    image: ''
  });

  const [newGalleryItem, setNewGalleryItem] = useState({
    title: '',
    category: 'wedding',
    description: '',
    image: ''
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const product = {
      id: Date.now(),
      ...newProduct,
      price: Number(newProduct.price),
      status: 'available'
    };

    setProducts([...products, product]);
    setNewProduct({ name: '', category: 'seating', price: '', description: '', image: '' });
    
    toast({
      title: "Produit ajouté",
      description: "Le produit a été ajouté avec succès au catalogue."
    });
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Produit supprimé",
      description: "Le produit a été supprimé du catalogue."
    });
  };

  const handleAddGalleryItem = () => {
    if (!newGalleryItem.title || !newGalleryItem.image) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const item = {
      id: Date.now(),
      ...newGalleryItem
    };

    setGalleryItems([...galleryItems, item]);
    setNewGalleryItem({ title: '', category: 'wedding', description: '', image: '' });
    
    toast({
      title: "Élément ajouté",
      description: "L'élément a été ajouté à la galerie."
    });
  };

  const handleDeleteGalleryItem = (id: number) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
    toast({
      title: "Élément supprimé",
      description: "L'élément a été supprimé de la galerie."
    });
  };

  return (
    <Layout>
      <div className="min-h-screen py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Administration
            </h1>
            <p className="text-lg text-muted-foreground">
              Gérez votre catalogue, galerie et contenus du site web.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Produits</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
                <p className="text-xs text-muted-foreground">
                  {products.filter(p => p.status === 'available').length} disponibles
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Galerie</CardTitle>
                <Image className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{galleryItems.length}</div>
                <p className="text-xs text-muted-foreground">projets en vitrine</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Demandes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">cette semaine</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full md:w-auto grid-cols-2 mb-8">
              <TabsTrigger value="products">Produits</TabsTrigger>
              <TabsTrigger value="gallery">Galerie</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-6">
              {/* Add Product Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Ajouter un produit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Input
                      placeholder="Nom du produit"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    >
                      <option value="seating">Assises</option>
                      <option value="tables">Tables</option>
                      <option value="lighting">Éclairage</option>
                      <option value="accessories">Accessoires</option>
                    </select>
                    <Input
                      placeholder="Prix (€)"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <Button onClick={handleAddProduct}>Ajouter</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input
                      placeholder="URL de l'image"
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />
                    <Textarea
                      placeholder="Description du produit"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Products List */}
              <Card>
                <CardHeader>
                  <CardTitle>Catalogue produits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold">{product.name}</h3>
                            <Badge variant={product.status === 'available' ? 'default' : 'secondary'}>
                              {product.status === 'available' ? 'Disponible' : 'Loué'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{product.price}€</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              {/* Add Gallery Item Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Ajouter à la galerie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      placeholder="Titre du projet"
                      value={newGalleryItem.title}
                      onChange={(e) => setNewGalleryItem({...newGalleryItem, title: e.target.value})}
                    />
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={newGalleryItem.category}
                      onChange={(e) => setNewGalleryItem({...newGalleryItem, category: e.target.value})}
                    >
                      <option value="wedding">Mariages</option>
                      <option value="corporate">Corporate</option>
                      <option value="private">Événements privés</option>
                      <option value="fashion">Mode & Beauté</option>
                    </select>
                    <Button onClick={handleAddGalleryItem}>Ajouter</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input
                      placeholder="URL de l'image"
                      value={newGalleryItem.image}
                      onChange={(e) => setNewGalleryItem({...newGalleryItem, image: e.target.value})}
                    />
                    <Textarea
                      placeholder="Description du projet"
                      value={newGalleryItem.description}
                      onChange={(e) => setNewGalleryItem({...newGalleryItem, description: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Gallery Items List */}
              <Card>
                <CardHeader>
                  <CardTitle>Galerie projets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{item.category}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{item.category}</Badge>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleDeleteGalleryItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
