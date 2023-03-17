import './Menu.css';
import { useRecoilState } from 'recoil';
import { cartAtom } from '../../state/atoms/cartAtom';
import { useEffect, useMemo, useState } from 'react';

type MenuProps = {
  propOpen: boolean;
  propSetOpen: (value: boolean) => void;
};
export const Menu = ({ propOpen, propSetOpen }: MenuProps) => {
  const [items, setItems] = useState<{ id: number, image: string, price: number, composition: string }[]>([]);
  const [cartState, setCartState] = useRecoilState(cartAtom);

  useEffect(() => {
    fetch('http://localhost:3000/data/products.json')
      .then(products => products.json())
      .then(
        (result) => {
          setItems(result.filter((product: { id: number; }) => {
            const cartIndex = cartState.findIndex((item: { id: number; }) => item.id === product.id);

            return cartIndex > -1;
          }));
        }
      );
  }, [cartState]);

  const handlerCartDelete = (id: number) => {
    setCartState((prevState) => {
      const temp = JSON.parse(JSON.stringify(prevState));
      const cartIndex = temp.findIndex((item: { id: number; }) => item.id === id);

      if (temp[cartIndex]) {
        if (temp[cartIndex]['quantity'] > 1) {
          temp[cartIndex]['quantity'] -= 1;
        } else {
          temp.splice(cartIndex, 1);
        }
      }

      localStorage.setItem('cart', JSON.stringify(temp));

      return temp;
    });
  };


  const memoProducts = useMemo(() => (
    items.map((product) => {
      const cartIndex = cartState.findIndex((item: { id: number; }) => item.id === product.id);

      return (<div key={product.id} className="card">
        <div className="image">
          <img src={product.image} alt=""/>
        </div>
        <div className="data">
          <div className="information">
            <div className="composition">{product.composition}</div>
            <div className="price">
              Цена: {product.price * cartState[cartIndex].quantity} р.
            </div>
            <div className="quantity"> Количество: {cartState[cartIndex].quantity}</div>
            <button className="deleteItem" onClick={() => handlerCartDelete(product.id)}> Удалить товар</button>
          </div>

        </div>
      </div>);
    })
  ), [items]);

  return (
    <div id="mainMenu" className={'mainMenu ' + (propOpen ? 'active' : '')}>
      <div className="Menu">
        <div className="Block">
          {memoProducts}
        </div>
        <div className="Buttons">
          <button className="clear" onClick={() => {
            setCartState([]);
          }}
          >
            Очистить
          </button>
          <button className="close" onClick={() => propSetOpen(!propOpen)}>
            Закрыть
          </button>
        </div>
      </div>
      <div className="fix_bug" onClick={() => propSetOpen(!propOpen)}></div>
    </div>
  );
};