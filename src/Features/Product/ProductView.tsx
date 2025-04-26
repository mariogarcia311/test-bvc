"use client";
import LoadingSpinner from "@/components/LoaderSpinner/LoaderSpinner";
import ProductDetail from "@/Features/Product/components/ProductDetail/ProductDetail";
import { useProductById } from "@/hooks/useProductData";
import { useParams } from "next/navigation";
import React from "react";

const ProductView = () => {
  const params = useParams();
  const id = params.id as string;
  const { product, loading, error } = useProductById(id);

  if (loading)
    return (
      <div className="flex items-center justify-center flex-1 w-[100%]">
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="p-4">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductView;
