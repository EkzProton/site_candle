import './CatalogSection.css';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartAtom } from '../../../state/atoms/cartAtom';

export const CatalogSection = (): JSX.Element => {

  const [items, setItems] = useState<{ id: number, image: string, price: number, composition: string }[]>([]);
  const [cartState, setCartState] = useRecoilState(cartAtom);

  useEffect(() => {
    fetch('http://localhost:3000/data/products.json')
      .then(products => products.json())
      .then(
        (result) => {
          setItems(result);
        }
      );

  }, []);

  const handlerCartAdd = (id: number) => {
    setCartState((prevState) => {
      const temp = JSON.parse(JSON.stringify(prevState));
      const cartIndex = temp.findIndex((item: { id: number; }) => item.id === id);

      if (temp[cartIndex]) {
        temp[cartIndex]['quantity'] += 1;
      } else {
        temp.push({ id, quantity: 1 });
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
            <div className="price">Цена: {product.price} р.</div>
          </div>
          <div className="add">
            <button onClick={() => handlerCartAdd(product.id)}>
              В корзину {cartState[cartIndex] ? cartState[cartIndex].quantity : ''}
            </button>
          </div>
        </div>
      </div>);
    })
  ), [items, cartState]);

  return (
    <div className="catalog_section">
      <div className="content">
        <div className="carousel">
          {memoProducts}
        </div>
      </div>
    </div>
  );
};