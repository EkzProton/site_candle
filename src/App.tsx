import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { Layout } from './components';
import { Cart, Home, Page404 } from './pages';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </>
  );
};