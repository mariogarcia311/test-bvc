"use server";
import { productCategories } from "@/lib/const/categoryMock";
import { sleep } from "@/lib/helpers/sleep";
import { ProductCategory } from "@/types/Product";

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  await sleep(1000);
  return productCategories;
};
