import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';


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
        }
      ]
    }
]);

function App() {
  return (
    <Provider store={store}>
    <div >
      <Header />
      {/* <Outlet /> */}
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
