import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart';
import './ButtonMenu.css';

type ButtonMenuProps = {
  propOpen: boolean;
  propSetOpen: (value: boolean) => void;
};

export const ButtonMenu = ({ propOpen, propSetOpen }: ButtonMenuProps) => {
  return (
    <div id="button_menu" onClick={() => propSetOpen(!propOpen)}>
      <div className="action">
        <FiShoppingCart size="20"/>
        <span className="text">Корзина</span>
      </div>
    </div>
  );
};