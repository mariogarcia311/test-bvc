"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCategory } from "@/types/Product";

export const useCategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleCategoryChange = (category: ProductCategory | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`/?${params.toString()}`);
  };

  return {
    currentCategory,
    handleCategoryChange,
  };
};
