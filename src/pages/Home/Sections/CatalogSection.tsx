import './CatalogSection.css';
import { useMemo} from 'react';

const products = [
  { id: 1, image: './images/candle.png', price: 'Цена: 1000 р.', composition: 'Состав: COCONUT' },
  { id: 2, image: './images/candle.png', price: 'Цена: 1500 р.', composition: 'Состав: Малина' },
  { id: 3, image: './images/candle.png', price: 'Цена: 800 р.', composition: 'Состав: Каннабис и вишня' },
  { id: 4, image: './images/candle.png', price: 'Цена: 400 р.', composition: 'Состав: Дерево' },
  { id: 5, image: './images/candle.png', price: 'Цена: 2000 р.', composition: 'Состав: Хвоя и угли' }
];
export const CatalogSection = (): JSX.Element => {
  const memoProducts = useMemo(() => (
    products.map((product) => (
      <div key={product.id} className="card">
        <div className="image">
          <img src={product.image} alt=""/>
        </div>
        <div className="data">
          <div className="information">
            <div className="composition">{product.composition}</div>
            <div className="price">{product.price}</div>
          </div>
          <div className="add">
            <button key={product.id} >В корзину</button>
          </div>
        </div>
      </div>
    ))
  ), []);

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