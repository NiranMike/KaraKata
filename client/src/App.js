import React, { useState, useEffect } from 'react';
import { productsData } from "./api/fetchData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import Loader from './components/Loader';
import { Suspense } from 'react';

// Define a component to render a loading indicator
const Loading = () => <Loader />;

// Define a layout component that shows a loading indicator
// for 5 seconds and then renders the page content
const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

// Define components to render different pages using lazy loading
const LoginPage = React.lazy(() => import('../src/pages/Login'));
const HomePage = React.lazy(() => import('../src/pages/Home'));
const CartPage = React.lazy(() => import('../src/pages/Cart'));
const ProductsPage = React.lazy(() => import('./components/Products'));

// Define a component to render an error message for no internet connection
export const Error = () => {
  return (
    <div>
      <h1>No Internet Connection</h1>
    </div>
  );
};

// Create a router with routes that use the Layout component
// and render different pages using lazy loading
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        ErrorBoundary: Error,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <ProductsPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  }
]);

// Render the app with the router provider
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
