  import React from 'react';
  import { productsData } from "./api/fetchData";
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import Cart from "./pages/Cart";
  import Home from "./pages/Home";
  import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration
  } from "react-router-dom";
import { Suspense } from 'react';
import Products from './components/Products';

const loading = () => (<div className="">
    <h1 className=' text-black'>Loading...</h1>
  </div>);

 export const Error = () =>{
    return (
      <div>
        <h1>No Internet Connection</h1>
      </div>
    )
  }
  const Layout = () => {
    return (
      <Suspense fallback={loading()}>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </Suspense>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          ErrorBoundary: Error,
          loader:productsData,
        },
        {
          path: "/product/:id",
          element:<Products />
        },
        {
          path: "/cart",
          element:<Cart />
        }
      ]
    }
  ])


  function App() {
    return (
      <RouterProvider router={router} /> 
    );
  }

  export default App;
