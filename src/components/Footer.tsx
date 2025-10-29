import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Volleyball" size={28} className="text-primary" />
              <span className="text-xl font-bold">VolleyPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональная экипировка для волейболистов. Качество, проверенное чемпионами.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Каталог
              </Link>
              <Link to="/delivery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Доставка
              </Link>
              <Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Категории</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/catalog?category=shoes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Обувь
              </Link>
              <Link to="/catalog?category=apparel" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Одежда
              </Link>
              <Link to="/catalog?category=accessories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Аксессуары
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+79001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@volleypro.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                info@volleypro.ru
              </a>
              <div className="flex gap-3 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 VolleyPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
