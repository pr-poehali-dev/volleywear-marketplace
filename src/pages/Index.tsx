import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: 'shoes' | 'apparel';
  brand: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
  bestseller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wave Lightning Z8',
    category: 'shoes',
    brand: 'Mizuno',
    price: 12990,
    rating: 5,
    image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/d8088ad5-b7ea-40f2-baa9-8e7ba280fbbd.jpg',
    features: ['Mizuno Wave', 'XG Rubber', 'Вес 280г'],
    bestseller: true
  },
  {
    id: 2,
    name: 'Sky Elite FF 3',
    category: 'shoes',
    brand: 'Asics',
    price: 14990,
    rating: 5,
    image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/d8088ad5-b7ea-40f2-baa9-8e7ba280fbbd.jpg',
    features: ['FlyteFoam', 'Trusstic System', 'Вес 320г']
  },
  {
    id: 3,
    name: 'Волейбольная форма Pro',
    category: 'apparel',
    brand: 'Mizuno',
    price: 7990,
    rating: 5,
    image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/42fda88a-1796-4190-aba9-9a393d3688e1.jpg',
    features: ['Dri-FIT ткань', 'Сетчатые вставки', 'Эргономичный крой'],
    bestseller: true
  },
  {
    id: 4,
    name: 'Court FF 3',
    category: 'shoes',
    brand: 'Asics',
    price: 11990,
    rating: 4,
    image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/d8088ad5-b7ea-40f2-baa9-8e7ba280fbbd.jpg',
    features: ['FlyteFoam Propel', 'Twist Gel', 'Вес 310г']
  },
  {
    id: 5,
    name: 'Игровая футболка Elite',
    category: 'apparel',
    brand: 'Nike',
    price: 4990,
    rating: 5,
    image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/42fda88a-1796-4190-aba9-9a393d3688e1.jpg',
    features: ['Nike Dry', 'Легкая ткань', 'Антибактериальная обработка']
  },
  {
    id: 6,
    name: 'Профессиональные шорты',
    category: 'apparel',
    brand: 'Mizuno',
    price: 3990,
    rating: 4,
    image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/42fda88a-1796-4190-aba9-9a393d3688e1.jpg',
    features: ['Эластичная ткань', 'Влагоотводящая', 'Удобная посадка']
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<'hero' | 'catalog' | 'delivery' | 'contacts'>('hero');
  const [filter, setFilter] = useState<'all' | 'shoes' | 'apparel'>('all');

  const scrollToSection = (section: 'hero' | 'catalog' | 'delivery' | 'contacts') => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Volleyball" size={32} className="text-primary" />
            <span className="text-2xl font-bold">VolleyShop</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Каталог
            </button>
            <button 
              onClick={() => scrollToSection('delivery')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Доставка
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Контакты
            </button>
          </nav>

          <Button size="sm" className="gap-2">
            <Icon name="ShoppingCart" size={18} />
            Корзина
          </Button>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="w-fit text-sm px-4 py-1.5">
                🏐 Профессиональная экипировка
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Лучшая волейбольная
                <span className="text-primary block">экипировка</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Обувь и одежда от мировых брендов Mizuno, Asics, Nike. 
                Проверенное качество для профессионалов и любителей.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-lg h-14 px-8"
                  onClick={() => scrollToSection('catalog')}
                >
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 px-8"
                  onClick={() => scrollToSection('contacts')}
                >
                  Связаться с нами
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Товаров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/8345a8e8-87a3-4fdc-ae5c-ca6382d2afc9.jpg"
                alt="Volleyball player"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">Каталог товаров</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранная экипировка для максимальной производительности на площадке
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className="gap-2"
            >
              <Icon name="Grid3x3" size={18} />
              Всё
            </Button>
            <Button 
              variant={filter === 'shoes' ? 'default' : 'outline'}
              onClick={() => setFilter('shoes')}
              className="gap-2"
            >
              <Icon name="Footprints" size={18} />
              Обувь
            </Button>
            <Button 
              variant={filter === 'apparel' ? 'default' : 'outline'}
              onClick={() => setFilter('apparel')}
              className="gap-2"
            >
              <Icon name="Shirt" size={18} />
              Одежда
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-muted/50">
                  {product.bestseller && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary">
                      🔥 Хит продаж
                    </Badge>
                  )}
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.brand}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="fill-primary text-primary" />
                      <span className="text-sm font-semibold">{product.rating}.0</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>
                    {product.features.join(' • ')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{product.price.toLocaleString('ru-RU')}</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                </CardContent>
                
                <CardFooter className="gap-2">
                  <Button className="flex-1 gap-2">
                    <Icon name="ShoppingCart" size={18} />
                    В корзину
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Доставка и оплата</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Быстрая доставка по всей России и удобные способы оплаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставка по Москве за 1-2 дня, по России 3-7 дней</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Любой способ оплаты</h3>
              <p className="text-muted-foreground">Картой онлайн, наличными или при получении</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Бесплатно от 5000₽</h3>
              <p className="text-muted-foreground">При заказе от 5000₽ доставка бесплатная</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="RefreshCw" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Возврат 14 дней</h3>
              <p className="text-muted-foreground">Легкий возврат и обмен товара в течение 14 дней</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">
                  Готовы ответить на любые вопросы и помочь с выбором экипировки
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@volleyshop.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@volleyshop.ru
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      Москва, ул. Спортивная, д. 10<br />
                      Пн-Пт: 10:00 - 20:00, Сб-Вс: 11:00 - 19:00
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Мессенджеры</h3>
                    <div className="flex gap-3 mt-2">
                      <Button variant="outline" size="icon">
                        <Icon name="Send" size={20} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="MessageSquare" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Volleyball" size={28} className="text-primary" />
                <span className="text-xl font-bold">VolleyShop</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучшая волейбольная экипировка от мировых брендов
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Обувь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Одежда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мячи</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@volleyshop.ru</li>
                <li>Москва, ул. Спортивная, 10</li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 VolleyShop. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
