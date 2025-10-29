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
      price: '15 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/53b5d5b1-5af0-4af9-9c5a-e589308f9220.jpg',
      description: 'Топ 2025! FlyteFoam амортизация, TRUSSTIC стабильность',
      isNew: true
    },
    {
      id: 2,
      name: 'Mizuno Wave Lightning Neo 2',
      category: 'Обувь',
      price: '14 490 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/53b5d5b1-5af0-4af9-9c5a-e589308f9220.jpg',
      description: 'Легчайшая модель с технологией MIZUNO ENERZY',
      isNew: true
    },
    {
      id: 3,
      name: 'Nike Zoom HyperAce 3',
      category: 'Обувь',
      price: '12 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/53b5d5b1-5af0-4af9-9c5a-e589308f9220.jpg',
      description: 'Проверенная классика с улучшенным сцеплением',
      isNew: false
    },
    {
      id: 4,
      name: 'Adidas Crazyflight Mid',
      category: 'Обувь',
      price: '13 290 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/53b5d5b1-5af0-4af9-9c5a-e589308f9220.jpg',
      description: 'Высокая поддержка голеностопа + технология Boost',
      isNew: true
    },
    {
      id: 5,
      name: 'Under Armour Highlight Ace',
      category: 'Обувь',
      price: '11 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/53b5d5b1-5af0-4af9-9c5a-e589308f9220.jpg',
      description: 'Инновационная подошва для прыжков',
      isNew: true
    },
    {
      id: 6,
      name: 'Комплект формы Nike Dri-FIT',
      category: 'Одежда',
      price: '8 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/1fe09161-ed01-4bf7-ae84-e40d3457817a.jpg',
      description: 'Майка + шорты с отводом влаги',
      isNew: false
    },
    {
      id: 7,
      name: 'Форма Mizuno Premium',
      category: 'Одежда',
      price: '9 490 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/1fe09161-ed01-4bf7-ae84-e40d3457817a.jpg',
      description: 'Профессиональная форма с Ice Touch технологией',
      isNew: true
    },
    {
      id: 8,
      name: 'Майка ASICS Gel-Cool',
      category: 'Одежда',
      price: '3 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/1fe09161-ed01-4bf7-ae84-e40d3457817a.jpg',
      description: 'Охлаждающая технология для жарких залов',
      isNew: true
    },
    {
      id: 9,
      name: 'Шорты Adidas Court',
      category: 'Одежда',
      price: '3 490 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/1fe09161-ed01-4bf7-ae84-e40d3457817a.jpg',
      description: 'Эластичные шорты с технологией Climalite',
      isNew: false
    },
    {
      id: 10,
      name: 'Наколенники McDavid Hex',
      category: 'Аксессуары',
      price: '2 990 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/6056fd56-44e8-4ab2-841d-5faddf6c57ca.jpg',
      description: 'Защита с гексагональной структурой HEX',
      isNew: true
    },
    {
      id: 11,
      name: 'Носки Mizuno Comfort',
      category: 'Аксессуары',
      price: '890 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/6056fd56-44e8-4ab2-841d-5faddf6c57ca.jpg',
      description: 'Компрессионные носки с поддержкой свода',
      isNew: false
    },
    {
      id: 12,
      name: 'Напульсники Nike Swoosh',
      category: 'Аксессуары',
      price: '590 ₽',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/6056fd56-44e8-4ab2-841d-5faddf6c57ca.jpg',
      description: 'Классические впитывающие напульсники',
      isNew: false
    }
  ];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Каталог 2025</h1>
          <p className="text-muted-foreground text-xl">Лучшая экипировка от Nike, ASICS, Mizuno, Adidas, Under Armour</p>
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