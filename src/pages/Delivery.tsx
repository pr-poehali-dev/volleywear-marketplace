import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Доставка и оплата</h1>
          <p className="text-muted-foreground text-xl">Быстрая доставка по всей России</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Способы доставки</h2>
              
              <div className="grid gap-6">
                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Truck" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Курьерская доставка</h3>
                      <p className="text-muted-foreground mb-3">
                        Доставка курьером до двери по Москве и Санкт-Петербургу
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Срок доставки: 1-2 дня</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Стоимость: 350 ₽ (бесплатно от 5000 ₽)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Package" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Пункты выдачи СДЭК</h3>
                      <p className="text-muted-foreground mb-3">
                        Самовывоз из пунктов выдачи по всей России
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Срок доставки: 2-5 дней</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Стоимость: от 250 ₽</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MapPin" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Почта России</h3>
                      <p className="text-muted-foreground mb-3">
                        Доставка в любой населенный пункт России
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Срок доставки: 5-14 дней</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>Стоимость: от 300 ₽</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Способы оплаты</h2>
              
              <div className="grid gap-6">
                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="CreditCard" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Банковской картой онлайн</h3>
                      <p className="text-muted-foreground">
                        Принимаем карты Visa, MasterCard, МИР. Безопасная оплата через защищенное соединение.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Wallet" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Наличными при получении</h3>
                      <p className="text-muted-foreground">
                        Оплата наличными курьеру или в пункте выдачи при получении заказа.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Building2" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Для юридических лиц</h3>
                      <p className="text-muted-foreground">
                        Безналичный расчет по счету с НДС. Работаем с организациями.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Обмен и возврат</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Вы можете вернуть или обменять товар в течение 14 дней с момента получения.</p>
                <p>Условия возврата:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Товар не был в использовании</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Сохранены все ярлыки и заводская упаковка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Есть товарный чек или накладная</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Delivery;