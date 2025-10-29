import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Trophy" className="text-primary" size={32} />
            <span className="text-2xl font-bold">VolleyPro</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary transition-colors font-semibold">
              Главная
            </Link>
            <Link to="/catalog" className="hover:text-primary transition-colors font-semibold">
              Каталог
            </Link>
            <Link to="/delivery" className="hover:text-primary transition-colors font-semibold">
              Доставка
            </Link>
            <Link to="/contacts" className="hover:text-primary transition-colors font-semibold">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hover:text-primary transition-colors">
              <Icon name="Search" size={24} />
            </button>
            <button className="hover:text-primary transition-colors">
              <Icon name="ShoppingCart" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
