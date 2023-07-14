"use client";
import axios, { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";
import { GetServerSideProps, GetStaticProps } from "next";
import { serializeResponse } from "../../lib/serializeResponse";

type Product = {
  id: string;
  title: string;
};

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

/* Esto se carga en el navegador .... */
export default function Productosssr() {
  const [{ data, loading, error }, refetch] = useAxios<ProductsResponse>({
    baseURL: "https://dummyjson.com",
    url: `/products?limit=10&select=title,pric`,
  });

  return (
    <div>
      <h1>Productos SSR</h1>
      <button onClick={() => refetch()}>Cargar Productos</button>
      {loading && <p>cargando...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </div>
  );
}

/* Esto se carga en el Back... */

export const getServerSideProps: GetStaticProps = async () => {
  const config: AxiosRequestConfig = {
    baseURL: "https://dummyjson.com",
    url: `/products?limit=10&select=title,pric`,
  };

  const response = await axios(config);

  return {
    props: {
      __CACHE__: [serializeResponse(config, response)],
    },
  };
};
