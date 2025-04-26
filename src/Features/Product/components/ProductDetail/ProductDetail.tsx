"use client";

import RiskIndicator from "@/components/RiskIndicator/RiskIndicator";
import PerformanceChart from "../PerformanceChart/PerformanceChart";
import {
  BenefitItem,
  BenefitsList,
  ContactCard,
  ContactText,
  ContactTitle,
  DetailCard,
  DetailGrid,
  DetailLabel,
  DetailSection,
  DetailValue,
  ProductDescription,
  ProductHeader,
  ProductName,
  ProductType,
  SectionTitle,
  StyledBadge,
} from "./ProductDetail.styled";

import { Product } from "@/types/Product";
import Button from "@/components/Button/Button";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const {
    name,
    type,
    category,
    description,
    interestRate,
    riskLevel,
    minimumAmount,
    term,
    benefits,
    performanceData,
  } = product;

  return (
    <div>
      <ProductHeader $category={category}>
        <ProductType>{type}</ProductType>
        <ProductName>{name}</ProductName>
        <StyledBadge>{category}</StyledBadge>
        <ProductDescription>{description}</ProductDescription>
      </ProductHeader>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <DetailSection>
            <SectionTitle>Detalles del producto</SectionTitle>
            <DetailGrid>
              {interestRate !== undefined && (
                <DetailCard>
                  <DetailLabel>Tasa de interés</DetailLabel>
                  <DetailValue>{interestRate}%</DetailValue>
                </DetailCard>
              )}

              {riskLevel !== undefined && (
                <DetailCard>
                  <DetailLabel>Nivel de riesgo</DetailLabel>
                  <DetailValue>
                    <RiskIndicator level={riskLevel} showLabel />
                  </DetailValue>
                </DetailCard>
              )}

              {minimumAmount !== undefined && (
                <DetailCard>
                  <DetailLabel>Monto mínimo</DetailLabel>
                  <DetailValue>${minimumAmount.toLocaleString()}</DetailValue>
                </DetailCard>
              )}

              {term !== undefined && (
                <DetailCard>
                  <DetailLabel>Plazo</DetailLabel>
                  <DetailValue>{term}</DetailValue>
                </DetailCard>
              )}
            </DetailGrid>
          </DetailSection>

          {benefits && benefits.length > 0 && (
            <DetailSection>
              <SectionTitle>Beneficios</SectionTitle>
              <BenefitsList>
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index}>{benefit}</BenefitItem>
                ))}
              </BenefitsList>
            </DetailSection>
          )}

          {performanceData && performanceData.length > 0 && (
            <DetailSection>
              <SectionTitle>Rendimiento histórico</SectionTitle>
              <div
                className="h-64 mt-4"
                aria-label="Gráfica del rendimienot histórico"
              >
                <PerformanceChart data={performanceData} />
              </div>
            </DetailSection>
          )}
        </div>

        <div>
          <ContactCard>
            <ContactTitle>¿Interesado en este producto?</ContactTitle>
            <ContactText>
              Complete el formulario y uno de nuestros asesores se pondrá en
              contacto con usted.
            </ContactText>
            <Button
              className="w-full mb-3"
              fullWidth
              aria-label="Solicitar información"
            >
              Solicitar información
            </Button>
            <Button
              variant="outline"
              className="w-full"
              aria-label="Agendar una cita"
              fullWidth
            >
              Agendar una cita
            </Button>
          </ContactCard>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
