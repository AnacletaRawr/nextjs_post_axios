"use client";
import useAxios from "axios-hooks";

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

export default function Productos() {
  const [{ data, loading, error }, refetch] = useAxios<ProductsResponse>({
    baseURL: "https://dummyjson.com",
    url: `/products?limit=10&select=title,pric`,
  });

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={() => refetch()}>Cargar Productos</button>
      {loading && <p>cargando...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </div>
  );
}
