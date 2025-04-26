import { productsMock } from "@/lib/const/productsMock";
import { sleep } from "@/lib/helpers/sleep";
import { Product } from "@/types/Product";

export const getProductById = async (id: string): Promise<Product> => {
  await sleep(1000);

  const product = productsMock.find((p) => p.id === id);

  if (!product) {
    throw new Error(`Producto con ID ${id} no encontrado`);
  }

  return product;
};
