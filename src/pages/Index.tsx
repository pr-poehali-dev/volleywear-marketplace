import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Asics Gel-Rocket 11',
      category: 'Обувь',
      price: '7 990',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/6934cd00-ade6-45c6-9d0f-178df2f4f61e.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Mizuno Wave Momentum 3',
      category: 'Обувь',
      price: '9 490',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/6934cd00-ade6-45c6-9d0f-178df2f4f61e.jpg',
      badge: 'Профи выбор'
    },
    {
      id: 3,
      name: 'Форма Nike Aeroswift',
      category: 'Одежда',
      price: '5 990',
      image: 'https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/7e8d72f4-9b6f-4170-bb79-0d8671a9fe79.jpg',
      badge: 'Новинка 2025'
    }
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Оригинальная продукция',
      description: 'Работаем только с официальными поставщиками'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставка по всей России за 2-5 дней'
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на всю продукцию'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи для консультаций'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/45eee7c8-bd47-45a6-a88a-94c3eac2b1de/files/3751ce88-ef52-4bc8-9e84-ddd04a1bfecd.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Экипировка для профи
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Лучшая волейбольная обувь и одежда от мировых брендов: Asics, Mizuno, Nike, Adidas
              </p>
              <Link to="/catalog">
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Топ продаж</h2>
              <p className="text-xl text-muted-foreground">
                Самые популярные модели профессиональной экипировки
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                    <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                      <Button className="group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/catalog">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Посмотреть все товары
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Почему выбирают VolleyPro?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Мы специализируемся на профессиональной экипировке для волейбола с 2015 года. 
                Работаем с ведущими брендами: Nike, Adidas, ASICS, Mizuno.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">лет на рынке</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-muted-foreground">довольных клиентов</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">товаров в наличии</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;