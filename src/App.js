import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/products',
        element: <ProductList />
      },
      {
        path: '/details',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={appRouter} >
        <Outlet />
        </RouterProvider>
    </Provider>
  );
}

export default App;
