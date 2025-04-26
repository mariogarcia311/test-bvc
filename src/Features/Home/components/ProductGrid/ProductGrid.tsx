"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types/Product";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filteredProducts = useMemo(
    () =>
      categoryFilter
        ? products.filter((product) => product.category === categoryFilter)
        : products,
    [products, categoryFilter]
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">
          No se encontraron productos
        </h2>
        <p className="text-muted-foreground">
          No hay productos disponibles en la categoría seleccionada.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
