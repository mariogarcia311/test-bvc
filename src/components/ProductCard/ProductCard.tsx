"use client";

import Link from "next/link";
import RiskIndicator from "../RiskIndicator/RiskIndicator";
import { Product } from "@/types/Product";
import {
  CardContent,
  CardHeader,
  DetailLabel,
  DetailValue,
  ProductDetail,
  ProductName,
  ProductType,
  StyledCard,
} from "./ProductCard.styled";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, type, category, interestRate, riskLevel } = product;

  return (
    <Link href={`/product/${id}`} aria-label={`Ver detalles de ${name}`}>
      <StyledCard>
        <CardHeader $category={category}>
          <ProductType>{type}</ProductType>
          <ProductName>{name}</ProductName>
        </CardHeader>

        <CardContent>
          <ProductDetail>
            <DetailLabel>Categoría</DetailLabel>
            <DetailValue>{category}</DetailValue>
          </ProductDetail>

          {interestRate !== undefined && (
            <ProductDetail>
              <DetailLabel>Tasa de interés</DetailLabel>
              <DetailValue>{interestRate}%</DetailValue>
            </ProductDetail>
          )}

          {riskLevel !== undefined && (
            <ProductDetail>
              <DetailLabel>Nivel de riesgo</DetailLabel>
              <RiskIndicator level={riskLevel} />
            </ProductDetail>
          )}
        </CardContent>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;
