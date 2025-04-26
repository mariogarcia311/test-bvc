"use client";

import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import { useProductsData } from "@/hooks/useProductsData";
import { Suspense } from "react";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import LoadingSpinner from "@/components/LoaderSpinner/LoaderSpinner";

const HomeView = () => {
  const { products, categories, loading, error } = useProductsData();

  if (loading)
    return (
      <div className="flex items-center justify-center flex-1 w-[100%]">
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-[100%]">
      <Suspense
        fallback={
          <div className="text-center py-10">Cargando categorías...</div>
        }
      >
        <CategoryFilter categories={categories} />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-center py-10">Cargando productos...</div>
        }
      >
        <ProductGrid products={products} />
      </Suspense>
    </div>
  );
};

export default HomeView;
