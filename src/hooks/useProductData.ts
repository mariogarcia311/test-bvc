"use client";
import { getProductById } from "@/app/actions/getProductById";
import { Product } from "@/types/Product";
import { useState, useEffect } from "react";

export const useProductById = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(id);
        setProduct(productData || null);
      } catch (err) {
        setError("No se pudo encontrar el producto");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  return { product, loading, error };
};
