"use server";
import { productsMock } from "@/lib/const/productsMock";
import { sleep } from "@/lib/helpers/sleep";
import { Product } from "@/types/Product";

export const getProducts = async (): Promise<Product[]> => {
  await sleep(1000);
  return productsMock;
};
