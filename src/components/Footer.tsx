import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Trophy" className="text-primary" size={32} />
              <span className="text-2xl font-bold">VolleyPro</span>
            </div>
            <p className="text-gray-300">
              Профессиональная экипировка для волейбола
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="/catalog" className="text-gray-300 hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="/delivery" className="text-gray-300 hover:text-primary transition-colors">Доставка</a></li>
              <li><a href="/contacts" className="text-gray-300 hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@volleypro.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Соцсети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 VolleyPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
