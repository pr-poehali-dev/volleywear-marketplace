import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Обувь', 'Одежда', 'Аксессуары'];

  const products = [
    {
      id: 1,
      name: 'ASICS Sky Elite FF 3',
      category: 'Обувь',
      price: '14 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/898bf3df-c070-4206-9723-e932af22660d.jpg',
      description: 'Топовая модель с FlyteFoam Blast+ и максимальной амортизацией',
      isNew: true
    },
    {
      id: 2,
      name: 'Mizuno Wave Lightning Z7',
      category: 'Обувь',
      price: '13 490 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/898bf3df-c070-4206-9723-e932af22660d.jpg',
      description: 'Легендарная серия с технологией Mizuno Wave',
      isNew: false
    },
    {
      id: 3,
      name: 'Nike Zoom HyperAce 2',
      category: 'Обувь',
      price: '11 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/898bf3df-c070-4206-9723-e932af22660d.jpg',
      description: 'Отличное сцепление и технология Zoom Air',
      isNew: true
    },
    {
      id: 4,
      name: 'Adidas Crazyflight Mid',
      category: 'Обувь',
      price: '12 490 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/898bf3df-c070-4206-9723-e932af22660d.jpg',
      description: 'Высокий верх для дополнительной поддержки стопы',
      isNew: false
    },
    {
      id: 5,
      name: 'Форма Mizuno Premium',
      category: 'Одежда',
      price: '6 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/ffb7fd8e-e495-4452-b1a6-f1dcdc87ef18.jpg',
      description: 'Профессиональная форма с технологией DryLite',
      isNew: false
    },
    {
      id: 6,
      name: 'Форма ASICS Pro',
      category: 'Одежда',
      price: '7 490 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/ffb7fd8e-e495-4452-b1a6-f1dcdc87ef18.jpg',
      description: 'Комплект с отводом влаги для максимального комфорта',
      isNew: true
    },
    {
      id: 7,
      name: 'Наколенники McDavid Hex',
      category: 'Аксессуары',
      price: '2 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/ffb7fd8e-e495-4452-b1a6-f1dcdc87ef18.jpg',
      description: 'Профессиональная защита с Hex технологией',
      isNew: false
    },
    {
      id: 8,
      name: 'Наколенники ASICS Basic',
      category: 'Аксессуары',
      price: '1 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/ffb7fd8e-e495-4452-b1a6-f1dcdc87ef18.jpg',
      description: 'Надежная защита по доступной цене',
      isNew: true
    }
  ];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Каталог товаров</h1>
          <p className="text-muted-foreground text-lg">Профессиональная экипировка для волейбола</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant="outline" size="sm">
                    <Icon name="ShoppingCart" size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
