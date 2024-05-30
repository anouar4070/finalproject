import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import Register from "./Components/Register/Register";

import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import NotFound from "./Components/NotFound/NotFound";
import Articles from "./Components/Articles/Articles";
import CounterContextProvider from "./Context/CounterContext.js";

let routers = createBrowserRouter([
  {path:'' , element: <Layout />, children: [
      {index:true , element: <Home />},
      {path: 'cart', element: <Cart />},
      {path: 'products', element: <Products />},
      {path: 'register', element: <Register />},
      {path: 'categories', element: <Categories />},
      {path: 'brands', element: <Brands />},
      {path: 'blog', element: <Articles />},
      {path: '*', element: <NotFound />}
  ]}
])


const App = () => {
  return (
    <CounterContextProvider>
   <RouterProvider router={routers}>

   </RouterProvider>
   </CounterContextProvider>
  );
};

export default App;


