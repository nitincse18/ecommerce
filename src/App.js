import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Header from './components/Header';


const appRouter = createBrowserRouter([
  
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <ProductList />
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
