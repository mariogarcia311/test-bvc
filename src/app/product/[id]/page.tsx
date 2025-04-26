import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/Button/Button";
import ProductView from "@/Features/Product/ProductView";

const ProductPage = () => {
  return (
    <main className="flex flex-col flex-1 h-full w-full ">
      <div className="container px-4 py-8 mx-auto h-full w-full">
        <Link href="/" className="inline-block mb-6">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            aria-label="Volver al catálogo"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </Button>
        </Link>
        <div className="flex flex-col  h-full w-full ">
          <ProductView />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
