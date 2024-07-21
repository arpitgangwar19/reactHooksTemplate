import { useState } from 'react';
import './App.css';
import DemoForBreadCrumbs from './react-concepts/breadcrumbs-example/DemoForBreadCrumbs';


import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Link,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import ReactHooks from './ReactHooks';
import ProductListing from './react-concepts/breadcrumbs-example/ProductListing';
import ProductDetail from './react-concepts/breadcrumbs-example/ProductDetails';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="/">helloo</Link>
        </div>
      ),
    },
    {
      path: "/breadcrumbsexmaple",
      element: <DemoForBreadCrumbs/>,
    },
    {
      path: "/products",
      element: <ProductListing/>,
    },
    {
      path: "/products/:id",
      element: <ProductDetail/>,
    },
    {
      path: "/reactHooks",
      element: <ReactHooks/>,
    },
  ]);
  

  return (
   <>
    <RouterProvider router={router} />
    </>

    
  );


}

export default App;
