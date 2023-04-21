import React, { useEffect, useMemo, useState } from 'react';
import Banner from '../components/Banner';
import Product from '../components/Product';
import { useLoaderData } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const Home = () => {
  const [products, setProducts] = useState([])
  const productData = useLoaderData();
  useEffect(() => {
    setProducts(productData.data)
  },[productData])
  return (
    <div>
      <Banner />
      <Product products={ products} />
    </div>
  );
};

export default Home;
