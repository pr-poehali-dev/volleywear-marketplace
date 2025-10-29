import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Контакты</h1>
          <p className="text-muted-foreground text-xl">Мы всегда на связи — выбирайте удобный способ</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@volleypro.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Спортивная, д. 15</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Мессенджеры</h3>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                        <Icon name="MessageCircle" size={20} />
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                        <Icon name="Send" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <Icon name="Facebook" size={24} className="text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <Icon name="Youtube" size={24} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, чем мы можем вам помочь..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Как нас найти</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Здесь будет карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;