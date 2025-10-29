import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Icon name="Volleyball" size={32} className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VolleyPro
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              Каталог
            </Link>
            <Link 
              to="/delivery" 
              className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              Доставка
            </Link>
            <Link 
              to="/contacts" 
              className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              Контакты
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="relative hover:scale-110 transition-transform">
              <Icon name="ShoppingCart" size={24} className="text-foreground" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;